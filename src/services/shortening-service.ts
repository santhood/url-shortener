async function generateShortenedUrl(url: string) {
  try {
    const fetchOpts = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        url: url,
      }).toString(),
    }
    const response = await fetch("https://spoo.me", fetchOpts)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

// function that gets the data from the shortened URL
export async function getShortenedUrl(url: string) {
  const generatedUrl = await generateShortenedUrl(url)

  const short = generatedUrl.short_url?.split("/")[3] || undefined

  try {
    const fetchOpts = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }

    const response = await fetch(`https://spoo.me/stats/${short}`, fetchOpts)

    const result = await response.json()

    const data = {
      shortened_link: generatedUrl.short_url,
      original_link: result.url,
      date: result["creation-date"],
    }

    return {
      data: data,
      UrlError: result.UrlError,
    }
  } catch (error) {
    console.error(error)
  }
}
