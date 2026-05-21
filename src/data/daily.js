import { milestones, MILESTONES_START } from './milestones'
import { argentineSquads } from './argentineSquads'
import { historicSquads } from './historicSquads'
import { argentineMatches } from './argentineMatches'

export { MILESTONES_START }

export const TOTAL_DAYS = 21

export const dailyContent = Array.from({ length: TOTAL_DAYS }, (_, i) => ({
  day: i,
  milestone:      milestones[i],
  argentineSquad: argentineSquads[i],
  historicSquad:  historicSquads[i],
  match:          argentineMatches[i],
}))

export function getUnlockedDayCount() {
  const diff = Date.now() - MILESTONES_START.getTime()
  const daysPassed = Math.floor(diff / 86400000)
  return Math.min(Math.max(daysPassed + 1, 1), TOTAL_DAYS)
}
