const path = require('path')

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    database: process.env.DB_NAME || 'qwunder',
    user: process.env.DB_USER || 'qwunder',
    password: process.env.DB_PASS || 'qwunder',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../qwunder.sqlite')
    }
  }
}
