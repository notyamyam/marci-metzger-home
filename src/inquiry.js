const EMAIL = 'Marcimetzger@gmail.com'

export function inquiryUrl(subject, fields) {
  const body = Object.entries(fields)
    .filter(([, value]) => String(value).trim())
    .map(([label, value]) => `${label}: ${String(value).trim()}`)
    .join('\n')

  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
