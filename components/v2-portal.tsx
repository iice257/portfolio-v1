"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

const TARGET_TEXT = "Go to the newest version"
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const TOTAL_STEPS = 14
const STEP_MS = 42

export default function V2Portal() {
  const rootRef = useRef<HTMLAnchorElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const arrowRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const textEl = textRef.current
    const arrow = arrowRef.current
    if (!root || !textEl || !arrow) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let running = false
    let timer: ReturnType<typeof setInterval> | null = null
    let fontsReady = false

    const scramble = () => {
      if (running || !fontsReady || reduceMotion) return
      running = true

      const chars = Array.from(TARGET_TEXT)

      const charSpans = chars.map((ch) => {
        const span = document.createElement("span")
        span.className = "v2-portal-char"
        span.textContent = ch === " " ? "\u00A0" : ch
        return span
      })

      textEl.textContent = ""
      charSpans.forEach((span) => textEl.appendChild(span))

      const naturalWidth = Math.ceil(textEl.getBoundingClientRect().width)

      textEl.style.width = `${naturalWidth}px`
      textEl.classList.add("is-shuffling")

      let step = 0
      timer = setInterval(() => {
        step += 1
        const progress = step / TOTAL_STEPS
        charSpans.forEach((span, i) => {
          if (chars[i] === "\u00A0") return
          span.textContent =
            i / charSpans.length < progress
              ? chars[i]
              : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        })

        if (step >= TOTAL_STEPS) {
          if (timer) clearInterval(timer)
          timer = null
          charSpans.forEach((span, i) => {
            span.textContent = chars[i] === " " ? "\u00A0" : chars[i]
          })
          textEl.style.width = ""
          textEl.classList.remove("is-shuffling")
          running = false
        }
      }, STEP_MS)
    }

    let magnetAllowed = false
    const onPointerMove = (event: PointerEvent) => {
      if (!magnetAllowed) return
      const rect = root.getBoundingClientRect()
      const dx = event.clientX - (rect.left + rect.width / 2)
      const dy = event.clientY - (rect.top + rect.height / 2)
      arrow.style.transform = `translate(${(dx * 0.06).toFixed(1)}px, ${(dy * 0.14).toFixed(1)}px)`
    }
    const onPointerLeave = () => {
      arrow.style.transform = ""
    }

    const motionQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    const syncMagnet = () => {
      magnetAllowed = motionQuery.matches && !reduceMotion
      if (!magnetAllowed) {
        root.removeEventListener("pointermove", onPointerMove)
        root.removeEventListener("pointerleave", onPointerLeave)
      } else {
        root.addEventListener("pointermove", onPointerMove)
        root.addEventListener("pointerleave", onPointerLeave)
      }
    }

    if (!reduceMotion) {
      root.addEventListener("mouseenter", scramble)
      const fontsPromise = document.fonts?.ready ?? Promise.resolve()
      Promise.race([
        fontsPromise,
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]).then(() => {
        fontsReady = true
        window.setTimeout(scramble, 600)
      })
    }

    syncMagnet()
    motionQuery.addEventListener("change", syncMagnet)

    return () => {
      if (timer) clearInterval(timer)
      root.removeEventListener("mouseenter", scramble)
      root.removeEventListener("pointermove", onPointerMove)
      root.removeEventListener("pointerleave", onPointerLeave)
      motionQuery.removeEventListener("change", syncMagnet)
    }
  }, [])

  return (
    <Link
      ref={rootRef}
      href="https://kingsleyaremu.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Go to the newest version of my portfolio at kingsleyaremu.vercel.app"
      className="v2-portal"
    >
      <span className="v2-portal-copy">
        <span className="v2-portal-label">This version of my portfolio is now outdated.</span>
        <span className="v2-portal-line">
          <span className="v2-portal-text" ref={textRef}>
            {TARGET_TEXT}
          </span>
          <span className="v2-portal-arrow" ref={arrowRef} aria-hidden="true">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </span>
        </span>
      </span>
    </Link>
  )
}
