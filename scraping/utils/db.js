import { join } from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'
import { DB_FOLDER_NAME } from '../constants/index.js'

export const getDBFilePath = (dbName) => join(process.cwd(), DB_FOLDER_NAME, dbName)

export const readDBFile = async (dbName) => {
  const filePath = getDBFilePath(dbName)

  const text = await readFile(filePath, 'utf-8')
  return JSON.parse(text)
}

export const writeDBFile = async (dbName, data) => {
  const filePath = getDBFilePath(dbName)

  return writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
}
