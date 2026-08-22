export function getWhatsAppMessage(t: (key: string) => string) {
  const now = new Date()
  const hours = now.getHours()
  const day = now.getDay() // 0 = Sunday, 6 = Saturday

  // Clinic hours: Monday-Friday 9:00-18:00, Saturday 9:00-13:00
  const isWeekday = day >= 1 && day <= 5
  const isSaturday = day === 6
  const isOpen = (isWeekday && hours >= 9 && hours < 18) || (isSaturday && hours >= 9 && hours < 13)

  return isOpen ? t('whatsapp.open') : t('whatsapp.closed')
}
