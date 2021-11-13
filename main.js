const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (client = new WAConnection()) => {
    client.logger.level = 'warn'
    client.version = [2, 2123, 8]
    client.browserDescription = [ 'ShadowndsBot', 'Chrome', '3.0' ]
    console.log(banner.string)
    client.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color('Scanea el QR'))
    })

    fs.existsSync('./Samu330.json') && client.loadAuthInfo('./Samu330.json')
    client.on('connecting', () => {
        start('2', 'Conectando...')
    })
    client.on('open', () => {
        success('2', 'Conectado')
    })
    await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Samu330.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

    client.on('chat-update', async (message) => {
        require('./index.js')(client, message)
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
