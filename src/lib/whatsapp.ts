import { site } from "@/lib/site"

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number)
  return h * 60 + m
}

export function getWhatsAppMessage(t: (key: string) => string) {
  const now = new Date()
  const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes()

  // Available every day within site.hours, by appointment only
  const isOpen =
    minutesSinceMidnight >= toMinutes(site.hours.opens) &&
    minutesSinceMidnight < toMinutes(site.hours.closes)

  return isOpen ? t('whatsapp.open') : t('whatsapp.closed')
}

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${site.phone.replace(/\D/g, "")}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
