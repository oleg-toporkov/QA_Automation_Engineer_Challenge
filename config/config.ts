export const config = {
    api: {
        properties: {
            host: process.env['PROPERTIES_HOST'],
        }
    },
    ui: {
        url: process.env['FRONTEND_URL'] || 'URL_NOT_DEFINED',
        browser: process.env['DEFAULT_BROWSER'] || 'BROWSER_NOT_DEFINED'
    }
}