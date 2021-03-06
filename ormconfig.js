if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const path = require('path')
const folderPath = process.env.NODE_ENV === 'production' ? '_build' : 'src'
const entities = path.join(__dirname, `${folderPath}/models`, `*.{ts,js}`)
const migrations = path.join(__dirname, `${folderPath}/migrations`, `*.{ts,js}`)

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [entities],
  migrations: [migrations],
  migrationsRun: true,
  seeds: [`${folderPath}/seeds/**/*.{ts,js}`],
  factories: [`${folderPath}/factories/**/*.{ts,js}`],
  synchronize: false,
  cli: {
     entitiesDir: `${folderPath}/models`,
     migrationsDir: `${folderPath}/migrations`,
  }
}