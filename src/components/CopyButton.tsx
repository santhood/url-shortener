"use client"

import { useClipboard } from "@/hooks/useClipboard"
import { IconCopy } from "./svgs"
import { Fragment, useState } from "react"

export default function CopyButton({ value }: { value: string }) {
  const { copyToClipboard } = useClipboard()
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    setCopied(true)
    copyToClipboard(value)

    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <div className="relative flex items-center">
      <span
        className={`${copied ? "opacity-100" : "opacity-0"} pointer-events-none text-sm text-teal-500 transition-opacity delay-75 duration-200`}
      >
        Copied
      </span>
      <button
        type="button"
        onClick={handleClick}
        className={`${!copied ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} absolute right-0 flex items-center transition-opacity delay-75 duration-150`}
      >
        <IconCopy />
      </button>
    </div>
  )
}
