import { getRankingsChanges } from './getRankingsChanges.js'
import { logSuccess } from '../utils/log.js'
import { writeDBFile } from '../utils/db.js'
import { NEWS_DB_NAME } from '../constants/names.js'
import { STORED_CHANGES_NUM } from '../constants/config.js'
import timeFormatter from '../utils/timeFormatter.js'

export const compareAndSaveRankings = async () => {
  const start = performance.now()

  const rankingChanges = await getRankingsChanges()
  const limitedRankingChanges = rankingChanges.slice(0, STORED_CHANGES_NUM)

  await writeDBFile(NEWS_DB_NAME, limitedRankingChanges)

  const end = performance.now()
  const time = timeFormatter(end - start)

  logSuccess(`Rankings changes saved in ${NEWS_DB_NAME} in ${time}\n`)
}
