import { useState, useEffect } from 'react'
const TIME_UNITS = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
]

const calcDiffTime = (timestamp) => {
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000

  for (const [unit, unitInSeconds] of TIME_UNITS) {
    if (Math.abs(elapsed) > unitInSeconds) {
      const value = Math.round(elapsed / unitInSeconds)
      return { value, unit }
    }
  }
}

export default function useTimeAgo(timestamp) {
  const [timeAgo, setTimeAgo] = useState(() => calcDiffTime(timestamp))
  const { value, unit } = timeAgo

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = calcDiffTime(timestamp)
      setTimeAgo(newTime)
    }, 1000)
    return () => clearInterval(interval)
  }, [timestamp])

  // relative time format
  const rtf = new Intl.RelativeTimeFormat('es', { style: 'short' })
  return rtf.format(value, unit)
}
