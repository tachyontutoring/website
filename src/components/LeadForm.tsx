"use client";

import { useState } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { gradeOptions, sectionOptions, formatOptions } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);

    const studentName = String(data.get("student_name") || "").trim();
    const parentEmail = String(data.get("parent_email") || "").trim();

    if (!studentName) {
      setStatus("error");
      setErrorMsg("Please add the student's name.");
      return;
    }
    if (!EMAIL_RE.test(parentEmail)) {
      setStatus("error");
      setErrorMsg("Please enter a valid parent email so we can reach you.");
      return;
    }

    const currentRaw = String(data.get("current_score") || "").trim();
    const targetRaw = String(data.get("target_score") || "").trim();

    const payload = {
      student_name: studentName,
      grade: String(data.get("grade") || ""),
      current_score: currentRaw ? Number(currentRaw) : null,
      target_score: targetRaw ? Number(targetRaw) : null,
      sections: String(data.get("sections") || ""),
      format: String(data.get("format") || ""),
      parent_email: parentEmail,
      message: String(data.get("message") || "").trim() || null,
    };

    if (!isSupabaseConfigured) {
      setStatus("error");
      setErrorMsg(
        "The request form isn't connected yet. Please email us or use the calendar, and we'll get you set up."
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
          We&apos;ll email you within a day to set up your free diagnostic.
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
          <input id="student_name" name="student_name" type="text" required autoComplete="off" className={inputClass} placeholder="Alex Rivera" />
        </Field>
        <Field label="Grade" htmlFor="grade">
          <select id="grade" name="grade" className={inputClass} defaultValue={gradeOptions[1]}>
            {gradeOptions.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </Field>
        <Field label="Current score" htmlFor="current_score" hint="optional">
          <input id="current_score" name="current_score" type="number" min={400} max={1600} step={10} inputMode="numeric" className={inputClass} placeholder="1200" />
        </Field>
        <Field label="Target score" htmlFor="target_score" hint="optional">
          <input id="target_score" name="target_score" type="number" min={400} max={1600} step={10} inputMode="numeric" className={inputClass} placeholder="1500" />
        </Field>
        <Field label="Section(s)" htmlFor="sections">
          <select id="sections" name="sections" className={inputClass} defaultValue={sectionOptions[2]}>
            {sectionOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
        <Field label="Format" htmlFor="format">
          <select id="format" name="format" className={inputClass} defaultValue={formatOptions[0]}>
            {formatOptions.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Parent email" htmlFor="parent_email" required>
        <input id="parent_email" name="parent_email" type="email" required autoComplete="email" className={inputClass} placeholder="parent@email.com" />
      </Field>

      <Field label="Message" htmlFor="message" hint="optional">
        <textarea id="message" name="message" rows={3} className={`${inputClass} resize-y`} placeholder="Goals, timeline, test date, scheduling notes…" />
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
          "Request my free diagnostic"
        )}
      </button>

      <p className="text-[13px] leading-relaxed text-ink-muted">
        We&apos;ll only use your email to set up your diagnostic. No spam, ever.
      </p>
    </form>
  );
}

const inputClass =
  "w-full border border-line bg-paper px-3.5 py-2.5 text-ink transition-colors placeholder:text-ink-faint focus:border-accent-600 focus:outline-none focus:ring-1 focus:ring-accent-600";

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
      <label htmlFor={htmlFor} className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-ink-soft">
        {label}
        {required && <span className="text-accent-600" aria-hidden="true">*</span>}
        {hint && <span className="text-xs font-normal text-ink-faint">({hint})</span>}
      </label>
      {children}
    </div>
  );
}
