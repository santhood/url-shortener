import React from "react"

export default function Header() {
  return (
    <header className="px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Links</h1>
          <a
            href="#"
            className="rounded-full border border-zinc-700 bg-zinc-800 px-6 py-1.5 font-semibold"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  )
}
