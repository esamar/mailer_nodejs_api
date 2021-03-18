module.exports = {
    api : {
        port : process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || '',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '',
        database: process.env.MYSQL_DB || '',
    },
    smtp: {
        host: process.env.SMTP_HOST || 'smtp.mailersend.net',
        port: process.env.SMTP_PORT || 587,
        user: process.env.SMTP_USER || '',
        password: process.env.SMTP_PASS || '',
    }
}