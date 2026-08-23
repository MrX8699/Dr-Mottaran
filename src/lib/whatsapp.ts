export function getWhatsAppMessage(t: (key: string) => string) {
  const now = new Date()
  const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes()
  const day = now.getDay() // 0 = Sunday, 6 = Saturday

  // Clinic hours: Monday-Friday 8:30-19:30, Saturday 9:00-12:00
  const isWeekday = day >= 1 && day <= 5
  const isSaturday = day === 6
  const isOpen =
    (isWeekday && minutesSinceMidnight >= 8 * 60 + 30 && minutesSinceMidnight < 19 * 60 + 30) ||
    (isSaturday && minutesSinceMidnight >= 9 * 60 && minutesSinceMidnight < 12 * 60)

  return isOpen ? t('whatsapp.open') : t('whatsapp.closed')
}
