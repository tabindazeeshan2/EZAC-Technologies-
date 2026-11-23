/**
 * Builds a link to the homepage contact form with the service and
 * enquiry pre-filled (read by components/contact.tsx).
 */
export function quoteHref(service?: string, enquiry?: string) {
  const params = new URLSearchParams()

  if (service) params.set('service', service)
  if (enquiry) params.set('enquiry', enquiry)

  const query = params.toString()

  return `/${query ? `?${query}` : ''}#contact`
}
