import { useEffect } from 'react'

const SITE_URL = 'https://magniautomation.com'

interface SeoOptions {
  title: string
  description: string
  /** Path only, e.g. "/work/ai-voice-receptionist". Defaults to "/". */
  path?: string
  /** Absolute image URL for social cards. */
  image?: string
}

/** Sets a named or property meta tag, creating it if absent. */
function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Client-side per-route SEO. Updates the document title, description, canonical,
 * and Open Graph / Twitter tags when a route mounts so shared links and
 * JS-capable crawlers resolve the right metadata for each page.
 */
export default function useSeo({ title, description, path = '/', image }: SeoOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`
    const img = image ?? `${SITE_URL}/logo.png`

    document.title = title
    setMeta('name', 'description', description)
    setCanonical(url)

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)

    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', img)
  }, [title, description, path, image])
}
