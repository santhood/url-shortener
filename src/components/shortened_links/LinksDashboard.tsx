"use client"

import { useShortenerContext } from "@/context/ShortenerContext"
import LinkCard from "./LinkCard"
import { IconEmpty } from "../svgs"

export default function LinksDashboard() {
  const shortenedContext = useShortenerContext()

  return (
    <div className="mt-16 px-6 pb-10">
      <div className="mx-auto max-w-5xl">
        {shortenedContext.shortenedLinks.length > 0 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {shortenedContext.shortenedLinks.map((link) => (
              <LinkCard key={crypto.randomUUID()} data={link} />
            ))}
          </div>
        )}

        {shortenedContext.shortenedLinks.length === 0 && (
          <div className="flex flex-col items-center gap-y-2 text-zinc-400">
            <IconEmpty className="h-20 w-20" />
            <span className="font-bold">Your List is Empty</span>
          </div>
        )}
      </div>
    </div>
  )
}
