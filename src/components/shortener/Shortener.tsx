import ShortenerForm from "./ShortenerForm"

export default function Shortener() {
  return (
    <div className="mt-14 px-6">
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Simplify Your Loooong URL :)</h1>
          <p className="mb-6 mt-3 text-zinc-300">
            Shorten your long URLs for easy sharing on social networks and more.
            Simplify your online life in seconds.
          </p>
          <ShortenerForm />
        </div>
      </div>
    </div>
  )
}
