import LinksDashboard from "@/components/shortened_links/LinksDashboard"
import Shortener from "@/components/shortener/Shortener"
import { ShortenerProvider } from "@/context/ShortenerContext"

export default function Home() {
  return (
    <main>
      <ShortenerProvider>
        <Shortener />
        <LinksDashboard />
      </ShortenerProvider>
    </main>
  )
}
