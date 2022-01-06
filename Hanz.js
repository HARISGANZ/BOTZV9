/*
LU ITU NUMPANG KONTOL KALO RENAME YG WAJAR
SEMUA LINK DI HAPUS, TQ TO DI HAPUS, NAMA GW JUGA DI HAPUS:v
LAMA" GW ENC FULL LU GK BISA APA"
NUMPANG NAMA GK BIKIN LU JAGO. PAHAM🙂

NOTE : JANGAN DI JUAL:v

cd /sdcard && cd BOTZV8 && pm2 start main.js && pm2 && pm2 save && pm2 monit
*/
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
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { help } = require('./media/help')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//
const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const setting = JSON.parse(fs.readFileSync('./media/setting.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
 scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
//BY HANZ々OFC彡
baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || false
}
let autovn = false
let ngetik = false
readG = true 
readP = true
publik = true
Nogopay = 083144394823
Nodana = 083144394823
Noovo = 083144394823
owner = setting.OwnerNumber
botname = setting.BotName
lolkey = setting.HanzKey
Hanzkey = setting.hanzKey
ownername = setting.OwnerName
asutes = 'BOT HANZ OFC'
creator = 'ʜᴀɴᴢ々ᴏꜰᴄ' // GAK USAH DI UBAH
fakeimage = fs.readFileSync("./media/thumnail.jpg")
//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = Hanz = async (Hanz, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
       Hanz.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
         const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
       body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''		
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Hanz.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6283144394823@s.whatsapp.net`]
	    const dtod = "6285706035039@s.whatsapp.net"
        const otod = "6285706035039@s.whatsapp.net"
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await Hanz.chats.all()
		const groupMetadata = isGroup ? await Hanz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Hanz.user.jid : Hanz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Hanz.user.name : conts.notify || conts.vname || conts.name || '-'
        
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
	

		mess = {
wait: '*☉* Tunggu bentar',
success: '*☉* Berhasil',
error: {
stick: '*☒* Silakan ulangi beberapa saat lagi',
Iv: '*☒* Link Error'
},
only: {
admin: '*☒* Fitur ini hanya untuk *ADMIN GRUP*',
group: '*☒* Fitur ini hanya untuk *GRUP*'
}
}
		faketeks = 'HANZ々OFC彡'
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            Hanz.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            Hanz.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Hanz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Hanz.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const zero = fs.readFileSync ('./media/thumnail.jpg')
        const costum = (pesan, tipe, target, target2) => {
			Hanz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Jangan gadang kak"; break;
                case 1: jamss = "Jangan gadang kak"; break;
                case 2: jamss = "Jangan gadang kak"; break;
                case 3: jamss = "Jangan gadang kak"; break;
                case 4: jamss = "Jangan lupa sholat Subuh kak"; break;
                case 5: jamss = "Selamat pagi"; break;
                case 6: jamss = "Selamat pagi"; break;
                case 7: jamss = "Selamat pagi"; break;
                case 8: jamss = "Selamat pagi"; break;
                case 9: jamss = "Selamat pagi"; break;
                case 10: jamss = "Selamat pagi"; break;
                case 11: jamss = "Selamat siang"; break;
                case 12: jamss = "Jangan lupa sholat Zuhur kak"; break;
                case 13: jamss = "Selamat siang"; break;
                case 14: jamss = "Selamat sore"; break;
                case 15: jamss = "Jangan lupa sholat Ashar kak"; break;
                case 16: jamss = "Selamat sore"; break;
                case 17: jamss = "Selamat sore"; break;
                case 18: jamss = "Selamat malam"; break;
                case 19: jamss = "Jangan lupa sholat Isya kak"; break;
                case 20: jamss = "Selamat malam"; break;
                case 21: jamss = "Selamat malam"; break;
                case 22: jamss = "Selamat malam"; break;
                case 23: jamss = "Selamat malam"; break;
            }
            var tampilUcapan = "" + jamss;
            const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','?? : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
        const sticOk = (hehe) => {
			ano = fs.readFileSync('./media/ok.webp')
			Hanz.sendMessage(hehe, ano, sticker, { quoted: ftrol})
		}
var chats = await Hanz.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readG === false) return
await Hanz.chatRead(jid)
})
var chatss = await Hanz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readP === false) return
await Hanz.chatRead(jid)
})		
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        //BUTTON LOKASI              
const sendButtonLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Hanz.prepareMessage(from, kma, location,{ waitForAck: true })
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Hanz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON TEXT
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Hanz.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: ftrol
})
}         
//BUTTON DOCUMENT
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await Hanz.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Hanz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON FOTO
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await Hanz.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Hanz.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: ftrol,
contexInfo: adyt
})
}        
const adyt = { 
"title": `Hallo ${pushname}`,
"body": `hy`, 
"mediaType": "2", 
"mediaUrl": "https://youtu.be/ilrhJV_QMIE", 
"thumbnail": fs.readFileSync('./media/Bot.jpg')
}
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Hanz.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebeum Menggunakan Bot ${botname} Harap Daftarkan Diri dengan klik Button Verify di bawah ini!`
const daftar2 = 'SUBSCRIBE LINK DI BAWAH INI❕\nhttps://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `VERIFY㋡`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//~~~~~~~~~~~~~~~~~~~~~[ WADERFAK MEN ]~~~~~~~~~~~~~~~~~~~~~//
//FAKE STATUS
const fakestatus = (teks) => {
Hanz.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": faketeks,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fs.readFileSync('./media/thumnail.jpg'),
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}
}
}
})
}       
//FAKE TROLI       
const ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 2022,
status: 1,
surface : 1,
message: `ʜᴀɴᴢ々ᴏꜰᴄ`, 
orderTitle: `ʜᴀɴᴢ々ᴏꜰᴄ`,
thumbnail: Hanz, //Gambarnye
sellerJid: '0@s.whatsapp.net' 
}
}
}
//FAKE LOKASi                   
const floc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `Hai👋 ${pushname}`,
jpegThumbnail: Hanz
}
}
}
//FAKE DOKUMEN                     
const fdoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${tampilUcapan} ${pushname}`, 
jpegThumbnail: Hanz
}
}
}           
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Hanz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Hanz.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   

            
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Hanz.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Hanz.groupRemove(from, [sender])
}     
                      

//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		//Self/Public
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
		//Auto Vn
		if (autovn){
		await Hanz.updatePresence(from, Presence.recording)
		} else if (ngetik){//Auto Ketik
		await Hanz.updatePresence(from, Presence.composing)
		} else {
		await Hanz.updatePresence(from, Presence.avaible)
		}
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD PRIVATE\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))   
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD GROUP\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))      	
//===================================================MENU======================================================================//

switch (command) {
case 'menu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
teks =
`
                █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
                █░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
                █░░║║║╠─║─║─║║║║║╠─░░█
                █░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
                █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

❏INFO BOT❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
╔═════════════════⎉
║冬Nama Bot : ${botname}
║冬Nama Owner : ${ownername}
║冬Nomor Owner : ${owner}
║冬Creator : ${creator}
║冬Mode : ${publik ? 'Public' : 'Self'}
║冬Runtime : ${runtime(process.uptime())}
║冬Prefix : Multi
║冬Battery : ${baterai.battery}
║冬Charged : ${baterai.isCharge ? 'Cas' : 'Tidak'}
║冬Autoread pc : ${readP ? 'On' : 'Off'}
║冬Autoread gc : ${readG ? 'On' : 'Off'}
║冬Auto Ketik : ${ngetik ? 'On' : 'Off'}
║冬Auto Recording : ${autovn ? 'On' : 'Off'}
╚═════════════════❍ 
❏INFO USER❏
┏━━⊱ 
┣🔰Nama User : ${pushname}
┣🔰Nomer User : ${sender.split("@")[0]}
┗━━⊱
❏TO DAY❏
┏━━⊱ 
┣🗣${tampilUcapan}
┣🕑Jam : ${time}
┗━━⊱
`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [
{buttonId: `${prefix}command`, buttonText: { displayText: '⎙ MENU' }, type: 1 },
{buttonId: `${prefix}allmenu`, buttonText: { displayText: '⎙ ALL MENU' }, type: 1 },
{buttonId: `${prefix}menucatalog`, buttonText: { displayText: '⎙ CATALOG MENU' }, type: 1 },
]
sendButImage(from, teks, "©HANZ々OFC彡", gam, but)        
break 
case 'allmenu':
        var _0x54183a=_0x2c57;function _0x2c57(_0x8a73ce,_0x384572){var _0x3a4326=_0x3a43();return _0x2c57=function(_0x2c5778,_0x4ef569){_0x2c5778=_0x2c5778-0x17a;var _0x3cbee6=_0x3a4326[_0x2c5778];return _0x3cbee6;},_0x2c57(_0x8a73ce,_0x384572);}function _0x3a43(){var _0xeb2440=['sticker\x0a│─────────────┈\x20⳹\x0a│\x20「\x20MUSIC\x20MENU」\x0a│冬\x20','upswvn\x0a│冬\x20','bokep10\x0a│冬\x20','detikvideo\x0a│冬\x20','18080190SzEtEY','detikvn\x0a│冬\x20','\x0a│冬Autoread\x20gc\x20:\x20','\x0a│冬Nomor\x20Owner\x20:\x20','maker2d2\x0a│冬\x20','battery','@c.us','11634vzUmDd','./media/Hanz\x20Ofc.pdf','8xjZDgs','bokep4\x0a│冬\x20','coffeecup\x0a│冬\x20','sound1\x0a│冬\x20','donasi','transformer\x0a│冬\x20','HANZ々OFC彡\x20[BOTZ🎭]','\x0a│冬Auto\x20Recording\x20:\x20','Hai👋\x20Im\x20','18wZerau','Hai👋\x20Saya\x20','\x0a│冬Mode\x20:\x20','auto\x0a│冬\x20','bokep15\x0a└┬────────────┈\x20⳹\x0a┌┤➤\x20📍\x20\x0a││\x0a││Menu\x20Dikit✌\x0a│├────────\x20\x0a││冬\x20◗\x20_Hanz\x20Ofc_\x0a│└────────\x20\x0a└─━━━───\x20•\x20───━━━❋ཻུ۪۪⸙\x0a\x0a║▌│█║▌│\x20█║▌│█│║▌║\x0a║▌│█║▌│\x20█║▌│█│║▌║\x0a\x20\x20\x20\x20\x20\x20「\x20Bot\x20Wea」','sound4\x0a│冬\x20','bokep1\x0a│冬\x20','sound8\x0a│冬\x20','5581014fQKYFG',':)\x0a┌─❑「\x20INFO\x20DEVELOPER\x20」\x0a│👤\x20Nama\x20:\x20Haris\x0a│📃\x20Github\x20:\x20Cari\x20Sendiri!?\x0a│▶\x20Yutub\x20:\x20HANZ々OFC彡\x0a│💮\x20Ig\x20:\x20@wong_koclok\x20\x0a└─❑\x0a┌─❑「\x20INFO\x20BOTZ\x20」\x0a│冬Nama\x20Bot\x20:\x20','jadibot\x0a│冬\x20','kodenuklir\x0a│冬\x20','\x0a║冬Autoread\x20pc\x20:\x20','stopjadibot\x0a│冬\x20','setppwa\x0a│冬\x20','addcmd\x0a│冬\x20','status','neon\x0a│冬\x20','promote\x0a│冬\x20','googletxt\x0a│冬\x20','upswlokasi\x0a│─────────────┈\x20⳹\x0a│\x20「\x20MAKER\x20MENU\x20」\x0a│冬\x20','battlefield\x0a│─────────────┈\x20⳹\x0a│\x20「\x20IMAGE\x20MENU」\x0a│冬\x20','*Haris\x20Ganz*','getStatus','hidetag\x0a│冬\x20','2069814pvyUnt','7039790Akahll','sound2\x0a│冬\x20','\x0a│冬Prefix\x20:\x20Multi\x0a║冬Battery\x20:\x20','upswaudio\x0a│冬\x20','UCAPAN','bokep2\x0a│冬\x20','sound3\x0a│冬\x20','Cas','6285706035039@s.whatsapp.net','tomp3\x0a│冬\x20','set\x0a│冬\x20','bokep14\x0a│冬\x20','isCharge','demote\x0a│冬\x20','./media/imagepdf.jpg','quote\x0a│冬\x20','Self','HANZ々OFC彡','bokep6\x0a│冬\x20','sound9\x0a│冬\x20','tagall\x0a│冬\x20','upswgif\x0a│冬\x20','Public','10434294UidAPt','antilink\x0a│冬\x20','summer\x0a│冬\x20','\x0a║冬Runtime\x20:\x20','tobc\x0a│冬\x20','ttmusik\x0a│冬\x20','tovideo\x0a│冬\x20','\x0a│冬Charged\x20:\x20','maker3d4\x0a│冬\x20','readFileSync','pdf','maker3d3\x0a│冬\x20','setppbot\x0a│冬\x20','linkbokep\x0a│冬\x20','wooden\x0a│冬\x20','bokep8\x0a│冬\x20','Script\x20By\x20Haris\x20Ganz','Off','bokep5\x0a│冬\x20','upswimage\x0a│冬\x20','glow\x0a│冬\x20','restart\x0a│冬\x20','golden\x0a│冬\x20','setdes\x0a│冬\x20','4610392mEynpd','burn\x0a│冬\x20','```','ucapan','7SOKMja','play\x0a│冬\x20','bokep3\x0a│冬\x20','upswsticker\x0a│冬\x20','\x0a║冬Nama\x20Owner\x20:\x20','sound6\x0a│冬\x20','maker3d2\x0a│冬\x20','antivirtex\x0a│冬\x20','\x0a║冬Auto\x20Ketik\x20:\x20','maker2d3\x0a│冬\x20','attp\x0a│冬\x20','add\x0a│冬\x20'];_0x3a43=function(){return _0xeb2440;};return _0x3a43();}(function(_0x58b48b,_0x28e9b3){var _0x3c1749=_0x2c57,_0x2257a8=_0x58b48b();while(!![]){try{var _0x3ca181=parseInt(_0x3c1749(0x180))/0x1*(parseInt(_0x3c1749(0x18b))/0x2)+parseInt(_0x3c1749(0x1a4))/0x3*(parseInt(_0x3c1749(0x182))/0x4)+parseInt(_0x3c1749(0x1a5))/0x5+-parseInt(_0x3c1749(0x193))/0x6+parseInt(_0x3c1749(0x1d8))/0x7*(-parseInt(_0x3c1749(0x1d4))/0x8)+parseInt(_0x3c1749(0x1bc))/0x9+-parseInt(_0x3c1749(0x1e8))/0xa;if(_0x3ca181===_0x28e9b3)break;else _0x2257a8['push'](_0x2257a8['shift']());}catch(_0x282008){_0x2257a8['push'](_0x2257a8['shift']());}}}(_0x3a43,0xb408b),ptod=_0x54183a(0x1ad),stod=_0x54183a(0x18c)+botname,uwu=_0x54183a(0x1d6),stst=await Hanz[_0x54183a(0x1a2)](sender['split']('@')[0x0]+_0x54183a(0x17f)),stst=stst[_0x54183a(0x19b)]==0x191?'':stst[_0x54183a(0x19b)],menu=_0x54183a(0x18a)+botname+_0x54183a(0x194)+botname+_0x54183a(0x1dc)+ownername+_0x54183a(0x17c)+owner+'\x0a║冬Creator\x20:\x20'+creator+_0x54183a(0x18d)+(publik?_0x54183a(0x1bb):_0x54183a(0x1b5))+_0x54183a(0x1bf)+runtime(process['uptime']())+_0x54183a(0x1a7)+baterai[_0x54183a(0x17e)]+_0x54183a(0x1c3)+(baterai[_0x54183a(0x1b1)]?_0x54183a(0x1ac):'Tidak')+_0x54183a(0x197)+(readP?'On':_0x54183a(0x1cd))+_0x54183a(0x17b)+(readG?'On':_0x54183a(0x1cd))+_0x54183a(0x1e0)+(ngetik?'On':_0x54183a(0x1cd))+_0x54183a(0x189)+(autovn?'On':_0x54183a(0x1cd))+'\x0a└─────❑\x0a┌─❑\x0a│「\x20FULL\x20MENU\x20KEBAWAH\x20」\x0a└┬❑\x0a\x20\x20\x20\x20│\x20「\x20Self\x20And\x20Public」\x0a┌┤冬\x20\x20>public\x0a││冬\x20\x20>self\x20\x0a│└────────────┈\x20⳹\x0a│\x20「\x20GROUP\x20MENU」\x0a│冬\x20'+prefix+'welcome\x20on/off\x0a│冬\x20'+prefix+_0x54183a(0x1bd)+prefix+_0x54183a(0x1df)+prefix+_0x54183a(0x1e3)+prefix+'kick\x0a│冬\x20'+prefix+_0x54183a(0x19d)+prefix+_0x54183a(0x1b2)+prefix+_0x54183a(0x1b9)+prefix+_0x54183a(0x1a3)+prefix+'setpp\x0a│冬\x20'+prefix+_0x54183a(0x1d3)+prefix+'setname\x0a│─────────────┈\x20⳹\x0a│\x20「\x20OWNER\x20MENU」\x0a│冬\x20'+prefix+_0x54183a(0x1af)+prefix+_0x54183a(0x18e)+prefix+'bc\x0a│冬\x20'+prefix+'bc2\x0a│冬\x20'+prefix+_0x54183a(0x1c0)+prefix+_0x54183a(0x195)+prefix+_0x54183a(0x198)+prefix+_0x54183a(0x19a)+prefix+'delcmd\x0a│冬\x20'+prefix+'listcmd\x0a│冬\x20'+prefix+_0x54183a(0x1d1)+prefix+'autorespon\x20pc/gc\x0a│冬\x20'+prefix+_0x54183a(0x1c8)+prefix+_0x54183a(0x199)+prefix+'upswtext\x0a│冬\x20'+prefix+_0x54183a(0x1e5)+prefix+'upswvideo\x0a│冬\x20'+prefix+_0x54183a(0x1cf)+prefix+_0x54183a(0x1ba)+prefix+_0x54183a(0x1a8)+prefix+_0x54183a(0x1db)+prefix+_0x54183a(0x19f)+prefix+_0x54183a(0x19c)+prefix+_0x54183a(0x1b4)+prefix+_0x54183a(0x1d0)+prefix+_0x54183a(0x1d5)+prefix+'flower\x0a│冬\x20'+prefix+_0x54183a(0x1ca)+prefix+_0x54183a(0x1d2)+prefix+_0x54183a(0x1be)+prefix+_0x54183a(0x17d)+prefix+_0x54183a(0x1e1)+prefix+'maker2d4\x0a│冬\x20'+prefix+_0x54183a(0x1de)+prefix+_0x54183a(0x1c7)+prefix+_0x54183a(0x1c4)+prefix+_0x54183a(0x187)+prefix+_0x54183a(0x19e)+prefix+_0x54183a(0x184)+prefix+_0x54183a(0x1a0)+prefix+_0x54183a(0x1e2)+prefix+'toimg\x0a│冬\x20'+prefix+_0x54183a(0x1c2)+prefix+_0x54183a(0x1ae)+prefix+_0x54183a(0x1e4)+prefix+_0x54183a(0x185)+prefix+_0x54183a(0x1a6)+prefix+_0x54183a(0x1ab)+prefix+_0x54183a(0x190)+prefix+'sound5\x0a│冬\x20'+prefix+_0x54183a(0x1dd)+prefix+'sound7\x0a│冬\x20'+prefix+_0x54183a(0x192)+prefix+_0x54183a(0x1b8)+prefix+'sound10\x0a│─────────────┈\x20⳹\x0a│\x20「\x20RANDOM\x20MENU」\x0a│冬\x20'+prefix+_0x54183a(0x17a)+prefix+_0x54183a(0x1e7)+prefix+_0x54183a(0x1c1)+prefix+_0x54183a(0x1d9)+prefix+'darkjokes\x0a│─────────────┈\x20⳹\x0a│\x20「\x2018+\x20MENU」\x0a│冬\x20'+prefix+_0x54183a(0x196)+prefix+_0x54183a(0x1c9)+prefix+_0x54183a(0x191)+prefix+_0x54183a(0x1aa)+prefix+_0x54183a(0x1da)+prefix+_0x54183a(0x183)+prefix+_0x54183a(0x1ce)+prefix+_0x54183a(0x1b7)+prefix+'bokep7\x0a│冬\x20'+prefix+_0x54183a(0x1cb)+prefix+'bokep9\x0a│冬\x20'+prefix+_0x54183a(0x1e6)+prefix+'bokep11\x0a│冬\x20'+prefix+'bokep12\x0a│冬\x20'+prefix+'bokep13\x0a│冬\x20'+prefix+_0x54183a(0x1b0)+prefix+_0x54183a(0x18f),Sendbutdocument(from,''+menu,_0x54183a(0x1a1),fs[_0x54183a(0x1c5)](_0x54183a(0x181)),{'mimetype':Mimetype[_0x54183a(0x1c6)],'thumbnail':fs[_0x54183a(0x1c5)](_0x54183a(0x1b3)),'filename':_0x54183a(0x1b6)},[{'buttonId':prefix+_0x54183a(0x186),'buttonText':{'displayText':'DONASI'},'type':0x1},{'buttonId':prefix+_0x54183a(0x1d7),'buttonText':{'displayText':_0x54183a(0x1a9)},'type':0x1},{'buttonId':prefix+'sc','buttonText':{'displayText':'SCRIPT𝟕'},'type':0x1}],{'quoted':fdoc,'contextInfo':{'mentionedJid':[dtod,otod,stod],'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':_0x54183a(0x188),'body':_0x54183a(0x1cc),'mediaType':'2','thumbnail':fakeimage,'mediaUrl':'https://youtu.be/jT-th_f0l-Y'}}}));
break
case 'menucatalog':
            function _0x2184(){var _0x4a915a=['darkjokes\x0a\x0a\x20『\x20*18+\x20MENU*\x20』\x0a\x20\x0aメ','1737610XjmcNX','kodenuklir\x0aメ','maker3d3\x0aメ','sound8\x0aメ','maker2d2\x0aメ','bc2\x0aメ','sound3\x0aメ','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a『\x20*GROUP\x20MENU*\x20』\x0a\x0aメ','sound5\x0aメ','welcome\x20on/off\x0aメ','detikvn\x0aメ','neon\x0aメ','listcmd\x0aメ','glow\x0aメ','upswsticker\x0aメ','attp\x0aメ','golden\x0aメ','restart\x0aメ','bokep10\x0aメ','tomp3\x0aメ','bokep2\x0aメ','toimg\x0aメ','coffeecup\x0aメ','sound6\x0aメ','13625fhuUIj','bokep1\x0aメ','kick\x0aメ','battlefield\x0a\x0a\x20『\x20*IMAGE\x20MENU*\x20』\x0a\x20\x0aメ','quote\x0aメ','83876GsRoZO','USD','auto\x0aメ','maker2d4\x0aメ','4457725420906655','autorespon\x20pc/gc\x0aメ','wooden\x0aメ','bokep7\x0aメ','antilink\x0aメ','sound7\x0aメ','bokep3\x0aメ','sound9\x0aメ','upswaudio\x0aメ','bokep8\x0aメ','2814PWRRzd','jadibot\x0aメ','1639099mSksis','1184744WGdzVC','6OfCklg','setname\x0a\x0a\x20『\x20*OWNER\x20MENU*\x20』\x0a\x20\x0aメ','upswvn\x0aメ','メMÈñÚ\x20ÇÄ†ÄLÖG','hidetag\x0aメ','addcmd\x0aメ','bokep14\x0aメ','tovideo\x0aメ','set\x0aメ','setppwa\x0aメ','demote\x0aメ','0@c.us','maker3d2\x0aメ','delcmd\x0aメ','image/jpeg','bokep12\x0aメ','summer\x0aメ','setdes\x0aメ','sound10\x0a\x0a\x20『\x20*RANDOM\x20MENU*\x20』\x0a\x20\x0aメ','upswimage\x0aメ','bc\x0aメ','15ToaQGb','imageMessage','bokep9\x0aメ','play\x0aメ','detikvideo\x0aメ','sticker\x0a\x0a\x20『\x20*MUSIC\x20MENU*\x20』\x0a\x20\x0aメ','All\x20Menu\x20Catalog','maker3d4\x0aメ','message','bokep11\x0aメ','bokep5\x0aメ','6283144394823@s.whatsapp.net','1162cZRpyn','maker2d3\x0aメ','ttmusik\x0aメ','promote\x0aメ','9TTZUsx','setppbot\x0aメ','bokep6\x0aメ','googletxt\x0aメ','91496BfBuyM','Haris\x20Ganteng','12EiybEU'];_0x2184=function(){return _0x4a915a;};return _0x2184();}var _0x4de27e=_0x345c;(function(_0x3f04d4,_0x4e435e){var _0x1be87c=_0x345c,_0x5220e3=_0x3f04d4();while(!![]){try{var _0x3af61d=parseInt(_0x1be87c(0x14b))/0x1+parseInt(_0x1be87c(0x150))/0x2*(-parseInt(_0x1be87c(0x162))/0x3)+-parseInt(_0x1be87c(0x18b))/0x4*(parseInt(_0x1be87c(0x177))/0x5)+parseInt(_0x1be87c(0x15e))/0x6*(parseInt(_0x1be87c(0x183))/0x7)+parseInt(_0x1be87c(0x161))/0x8*(-parseInt(_0x1be87c(0x187))/0x9)+parseInt(_0x1be87c(0x18f))/0xa+-parseInt(_0x1be87c(0x160))/0xb*(-parseInt(_0x1be87c(0x18d))/0xc);if(_0x3af61d===_0x4e435e)break;else _0x5220e3['push'](_0x5220e3['shift']());}catch(_0x42a4b7){_0x5220e3['push'](_0x5220e3['shift']());}}}(_0x2184,0x1bbfa),menunya=pushname+_0x4de27e(0x13a)+prefix+_0x4de27e(0x13c)+prefix+_0x4de27e(0x158)+prefix+'antivirtex\x0aメ'+prefix+'add\x0aメ'+prefix+_0x4de27e(0x14d)+prefix+_0x4de27e(0x186)+prefix+_0x4de27e(0x16c)+prefix+'tagall\x0aメ'+prefix+_0x4de27e(0x166)+prefix+'setpp\x0aメ'+prefix+_0x4de27e(0x173)+prefix+_0x4de27e(0x163)+prefix+_0x4de27e(0x16a)+prefix+_0x4de27e(0x152)+prefix+_0x4de27e(0x176)+prefix+_0x4de27e(0x194)+prefix+'tobc\x0aメ'+prefix+_0x4de27e(0x15f)+prefix+'stopjadibot\x0aメ'+prefix+_0x4de27e(0x167)+prefix+_0x4de27e(0x16f)+prefix+_0x4de27e(0x13f)+prefix+_0x4de27e(0x144)+prefix+_0x4de27e(0x155)+prefix+_0x4de27e(0x188)+prefix+_0x4de27e(0x16b)+prefix+'upswtext\x0aメ'+prefix+_0x4de27e(0x164)+prefix+'upswvideo\x0aメ'+prefix+_0x4de27e(0x175)+prefix+'upswgif\x0aメ'+prefix+_0x4de27e(0x15c)+prefix+_0x4de27e(0x141)+prefix+'upswlokasi\x0a\x0a\x20『\x20*MAKER\x20MENU*\x20』\x0a\x20\x0aメ'+prefix+_0x4de27e(0x13e)+prefix+_0x4de27e(0x14f)+prefix+_0x4de27e(0x140)+prefix+'burn\x0aメ'+prefix+'flower\x0aメ'+prefix+_0x4de27e(0x156)+prefix+_0x4de27e(0x143)+prefix+_0x4de27e(0x172)+prefix+_0x4de27e(0x193)+prefix+_0x4de27e(0x184)+prefix+_0x4de27e(0x153)+prefix+_0x4de27e(0x16e)+prefix+_0x4de27e(0x191)+prefix+_0x4de27e(0x17e)+prefix+'transformer\x0aメ'+prefix+_0x4de27e(0x18a)+prefix+_0x4de27e(0x149)+prefix+_0x4de27e(0x14e)+prefix+_0x4de27e(0x142)+prefix+_0x4de27e(0x148)+prefix+_0x4de27e(0x169)+prefix+_0x4de27e(0x146)+prefix+_0x4de27e(0x17c)+prefix+'sound1\x0aメ'+prefix+'sound2\x0aメ'+prefix+_0x4de27e(0x195)+prefix+'sound4\x0aメ'+prefix+_0x4de27e(0x13b)+prefix+_0x4de27e(0x14a)+prefix+_0x4de27e(0x159)+prefix+_0x4de27e(0x192)+prefix+_0x4de27e(0x15b)+prefix+_0x4de27e(0x174)+prefix+_0x4de27e(0x13d)+prefix+_0x4de27e(0x17b)+prefix+_0x4de27e(0x185)+prefix+_0x4de27e(0x17a)+prefix+_0x4de27e(0x18e)+prefix+_0x4de27e(0x190)+prefix+'linkbokep\x0aメ'+prefix+_0x4de27e(0x14c)+prefix+_0x4de27e(0x147)+prefix+_0x4de27e(0x15a)+prefix+'bokep4\x0aメ'+prefix+_0x4de27e(0x181)+prefix+_0x4de27e(0x189)+prefix+_0x4de27e(0x157)+prefix+_0x4de27e(0x15d)+prefix+_0x4de27e(0x179)+prefix+_0x4de27e(0x145)+prefix+_0x4de27e(0x180)+prefix+_0x4de27e(0x171)+prefix+'bokep13\x0aメ'+prefix+_0x4de27e(0x168)+prefix+'bokep15\x0a\x0a');var imgs=await Hanz['prepareMessage'](_0x4de27e(0x16d),fakeimage,image,{'thumbnail':fakeimage}),imgCatalog=imgs[_0x4de27e(0x17f)][_0x4de27e(0x178)],ctlg=await Hanz['prepareMessageFromContent'](from,{'productMessage':{'product':{'productImage':imgCatalog,'productId':_0x4de27e(0x154),'title':_0x4de27e(0x165),'description':menunya,'footerText':'メHANZ\x20OFC','currencyCode':_0x4de27e(0x151),'priceAmount1000':'0','productImageCount':0x1,'firstImageId':0x1,'salePriceAmount1000':'0','retailerId':_0x4de27e(0x17d),'url':_0x4de27e(0x18c)},'businessOwnerJid':_0x4de27e(0x182)}},{'quoted':ftrol,'mimetype':_0x4de27e(0x170)});function _0x345c(_0x266307,_0x18290b){var _0x21849a=_0x2184();return _0x345c=function(_0x345cdf,_0x3b9b55){_0x345cdf=_0x345cdf-0x13a;var _0x4207f7=_0x21849a[_0x345cdf];return _0x4207f7;},_0x345c(_0x266307,_0x18290b);}Hanz['relayWAMessage'](ctlg);
            break
case 'ucapan':
				asa = await getBuffer(`http://hadi-api.herokuapp.com/api/tts?text=Kontol Bapak Kau&language=id`)
                Hanz.sendMessage(from, asa, MessageType.audio, {quoted: floc, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
                break          
//===================================================MENU LIST======================================================================//
case 'command':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
"description": `╔═════════════════⎉
║冬Nama Bot : ${botname}
║冬Nama Owner : ${ownername}
║冬Nomor Owner : ${owner}
║冬Creator : ${creator}
║冬Prefix : Multi
║冬Battery : ${baterai.battery}
║冬Runtime : ${runtime(process.uptime())}
║冬Auto Composing : ${setting.autocomposing}
║冬Auto Recording : ${setting.autorecording}
╚═════════════════❍/`,
"buttonText": "List Menu",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `Silahkan Pilih Gan`,
    "rows": [ 
       {
           "title": "SCRIPT✌",
           "rowId": `${prefix}sc`
           },
	       {
	        "title": "🌀SEWA BOT",
           "rowId": `${prefix}sewabot`
           },
	       {	       
	        "title": "👥GROUP HANZ OFC",
           "rowId": `${prefix}grup`
           },
	       {
           "title": "👤OWNER MENU",
           "rowId": `${prefix}ownermenu`
           },
	       {
           "title": "👥GROUP MENU",
           "rowId": `${prefix}groupmenu`
           },
	       {
           "title": "📥DOWNLOAD MENU",
           "rowId": `${prefix}donlotmenu`
           },
	       {
           "title": "💌ANIME MENU",
           "rowId": `${prefix}animemenu`
           },
	       {	       
	        "title": "🎭MAKER MENU",
           "rowId": `${prefix}makermenu`
           },
	       {	       
           "title": "🗣INFO MENU",
           "rowId": `${prefix}infomenu`
           },
	       {
           "title": "⌨DETIK MENU",
           "rowId": `${prefix}detik`
           },
	       {
	       "title": "🎩QUOTES MENU",
           "rowId": `${prefix}randommenu`
           },
	       {
           "title": "⏳STALK MENU",
           "rowId": `${prefix}stalkmenu`
           },
	       {
	       "title": "🎵MUSIK MENU",
           "rowId": `${prefix}musikmenu`       
           },
	       {
	       "title": "💤CECAN MENU",
           "rowId": `${prefix}cecanmenu`       
           },
	       {
	        "title": "💦18+ MENU",
           "rowId": `${prefix}asupan`       
           },
	       {
	       "title": "🏃GAME MENU",
           "rowId": `${prefix}gamemenu`       
           },
	       {
           "title": "💟PRIMBON MENU",
           "rowId": `${prefix}primnonmenu`       
           },
	       {
           "title": "📍SEHARCH MENU",
           "rowId": `${prefix}searchmenu`   
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
 case 'musikmenu':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": 'MENU MUSIK 🔊\nBY : HANZ々OFC彡',
"description": `▬▭▬▭▬▭▬▭▬▬▭▬▭▬\nSUBSCRIBE\nhttps://youtube.com/HANZ々OFC彡\nSUBSCRIBE AND LIKE\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
"buttonText": "MENU️",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `Silahkan Pilih Musik yg enak Gan`,
    "rows": [ 
       {
           "title": "🎶 SOUND1",
           "rowId": `${prefix}sound1`
           },
	       {
           "title": "🎶 SOUND2",
           "rowId": `${prefix}sound2`
           },
	       {
           "title": "🎶 SOUND3",
           "rowId": `${prefix}sound3`
           },
	       {
           "title": "🎶 SOUND4",
           "rowId": `${prefix}sound4`
           },
	       {
           "title": "🎶 SOUND5",
           "rowId": `${prefix}sound5`
           },
	       {
           "title": "🎶 SOUND6",
           "rowId": `${prefix}sound6`
           },
	       {
           "title": "🎶 SOUND7",
           "rowId": `${prefix}sound7`
           },
	       {
           "title": "🎶 SOUND8",
           "rowId": `${prefix}sound8`
           },
	       {
           "title": "🎶 SOUND9",
           "rowId": `${prefix}sound9`
           },
	       {
           "title": "🎶 SOUND10",
           "rowId": `${prefix}sound10`
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
 case 'bokep':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": '18+ MENU💦',
"description": `AWAS SANGE AN🗿`,
"buttonText": "MENU️",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `Silahkan Pilih Musik yg enak Gan`,
    "rows": [ 
       {
           "title": "💦BOKEP1",
           "rowId": `${prefix}bokep1`
           },
	       {
           "title": "💦BOKEP2",
           "rowId": `${prefix}bokep2`
           },
	       {
           "title": "💦BOKEP3",
           "rowId": `${prefix}bokep3`
           },
	       {
           "title": "💦BOKEP4",
           "rowId": `${prefix}bokep4`
           },
	       {
           "title": "💦BOKEP5",
           "rowId": `${prefix}bokep5`
           },
	       {
           "title": "💦BOKEP6",
           "rowId": `${prefix}bokep6`
           },
	       {
           "title": "💦BOKEP7",
           "rowId": `${prefix}sound7`
           },
	       {
           "title": "💦BOKEP8",
           "rowId": `${prefix}bokep8`
           },
	       {
           "title": "💦BOKEP9",
           "rowId": `${prefix}bokep9`
           },
	       {
           "title": "💦BOKEP10",
           "rowId": `${prefix}bokep10`
           },
	       {
           "title": "💦BOKEP11",
           "rowId": `${prefix}bokep11`
           },
	       {
           "title": "💦BOKEP12",
           "rowId": `${prefix}bokep12`
           },
	       {
           "title": "💦BOKEP13",
           "rowId": `${prefix}bokep13`
           },
	       {
           "title": "💦BOKEP14",
           "rowId": `${prefix}bokep14`
           },
	       {
           "title": "💦BOKEP15",
           "rowId": `${prefix}bokep15`
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
//===================================================MENU LOKASI======================================================================// 
case 'groupmenu':
        sendButtonLocation(from, 
        `╭─❒  ⌜ Group Menu ⌟ ❒
├ ◦➛ ${prefix}antilink
├ ◦➛ ${prefix}welcome
├ ◦➛ ${prefix}antivirtex
├ ◦➛ ${prefix}group
├ ◦➛ ${prefix}linkgrup
├ ◦➛ ${prefix}promote
├ ◦➛ ${prefix}demote
├ ◦➛ ${prefix}totag
├ ◦➛ ${prefix}tagall
├ ◦➛ ${prefix}hidetag
├ ◦➛ ${prefix}sticktag
├ ◦➛ ${prefix}add
├ ◦➛ ${prefix}kick
├ ◦➛ ${prefix}setpp
├ ◦➛ ${prefix}setdesc
├ ◦➛ ${prefix}setname
├ ◦➛ ${prefix}hidetag
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break	
case 'stickermenu':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Sticker Menu ⌟ ❒
├ ◦➛ ${prefix}attp
├ ◦➛ ${prefix}sticker
├ ◦➛ ${prefix}tomp3
├ ◦➛ ${prefix}tovideo
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break	
case 'ownermenu':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Owner Menu ⌟ ❒
├ ◦➛ ${prefix}set        
├ ◦➛ ${prefix}owner
├ ◦➛ ${prefix}sewabot
├ ◦➛ ${prefix}restart
├ ◦➛ ${prefix}setppbot
├ ◦➛ ${prefix}setopwa
├ ◦➛ ${prefix}upswvn
├ ◦➛ ${prefix}upswvideo
├ ◦➛ ${prefix}upswimage
├ ◦➛ ${prefix}upswlokasi
├ ◦➛ ${prefix}upswaudio
├ ◦➛ ${prefix}upswgif
├ ◦➛ ${prefix}upswsticker
├ ◦➛ ${prefix}self/public
├ ◦➛ ${prefix}addcmd
├ ◦➛ ${prefix}delcmd
├ ◦➛ ${prefix}listcmd
├ ◦➛ ${prefix}autorespon gc/pc on/off
├ ◦➛ ${prefix}auto ketik/vn on/off
├ ◦➛ ${prefix}bc
├ ◦➛ ${prefix}bcbut
├ ◦➛ ${prefix}report
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break	
case 'donlotmenu':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Download Menu ⌟ ❒
├ ◦➛ ${prefix}play
├ ◦➛ ${prefix}ytsearch
├ ◦➛ ${prefix}ytmp4
├ ◦➛ ${prefix}tiktok
├ ◦➛ ${prefix}tiktokmusic
├ ◦➛ ${prefix}pinterest
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break	
case 'animemenu':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Anime Menu ⌟ ❒
├ ◦➛ ${prefix}character
├ ◦➛ ${prefix}manga
├ ◦➛ ${prefix}anime
├ ◦➛ ${prefix}kusonimesearch
├ ◦➛ ${prefix}otakudesusearch
├ ◦➛ ${prefix}nhentaisearch
├ ◦➛ ${prefix}nekopoisearch
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break	
case 'infomenu':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Info Menu ⌟ ❒
├ ◦➛ ${prefix}kbbi
├ ◦➛ ${prefix}jarak
├ ◦➛ ${prefix}wikipedia
├ ◦➛ ${prefix}translate
├ ◦➛ ${prefix}jadwaltv
├ ◦➛ ${prefix}infogempa
├ ◦➛ ${prefix}cuaca
├ ◦➛ ${prefix}covidindo
├ ◦➛ ${prefix}covidglobal
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break	
case 'randommenu':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Random Text Menu ⌟ ❒
├ ◦➛ ${prefix}quotes
├ ◦➛ ${prefix}quotesanime
├ ◦➛ ${prefix}quotesdilan
├ ◦➛ ${prefix}quotesimage
├ ◦➛ ${prefix}katabijak
├ ◦➛ ${prefix}randomnama
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break	
case 'detik':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Detik Menu ⌟ ❒
├ ◦➛ ${prefix}detikvn
├ ◦➛ ${prefix}detikvideo
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break	
case 'searchmenu':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Search Menu ⌟ ❒
├ ◦➛ ${prefix}gimage
├ ◦➛ ${prefix}wallpapersearch
├ ◦➛ ${prefix}playstore
├ ◦➛ ${prefix}shopee
├ ◦➛ ${prefix}google
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break	
case 'primbonmenu':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Primbon Menu ⌟ ❒
├ ◦➛ ${prefix}artinama
├ ◦➛ ${prefix}jodoh
├ ◦➛ ${prefix}jadian
├ ◦➛ ${prefix}tebakumur
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break	
case 'stalkmenu':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Stalk Menu ⌟ ❒
├ ◦➛ ${prefix}stalkig
├ ◦➛ ${prefix}stalktiktok
├ ◦➛ ${prefix}stalkgithub
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break	
case 'cecanmenu':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Cecan Menu ⌟ ❒
├ ◦➛ ${prefix}cecanvietnam
├ ◦➛ ${prefix}cecanmalaysia
├ ◦➛ ${prefix}cecankorea
├ ◦➛ ${prefix}cecanindonesia
├ ◦➛ ${prefix}cecanjapan
├ ◦➛ ${prefix}cecanthailand
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break	
case 'gamemenu':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Game Menu ⌟ ❒
├ ◦➛ ${prefix}tebakgambar
├ ◦➛ ${prefix}slot
├ ◦➛ ${prefix}tebakkimia
├ ◦➛ ${prefix}tebaklirik
├ ◦➛ ${prefix}tebakjenaka
├ ◦➛ ${prefix}truth
├ ◦➛ ${prefix}dare
├ ◦➛ ${prefix}tebaktebakan
├ ◦➛ ${prefix}tebakkalimat
├ ◦➛ ${prefix}tembak
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break
case 'infobotmenu':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Game Menu ⌟ ❒
├ ◦➛ ${prefix}tebakgambar
├ ◦➛ ${prefix}slot
├ ◦➛ ${prefix}tebakkimia
├ ◦➛ ${prefix}tebaklirik
├ ◦➛ ${prefix}tebakjenaka
├ ◦➛ ${prefix}truth
├ ◦➛ ${prefix}dare
├ ◦➛ ${prefix}tebaktebakan
├ ◦➛ ${prefix}tebakkalimat
├ ◦➛ ${prefix}tembak
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break
case 'asupan':
        sendButtonLocation(from, 
        `╭─❒ ⌜ 18+ Menu ⌟ ❒
├ ◦➛ ${prefix}bokep
├ ◦➛ ${prefix}asupan
├ ◦➛ ${prefix}lnkbokep
├ ◦➛ ${prefix}kodenuklir
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break
case 'makermenu':
        sendButtonLocation(from, 
        `╭─❒ ⌜ Maker Menu ⌟ ❒
│◦➛${prefix}neon
│◦➛${prefix}burn
│◦➛${prefix}glow
│◦➛${prefix}golden
│◦➛${prefix}summer
│◦➛${prefix}flower
│◦➛${prefix}quote
│◦➛${prefix}wooden
│◦➛${prefix}maker2d2
│◦➛${prefix}maker2d3
│◦➛${prefix}maker2d4
│◦➛${prefix}maker3d
│◦➛${prefix}maker3d2
│◦➛${prefix}maker3d3
│◦➛${prefix}maker3d4
│◦➛${prefix}transformer
│◦➛${prefix}googletxt
│◦➛${prefix}battlefield
│◦➛${prefix}coffeecup
│◦➛${prefix}coffeecup2
└❏`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 
[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break
//===================================================MENU GAME======================================================================//
case 'truth':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/stLJR5p/20211204-151628.jpg`)
Hanz.sendMessage(from, truteh, image, { caption: '*TRUTH*\n\n'+ ttrth, quoted: ftrol })
break
case 'dare':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "ðŸ¦„??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " gw wibu sejati " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
tod = await getBuffer(`https://i.ibb.co/stLJR5p/20211204-151628.jpg`)
Hanz.sendMessage(from, tod, image, { quoted: ftrol, caption: '*DARE*\n\n'+ der })
break
case 'tebakkalimat':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kalimat`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
Hanz.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol})
}, 60000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_10 Detik lagi..._', text)
}, 50000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_50 Detik lagi..._', text)
}, 10000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebaktebakan':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/tebakan`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
Hanz.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebaklirik':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/lirik`, {method: 'get'})
get = `*${anu.result.question}*`
setTimeout( () => {
Hanz.sendMessage(from, 'Jawaban: '
+anu.result.answer, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebakkimia':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kimia`, {method: 'get'})
get = `*${anu.result.nama}*`
setTimeout( () => {
Hanz.sendMessage(from, 'Jawaban: '
+anu.result.lambang, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, get, text, {quoted: ftrol}) 
}, 0) // 1000 = 1s,
break
case 'tebakjenaka':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/jenaka`, {method: 'get'})
tebakjenaka = `*${anu.result.pertanyaan}*`
setTimeout( () => {
Hanz.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, tebakjenaka, text, {quoted: ftrol}) 
}, 0) // 1000 = 1s,
break
case 'tebakgambar':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/tebakgambar?apikey=Ikyy69`, {method: 'get'})
ngebuff = await getBuffer(anu.img)
tebak = `Jawaban : *${anu.jawaban}*`
setTimeout( () => {
Hanz.sendMessage(from, tebak, text, {quoted: ftrol})
}, 60000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
Hanz.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab wajib subrek zero yt7 :v_', quoted: ftrol }) 
}, 0) // 1000 = 1s,
break
case 'tembak':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Teksnya Mana ?\nContoh: ${prefix + command} udara / darat / laut`)
if (args[0] == 'udara') {
setTimeout( () => {
reply(`[ *PERINTAH DILAKSANAKAN* ]`)
}, 1000)
setTimeout( () => {
reply(`[ *SEDANG BERBURU* ]`)
}, 5000)
setTimeout( () => {
reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
}, 8000)
setTimeout( () => {
reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]`)
}, 12000)
}
if (args[0] == 'darat') {
setTimeout( () => {
reply(`[ *PERINTAH DILAKSANAKAN* ]`)
}, 1000)
setTimeout( () => {
reply(`[ *SEDANG BERBURU* ]`)
}, 5000)
setTimeout( () => {
reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
}, 8000)
setTimeout( () => {
reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]`)
}, 12000)
}
if (args[0] == 'laut') {
setTimeout( () => {
reply(`[ *PERINTAH DILAKSANAKAN* ]`)
}, 1000)
setTimeout( () => {
reply(`[ *SEDANG BERBURU* ]`)
}, 5000)
setTimeout( () => {
reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
}, 8000)
setTimeout( () => {
reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh11}* ]`)
}, 12000)
}
break
case 'slot':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
Hanz.sendMessage(from, `
[ SLOTS ]\n-----------------
${somtoy2}
${somtoy}<=====
${somtoy3}
[ SLOTS ]
Keterangan : Jika anda Mendapatkan 3 Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`, text, { quoted: ftrol })
break

//===================================================MENU TAG======================================================================//
case 'totag':
			if (!isGroup) return reply(mess.only.group)
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
                    	case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await Hanz.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				Hanz.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
        case 'infoall': case 'tagall':
									if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									var nom = mek.participant
									members_id = []
									teks = ''
									for (let mem of groupMembers) {
										teks += `│ *@${mem.jid.split('@')[0]}*\n`
										members_id.push(mem.jid)
										}
										mentions(`「 *TAG ALL*  」
${q?`\nPesan : `+q:``}
							
${teks}`, members_id, true)
									break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
var value = body.slice(9)
var group = await Hanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
Hanz.sendMessage(from, options, text)
break
//=========================================MAKER MENU=============================================//
case 'glow': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
case 'summer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'flower': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'burn': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'quote': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'wooden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'golden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
					case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'googletxt':
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris|Ganz`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					ll3 = makell.split("|")[0];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'battlefield': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris|Ganz`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'coffeecup': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'coffeecup2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break
			case 'neon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Haris Ganz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Hanz.sendMessage(from, buffer1, image, {quoted: mek, caption: `${makell}\nDah Jadi🤓`,thumbnail:fakeimage})
					break		
//===================================================MENU STICKER======================================================================//

case 'attp':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Hanz.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'sticker':
case 'stiker':
case 's':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Sticker`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
Hanz.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Toimg`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
Hanz.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
Hanz.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await Hanz.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
Hanz.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done...' })
fs.unlinkSync(ran)
})
break
//===================================================UP STORY======================================================================//
case 'upswteks':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
Hanz.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
                    if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    Hanz.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${ownername}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':                    
                    if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                     if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvn':            
					if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')	       
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await Hanz.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    Hanz.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Hanz.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    Hanz.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':                       
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Hanz.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    Hanz.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break        
                   
//===================================================DOWNLOAD======================================================================//

case 'play':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(result.link)
await Hanz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftrol })
})
})
break
case 'ytsearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break
case 'ytmp4':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkey}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await Hanz.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'tiktok':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await Hanz.sendMessage(from, ini_buffer, video, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'tiktokmusic':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
await Hanz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftrol})
break
case 'pinterest':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
//===================================================ANIME MENU======================================================================//
case 'character':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await Hanz.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'manga':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await Hanz.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'anime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await Hanz.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'kusonimesearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Seasons : ${get_result.seasons}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Total Episode : ${get_result.total_episode}\n`
ini_txt += `Score : ${get_result.score}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Released On : ${get_result.released_on}\n`
ini_txt += `Desc : ${get_result.desc}\n`
link_dl = get_result.link_dl
for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
ini_buffer = await getBuffer(get_result.thumbnail)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'otakudesusearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Judul : ${get_result.judul}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Episode : ${get_result.episodes}\n`
ini_txt += `Aired : ${get_result.aired}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Genre : ${get_result.genres}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Studios : ${get_result.status}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Credit : ${get_result.credit}\n`
get_link = get_result.link_dl
for (var x in get_link) {
ini_txt += `\n\n*${get_link[x].title}*\n`
for (var y in get_link[x].link_dl) {
ini_info = get_link[x].link_dl[y]
ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
ini_txt += `\`\`\`Link : \`\`\`\n`
down_link = ini_info.link_dl
for (var z in down_link) {
ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
reply(ini_txt)
break
case 'nhentaisearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = "Result : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
reply(ini_txt)
break
case 'nekopoisearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break

//===================================================INFORMASI======================================================================//
case 'kbbi':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} kursi`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${lolkey}&query=${args.join(" ")}`)
lila = get_result.result
ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of lila) {
ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(ini_txt)
break
case 'jarak':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta - yogyakarta`)
pauls = args.join(" ")
teks1 = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${lolkey}&kota1=${teks1}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'wikipedia':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
reply(get_result)
break
case 'translate':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Tod\nContoh: ${prefix + command} en Tahu Bacem`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolkey}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `From : ${get_result.from}\n`
init_txt += `To : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Translated : ${get_result.translated}\n`
init_txt += `Pronunciation : ${get_result.pronunciation}\n`
reply(init_txt)
break
case 'jadwaltv':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Channel Nya Mana Tod\nContoh: ${prefix + command} SCTV`)
channel = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
for (var x in get_result) {
ini_txt += `${x} - ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'infogempa':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.lokasi}\n`
ini_txt += `Waktu : ${get_result.waktu}\n`
ini_txt += `Potensi : ${get_result.potensi}\n`
ini_txt += `Magnitude : ${get_result.magnitude}\n`
ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
ini_txt += `Koordinat : ${get_result.koordinat}`
get_buffer = await getBuffer(get_result.map)
await Hanz.sendMessage(from, get_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'cuaca':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} Temanggung`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.tempat}\n`
ini_txt += `Cuaca : ${get_result.cuaca}\n`
ini_txt += `Angin : ${get_result.angin}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
ini_txt += `Suhu : ${get_result.suhu}\n`
ini_txt += `Udara : ${get_result.udara}\n`
ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
await Hanz.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftrol })
reply(ini_txt)
break
case 'covidindo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'covidglobal':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break

//===================================================RANDOM TEXT======================================================================//
case 'quotes':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
quotes = quotes.result
author = quotes.by
quotes = quotes.quote
reply(`_${quotes}_\n\n*― ${author}*`)
break
case 'quotesanime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
quotes = quotes.result
quote = quotes.quote
char = quotes.character
anime = quotes.anime
episode = quotes.episode
reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
break
case 'quotesdilan':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
reply(quotedilan.result)
break
case 'quotesimage':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
await Hanz.sendMessage(from, get_result, image, { quotes: ftrol })
break
case 'katabijak':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
reply(get_result.result)
break
case 'randomnama':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
reply(anu.result)
break
//===================================================18+ MENU======================================================================//
case 'linkbokep':
                novpn = `[ *API SC* ]\n`
                    novpn += `➻ *NO VPN1* : bit.ly/2Qn9Qgu\n`
                    novpn += `➻ *NO VPN2* : bit.ly/3gWaBt8\n`
                    novpn += `➻ *XNXX VPN* : bit.ly/3vJZJ7n\n`
                    reply(novpn)
                    break          
case 'bokep1':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break          
case 'bokep2':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break  
case 'bokep3':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep4':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep5':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep6':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break      
case 'bokep7':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep8':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep9':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep10':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep11':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep12':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep13':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep14':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep15':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break             
//===================================================SHEARCH MENU======================================================================//
case 'gimage':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${query}`)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'wallpapersearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'playstore':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Aplikasinya Mana Tod\nContoh: ${prefix + command} tiktok`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Play Store Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.title}\n`
ini_txt += `ID : ${x.appId}\n`
ini_txt += `Developer : ${x.developer}\n`
ini_txt += `Link : ${x.url}\n`
ini_txt += `Price : ${x.priceText}\n`
ini_txt += `Price : ${x.price}\n\n`
}
reply(ini_txt)
break
case 'shopee':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Barang Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} sepatu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Shopee Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.name}\n`
ini_txt += `Terjual : ${x.sold}\n`
ini_txt += `Stock : ${x.stock}\n`
ini_txt += `Lokasi : ${x.shop_loc}\n`
ini_txt += `Link : ${x.link_produk}\n\n`
}
reply(ini_txt)
break
case 'google':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Yg Mau Cari Mana Tod\nContoh: ${prefix + command} sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Google Search : \n'
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Desc : ${x.desc}\n\n`
}
reply(ini_txt)
break

//===================================================PRIMBON======================================================================//
case 'artinama':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Namamya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lolkey}&nama=${ini_nama}`)
reply(get_result.result)
break
case 'jodoh':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero & Sandrinna`)
ini_nama = args.join(" ").split("&")
nama1 = ini_nama[0].trim()
nama2 = ini_nama[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Negative : ${get_result.negatif}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'jadian':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Tanggal Jadiannya Mana Tod\nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'tebakumur':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_name = args.join(" ")
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${lolkey}&name=${ini_name}`)
get_result = get_result.result
ini_txt = `Nama : ${get_result.name}\n`
ini_txt += `Umur : ${get_result.age}`
reply(ini_txt)
break

//===================================================STALK MENU======================================================================//
case 'stalkig':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna_11`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.photo_profile)
ini_txt = `Username : ${ini_result.username}\n`
ini_txt += `Full Name : ${ini_result.fullname}\n`
ini_txt += `Posts : ${ini_result.posts}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
Hanz.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
case 'stalktiktok':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna`)
stalk_toktok = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=ZeroYT7`)
get_result = get_result.result
ini_txt = `Username : ${get_result.username}\n`
ini_txt += `Nickname : ${get_result.nickname}\n`
ini_txt += `Bio : ${get_result.nickname}\n`
ini_txt += `Followers : ${get_result.followers}\n`
ini_txt += `Followings : ${get_result.followings}\n`
ini_txt += `Likes : ${get_result.likes}\n`
ini_txt += `Video : ${get_result.video}\n`
pp_tt = await getBuffer(get_result.user_picture)
Hanz.sendMessage(from, pp_tt, image, { quoted: ftrol, caption: ini_txt })
break
case 'stalkgithub':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Zero-YT7`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `Name : ${ini_result.name}\n`
ini_txt += `Link : ${ini_result.url}\n`
ini_txt += `Public Repo : ${ini_result.public_repos}\n`
ini_txt += `Public Gists : ${ini_result.public_gists}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
Hanz.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
//===================================================GROUP MENU======================================================================//
case 'welcome':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
break
case 'antilink' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!geouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
Hanz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
Hanz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await Hanz.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Hanz.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Hanz.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Hanz.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Hanz.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Hanz.groupRemove(from, mentioned)
}
break
case 'setname':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Hanz.groupUpdateSubject(from, `${body.slice(9)}`)
Hanz.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Hanz.groupUpdateDescription(from, `${body.slice(9)}`)
Hanz.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await Hanz.downloadAndSaveMediaMessage(mek, './database/media_user')
await Hanz.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
//===================================================RANDOM IMAGE======================================================================//

case 'art':
case 'bts':
case 'exo':
case 'elf':
case 'loli':
case 'neko':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
Hanz.sendMessage(from, gambar, image, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
})
break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'hentai':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'hentai4everyone':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
Hanz.sendMessage(from, gambar, image, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
})
break
//===================================================CECAN======================================================================//
case 'cecanvietnam':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=${Hanzkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Hanz.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'cecanmalaysia':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=${Hanzkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Hanz.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'cecankorea':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=${Hanzkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Hanz.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'cecanindonesia':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=${Hanzkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Hanz.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'cecanjapan':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=${Hanzkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Hanz.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'cecanthailand':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=${Hanzkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Hanz.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break

//===================================================RANDOM MEME======================================================================//
case 'randommeme':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
Hanz.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
})
break
case 'randomdarkjoke':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
Hanz.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
})
break
case 'randommemeindo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
Hanz.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
})
break

//━━━━━━━━━━━━━━━[ FITUR INFO ]━━━━━━━━━━━━━━━━━//

case 'info':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
teks =
`┏━➤ 「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」
┃┃✯ Nama Bot : ${botname}
┃┃✯ Prefix : Multi
┃┃✯ Platform : Ubuntu Linux
┃┃✯ Runtime : ${runtime(process.uptime())}
┃┃✯ Sc Bot : https://bit.ly/3vRAPnY
┗━━━━━━━`
gam = fs.readFileSync('./media/Bot.jpg')
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
        ]
        sendButImage(from, teks, "HANZ々OFC彡 [INFO]", gam, but)
break
case 'sewabot':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
teks =
`╔══❒LIST JASA WA BOT❒══⎉
║冬Seminggu : 5.000
║冬Sebulan : 10.000
║冬Permanen : 15.000
╚═══════════════════❍ 
╔═════❒FITUR BOT❒═════⎉
║冬STICKER
║冬WELCOME GG
║冬ANTIVIRTEX
║冬ANTILINK
║冬BUAT JAGA GRUP
║冬DLL
╚═══════════════════❍ 
╔══❒KEUNGGULAN BOT❒══⎉
║冬SELALU UPDATE
║冬ON 24 JAM
╚═══════════════════❍ 
Jika Ingin Sewa Bot
Silahkan Pilih Metode Pembayaran
Dibawah Ini`
gam = fs.readFileSync('./media/sewabot.jpg')
but = [
          { buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 },
          { buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 }
        ]
        sendButImage(from, teks, "Pilih Metode Pembayarannya🤑", gam, but)
break
case 'grup':
function _0x1b03(_0x695da,_0xd87e44){var _0x18218d=_0x1821();return _0x1b03=function(_0x1b0305,_0x4929d7){_0x1b0305=_0x1b0305-0x1ec;var _0x4374ae=_0x18218d[_0x1b0305];return _0x4374ae;},_0x1b03(_0x695da,_0xd87e44);}var _0x4192b2=_0x1b03;function _0x1821(){var _0x441c65=['527965hkEzEf','prepareMessageFromContent','\x20GROUP\x20HANZ々OFC彡\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0a╔═════════════════⎉\x0a║冬Nama\x20Bot\x20:\x20','6329281ziZkmk','18EJxKCv','11058870UJKLeL','828083HgHzxv','HANZ々OFC彡','955401cKacWz','OK\x20SIAP','HAIKAL','\x0a║冬Auto\x20Composing\x20:\x20','\x0a║冬Creator\x20:\x20','relayWAMessage','48iCSqSo','16SxITQC','\x0a║冬Prefix\x20:\x20Multi\x0a║冬Battery\x20:\x20','RESPONSE','\x0a║冬Nomor\x20Owner\x20:\x20','2410786edbzVw','\x0a║冬Nama\x20Owner\x20:\x20','autorecording','11nXoMqz','1770768rixMnA','uptime','║\x0a║冬Runtime\x20:\x20'];_0x1821=function(){return _0x441c65;};return _0x1821();}(function(_0x1f97f7,_0x418fb4){var _0x861ba=_0x1b03,_0x2e5e64=_0x1f97f7();while(!![]){try{var _0x1b64f8=parseInt(_0x861ba(0x1ee))/0x1+parseInt(_0x861ba(0x1fb))/0x2+parseInt(_0x861ba(0x1f0))/0x3*(parseInt(_0x861ba(0x1f7))/0x4)+parseInt(_0x861ba(0x202))/0x5*(-parseInt(_0x861ba(0x1f6))/0x6)+-parseInt(_0x861ba(0x205))/0x7+-parseInt(_0x861ba(0x1ff))/0x8*(-parseInt(_0x861ba(0x1ec))/0x9)+-parseInt(_0x861ba(0x1ed))/0xa*(parseInt(_0x861ba(0x1fe))/0xb);if(_0x1b64f8===_0x418fb4)break;else _0x2e5e64['push'](_0x2e5e64['shift']());}catch(_0x15ce41){_0x2e5e64['push'](_0x2e5e64['shift']());}}}(_0x1821,0xda8f6),res=await Hanz[_0x4192b2(0x203)](from,{'buttonsMessage':{'text':'','locationMessage':{'degreesLatitude':34.0184,'degreesLongitude':-118.411},'contentText':_0x4192b2(0x204)+botname+_0x4192b2(0x1fc)+ownername+_0x4192b2(0x1fa)+owner+_0x4192b2(0x1f4)+creator+_0x4192b2(0x1f8)+baterai['battery']+_0x4192b2(0x201)+runtime(process[_0x4192b2(0x200)]())+_0x4192b2(0x1f3)+setting['autocomposing']+'\x0a║冬Auto\x20Recording\x20:\x20'+setting[_0x4192b2(0x1fd)]+'\x0a╚═════════════════❍\x20\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0aHELLO\x20!!!\x0aGROUP\x20HANZ々OFC彡[INFO]\x0ahttps://chat.whatsapp.com/JPrMnQZao82D6bEeZKBNQ2\x0a\x0aGROUP\x20HANZ々OFC彡[BOT\x20WA]\x0ahttps://chat.whatsapp.com/H2dvuYaI3SbKURzstwl7Wn\x0a\x0aROOM\x20VIRUS\x201/2\x0aV1:\x20https://chat.whatsapp.com/GsG7Dvu6ymPL3wqHubftIG\x0a\x0aV2:\x20https://chat.whatsapp.com/CuVbS5XaimTIl4LuKTahYq\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭','footerText':_0x4192b2(0x1ef),'buttons':[{'buttonId':_0x4192b2(0x1f2),'buttonText':{'displayText':_0x4192b2(0x1f1)},'type':_0x4192b2(0x1f9)}],'headerType':'LOCATION'}},{'quoted':mek}),Hanz[_0x4192b2(0x1f5)](res));
break
case 'gopay':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, `GOPAY : 0${Nogopay}`, faketeks, but, mek)
break
case 'dana':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, `DANA : 0${Nodana}`, faketeks, but, mek)
break
case 'ovo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, `OVO : 0${Noovo}`, faketeks, but, mek)
break
case "runtime":
case "test":
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break;
case "speed":
case "ping":
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const timestamp = speed();
const latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
const child = stdout.toString("utf-8");
const ssd = child.replace(/Memory:/, "Ram:");
const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break;
case 'verify':
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const ara = fs.readFileSync('./media/sticker/verify.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
break
case 'donasi':
teks = `Kalo Gk ikhlas Ngak usah donasi:v

Makasih Kalo Mau Donasi Beneran
Semoga Rejekinya Tambah Lancar Amin

╔═════════════════⎉
║冬GOPAY : 083144394823
║冬DANA : 083144394823
║冬OVO : 083144394823
║冬PULSA : 083144394823
║冬SAWERIA : https://saweria.co/harisnew
╚═════════════════❍ `
gam = fs.readFileSync('./media/sewabot.jpg')
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 },
          { buttonId: `${prefix}info`, buttonText: { displayText: 'INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
        ]
        sendButImage(from, teks, "HANZ々OFC彡", gam, but)
break

//===================================================MENU LIST======================================================================//
case 'addcmd': 
case 'setcmd':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan :  cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
}
reply(teksnyee)
break
case 'public':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
publik = true
reply('Sukses mengubah mode self ke public')
break
case 'self':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
publik = false
reply('Sukses mengubah mode public ke self')
break
case 'auto':{
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!q) return 
if (
args[0].toLowerCase() === 'ngetik' ||
args[0].toLowerCase() === 'ketik' ||
args[0].toLowerCase() === 'typing'
									){
ngetik = true
autovn = false
reply(`Sukses....`)
} else if (
args[0].toLowerCase() === 'voicenote' ||
args[0].toLowerCase() === 'recording' ||
args[0].toLowerCase() === 'vn' 
){
ngetik = false
autovn = true
reply(`Sukses...`)
} else {
}
}
break
case 'autoread':
var _0x148f28=_0x108f;function _0x108f(_0x3539ed,_0xc5c533){var _0x45c9c5=_0x45c9();return _0x108f=function(_0x108f53,_0x486b87){_0x108f53=_0x108f53-0x1e8;var _0x1eee54=_0x45c9c5[_0x108f53];return _0x1eee54;},_0x108f(_0x3539ed,_0xc5c533);}(function(_0x33bced,_0x44f5ba){var _0x2f7ddb=_0x108f,_0xdf41a9=_0x33bced();while(!![]){try{var _0x3143cd=-parseInt(_0x2f7ddb(0x1fa))/0x1*(parseInt(_0x2f7ddb(0x1f0))/0x2)+-parseInt(_0x2f7ddb(0x1ef))/0x3+parseInt(_0x2f7ddb(0x1e9))/0x4+-parseInt(_0x2f7ddb(0x1ec))/0x5+-parseInt(_0x2f7ddb(0x1f6))/0x6+parseInt(_0x2f7ddb(0x1f2))/0x7+parseInt(_0x2f7ddb(0x1f9))/0x8;if(_0x3143cd===_0x44f5ba)break;else _0xdf41a9['push'](_0xdf41a9['shift']());}catch(_0x32a869){_0xdf41a9['push'](_0xdf41a9['shift']());}}}(_0x45c9,0x71086));if(!isOwner&&!mek[_0x148f28(0x1f3)][_0x148f28(0x1ee)])return;function _0x45c9(){var _0x14ac63=['1464774BToFnh','3236cvsFnj','Succes\x20mengaktifkan\x20autoread\x20pribadi','3170265FcSMPR','key','Succes\x20mematikan\x20autoread\x20group','Succes\x20mengaktifkan\x20autoread\x20group','50604XSXWLr','off','*List\x20Auto\x20Read*\x0a•>\x20gc\x0a•>\x20pc','8865152AJKTJJ','400FrTPjg','Pilih\x20on\x20atau\x20off','2615880hjmFml','Example:\x0a','autoread\x20gc\x20on','3040675vdrWSr','Succes\x20mematikan\x20autoread\x20pribadi','fromMe'];_0x45c9=function(){return _0x14ac63;};return _0x45c9();}if(args['length']<0x1)return reply(_0x148f28(0x1ea)+prefix+_0x148f28(0x1eb));if(args[0x0]==='gc'){if(args['length']<0x2)return reply('Example:\x0a'+prefix+_0x148f28(0x1eb));if(args[0x1]==='on'){if(readG===!![])return;readG=!![],reply(_0x148f28(0x1f5));}else{if(args[0x1]===_0x148f28(0x1f7)){if(readG===![])return;readG=![],reply(_0x148f28(0x1f4));}else reply(_0x148f28(0x1e8));}}else{if(args[0x0]==='pc'){if(args['length']<0x2)return reply(_0x148f28(0x1ea)+prefix+'autoread\x20pc\x20on');if(args[0x1]==='on'){if(readP===!![])return;readP=!![],reply(_0x148f28(0x1f1));}else{if(args[0x1]===_0x148f28(0x1f7)){if(readP===![])return;readP=![],reply(_0x148f28(0x1ed));}else reply(_0x148f28(0x1e8));}}else reply(_0x148f28(0x1f8));}
break                  
case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
reply(`_Restarting ${botname}_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break								
case 'set' :
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
but = [
{ buttonId: '.self', buttonText: { displayText: 'Self' }, type: 1 },
{ buttonId: '.public', buttonText: { displayText: 'Public' }, type: 1 }
]
sendButton(from, "Silahkan pilih self/public Di Bawah", faketeks, but, mek)
break
case 'setppbot':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await Hanz.downloadMediaMessage(boij)
fs.writeFileSync(`./media/thumnail.jpg`, delb)
fakeimage = fs.readFileSync(`./media/thumnail.jpg`)
reply(`Sukses cok`)
break
case 'setppwa':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
Hanz.updatePresence(from, Presence.composing) 
if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Hanz.downloadAndSaveMediaMessage(enmedia)
await Hanz.updateProfilePicture(botNumber, media)
reply('SUKSES!!!')			  
break		
case 'sc':
case 'script':
case 'sourcecode':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})

var nom = mek.participant
members_id = []
anu =`
❏SCRIPT❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
══{*LINK SCRIPT*}══
┏━━⊱
┣❏ http://bit.ly/3vJZJ7n
┗━━⊱
══{*YOU TUBE*}══
┏━━⊱
┣❏ https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`
but = [
{ buttonId: `${prefix}000`, buttonText: { displayText: 'OK TQ' }, type: 1 },
{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SEWA BOT' }, type: 1 },
]
sendButton(from, anu, faketeks, but, mek)
break
//━━━━━━━━━━━━━━━[ AKHIR SEMUA FITUR ]━━━━━━━━━━━━━━━━━//

default:
if (budy.includes(`Mastah`)) {
const ara = fs.readFileSync('./media/sticker/mastah.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`mastah`)) {
const ara = fs.readFileSync('./media/sticker/mastah.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`Ajg`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`Assalamualaikum`)) {
const ara = fs.readFileSync('./media/sticker/Assalamualaikum.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }               
if (budy.includes(`assalamualaikum`)) {
const ara = fs.readFileSync('./media/sticker/Assalamualaikum.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }                     
if (budy.includes(`ajg`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`bangsat`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`kntl`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`${owner}`,)) {              
                  const ara = fs.readFileSync('./media/sticker/tag.webp');
                  Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Hanz.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
		fin = process.uptime()
        if (!mek.hasNewMessage) return Hanz.setStatus(`Runtime ${runtime(process.uptime())} | prefix ${prefix} | ${asutes}`)
        mek = mek.messages.all()[0]
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
