"use client"

import { useState } from "react"
import { useShortenerContext } from "@/context/ShortenerContext"
import { IconArrowRight, IconLink } from "../svgs"

export default function ShortenerForm() {
  const [newLink, setNewLink] = useState("")
  const { addShortenedLink, urlError, setUrlError } = useShortenerContext()

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (newLink) {
      addShortenedLink(newLink)
      setNewLink("")
    }
  }

  return (
    <form className="relative flex items-center" onSubmit={handleSubmit}>
      <div className="pointer-events-none absolute left-0 px-4 text-zinc-500">
        <IconLink />
      </div>
      <input
        type="text"
        value={newLink}
        placeholder="Enter the link here"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setNewLink(ev.currentTarget.value)
          setUrlError(false)
        }}
        className="w-full rounded-full border border-zinc-700 bg-transparent bg-zinc-800 py-3 pl-14 pr-20 outline-none"
      />
      <button type="submit" className="absolute right-0 h-full p-2 ">
        <div className="flex h-full items-center rounded-full bg-teal-500 px-4">
          <IconArrowRight />
        </div>
      </button>
      {urlError && (
        <span className="absolute right-0 top-full px-6 pt-2 text-xs uppercase text-red-400">
          Invalid URL ❌
        </span>
      )}
    </form>
  )
}
