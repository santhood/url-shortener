import CopyButton from "../CopyButton"
import { IconDate, IconLink } from "../svgs"

interface LinkData {
  shortened_link: string
  original_link: string
  date: string
}

interface LinkDataProps {
  data: LinkData
}

export default function LinkCard({ data }: LinkDataProps) {
  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-4">
      <div className="mb-6 flex flex-col gap-y-3 text-zinc-400">
        {/* shortened */}
        <div className="flex items-center justify-between gap-x-4">
          <IconLink />
          <p className="flex flex-grow basis-0 truncate">
            {data.shortened_link}
          </p>
          <CopyButton value={data.shortened_link} />
        </div>

        {/* Original */}
        <div className="grid grid-cols-[auto_1fr] gap-x-4">
          <picture className="flex w-6 justify-center">
            <img
              src={`https://www.google.com/s2/favicons?domain=${data.original_link}&sz=24`}
              alt="Site favicon"
            />
          </picture>
          <span className="truncate">{data.original_link}</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-x-4">
          <IconDate />
          <span>{data.date}</span>
        </div>
      </div>

      <a
        href={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data.original_link}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg bg-teal-500 py-2 text-center"
      >
        QR Code
      </a>
    </div>
  )
}
