"use client"

import { getShortenedUrl } from "@/services/shortening-service"
import { createContext, useContext, useState } from "react"

interface ShortenedLinksProps {
  shortened_link: string
  original_link: string
  date: string
}

interface ShorteningService {
  data: ShortenedLinksProps
  UrlError: string
}

interface ShortenerContextProps {
  shortenedLinks: ShortenedLinksProps[]
  addShortenedLink: (newUrl: string) => void
  urlError: boolean
}

const ShortenerContext = createContext<ShortenerContextProps | null>(null)

export function ShortenerProvider({ children }: { children: React.ReactNode }) {
  const [urlError, setUrlError] = useState<boolean>(false)
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLinksProps[]>(
    [],
  )

  const addShortenedLink = async (newUrl: string) => {
    const shortenedUrl = (await getShortenedUrl(newUrl)) as ShorteningService

    // check if the url is not valid
    if (!shortenedUrl.UrlError) {
      setShortenedLinks((prev) => [...prev, shortenedUrl.data])
      setUrlError(false)
    } else {
      setUrlError(true)
    }
  }

  return (
    <ShortenerContext.Provider
      value={{ urlError, shortenedLinks, addShortenedLink }}
    >
      {children}
    </ShortenerContext.Provider>
  )
}

export function useShortenerContext() {
  return useContext(ShortenerContext) as ShortenerContextProps
}
