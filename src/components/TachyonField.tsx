"use client";

import { useEffect, useRef } from "react";

type P = {
  x: number;
  y: number;
  vx: number; // current velocity
  vy: number;
  bvx: number; // baseline velocity (eased back toward)
  bvy: number;
  size: number;
  bright: number;
  halo: boolean;
  energy: number; // speed over baseline → wake length + glow
};

/**
 * A field of "tachyons" the way fiction portrays faster-than-light particles:
 * a glowing point dragging a luminous Cherenkov wake. Move the cursor through
 * the field and the particles are shoved aside, their wakes streaking before
 * they ease back to a steady drift. Static single frame on small screens and
 * when prefers-reduced-motion is set.
 */
export function TachyonField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    const animate = !reduce && !isSmall;

    const CORE = "30,54,224"; // ultramarine
    const GLOW = "78,108,240"; // hot core tint

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ptr = { x: -9999, y: -9999, active: false };
    let parts: P[] = [];
    let raf = 0;

    const rnd = (i: number, n: number) =>
      ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;

    function seed() {
      const count = isSmall ? 30 : 88;
      parts = Array.from({ length: count }, (_, i) => {
        const speed = 0.9 + rnd(i, 3) * 2.2;
        const angle = (rnd(i, 8) - 0.5) * 0.5;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        const big = rnd(i, 6) > 0.7;
        return {
          x: rnd(i, 1) * w,
          y: rnd(i, 2) * h,
          vx,
          vy,
          bvx: vx,
          bvy: vy,
          size: big ? 2.1 : 1.3,
          bright: big ? 1 : 0.55 + rnd(i, 7) * 0.3,
          halo: big,
          energy: 0,
        };
      });
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (!animate) draw();
    }

    function drawParticle(p: P) {
      const speed = Math.hypot(p.vx, p.vy) || 0.001;
      const dirx = p.vx / speed;
      const diry = p.vy / speed;
      const len = 10 + speed * 9 + p.energy * 26;
      const tailX = p.x - dirx * len;
      const tailY = p.y - diry * len;

      const a = p.bright;
      const g = ctx!.createLinearGradient(p.x, p.y, tailX, tailY);
      g.addColorStop(0, `rgba(${CORE},${0.6 * a})`);
      g.addColorStop(1, `rgba(${CORE},0)`);
      ctx!.strokeStyle = g;
      ctx!.lineWidth = p.size;
      ctx!.lineCap = "round";
      ctx!.beginPath();
      ctx!.moveTo(p.x, p.y);
      ctx!.lineTo(tailX, tailY);
      ctx!.stroke();

      if (p.halo || p.energy > 0.3) {
        const r = p.size * 6 + p.energy * 14;
        const rg = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        rg.addColorStop(0, `rgba(${GLOW},${0.2 * a})`);
        rg.addColorStop(1, `rgba(${GLOW},0)`);
        ctx!.fillStyle = rg;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx!.fill();
      }

      ctx!.fillStyle = `rgba(${CORE},${Math.min(0.95, 0.7 + a * 0.3)})`;
      ctx!.beginPath();
      ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx!.fill();
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      for (const p of parts) drawParticle(p);
    }

    const R = 240; // cursor influence radius
    function step() {
      for (const p of parts) {
        // a gentle pull toward the cursor: the stream bends toward it like a
        // river current, and the force fades right at the cursor so particles
        // flow past instead of bunching up on top of it.
        if (ptr.active) {
          const dx = ptr.x - p.x;
          const dy = ptr.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < R * R) {
            const d = Math.sqrt(d2) || 1;
            const near = Math.min(d / 70, 1); // fade out close to the cursor
            const f = (1 - d / R) * near * 0.38;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }
        // ease back toward the baseline drift so they keep flowing, not gathering
        p.vx += (p.bvx - p.vx) * 0.05;
        p.vy += (p.bvy - p.vy) * 0.05;

        const speed = Math.hypot(p.vx, p.vy);
        const baseSpeed = Math.hypot(p.bvx, p.bvy) || 0.001;
        p.energy = Math.max(0, Math.min(1.6, speed / baseSpeed - 1));

        p.x += p.vx;
        p.y += p.vy;

        const m = 100;
        if (p.x - m > w) {
          p.x = -m;
          p.y = Math.random() * h;
        } else if (p.x + m < 0) {
          p.x = w + m;
          p.y = Math.random() * h;
        }
        if (p.y < -m) p.y = h + m;
        else if (p.y > h + m) p.y = -m;
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    function onMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      ptr.x = e.clientX - rect.left;
      ptr.y = e.clientY - rect.top;
      ptr.active = true;
    }
    function onLeave() {
      ptr.active = false;
      ptr.x = -9999;
      ptr.y = -9999;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    if (animate) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(step);
    }

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
