module.exports = {
    smtp: {
        host: process.env.SMTP_HOST || 'smtp.mailersend.net',
        port: process.env.SMTP_PORT || 587,
        user: process.env.SMTP_USER || '',
        password: process.env.SMTP_PASS || '',
    }
}