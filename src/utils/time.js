export const time = (unix=null) => {
  // Generate 12-hour time variables
  const time = new Date(unix)
  const hours = (time.getHours() - 1) % 12 + 1
  const minutes = time.getMinutes()
  const AMPM = time.getHours() >= 12 ? 'PM' : 'AM'

  return { hours, minutes, AMPM }
} 