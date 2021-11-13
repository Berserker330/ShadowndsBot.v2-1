     // - - - - - ShadowndsBot - - - - -\\
    //       si editas el bot:           \\
   //                                     \\ 
  //        Da Creditos no ._.¿?           \\
 //                                         \\
///////////////// Berserker09 \\\\\\\\\\\\\\\\\
const
   {
     WAConnection,
     MessageType,
     Presence,
     MessageOptions,
     Mimetype,
     WALocationMessage,
     WA_MESSAGE_STUB_TYPES,
     WA_DEFAULT_EPHEMERAL,
     ReconnectMode,
     ProxyAgent,
     GroupSettingChange,
     waChatKey,
     mentionedJid,
     processTime,
 } = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const imgbb = require('imgbb-uploader')
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")

//función conect
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const { cmdadd } = require('./lib/totalcmd.js')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
//terminal 

//función Anti 
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
//terminal 

banChats = false
offline = false
ownerNumber = ["@522229322761"]
targetpc = '522229322761'
owner = '522229322761'
fake = 'ShadowndsBot'
numbernye = '0'
waktu = '-'
alasan = '-'
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:ShadowndsBot\n'
            + 'ORG:Creador del Bot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=522229322761:+52 222 932 2761\n'
            + 'END:VCARD'

  HunterApi = settings.HunterApi
//=================================================//
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
//=================================================//
