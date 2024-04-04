import { IconCopy, IconDate, IconLink } from "../svgs"

interface LinkData {
  shortened_link: string
  original_link: string
  date: string
}

export default function LinkCard({ linkData }: { linkData: LinkData }) {
  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-4">
      <div className="mb-6 flex flex-col gap-y-3 text-zinc-400">
        <div className="flex items-center gap-x-4">
          <IconLink />
          <button type="button" className="flex items-center gap-x-2">
            <span>{linkData.shortened_link}</span>
            <IconCopy />
          </button>
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-x-4">
          <picture className="flex w-6 justify-center">
            <img
              src={`https://www.google.com/s2/favicons?domain=${linkData.original_link}&sz=24`}
              alt="Site favicon"
            />
          </picture>
          <span className="truncate">{linkData.original_link}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <IconDate />
          <span>{linkData.date}</span>
        </div>
      </div>
      <a
        href={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${linkData.original_link}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg bg-teal-500 py-2 text-center"
      >
        QR Code
      </a>
    </div>
  )
}
