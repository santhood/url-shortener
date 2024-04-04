"use client"

import { useState } from "react"
import { IconArrowRight, IconLink } from "../svgs"
import { useShortenerContext } from "@/context/ShortenerContext"

export default function ShortenerForm() {
  const [incomingUrl, setIncomingUrl] = useState<string>("")
  const shortenerContext = useShortenerContext()

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!incomingUrl) return
    shortenerContext.addShortenedLink(incomingUrl)
    setIncomingUrl("")
  }

  return (
    <form className="relative flex items-center" onSubmit={handleSubmit}>
      <div className="pointer-events-none absolute left-0 px-4 text-zinc-500">
        <IconLink />
      </div>
      <input
        type="text"
        value={incomingUrl}
        placeholder="Enter the link here"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          setIncomingUrl(ev.currentTarget.value)
        }
        className="w-full rounded-full border border-zinc-700 bg-transparent bg-zinc-800 px-14 py-3 outline-none"
      />
      <button type="submit" className="absolute right-0 h-full p-2 ">
        <div className="flex h-full items-center rounded-full bg-teal-500 px-4">
          <IconArrowRight />
        </div>
      </button>
      {shortenerContext.urlError && (
        <span className="absolute left-0 top-full px-6 pt-2 text-sm text-red-400">
          Invalid URL ❌
        </span>
      )}
    </form>
  )
}
