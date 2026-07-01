"use client";

import { useState } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { gradeOptions } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [neverTaken, setNeverTaken] = useState(false);
  const [rwScore, setRwScore] = useState("");
  const [mathScore, setMathScore] = useState("");

  function snapScore(raw: string): string {
    const n = parseFloat(raw);
    if (isNaN(n)) return "";
    const clamped = Math.min(800, Math.max(400, n));
    return String(Math.round(clamped / 10) * 10);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);

    const studentName = String(data.get("student_name") || "").trim();
    const email = String(data.get("email") || "").trim();

    if (!studentName) {
      setStatus("error");
      setErrorMsg("Please add the student's name.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    const rwNum = !neverTaken && rwScore ? Number(rwScore) : null;
    const mathNum = !neverTaken && mathScore ? Number(mathScore) : null;
    const currentScore = rwNum != null && mathNum != null ? rwNum + mathNum : null;

    const payload = {
      student_name: studentName,
      grade: String(data.get("grade") || ""),
      current_score: neverTaken ? null : currentScore,
      rw_score: rwNum,
      math_score: mathNum,
      never_taken: neverTaken,
      parent_email: email,
      message: String(data.get("message") || "").trim() || null,
    };

    if (!isSupabaseConfigured) {
      setStatus("error");
      setErrorMsg(
        "The request form isn't connected yet. Please email us directly and we'll get you set up."
      );
      return;
    }

    setStatus("submitting");
    try {
      const supabase = getSupabase();
      const { error } = await supabase!.from("leads").insert(payload);
      if (error) throw error;
      setStatus("success");
      form.reset();
      setNeverTaken(false);
      setRwScore("");
      setMathScore("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong on our end. Please try again, or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-accent-600 bg-accent-50 p-8">
        <h3 className="font-display text-2xl font-medium text-ink">Got it. Thanks.</h3>
        <p className="mt-2 text-ink-soft">
          We&apos;ll email you within a day to schedule your free diagnostic.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-accent-700 underline underline-offset-4"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Student name" htmlFor="student_name" required>
          <input
            id="student_name"
            name="student_name"
            type="text"
            required
            autoComplete="off"
            className={inputClass}
            placeholder="Alex Rivera"
          />
        </Field>
        <Field label="Grade" htmlFor="grade">
          <select id="grade" name="grade" className={inputClass} defaultValue={gradeOptions[1]}>
            {gradeOptions.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Score section */}
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-sm font-medium text-ink-soft">Current score or practice test score</span>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-ink-muted select-none">
            <input
              type="checkbox"
              checked={neverTaken}
              onChange={(e) => setNeverTaken(e.target.checked)}
              className="h-4 w-4 accent-accent-600"
            />
            Haven&apos;t taken the SAT yet
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Reading & Writing score" htmlFor="rw_score" hint="optional">
            <input
              id="rw_score"
              name="rw_score"
              type="number"
              min={400}
              max={800}
              step={10}
              inputMode="numeric"
              className={inputClass}
              placeholder="400–800"
              value={rwScore}
              disabled={neverTaken}
              onChange={(e) => setRwScore(e.target.value)}
              onBlur={(e) => setRwScore(snapScore(e.target.value))}
            />
          </Field>
          <Field label="Math score" htmlFor="math_score" hint="optional">
            <input
              id="math_score"
              name="math_score"
              type="number"
              min={400}
              max={800}
              step={10}
              inputMode="numeric"
              className={inputClass}
              placeholder="400–800"
              value={mathScore}
              disabled={neverTaken}
              onChange={(e) => setMathScore(e.target.value)}
              onBlur={(e) => setMathScore(snapScore(e.target.value))}
            />
          </Field>
        </div>
      </div>

      <Field label="Student or parent email" htmlFor="email" required>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          placeholder="you@email.com"
        />
      </Field>

      <Field label="Message" htmlFor="message" hint="optional">
        <textarea
          id="message"
          name="message"
          rows={3}
          className={`${inputClass} resize-y`}
          placeholder="Goals, timeline, test date, scheduling notes…"
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
          {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full">
        {status === "submitting" ? (
          <><Loader2 size={17} className="animate-spin" aria-hidden="true" /> Sending…</>
        ) : (
          "Register for a free diagnostic"
        )}
      </button>

      <p className="text-[13px] leading-relaxed text-ink-muted">
        We&apos;ll only use your email to set up your diagnostic. No spam, ever.
      </p>
    </form>
  );
}

const inputClass =
  "w-full border border-line bg-paper px-3.5 py-2.5 text-ink transition-colors placeholder:text-ink-faint focus:border-accent-600 focus:outline-none focus:ring-1 focus:ring-accent-600 disabled:opacity-40 disabled:cursor-not-allowed";

function Field({
  label,
  htmlFor,
  required,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 flex items-center gap-1.5 text-base font-medium text-ink-soft">
        {label}
        {required && <span className="text-accent-600" aria-hidden="true">*</span>}
        {hint && <span className="text-xs font-normal text-ink-faint">({hint})</span>}
      </label>
      {children}
    </div>
  );
}
