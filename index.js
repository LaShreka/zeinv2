const {
        WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
} = require('@adiwajshing/baileys')

const {
	listzodiak,
	aries,
	taurus,
	gemini,
	cancer,
	Leo,
	Virgo,
	Libra,
	Scorpio,
	Sagittarius,
	Capricorn,
	Aquarius,
	Pisces
} = require('./src/listzodiak')

const {
	VHsendImageUrl,
	VHsendVideoUrl,
	VHsendContact,
	VHsendMessage,
	VHsendAudioUrl,
	VHsendStickerUrl,
	VHsendStickerPath,
	VHsendMention,
	Removebg,
	Searchanime
} = require('./lib/VHtearFunc')

//libs
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { doing } = require('./lib/translate.js')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { virtex } = require('./src/virtex')

//funções
const imageToBase64 = require('image-to-base64')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const emojiUnicode = require('emoji-unicode')
const fetch = require('node-fetch')
const axios = require('axios')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
//const google = require('google-it')
const get = require('got')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const cd = 4.32e+7

//json
//const { BarBarApi, ZeksApi, TechApi, TobzApi, ItsApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
//const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const public = JSON.parse(fs.readFileSync('./src/public.json'))
const anime = JSON.parse(fs.readFileSync('./src/anime.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'))
const user = JSON.parse(fs.readFileSync('./src/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/json/uang.json'))
const _mute = JSON.parse(fs.readFileSync('./database/json/mute.json'))
const _registered = JSON.parse(fs.readFileSync('./database/json/registered.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))

// Load options file
const option = JSON.parse(fs.readFileSync('./options/option.json'))
const { ind } = require('./options/language')
//const { eng } = require('./options/language')
const {
    botPrefix,
    ZeksApi,
    BarBarKey,
ownerName,
botName,
VthearApi,
ItsApi,
shizukaapi,
TobzApi,
TechApi,
ownerNumbers,
    memberLimitss,
    userDefaultLimit
} = option

//arquivosqq
const {
	cekprefix
} = require('./src/cekprefix')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { moftpk } = require('./src/modapk')
const { listmenu } = require('./src/listmenu')
const { vipmenu } = require('./src/vipmenu')
const { othermenu2 } = require('./src/othermenu2')
const { wibu } = require('./src/wibu')
const { snk } = require('./src/snk')
const { adminmenu } = require('./src/adminmenu')
const { toxic } = require('./src/toxic')
const { animesaran } = require('./src/animesaran')
const { tnc } = require('./src/tnc')
const { kodenuklir2 } = require('./src/kodenuklir2')
const { rules } = require('./src/rules')
const { nekopoi } = require('./src/nekopoi')
const { ownermenu } = require('./src/ownermenu')
const { addfoto } = require('./src/addfoto')
const { nsfwmenu } = require('./src/nsfwmenu')
const { kerangmenu } = require('./src/kerangmenu')
const { listsurah } = require('./src/listsurah')
const { randomNimek, sleep, wall, tulis, ss } = require('./lib/functions')
const { addsay } = require('./src/addsay')
const { listsay } = require('./src/listsay')
const { cekvip } = require('./src/cekvip')
const { daftarvip } = require('./src/daftarvip')
const { iklan } = require('./src/iklan')
const { daftatvip } = require('./src/daftarvip')
const { funmenu } = require('./src/funmenu')
const { mediamenu } = require('./src/mediamenu')
const { othermenu } = require('./src/othermenu')
const { animemenu } = require('./src/animemenu')
const { kodenuklir } = require('./src/kodenuklir')
const { makermenu } = require('./src/makermenu')

ban = ['559188748597@s.whatsapp.net','']
const vcard = 'BEGIN:VCARD\n' // JAN MUDOU
            + 'VERSION:3.0\n' // JAN MUDOU
            + 'FN: DONO ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸\n' // NOME DE CONTATO DO PROPRIETÁRIO
            + 'ORG:Criador ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸;\n' // NOME DO CRIADOR
            + 'TEL;type=CELL;type=VOICE;waid=557191973796:+55 71 9197-3796\n' // LU HP NÚMERO
            + 'END:VCARD'
prefix = '#'
blocked = []
limitawal = userDefaultLimit
cr = '*ZeinVerificado*'
memberlimit = memberLimitss


// Functions
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }
        const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }

        const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/json/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
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

        const addATM = (sender) => {
                const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
        }

        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }

        const checkATMuser = (sender) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }

        const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }

        const confirmATM = (sender, amount) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }

        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 400
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Hora ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
} 
async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})
	client.on('credentials-updated', () => {
		fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://e.top4top.io/p_1837nveac0.jpg'
				}
				teks = `[ NOVO MEMBRO NO GRUPO _*${mdata.subject}*_ ] \n*_____________*\n@${num.split('@')[0]}\nBEM-VINDO AO GRUPO\n *_____________*\nEspero que você se sinta em casa no grupo!`
				let buffer = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buffer, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
	//		} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
			//		ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://e.top4top.io/p_1837nveac0.jpg'
				}
			//	teks = `Adeus @${num.split('@')[0]}👋`
			//	let buffer = await getBuffer(ppimg)
		//		client.sendMessage(mdata.id, buffer, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'compre a chave api para que funcione! '
			const insom = from.endsWith('@g.us')
			const botFebb = insom ? mek.participant : mek.key.remoteJid
			pushname2 = client.contacts[botFebb] != undefined ? client.contacts[botFebb].vname || client.contacts[botFebb].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, isImage, audio, product, gif } = MessageType
			const speed = require('performance-now')
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
                        const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
                        const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
			const date = moment.tz('America/Sao_Paulo').format('DD,MM,YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
                        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'sticker') && mek.message.stickerMessage.caption ? mek.message.stickerMessage.caption :''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
                        const tescuk = ["0@s.whatsapp.net"]
                        const q = args.join(' ')

			mess = {
				wait: '[ESPERE] Em andamento⏳ aguarde ± 1 min!',
				asik: '[ESPERE] Em andamento⏳ aguarde ± 1 min!',
				success: '✔️ Funcionando ✔️',
				error: {
					stick: ' Falha, ocorreu um erro ao converter a imagem em um adesivo ',
					Iv: ' [❗] O link que você enviou é inválido! '
				},
				only: {
					group: '[❗] Este comando só pode ser usado em grupos! ❌',
					public: '[❗] Recursos em particular, aguarde a publicação do proprietário! ',
					premium: '[❗] ESTE COMANDO É ESPECÍFICO DO USUÁRIO  *PREMIUM* se quiser virar Premium,fale com o meu proprietário wa.me/+557191973796',
					mod: '[❗] ESTE COMANDO É ESPECÍFICO DO USUÁRIO * ModBot *',
					benned: 'Você não pode usar os comandos por que está banido,consequência de dar spam,entre em contato com o proprietário',
					ownerG: '[❗] Proprietário ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸? Este é um recurso especial para o proprietário ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸',
					ownerB: '[❗] Proprietário ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸? Este é um recurso especial para o proprietário ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸 ❌',
					userB: `──「 LISTA 」──\nOla mano !\nVocê não está registrado no banco de dados, \n\nComando : ${prefix}daftar nome|idade\nExemplo : ${prefix}daftar ZEIN|17\n\n──「 ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸 」──`,
					admin: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
					Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
				}
			}

			const apakah = ['Ya','Tidak']
        		const bisakah = ['Bisa','Tidak Bisa']
		        const kapankah = ['Hari Lagi','Minggu Lagi','Bulan Lagi','Tahun Lagi']
			const botNumber = client.user.jid
			const ownerNumber = ["557191973796@s.whatsapp.net"]
			const mod = [ownerNumber,"557191973796@s.whatsapp.net"]
			const adminbotnumber = ["557191973796@s.whatsapp.net"]
			const frendsowner = ["557191973796@s.whatsapp.net"]
			const premium = ["557191973796@s.whatsapp.net","552167446481@s.whatsapp.net","553484104285@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isAnime = isGroup ? anime.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isMute = _mute.includes(ownerNumber)
			const isBanned = ban.includes(sender)
			const isPremium = premium.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const isEventon = isGroup ? event.includes(from) : false
                       const isUser = user.includes(sender)
                        const isAntiLink = isGroup ? antilink.includes(from) : false
                       const isAntiRacismo = isGroup ? antiracismo.includes(from) : false
                        pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined


			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
                        const sendImage = (teks) => {
		                client.sendMessage(from, teks, image, {quoted:mek})
		        }
		        const costum = (pesan, tipe, target, target2) => {
			        client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		        const sendPtt = (teks) => {
		                client.sendMessage(from, audio, mp3, {quoted:mek})
		        }

	        //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*ã€Œ LEVEL UP ã€*\n\nâž¸ *Name*: ${sender}\nâž¸ *XP*: ${getLevelingXp(sender)}\nâž¸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nCongrats!! ðŸŽ‰ðŸŽ‰`)
                }
            } catch (err) {
                console.error(err)
            }
        }
            //function check limit
          const checkLimit = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 300 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
                                }

                        //funtion limited
           const isLimit = (sender) =>{
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitawal ) {
                  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 300 }
                _limit.push(obj)
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        if (isGroup) {
             try {
                     const getmemex = groupMembers.length
                     if (getmemex <= memberlimit) {
                             client.groupLeave(from)
                     }
             } catch {
                     console.error(err)
             }
        }

            //function balance
            if (isUser && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        
    if (messagesC.includes("preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		}
	
	        if (messagesC.includes("seupreto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		}
	
	        if (messagesC.includes("macaco")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		}
	
	
	        if (messagesC.includes("pretoimundo")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		}
	
	        if (messagesC.includes("pq vc e preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		}
	        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link detectado ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		}
		        if (messagesC.includes("https://")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link detectado ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		}
	
	if (messagesC.includes("fdp")){
	if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			reply("teu pai")
	}
	
		if (messagesC.includes("corno")){
		if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			reply("vsfd seu merda")
	}
	
		if (messagesC.includes("tmnc")){
		if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			reply("vai vc, tu ja me disse q é mo bom")
	}
	
		if (messagesC.includes("vsfd")){
		if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			reply("bora juntos?")
	}
	
		if (messagesC.includes("cadebot")){
		if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			reply("olha eu aqui carai")
	}
	
		if (messagesC.includes("bot")){
		if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			reply("oi")
	}
	
			if (messagesC.includes("bah")){
			if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/fdp.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			
	
			if (messagesC.includes("canta")){
			if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/canto.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	if (messagesC.includes("fodase")){
	if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/fodase.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
		if (messagesC.includes("muybueno")){
	if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/espiro.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
	
					if (messagesC.includes("grita")){
					if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/a.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	if (messagesC.includes("baderna")){
	if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/Mariabaderna.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
if (messagesC.includes("sexo")){
if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/SEXOO.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
	if (messagesC.includes("fazergf")){
	if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/websexohjmulher.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
		if (messagesC.includes("boomdia")){
		if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/bomdiaa.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("bv")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/bv.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("mandememe")){
				if (isBanned) return reply(mess.only.benned)    
			client.updatePresence(from, Presence.composing)
			data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
	}
	
	
	  // Mute
        if (isCmd && isMute && !isOwner) return

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
                     // Load Commands
			switch(command) {
				case 'help':
				case 'menu':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, help(prefix), text)
					break

					case 'listmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, listmenu(prefix), text, { quoted: mek })
					break

					case 'snk':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, snk(), text, { quoted: mek })
					break

//ownermenu
					case 'menu1':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, ownermenu(prefix), text, { quoted: mek })
					break

//adminmenu
       case 'menu2':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, adminmenu(prefix), text, { quoted: mek })
					break

//nsfwmenu
					case 'menu3':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, nsfwmenu(prefix), text, { quoted: mek })
					break

//funmenu
					case 'menu4':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, funmenu(prefix), text, { quoted: mek })
					break

//mediamenu
					case 'menu5':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, mediamenu(prefix), text, { quoted: mek })
					break

//makermenu
					case 'menu6':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, makermenu(prefix), text, { quoted: mek })
					break

//vipmenu
                   case 'menu7':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário *${prefix}ownerou digite *${prefix}daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					client.sendMessage(from, vipmenu(prefix) , text, { quoted: mek })
					break

//kerangmenu
                 case 'menu8':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, kerangmenu(prefix), text, { quoted: mek })
					break

//animemenu
					case 'menu9':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, animemenu(prefix), text, { quoted: mek })
					break


//othermenu
					case 'menu10':
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, othermenu(prefix), text, { quoted: mek })
					break

//othermenu2
case 'menu11':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, othermenu2(prefix), text, { quoted: mek })
					break

					//case 'DARK group':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, '*ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸 GROUP*\n\nLink : https://chat.whatsapp.com/5*', text, { quoted: mek })
					break

					case 'sticker':
					case 'stiker':
			   case 'st':
					case 's':
					 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
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
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
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
								reply(`❌ Falhou, no momento da conversão ${tipe} para stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'i2bubAaosRqJvxkWv3Wi9uNh'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie fotos com legendas ${prefix}sticker ou marque imagem que já foram enviadas`)
					}
					break

					case 'nobg':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = '${anu.display_url}'
                                        ranpp = getRandom('.png')
                                        ranop = getRandom('.webp')
                                        anu1 = await fetchJson('https://api.vhtear.com/removebgwithurl?link=${teks}&apikey=${VthearApi}', {method: 'get'})
                                         exec(`wget ${anu1.result.image} -O ${ranpp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranop}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(ranop)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(ranop)
})
                                          } else {
                                                 reply('Use uma foto!')
                                          }
                                        break
                   case 'ytkomen':
                   
                                         if (!isUser) return reply(mess.only.userB)
                                         if (args.length < 1) return reply('Cadê o texto?')
                                         gh = body.slice(9)
                                         usnm = gh.split("|")[0];
                                         cmn = gh.split("|")[1];
                                         var imgbb = require('imgbb-uploader')
                                         ghost = mek.participant
                                         try {
                                         pp = await client.getProfilePicture(ghost)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         res = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", 'getpp.jpeg')
                                         buffer88 = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
                                         client.sendMessage(from, buffer88, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
                                         break
case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)    
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digite 1 para ativar o recurso')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*o recurso de nível já estava ativo antes*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === '0') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(' *Digite o comando 1 ativar, 0 desabilitar* \n *Exemplo: ${prefix}leveling 1*')
                }
            break
case 'mining':
                                        if (!isUser) return reply(mess.only.daftarB)
                                        
                                        if (isBanned) return reply(mess.only.benned)    
                                        if (!isEventon) return reply(`Desculpe ${pushname} a mineração de eventos não está ativada pelo proprietário`)
                                        if (isOwner) {
                                                const one = 999999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`porque você é nosso proprietário da equipe bot de envio ${one}Xp para voce `)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*Parabéns* ${pushname} você pega *${mining}Xp*`)
                                        }
                                        await limitAdd(sender)
                                        break
                    case 'rules':
                    
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                   client.sendMessage(from, rules(prefix), text, { quoted: mek })
                    break
case 'brainly':

					if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Questão:* ${Y.pertanyaan}\n\n*➸ Responda:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
                    case 'modapk':
                    
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                   client.sendMessage(from, modapk(prefix), text, { quoted: mek })
                    break
					case 'addfoto':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Você é o proprietário?')
					client.sendMessage(from, addfoto(prefix), text, { quoted: mek })
					break
					case 'mm':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Você é o proprietário?')
					if (args.length < 1) return reply('Cadê o texto mano')
					reply(mess.wait)
					client.sendMessage(from, 'Adicionando mensagem à lista com sucesso' , text, { quoted: mek })
					client.sendMessage(from, addsay(prefix), text, { quoted: mek })
					break
					case 'kodenuklir':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply('Recurso Nsfw não ativado Digite /nsfw1 se quiser desligar digite /nsfw 0')
					tod = await getBuffer(`https://i.ibb.co/Y8SQbH4/images-2021-01-06-T012645-090.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: kodenuklir()})
					break
					case 'kodenuklir2':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply('Recurso Nsfw não ativado Digite /nsfw1 se quiser desligar digite /nsfw 0')
					tod = await getBuffer(`https://i.ibb.co/qm1qjdD/images-2020-12-28-T142307-987.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: kodenuklir2()})
					break
					case 'listsay':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Você é o proprietário?')
					client.sendMessage(from, listsay(prefix), text, { quoted: mek })
					break
					case `cekprefix`:
					client.sendMessage(from, cekprefix(prefix), text, { quoted: mek })
					break
					case 'masougakuenhxh':
			       case 'valxlove':
                    case 'prisonschool':
                    
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, 'Harem anime é muito bom mano' , text, { quoted: mek })
					break
					case 'delsay':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Você é o proprietário?')
					if (args.length < 1) return reply('Onde está o texto mano?')
					reply(mess.wait)
					client.sendMessage(from, 'mensagem excluída com sucesso na lista de mensagens' , text, { quoted: mek })
					break
					case 'daftarvip':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, daftarvip(prefix) , text, { quoted: mek })
					break
					case 'nekopoi':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					client.sendMessage(from, nekopoi(prefix) , text, { quoted: mek })
					break
					case 'cekvip':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar acesso Premium!' ,text, { quoted: mek })
					me = client.user
					uptime = process.uptime()
					client.sendMessage(from,  `*──────────────────*\n*Nome Do bot:* *${me.name}*\n*─────────────────*\n『 *𝐕𝐈𝐏 𝐔𝐒𝐄𝐑*』\n*──────────────────*\n*•Número:* *${sender.split("@s.whatsapp.net")[0]}*\n*•Status:* *ATIVO*\n*──────────────────*\n*Status Do bot:* *${kyun(uptime)}*\n*──────────────────*` , text, { quoted: mek, })
					break
					case 'gambar':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB) 
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite * -daftarvip * para comprar o acesso Premium!' ,text, { quoted: mek })
					const items = ["anime high school dxd", "anime high school dxd hd", "karakter anime high school dxd", "anime high school dxd aesthetic", "wallpaper komputer high school dxd", "wallpaper android high school dxd"];
					const pepw = items[Math.floor(Math.random() * items.length)]
					tod = await getBuffer(`https://api.fdci.se/rep.php?gambar=`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: 'tes'+pepw })
					break
					case 'addvip':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A tag alvo que você deseja chutar')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Expirado*: *30 Days*\n│+ *Status*: *ATIVO*\n│ Obg por comprar o acesso Premium🥰\n*╰──────「 *ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Número* : @${mentioned[0].split('@')[0]}\n│+ *Expirado*: *30 Days*\n│+ *Status*: *ATIVO*\n│ Obg por comprar o acesso Premium🥰\n*╰──────「 *ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
					case 'dellvip':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Status*: *INATIVO*\n│ Te vejo para o próximo pedido🙂\n*╰──────「 *ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Número* : @${mentioned[0].split('@')[0]}\n│+ *Status*: *INATIVO*\n│ Te vejo para o próximo pedido🙂\n*╰──────「 *ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
					case 'DARK admin':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					tod = await getBuffer(`https://i.ibb.co/CbZg6G5/IMG-20210106-WA0040.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*╭────*「 *ADMINBOT ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸 ✨* 」\n*│+wa.me/557191973796*╰──────*「 *ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸* 」*────*\n\n*_SE QUER SER ADMINISTRADOR  ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸 BOT_*\n*_Tipo / anúncio_*' })
					break
					case 'premiumcek':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					sa = await getBuffer(`https://i.ibb.co/Gv5W97v/IMG-20210106-WA1995.jpg`)
					client.sendMessage(from, sa, image, { quoted: mek, caption: '*╭────*「 *PREMIUM USER👑* 」\n*│+ wa.me/557191973796*╰──────*「 * ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸* 」*────*\n\n*_SE QUER SE TORNAR UM USUÁRIO PREMIUM  ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸 BOT_*\n*_Tipo -daftarvip*' })
					break
					case 'cekmod': 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (!ismod) return reply('Você não está registrado como um usuário Modbot')
                reply('você se registrou como um usuário Modbot')
                break
                    case 'modbotlist':
					teks = 'Esta é uma lista de usuários premium :\n'
					for (let p of mod) {
						teks += `~> @${p.split('@')[0]}\n`
					}
					teks += `Total : ${mod.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": mod}})
					break
					case 'addpremium':
					if (isBanned) return reply(mess.only.benned)    
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Comando aceito adicionando usuário premium : ${premium}`)
					break
				case 'removeprem':
					if (!isOwner) return reply(mess.only.ownerB)
					rprem = body.slice(13)
					premium.splice(`${rprem}@s.whatsapp.net`, 1)
					reply(`Remover com sucesso wa.me/${rprem} De um usuário premium`)
					break
					case 'katakata':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					qute = await getBuffer(`https://i.ibb.co/tMnTJ4b/proses-1.jpg`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*Aqui mano*' })
					break
					case 'indo1':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute1 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute1, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
					break
					case 'indo2':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
					break
					case 'indo3':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute2 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute2, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })
					break
					case 'indo4':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute3 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute3, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })
					break
					case 'indo5':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute4 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute4, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })
					break
					case 'indo6':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute5 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute5, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })
					break
					case 'indo7':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute6 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute6, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })
					break
					case 'ytkomen':
					
					if (isBanned) return reply(mess.only.benned)    
                                         if (!isUser) return reply(mess.only.userB)
                                         if (args.length < 1) return reply('teks nya mana om?')
                                         gh = body.slice(9)
                                         usnm = gh.split("|")[0];
                                         cmn = gh.split("|")[1];
                                         var imgbb = require('imgbb-uploader')
                                         ghost = mek.participant
                                         try {
                                         pp = await client.getProfilePicture(ghost)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         res = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", 'getpp.jpeg')
                                         buffer99 = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
                                         client.sendMessage(from, buffer99, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
                                         break
                                         case 'send':
                                         
					if (!isUser) return reply(mess.only.userB)  
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var org = pc.split("|")[1];
					client.sendMessage(nomor+'@s.whatsapp.net', org, text)
					break
					case 'googleimage':
				   client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
				   if (args.length < 1) return reply('O que você quer procurar, mana?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Resultado da pesquisa : '+goo+'*', quoted: mek })
					break
					case 'delete':
					case 'del':
					case 'd':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins)return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })			
					break
					case 'kalkulator':
					
					if (isBanned) return reply(mess.only.benned)    
				   if (!isUser) return reply(mess.only.userB)
				     if (args.length < 1) return reply(`[❗] Enviar pedidos *${prefix}kalkulator [ Números ]*\nExemplo : ${prefix}kalkulator 12*12\n*NOTE* :\n- Para multiplicação usando *\n- Para uso adicional +\n- Para redução do uso -\n- Para divisão usando /`)
				    const Math_js = require('mathjs')
				    mtk = body.slice(6)
				    if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", não números!\n[❗] Enviar pedidos *${prefix}kalkulator [ Números ]*\nExemplo : ${prefix}kalkulator 12*12\n*NOTE* :\n- Para multiplicação usando *\n- Para uso adicional +\n- Para redução do uso -\n- Para divisão usando /`)
				} else {
					reply(`*「 MATEMÁTICA 」*\n\n*Calculadora*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				    break
					case 'chatdelete':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'indo8':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute7 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute7, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })
					break
					case 'indo9':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute8 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute8, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })
					break
					case 'indo10':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute9 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute9, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })
					break
					case 'indo11':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute10 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute11, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })
					break
					case 'indo12':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute12 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute12, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })
					break
					case 'indo13':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute11 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute11, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })
					break
					case 'indo14':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute13 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute13, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })
					break
					case 'indo15':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute14 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute14, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })
					break
					case 'indo16':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute15 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute15, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })
					break
					case 'indo17':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute16 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute16, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })
					break
					case 'indo18':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute17 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute17, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })
					break
					case 'indo19':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute18 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute18, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })
					break
					case 'indo20':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute19 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute19, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })
					break
					case 'indo21':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute20 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute20, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })
					break
					case 'indo22':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute21 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute21, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })
					break
					case 'indo23':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute22 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute22, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })
					break
					case 'indo24':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute23 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute23, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })
					break
					case 'indo25':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-daftarvip* para comprar o acesso Premium!' ,text, { quoted: mek })
					qute24 = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute24, image, { quoted: mek, caption: 'Aqui está,baixe o seu próprio link\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })
					break
				
					case 'iklan':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, iklan(prefix) , text, { quoted: mek })
					break
					case 'animesaran':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: animesaran() })
					break
					case 'listsurah':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					client.sendMessage(from, listsurah(prefix) , text, { quoted: mek })
					break
					case 'tnc':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, tnc(prefix) , text, { quoted: mek })
					break
					case 'listzodiak':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					client.sendMessage(from, listzodiak(prefix) , text, { quoted: mek })
					break
					case 'zodiak':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
	if (args.length === 0) {
	client.sendMessage(from, listzodiak(), text)
	} else if (args.includes('aries')) {
	client.sendMessage(from, aries(), text)
	} else if (args.includes('taurus')) {
	client.sendMessage(from, taurus(), text)
	} else if (args.includes('gemini')) {
	client.sendMessage(from, gemini(), text)
	} else if (args.includes('cancer')) {
	client.sendMessage(from, cancer(), text)
	} else if (args.includes('leo')) {
	client.sendMessage(from, Leo(), text)
	} else if (args.includes('virgo')) {
	client.sendMessage(from, Virgo(), text)
	} else if (args.includes('libra')) {
	client.sendMessage(from, Libra(), text)
	} else if (args.includes('scorpio')) {
	client.sendMessage(from, Scorpio(), text)
	} else if (args.includes('sagittarius')) {
	client.sendMessage(from, Sagittarius(), text)
	} else if (args.includes('capricorn')) {
	client.sendMessage(from, Capricorn(), text)
	} else if (args.includes('aquarius')) {
	client.sendMessage(from, Aquarius(), text)
	} else if (args.includes('pisces')) {
	client.sendMessage(from, Pisces(), text)
	}
	break
					
					
					
                case 'irii':
			client.send(from, './lindy/iri2.mp3', id)
			break
		case 'iri':
			client.send(from, './lindy/iri.mp3', {quoted: mek, ptt:true})
			break
                case 'baka':
                client.sendMessage(from, './lindy/baka.mp3', audio/mp3, {quoted: mek, ptt:true})
                break
            case 'onichan':
            case 'bodoh':
            case 'comofazergf':
client.sendMessage(dari, './lindy/comofazergf.mp3', audio/mp3, {quoted: mek, ptt:true})
                break
            case 'websexohjman':
client.sendMessage(from, './lindy/websexohjman.mp3', 'audio','mp3', {quoted: mek, ptt:true})
                break
case 'websexohjmulher':
client.sendMessage('./lindy/websexohjmulher.mp3', {quoted: mek, ptt:true})
                break
                
                
                
                
				case 'info':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					me = client.user
					uptime = process.uptime()
					teks = `*Nome Do bot* : ${me.name}\n*Autor* : *ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸*\n*Número Do bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contato* : ${blocked.length}\n*O bot está ativo a* : ${kyun(uptime)}\n*Public:* ON\n*Total de usuarios Premium*: ${premium.length}\n*Total Chat* : ${totalchat.length}\n*Instagram* : *off*`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					case 'profile':
					
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					me = client.user
					uptime = process.uptime()
					teks = `*Nome Do bot* : ${me.name}\n*Outro* : * ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸*\n*Número Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contato* : ${blocked.length}\n*O bot está ativo a* : ${kyun(uptime)}\n*Public:* OFF`
					buffer111 = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer111, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'listblock': 
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)    
					teks = '𝐁𝐋𝐎𝐂𝐊 𝐋𝐈𝐒𝐓 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝐓𝐨𝐭𝐚𝐥 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Só uma foto mano')
					}
					break
				// case 'turnoff':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isOwner) return reply('Você é o proprietário?')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						client.sendMessage(from, '📴BOT DESLIGADO📴', text, { quoted: mek })
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
								buffer222 = fs.readFileSync(ran)
								client.sendMessage(from, buffer222, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
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
								reply(`❌ Falhou, no momento da conversão ${tipe} para stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer333 = fs.readFileSync(ran)
								client.sendMessage(from, buffer333, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer444 = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer444, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								buffer555 = fs.readFileSync(ran)
								client.sendMessage(from, buffer555, sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`REPRODUZA A IMAGEM SE VOCÊ DESEJA DESLIGAR O BOT!`)
					}
					break
			case 'creator':
			case 'owner':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                 client.sendMessage(from, {displayname: "ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸", vcard: vcard}, MessageType.contact, { quoted: mek})
                 client.sendMessage(from, 'esse é meu eh meu dono, chama ele ai po',MessageType.text, { quoted: mek} )
                 tod = await getBuffer(`https://i.ibb.co/6Bsn9jD/zeikkk.jpg`)
                 client.sendMessage(from, tod, image, { quoted: mek, caption: '*este é meu dono parsa, o que você quer?*'})
                 break
                 case 'emailtome':
            try {
            	if (isBanned) return reply(mess.only.benned)    
            
				if (!isUser) return reply(mess.only.userB)
                axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '╔══✪〘 *CHAMANDO TODOS OS CORNOS* 〙✪══\n'
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += '╠➥ '
                        hehex += response.data.data[i].name.transliteration.id.toLowerCase() + '\n'
                            }
                        hehex += '╚═〘 ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸 〙'
                    reply(from, hehex, text)
                })
            } catch(err) {
                reply(from, err, text)
            }
            break
                 case 'fitnah':
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                 
				if (!isPremium) return reply(mess.only.premium)
				if (args.length < 1) return reply(`Uso :\n${prefix}fitnah [@tag|mensagem|replybot]]\n\nEx : \n${prefix}fitnah @tagmember|Oi|Oi também`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
                case 'fakereplay':
                   client.fakeReply("ange mano", "melhor correr", "557191973796", MessageType.text)
                   break
				case 'infogc':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = ''
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nome Do grupo :* ${groupName}\n*Descrição :* ${groupDesc}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de membros :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
				case 'groupinfo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                client.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                ppUrl = await client.getProfilePicture(from) // deixe vazio para obter o seu
			    buffergbl = await getBuffer(ppUrl)
		        client.sendMessage(from, buffergbl, image, {quoted: mek, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
                break
                case 'tomp3':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
                if (!isPremium) return reply(mess.only.premium)
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ responder vídeo hum ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
						bufferlkj = fs.readFileSync(ran)
						client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
					case 'chatlist':
					client.updatePresence(from, Presence.composing)  
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					teks = 'Esta é uma lista de números de bate-papo :\n'
					for (let all of totalchat) {
						teks += `~> @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
					case 'daftar':
					client.updatePresence(from, Presence.composing)
					if (isUser) return reply('Você já está registrado 😘🙏 ')
					if (args.length < 1) return reply(`Parâmetros Incorretos\nComando : ${prefix}daftar nome|idade\nExemplo : ${prefix}daftar ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸|17`)
					var reg = body.slice(8)
					var jeneng = reg.split("|")[0];
					var umure = reg.split("|")[1];
						user.push(sender)
						fs.writeFileSync('./src/user.json', JSON.stringify(user))
						client.sendMessage(from, `\`\`\`O registro foi bem sucedido com SN: TM08GK8PPHBSJDH10J\`\`\`\n\n\`\`\`Em ${date} ${time}\`\`\`\n\`\`\`[Nome]: ${jeneng}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`[Ano]: ${umure}\`\`\`\n\`\`\`Para usar o bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}help\`\`\`\n\`\`\`\nTotal De Usuários ${user.length}\`\`\``, text, {quoted: mek})
					break
				case 'testime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					setTimeout( () => {
					client.sendMessage(from, '100', text) // ur cods
					client.sendMessage(from, '50', text) // ur cods
					client.sendMessage(from, '60', text) // ur cods
					}, 10000) // 1000 = 1s,
					break
					case 'totaluser':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`╭────*「 *TOTAL USER BOT  ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸* 」\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total de usuários : ${user.length}\n╰──────*「 *ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'ttp':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('*Onde está o texto?*')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferhgf = fs.readFileSync(rano)
						client.sendMessage(from, bufferhgf, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        break
			case 'fml':
                 
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                hasil = data.result.fml
                reply(hasil)
                break
				case 'hidetag':
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
			case 'randomnekonime':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
                    anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/nekonime`).json()
                    if (nekonime.result.endsWith('.png')) {
                    var ext = '.png'
                 } else {
                   var ext = '.jpg'
            }
            client.sendFileFromUrl(from, nekonime.result, `Nekonime${ext}`, 'Nekonime!', id)
            break
				case 'block':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `Pedidos recebidos, bloquear ${body.slice(7)}@c.us`, text)
					break
					case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
             if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               options = {

          text: `O proprietário do grupo é : @${groupOwner.split("@")[0]}`,

          contextInfo: { mentionedJid: [groupOwner] }

           }

           client.sendMessage(from, options, text, { quoted: mek } )
				break
case 'play2':   
if (isBanned) return reply(mess.only.benned)    
	          if (!isUser) return reply(mess.only.daftarB)
                reply(mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=${ZeksApi}`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*Canção encontrada!!!*\nJudul : ${anu.result.title}\nFonte : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE ENVIANDO POR FAVOR, NÃO SPAM YA PAI*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
case 'play':   
if (isBanned) return reply(mess.only.benned)    
	          if (!isUser) return reply(mess.only.daftarB)
                reply(mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${VthearApi}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `*Canção encontrada!!!*\nTítulo : ${anu.result.title}\nFonte : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE ENVIANDO POR FAVOR, NÃO FLOOD COMANDOS🤬*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
case 'randomexo':
					if (isBanned) return reply(mess.only.benned)    
	          if (!isUser) return reply(mess.only.daftarB)
					reply(ind.wait())
					shizukaa = await fetchJson(`https://api-shizuka.herokuapp.com/randomexo?apikey=itsmeiky633`)
					shizuka = await getBuffer(shizukaa.result)
					client.sendMessage(from, shizuka, image, {caption: 'kapop', quoted: mek})
					break
case 'blackpink':
					if (isBanned) return reply(mess.only.benned)    
	          if (!isUser) return reply(mess.only.daftarB)
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/blackpink?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					client.sendMessage(from, shizukaa, image, {caption: 'BlackPink', quoted: mek})
					break
case 'randomanime1':
					if (isBanned) return reply(mess.only.benned)    
	          if (!isUser) return reply(mess.only.daftarB)
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/randomanime?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					client.sendMessage(from, shizukaa, image, {caption: 'nime', quoted: mek})
					break
case 'bj18':
					if (isBanned) return reply(mess.only.benned)    
	          if (!isUser) return reply(mess.only.daftarB)
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`)
					shizukaa = await getBuffer(shizuka.result)
					client.sendMessage(from, shizukaa, MessageType.video, {mimetype: Mimetype.gif})
					break
                case 'reminder':
 if (!isOwner) return reply(mess.only.ownerB)
					var gh = body.slice(10)
					var anu = gh.split("|")[0];
					var ani = gh.split("|")[1];
					jm = `${anu}000`
					client.sendMessage(from, `*「 LEMBRETE 」*\n\nLembrete ativado!\n\n╠➥  *mensagem*: ${ani}\n╠➥  *Duração*: ${anu} detik\n╠➥  *Para*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
					client.sendMessage(from, `*「 LEMBRETE 」*\n\nFinalmente na hora~@${sender.split("@s.whatsapp.net")[0]}\n\n╠➥  *mensagem*: ${ani}`, text, {contextInfo: {mentionedJid: [sender]}}) // ur cods
					}, jm) // 1000 = 1s,
					break    
						case 'wibu':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${VthearApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferhh = await getBuffer(anu.result.foto)
					wibu = ` ➸ *nome* ${anu.result.nama} ➸ *descrição* ${anu.result.deskripsi}`
					client.sendMessage(from, bufferhh, image, {quoted: mek, caption: wibu})
					break
                    case 'unblock':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                    
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `Pedidos recebidos, desbloquear ${body.slice(9)}@c.us`, text)
				    break
				case 'premiumlist':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					teks = '╭────*「 *PREMIUM USER👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${premium.length}\n╰──────*「 * ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
                case 'quotemaker':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					var ghh = body.slice(12)
					var quote = ghh.split("|")[0];
					var wm = ghh.split("|")[1];
					var bg = ghh.split("|")[2];
					const pref = `Uso: \n${prefix}quotemaker texto|marca|tema\n\nEx :\n${prefix}quotemaker esta Exemplo|bicit|random`
					if (args.length < 1) return reply(pref)
					reply(mess.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffealr = await getBuffer(anu.result)
					client.sendMessage(from, buffealr, image, {caption: 'Aqui', quoted: mek})
					break
				case 'neon':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('o que você quer?')
					teks = body.slice(11)
					if (teks.length > 8) return reply('O texto é longo, com até 8 caracteres')
					reply(mess.wait)
					bufasfer = await getBuffer(`https://api.zeks.xyz/api/gneon?apikey=${ZeksApi}&text=${teks}`, {method: 'get'})
					client.sendMessage(from, bufasfer, image, {quoted: mek})
					break
					case 'citacita': 
					
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
            if (!isGroup) return reply(mess.only.group)
                citacita = body.slice(1)
                    .then(async (body) => {
                        const cita = body.split('\n')
                        const randomCita = cita[Math.floor(Math.random() * cita.length)]
                        client.sendMessange(from, randomCita, 'cita.mp3', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        reply(from, 'Error!', id)
                    })
            break
					case 'jsholat':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (args.length < 1) return reply('Digite o nome da área !!')
					sholat = body.slice(9)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${sholat}&apikey=${TobzApi}`, {method: 'get'})
					reply(mess.wait)
					if (anu.error) return reply('[\u2757] Desculpe, a área que você digitou está errada!')
					jsol = `Momentos de oração em ${sholat} hoje é\n\n*➸ Imsak :* ${anu.result.imsak} WIB\n*➸ Alvorecer :* ${anu.result.subuh} WIB\n*➸ Dzuhur :* ${anu.result.dzuhur} WIB\n*➸ Asr :* ${anu.result.ashar} WIB\n*➸ Magreb :* ${anu.result.maghrib} WIB\n*➸ Isha :* ${anu.result.isha} WIB\n*➸ Meia noite :* ${anu.result.midnight} WIB`
					client.sendMessage(from, jsol, text, {quoted: mek})
					break
					case 'runtime':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
				client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				reply(`O bot esteve ativo por\n*${kyun(uptime)}*`)
				break
					case 'covid':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
                   client.updatePresence(from, Presence.composing) 
                   data = await fetchJson(`https://arugaz.herokuapp.com/api/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `País : ${data.result.country}\n\nAtivo : ${data.result.active}\nCasos : ${data.result.casesPerOneMillion}\ncritical : ${data.result.critical}\nMortes : ${data.result.deathsPerOneMillion}\nRecuperados : ${data.result.recovered}\nTestados : ${data.result.testPerOneMillion}\nCasosPorDia : ${data.result.todayCases}\nMortePorDias : ${data.result.todayDeath}\nCasosTotal : ${data.result.totalCases}\nTotalDeTeste : ${data.result.totalTest}`
                   reply(hasil)
                   break
                case 'pronlogo':
                
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
					bufferpoi = await getBuffer(anu.result)
					client.sendMessage(from, bufferpoi, image, {quoted: mek})
					break
					case 'logo':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					if (!isPremium) return reply(mess.only.premi)
					if (args.length < 1) return reply('Onde está o texto mano?? >.<')
					teks = body.slice(6)
					reply(mess.wait)
					loog = await getBuffer(`https://api.vhtear.com/gamelogo?text=${teks}&apikey=${VthearApi}`)
					client.sendMessage(from, loog, image, {quoted: mek, caption: 'Logo '+teks})
					break
				case 'primbonjodoh':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					var gh5 = body.slice(14)
					var gbl11 = gh5.split("|")[0];
					var gbl21 = gh5.split("|")[1];
					anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${gbl11}&pasangan=${gbl21}&apikey=${VthearApi}`, {method: 'get'})
					reply(anu.result.hasil)
					break
				case 'ramaljadian':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					var gh7 = body.slice(10)
					var gbl16 = gh7.split("|")[0];
					var gbl26 = gh7.split("|")[1];
					var gbl36 = gh7.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl16}&bln=${gbl26}&thn=${gbl36}&apikey=${VthearApi}`)
					reply(anu.result.hasil)
					break
                case 'tahta':
                
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					if (!isPremium) return reply(mess.only.premi)
					if (args.length < 1) return reply('Onde está o texto mano?? >.<')
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					bufferrty = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=${VthearApi}`)
					client.sendMessage(from, bufferrty, image, {quoted: mek, caption: 'Tesouro do trono '+teks})
					break
case 'pinterest1':
  if (isBanned) return reply(mess.only.benned) 
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓\n\*Resultado da pesquisa* : *${body.slice(11)}*`})
					break
					case 'pinterest':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.search)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pinte}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pinehg = await getBuffer(trest)
					client.sendMessage(from, pinehg, image, { caption: '*Pinterest*\n\n*Resultado da pesquisa : '+pinte+'*', quoted: mek })
					break
					case 'addsay':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(8)
						sayrandom.push(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sucesso ${hai} Adicionado ao banco de dados`)
						break
                   case 'saylist':
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					teks = 'Esta é a lista de dizeres :\n'
					for (let awokwkwk of sayrandom) {
						teks += `╠➥ ${awokwkwk}\n`
					}
					teks += `Total : ${sayrandom.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": sayrandom}})
					break
                    case 'resetsay':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						sayrandom.splice(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, database say telah direset`)
						break
                    case 'say':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                    hasil = sayrandom[Math.floor(Math.random() * (sayrandom.length))]
                    reply(hasil)
                    break
				case 'testing':
					var gh8 = body.slice(5)
					var gbl38 = gh8.split("|")[0];
					var gbl48 = gh8.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/watercolour?text1=${gbl38}&text2=${gbl48}&apikey=xptnbot352`, {method: 'get'})
					buffersda = await getBuffer(anu.result)
					client.sendMessage(from, buffersda, image, {quoted: mek})
					break
				case 'snow':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					var ghn = body.slice(6)
					var gbl7w = ghn.split("|")[0];
					var gbl8w = ghn.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/snowwrite?text1=${gbl7w}&text2=${gbl8w}&apikey=xptnbot352`, {method: 'get'})
					buffertfd = await getBuffer(anu.result)
					client.sendMessage(from, buffertfd, image, {quoted: mek})
					break
					case 'ban':
					client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`banido com sucesso : ${ban}`)
					break
				case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
					reply(`Número wa.me/${bnnd} desbanido!`)
					break
				case 'banlist':
					client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'Esta é uma lista de números banidos :\n'
					for (let benn of ban) {
						teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
				case 'quran':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					client.sendMessage(from, quran, text, {quoted: mek})
					break
				case 'marvelogo':
				
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					var dgh = body.slice(10)
					var dgbl5 = dgh.split("|")[0];
					var dgbl6 = dgh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/marvellogo?text1=${dgbl5}&text2=${dgbl6}&apikey=xptnbot352`, {method: 'get'})
					buffergvc = await getBuffer(anu.result)
					client.sendMessage(from, buffergvc, image, {quoted: mek})
					break
				case 'lovemake':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Cadê o texto, hum')
					love = body.slice(10)
					if (love.length > 12) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${VthearApi}`)
					client.sendMessage(from, bufferxcz, image, {quoted: mek, caption: ' '+love})
					break
					case 'goldbutton':
					
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					gol = body.slice(12)
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/gplaybutton?text=${gol}&apikey=${ZeksApi}`, {method: 'get'})
					gools = await getBuffer(anu.result)
					client.sendMessage(from, gools, image, {quoted: mek})
					break
				case 'silverbutton':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					gol2 = body.slice(14)
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/splaybutton?text=${gol2}&apikey=${ZeksApi}`, {method: 'get'})
					gools2 = await getBuffer(anu.result)
					client.sendMessage(from, gools2, image, {quoted: mek})
					break
				case 'thunder':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Onde está o texto um ')
					thun = body.slice(9)
					if (thun.length > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					bufferw = await getBuffer(`https://api.vhtear.com/thundertext?text=${thun}&apikey=${VthearApi}`)
					client.sendMessage(from, bufferw, image, {quoted: mek, caption: ' '+thun})
					break
                case 'stiltext':
                
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                      if (args.length < 1) return reply('Onde está o texto?')
                      gdh = body.slice(11)
                      gl1 = gdh.split("|")[0];
                      gl2 = gdh.split("|")[1];
                      buffere = await getBuffer(`https://api.vhtear.com/silktext?text=${gl1}&text2=${gl2}&apikey=${VthearApi}`)
                      reply(mess.wait)
                      client.sendMessage(from, buffere, image, {quoted: mek, caption: 'thund ni '+gh})
                      break
                      case 'qrcode':
                      
                      if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                      
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'si o texto/URL que deseja criar QR', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, bufferr, image, {quoted: mek})
					break
                case 'water':
                
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					var g1ht = body.slice(7)
					ckj = g1ht.split("|")[0];
					ckj2 = g1ht.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto?')
					reply(mess.wait)
					gto = await getBuffer(`https://api-zeks.harispoppy.com/api/watercolour?text1=${ckj}&text2=${ckj2}&apikey=xptnbot352`)
					waa = await getBuffer(gto.result)
					client.sendMessage(from, waa, image, {quoted: mek})
					break
                case 'ninjalogo':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
                      if (args.length < 1) return reply('Cadê o texto?')
                      var geh = body.slice(11)
                      gl1n = geh.split("|")[0];
                      gl2n = geh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1n}&text2=${gl2n}&apikey=${TobzApi}`, {method: 'get'})
                      bufqf = await getBuffer(anu.result)
                      client.sendMessage(from, bufqf, image, {quoted: mek})
                      break
                case 'glitch':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					var jgh = body.slice(8)
					var tels3 = jgh.split("|")[0];
					var tels4 = jgh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${tels3}&text2=${tels4}&apikey=${TobzApi}`, {method: 'get'})
					buffery = await getBuffer(anu.result)
					client.sendMessage(from, buffery, image, {quoted: mek})
					break
				case 'party':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=${VthearApi}`)
					client.sendMessage(from, bufferu, image, {caption: 'Aqui mano', quoted: mek})
					break
				case 'shadow':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					shad = body.slice(8)
					reply(mess.wait)
					ssha = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/photooxy/shadowtext?text=${shad}`)
					client.sendMessage(from, ssha, image, {caption: 'Aqui mano', quoted: mek})
					break
				case 'minion':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					minio = body.slice(8)
					reply(mess.wait)
					minn = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/miniontext?text=${minio}`)
					client.sendMessage(from, minn, image, {caption: 'Aqui mano', quoted: mek})
					break
				case 'neon':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					nneoo = body.slice(6)
					reply(mess.wait)
					nooe = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neontext?text=${nneoo}`)
					client.sendMessage(from, nooe, image, {caption: 'Aqui mano', quoted: mek})
					break
				case 'neongreen':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(11)
					reply(mess.wait)
					gree = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/greenneontext?text=${grre}`)
					client.sendMessage(from, gree, image, {caption: 'Aqui mano', quoted: mek})
					break
				case 'neon2':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					duadua = body.slice(7)
					reply(mess.wait)
					duaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neonwithgalaxytext?text=${duadua}`)
					client.sendMessage(from, duaa, image, {caption: 'Aqui mano', quoted: mek})
					break
				case '3d':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					dimen = body.slice(4)
					reply(mess.wait)
					tigaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/3dgradientstext?text=${dimen}`)
					client.sendMessage(from, tigaa, image, {caption: 'Aqui mano', quoted: mek})
					break
				case 'blackpink':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					dimen1 = body.slice(11)
					reply(mess.wait)
					tigaa1 = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/blackpinktext?text=${dimen1}`)
					client.sendMessage(from, tigaa1, image, {caption: 'Aqui mano', quoted: mek})
					break
				case 'sandwriting':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					dimen2 = body.slice(13)
					reply(mess.wait)
					tigaa2 = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/sandwritingtext?text={dimen2}`)
					client.sendMessage(from, tigaa2, image, {caption: 'Aqui mano', quoted: mek})
					break
				case 'rtext':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return reply('O texto é longo, com até 10 caracteres')
					reply(mess.wait)
					bufferi = await getBuffer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=${VthearApi}`)
					client.sendMessage(from, bufferi, image, {caption: 'Aqui mano', quoted: mek})
					break
				case 'fire':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffero = await getBuffer(anu.result)
					client.sendMessage(from, buffero, image, {quoted: mek})
					break
				case 'light':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply(mess.blank)
					telsf = body.slice(7)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/tlight?text=${telsf}&apikey=xptnbot352`, {method: 'get'})
					bufferp = await getBuffer(anu.result)
					client.sendMessage(from, bufferp, image, {quoted: mek})
					break
                case 'wolflogo':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
                      if (args.length < 1) return reply('Onde está o texto?')
                      gqh = body.slice(9)
                      glq1 = gqh.split("|")[0];
                      glq2 = gqh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${glq1}&text2=${glq2}&apikey=${TobzApi}`, {method: 'get'})
                      buffera = await getBuffer(anu.result)
                      client.sendMessage(from, buffera, image, {quoted: mek})
                      break
                case 'lionlogo':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
                      if (args.length < 1) return reply('Onde está o texto?')
                      gwh = body.slice(9)
                      glw1 = gwh.split("|")[0];
                      glw2 = gwh.split("|")[1];
                      reply(mess.wait) 
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${glw1}&text2=${glw2}&apikey=${TobzApi}`, {method: 'get'})
                      buffers = await getBuffer(anu.result)
                      client.sendMessage(from, buffers, image, {quoted: mek})
                      break
				case 'leave': 
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				    if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
			    	anu = await client.groupLeave(from, 'Tô saindo ao pedido do dono', groupId)
	                break
	            case 'getses':
	if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
	
                    if (!isOwner) return client.reply(from, 'Este comando é apenas para o proprietário', id)
                    const sesPic = await client.getSnapshot()
                    client.sendFile(from, sesPic, 'session.png', 'Neh...', id)
                    break
				case 'setname':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('o texto mano')
					ppUrl = await client.getProfilePicture(from) // deixe vazio para obter o seu
			    bufferd = await getBuffer(ppUrl)
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, bufferd, image, {quoted: mek, caption: `Sucesso, alterar o nome do grupo\nAnteriormente *${groupName}*`})
                break
                case 'setdesc':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			    bufferf = await getBuffer(ppUrl)
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, bufferf, image, {quoted: mek, caption: `Sucesso, descrição do grupo alterado\nAnteriormente *${groupDesc}*`})
                break
				case 'tts':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return client.sendMessage(from, 'Onde está o código do idioma?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Grande demais 🤭')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							bufferg = fs.readFileSync(rano)
							if (err) return reply('Om falha:(')
							client.sendMessage(from, bufferg, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
	            case 'setpp':
	if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
	
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterar com sucesso o ícone do Grupo')
                    break
                    case 'te':
                                       const asu = body.slice(4)
                                       if (lenght >= 1) return client.sendText(from, asu)
                                       break
                case 'apakah':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Questão : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
				case 'rate':
				case 'nilai':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					rate = body.slice(1)
					const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
					case 'gantengcek':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					ganteng = body.slice(1)
					const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					break
				
					case 'join':
					if (args.length == 0) return reply(from, `desculpe, este bot só pode ser atribuído a grupos `, text)
					let linkgrup = `${body.slice(6)}`
					let islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi)
					let chekgrup = await client.inviteInfo(linkgrup)
					if (!islink) return reply(from, 'Desculpe, o link do grupo está errado! ', id)
					if (isOwnerBot) {
					  await client.joinGroupViaLink(linkgrup)
					    .then(async () => {
					      client.sendMessage(from, 'Entrou no grupo com sucesso através do link!', text)
					    })
					} else {
					  let cgrup = await client.getAllGroups()
					  if (cgrup.length > groupLimit) return client.reply(from, `Sorry, the groups is not valid `, id)
					  if (cgrup.size < memberLimit) return client.reply(from, `Sorry, Bot wil not join if the group members do not exceed ${memberLimit} people`, id)
					  await client.joinGroupViaLink(linkgrup)
					    .then(async () => {
					      reply('Entrou no grupo com sucesso através do link!')
					    })
					    .catch(() => {
					      reply('Falhou!')
					    })
					}
					break 
					case 'cantikcek':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					cantik = body.slice(1)
					const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Questão : *'+cantik+'*\n\nresponda : '+ tik+'%', text, { quoted: mek })
					break
				case 'watak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					watak = body.slice(1)
					const wa =['peny ayang','pem urah','Pem arah','Pem aaf','Pen urut','Ba ik','bap eran','Baik Hati','peny abar','Uw u','top deh, poko knya','Suka Memb antu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					break
				case 'hobby':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					hobby = body.slice(1)
					const hob =['cozinhar','Socorro Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break
				case 'bisakah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
					case 'dadu':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					kapankah = body.slice(1)
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					client.sendMessage(from, ule, text, { quoted: mek })
					break
					case 'toxic':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					kapankah = body.slice(1)
					const toxic =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ole = toxic[Math.floor(Math.random() * toxic.length)]
					client.sendMessage(from, ole, text, { quoted: mek })
					break
				case 'truth':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
				case 'dare':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, Exemplo : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break		
case 'kus':
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					const kus =(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`)
                    const pel = kus[Math.floor(Math.random() * kus.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ pel })
					break				
					case 'level':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `â—ª *LEVEL*\n  â”œâ”€ â *Name* : ${sem}\n  â”œâ”€ â *User XP* : ${userXp}\n  â””â”€ â *User Level* : ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
case 'leveling':
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digite 1 para ativar o recurso')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*o recurso de nível já estava ativo antes*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === '0') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(' *Digite o comando 1 ativar, 0 desabilitar* \n *Exemplo: ${prefix}leveling 1*')
                }
            break
case 'mining':
                                        if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                                        
                                        if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                                        if (isOwner) {
                                                const one = 999999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                                        }
                                        await limitAdd(sender)
                                        break
                case 'Assalamualaikum':
               client.reply(from, `Waalaikumsalam ${pushname}:)`)
                break
                case 'speed':
                case 'ping':
                case 'pinga':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    client.sendMessage(from, `Rapidez: *${latensi.toFixed(4)} _Second_*\nDispositivo: *One Inspiron*\nRAM: *8/128*\nData: *2021*\nRede: *WiFi da padaria*\nStatus: *Ainda não cobrado*\n *O bot esteve ativo por*\n*${kyun(uptime)}*`, text, { quoted: mek})
                    break
                case 'tagme':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					var nom = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} tagged!`,
					contextInfo: { mentionedJid: [nom] }
					}
					client.sendMessage(from, tag, text, {quoted: mek})
					break
                case 'donasi':
				case 'donate':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, '*/ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸bot2412\n*', text, { quoted: mek })
					break
                case 'ttp':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					if (args.length < 1) return reply('Cadê o texto, hum?')
					ranpl = getRandom('.png')
					ranol = getRandom('.webp')
					ttpl = body.slice(5).trim()
					anuf = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${ttpl}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anuf.error) return reply(anuf.error)
					exec(`wget ${anuf.result} -O ${ranpl} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranol}`, (err) => {
						fs.unlinkSync(ranpl)
						if (err) return reply(mess.error.stick)
						bufferj = fs.readFileSync(ran)
						client.sendMessage(from, bufferj, sticker, {quoted: mek})
						fs.unlinkSync(ranol)
					})
					break
                case 'lirik':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Letra da musica '+teks+' é :\n\n'+anu.result.lirik)
					break
                case 'bugreport':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                     const pesan = body.slice(10)
                      if (pesan.length > 300) return client.sendMessage(from, 'Desculpe, o texto é muito longo, máximo de 300 textos', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[REPORT]*\nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('557191973796@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos.')
                    break
                    case 'request':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                     const cfrr = body.slice(9)
                      if (cfrr.length > 300) return client.sendMessage(from, 'Desculpe, o texto é muito longo, máximo de 300 textos ', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[REQUEST CARACTERÍSTICAS]*\nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('557191973796@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos.')
                    break
			 case 'request':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                     const pesann = body.slice(8)
                      if (pesan.length > 300) return client.sendMessage(from, 'Desculpe, o texto é muito longo, máximo de 300 textos', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks2 = `*[REQUEST]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('557191973796@s.whatsapp.net', options, text, {quoted: mek})
                    reply('As solicitações foram relatadas ao proprietário do BOT, as solicitações que podem sobrecarregar o proprietário não serão respondidas.')
                    break
				case 'meme': 
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					meme = await kagApi.memes()
					bufferk = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, bufferk, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo': 
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					memein = await kagApi.memeindo()
					bufferll = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, bufferll, image, {quoted: mek, caption: '.......'})
					break
				case 'ssweb':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Cadê o url')
					tekss = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${tekss}`)
					bufferz = await getBuffer(anu.gambar)
					client.sendMessage(from, bufferz, image, {quoted: mek})
					break
				case 'walpaperhd':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Cadê o texto')
					teksj = body.slice(7)
					reply(mess.wait)
					anwu = await fetchJson(`https://api.vhtear.com/walpaper?query=${teksj}&apikey=${VthearApi}`, {method: 'get'})
					bufferx = await getBuffer(anwu.result.LinkImg)
					client.sendMessage(from, bufferx, image, {quoted: mek})
					break
			    case 'nekonime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzApi}`, {method: 'get'})
						bufferc = await getBuffer(res.result)
						client.sendMessage(from, bufferc, image, {quoted: mek, caption: 'Lembrar! Amo nekonime'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'cekprefix':
                       reply(from, `PREFIXOS ATUALMENTE USADOS *「* ${prefix} *」*`)
                   break
					case 'kiss':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferlll = fs.readFileSync(rano)
						client.sendMessage(from, bufferlll, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'cry':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferlll = fs.readFileSync(rano)
						client.sendMessage(from, bufferlll, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'sideoppai':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
						res = await fetchJson('https://meme-api.herokuapp.com/gimme/sideoppai', {method: 'get'})
						buffern = await getBuffer(res.result)
						client.sendMessage(from, res, buffern, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'randomwaifu':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
						res = await fetchJson(`https://waifu.pics/api/nsfw/waifu`, {method: 'get'})
						bufferm = await getBuffer(res.result)
						client.sendMessage(from, bufferm, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'dxd':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
						res = await fetchJson(`https://mnazria.herokuapp.com/api/anime?query=dxd`, {method: 'get'})
						bufferqq = await getBuffer(res.result)
						client.sendMessage(from, bufferqq, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'pps':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (!isNsfw) return reply('❌ *O MODO NSFW NÃO FOI ATIVADO* ❌')
						res = await fetchJson(`https://nhder.herokuapp.com/download/nhentai/'+code+'/zip`, {method: 'get'})
						bufferww = await getBuffer(res.result)
						client.sendMessage(from, bufferww, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'waifu3':

				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					

						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=${TobzApi}`, {method: 'get'})

						bufferee = await getBuffer(res.image)

						client.sendMessage(from, bufferee, image, {quoted: mek, caption: 'Lembrar! Amo waifu!'})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))
						
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro!!'})

						reply('❌ *ERROR* ❌')

					}

					break
					case 'hug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferlll = fs.readFileSync(rano)
						client.sendMessage(from, bufferlll, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'loli4':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
						res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VthearApi}`, {method: 'get'})
						buffertt = await getBuffer(res.result.result)
						client.sendMessage(from, buffertt, image, {quoted: mek, caption: 'loli'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro!!'})
						reply('❌ *ERROR* ❌')
						}
						break
					case 'quotesanime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomquotes?apikey=${TobzApi}`, {method: 'get'})
						bufferyy = await getBuffer(res.result)
						client.sendMessage(from, bufferyy, image, {quoted: mek, caption: 'hug'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro!!'})
					}
					break
					case 'waifu0':

				    try {

						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=${TobzApi}`, {method: 'get'})

						bufferuu = await getBuffer(res.image)

						client.sendMessage(from, bufferuu, image, {quoted: mek, caption: 'Lembrar! Amo waifu!'})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))

						reply('❌ *ERROR* ❌')

					}

					break
case 'lneko':
try {
					if (isBanned) return reply(mess.only.benned)    
						if (!isPremium) return reply(mess.only.premium)
				if (!isUser) return reply(mess.only.userB)					
						res = await fetchJson(`https://nekos.life/api/lewd/neko`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, image, {quoted: mek, caption: 'neko neko'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
case 'femdom':
try {
					if (isBanned) return reply(mess.only.benned)    
						if (!isPremium) return reply(mess.only.premium)
				if (!isUser) return reply(mess.only.userB)					
						res = await fetchJson(`https://waifu.pics/api/sfw/neko`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, '.jpg', image, {quoted: mek, caption: 'huum aprendiz do Diego'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
case 'diego':
  try {
					if (isBanned) return reply(mess.only.benned)    
					
				if (!isUser) return reply(mess.only.userB)					
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=${TobzApi}`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, image, {quoted: mek, caption: 'huum aprendiz do Diego'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
case 'yurii':
try {
					if (isBanned) return reply(mess.only.benned)    
				
				if (!isUser) return reply(mess.only.userB)					
						res = await fetchJson(`https://nekos.life/api/v2/img/eroyuri`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, MessageType.image, { quoted:  mek, caption: 'neko neko'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break

case 'nsfwneko2':
try {
					if (isBanned) return reply(mess.only.benned)    
						if (!isPremium) return reply(mess.only.premium)
				if (!isUser) return reply(mess.only.userB)					
						res = await fetchJson(`https://nekos.life/api/lewd/neko`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, image, {quoted: mek, caption: 'neko neko'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
case 'nsfwneko':
try {
					if (isBanned) return reply(mess.only.benned)    
						if (!isPremium) return reply(mess.only.premium)
				if (!isUser) return reply(mess.only.userB)					
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, image, {quoted: mek, caption: 'neko neko'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'imagepest':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
						anu = await fetchJson(`https://api.i-tech.id/anim/baguette?key=${TechApi}`, {method: 'get'})
						bufferii = await getBuffer(anu.result.result)
						client.sendMessage(from, bufferii, image, {quoted: mek, caption: 'Lembrar! Amo waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						client.sendMessage(from, errorurl, image, {quoted: mek, caption: 'Erro!!'})
					}
					break
					case 'pe':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
						anu = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
						bufferoo = await getBuffer(anu.result.result)
						client.sendMessage(from, bufferoo, image, {quoted: mek, caption: 'Lembrar! Amo waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'jd':
				    try {
					
						anu = await fetchJson(`https://waifu.pics/api/nsfw/waifu`, {method: 'get'})
						bufferpp = await getBuffer(anu.result.result)
						client.sendMessage(from, bufferpp, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro!!'})
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'waifu1':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=${TobzApi}`, {method: 'get'})
						bufferaa = await getBuffer(res.image)
						client.sendMessage(from, bufferaa, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'waifu2':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=${TobzApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferss = await getBuffer(anu.image)
					waifu = `*${anu.desc}`
					client.sendMessage(from, bufferss, image, {quoted: mek, caption: waifu})
					break
				case 'imoji':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/emoji2png?emoji=`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffergg = await getBuffer(anu.result)
					client.sendMessage(from, buffergg, image, {quoted: mek})
					break
				case 'wibu':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${VthearApi}`)
					if (anu.error) return reply(anu.error)
					bufferhh = await getBuffer(anu.result.foto)
					wibu = ` ➸ *nome* ${anu.result.nama} ➸ *descrição* ${anu.result.deskripsi}`
					client.sendMessage(from, bufferhh, image, {quoted: mek, caption: wibu})
					break
				case 'hunti':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=287167&apikey=${VthearApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferjj = await getBuffer(anu.result.pdf_file)
					client.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', quoted: mek})
					break
				case 'randomcat1':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=${VthearApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferkk = await getBuffer(anu.result.url)
					client.sendMessage(from, bufferkk, image, {quoted: mek})
					break
					case 'jadian':

                    if (!isGroup) return reply(from, 'este comando só pode ser usado dentro do grupo', id)

                    const up = groupMembers

                    const aku = up[Math.floor(Math.random() * up.length)];

                    const kamu = up[Math.floor(Math.random() * up.length)];

                    const sapa = `Cieee... @${(/[@c.us]/g, '')} (💘) @${(/[@c.us]/g, '')} acabei de te inventar\nPor favor, compartilhe o pj`

                    client.sendMessage(from, sapa)

                    break
				case 'mlherolist':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/mlherolist?apikey=${VthearApi}`)
					icon = await getBuffer(anu.icon)
					client.sendMessage(from, icon, image, {quoted: mek})
					break
			    case 'randomanime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (!isPremium) return reply(mess.only.premium)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, {method: 'get'})
						bufferzz = await getBuffer(res.result)
						client.sendMessage(from, bufferzz, image, {quoted: mek, caption: 'ni randomanime!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
case 'nsfwloli1':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
                    anu = await fetchJson(`https://nekos.life/api/v2/img/keta`, {method: 'get'})
                    if (nekonime.result.endsWith('.png')) {
                    var ext = '.png'
                 } else {
                   var ext = '.jpg'
            }
            client.sendFileFromUrl(from, nekonime.result, `Nekonime${ext}`, 'Nekonime!', id)
            break
			    case 'randomhentai':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW ESTÁ DESLIGADO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, image, {quoted: mek, caption: 'hentai teros'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'nsfwloli':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW ESTÁ DESLIGADO* ❌')
						res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
						buffercc = await getBuffer(res.url)
						client.sendMessage(from, buffercc, image, {quoted: mek, caption: 'CADEIIA'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'nsfwblowjob':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW ESTÁ DESLIGADO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, {method: 'get'})
						buffervv = await getBuffer(res.result)
						client.sendMessage(from, buffervv, image, {quoted: mek, caption: 'Corre pro banheiro'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'nenen':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW ESTÁ DESLIGADO* ❌')
						res = await fetchJson(`https://nekos.life/api/v2/img/boobs`, {method: 'get'})
						buffermm = await getBuffer(res.result)
						client.sendMessage(from, buffermm, image, {quoted: mek, caption: 'uepa'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
case 'boobs':
ranp = getRandom('.gif')
                if (isBanned) return reply(mess.only.benned)  
				if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW ESTÁ DESLIGADO* ❌')
                
                axios.get('https://nekos.life/api/v2/img/boobs').then(res => {
                	client.sendFileFromUrl(from, res.data.url, 'bakaaa hentaii>~<');
                });
                break
				case 'nsfwtrap':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW ESTÁ DESLIGADO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${TobzApi}`, {method: 'get'})
						bufferqqq = await getBuffer(res.result)
						client.sendMessage(from, bufferqqq, image, {quoted: mek, caption: 'o cara bate pra trans😂😂'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case '1cak':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW ESTÁ DESLIGADO* ❌')
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						bufferwww = await getBuffer(res.result)
						client.sendMessage(from, bufferwww, image, {quoted: mek, caption: 'oooh'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'animerandom':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW ESTÁ DESLIGADO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, {method: 'get'})
						buffereee = await getBuffer(res.result)
						client.sendMessage(from, buffereee, image, {quoted: mek, caption: 'uuuh'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'teus':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
						if (!isNsfw) return reply('❌ *FALSE* ❌')
						res = await fetchJson(`http://inyourdream.herokuapp.com/graffity?kata=' + graffity`, {method: 'get'})
						bufferrrr = await getBuffer(res.result)
						client.sendMessage(from, bufferrrr, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'walpaperanime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
						if (!isNsfw) return reply('❌ *FALSE* ❌')
						res = await fetchJson(`https://wallpaperaccess.com/full/395986.jpg','https://wallpaperaccess.com/full/21628.jpg','https://wallpaperaccess.com/full/21622.jpg','https://wallpaperaccess.com/full/21612.jpg','https://wallpaperaccess.com/full/21611.png','https://wallpaperaccess.com/full/21597.jpg','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://wallpaperaccess.com/full/21591.jpg','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']`, {method: 'get'})
						bufferttt = await getBuffer(res.result)
						client.sendMessage(from, bufferttt, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'hilih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Cadê o texto, hum?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'ytmp3':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isPremium) return reply(mess.only.premium)
                reply(mess.wait)
					if (args.length < 1) return reply('Onde está o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					bufferyyy = await getBuffer(anu.result)
					client.sendMessage(from, bufferyyy, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
			    case 'bucin':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
					gatauda = body.slice(7)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply(anu.desc)
					break
					case 'apkmod':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
					gatauda = body.slice(7)
					anu = await fetchJson(`https://rfilesss109.000webhostapp.com/mod.php?apikey=xptn1`, {method: 'get'})
					reply(anu.result)
					break
					case 'akugay':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, {method: 'get'})
					reply(anu.desc)
					break
					case 'wa.me':
				  case 'wame':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  client.updatePresence(from, Presence.composing) 
      if (!isUser) return reply(mess.only.userB)
      options = {
          text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSeu link do WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
				break
		        case 'gay':
		if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
		
		if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é gay: *'+rate+'*\n\nResponda : '+ kl+'%', text, { quoted: mek })
					break
					break	
				case 'cerpen':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					gatauda = body.slice(1)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/cerpen`, {method: 'get'})
					reply(anu.result)
					break
					case 'cersex':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					gatauda = body.slice(1)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/cersex2`)
					reply(anu.result)
					break
				case 'quotes':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				client.updatePresence(from, Presence.composing) 
 
				data = await fetchJson(`http://mhankbarbars.herokuapp.com/api/randomquotes`)
				ez = `*╠➥  Autor :* ${data.author}\n*╠➥  citações :* ${data.quotes}`
				reply(ez)
				break
				case 'darkjokes':
				client.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./src/DARKjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                client.sendMessage(hasil, image, mek, '\`\`\`DARKJOKES\`\`\`')
				break
					case 'kata':
					
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.quotes)
					break		
					case 'pantun':
					
					gatauda = body.slice(8)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/pantun`, {method: 'get'})
					reply(anu.quotes)
					break		
					case 'jokerlogo':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (args.length < 1) return reply('CADÊ O TEXTO')
					jhf = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${jhf}&apikey=${TobzApi}`, {method: 'get'})
					bufferooo = await getBuffer(anu.result)
					client.sendMessage(from, bufferooo, image, {quoted: mek})
					break	
					case 'ranime':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					gatauda = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, {method: 'get'})
					bufferppp = await getBuffer(anu.result)
					client.sendMessage(from, bufferppp, image, {quoted: mek})
					break
					case 'spamcall':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
          if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
          if (!isPremium) return reply(mess.only.premi)
          reply('Esperar..')
                                       if (args[0].startsWith('55')) return reply('Use o prefixo número 55/n ex : *55996662*')
                                       if (args[0].startsWith('82255123081')) return reply('Falha ao ligar para o número do bot')
                                       if (args[0].startsWith('82387804410')) return reply('Falha ao ligar para o número do proprietário')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://api-zeks.harispoppy.com/api/spamcall?no=`+data+`&apikey=${ZeksApi}`, {method: 'get'})
                                       break
					case 'infonomor':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                 if (!isUser) return reply(mess.only.userB)
                 if (args.length < 1) return reply(`Insira numeros\nExemplo : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internacional : ${data.international}\n╠➥ número : ${data.nomor}\n╠➥ operador : ${data.op}`
                reply(hasil)
                break
					case 'neko':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://waifu.pics/api/sfw/neko`, {method: 'get'})
					buffersss = await getBuffer(anu.result)
					client.sendMessage(from, buffersss, image, {quoted: mek})
					break	
					
				case 'cerpen':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					gatauda = body.slice(1)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/cerpen`, {method: 'get'})
					reply(anu.result)
					break
				case 'chord':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Cadê o texto')
					tels = body.slice(7)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					reply(anu.result)
					break
				case 'ramalhp':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Cadê o texto')
					kj = body.slice(12)
					anu = await fetchJson(`https://api.vhtear.com/nomerhoki?no=${kj}&apikey=${VthearApi}`)
					reply(anu.result.hasil)
					break
				case 'textscreen':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Cadê o texto')
					telsjk = body.slice(9)
					anu = await fetchJson(`https://api.vhtear.com/textscreen?query=${telsjk}&apikey=${VthearApi}`, {method: 'get'})
					reply(anu.result.text)
					break
			    case 'joox':
			
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPremium) return reply(mess.only.premium)
                reply(mess.wait)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzApi}`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Canção encontrada!!!*\nTítulo : ${data.result.judul}\nAlbum : ${data.result.album}\nPublicados : ${data.result.dipublikasi}\n*Filesize* : ${data.filesize}\n*ESPERE ENVIANDO POR FAVOR, NÃO SPAM*`
                bufferddd = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                break
                case 'slap':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
                kapankah = body.slice(1)

					const slap =['cachorro','Seus porcos ',' cachorrinhos ',' você é estúpido de novo ',' sua cara de macaco ',' você está sozinho de novo sozinho na casa idiota ',' então eu quero ter uma namorada na cara de um macaco fora da gaiola ',' lindo apenas sendo tóxico']
					const ple = slap[Math.floor(Math.random() * slap.length)]

					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)

					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Tóxico*\n\n'+ ple })

					break
                case 'beritahoax':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Cenário* : ${i.image}\n*Título* : ${i.title}\n*link* : ${i.link}\n*Tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'wiki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
                    if (args.length < 1) return reply('cadê o texto?')
                    teks = body.slice(5)
                    reply(mess.wait)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/wiki?q=$`, {method: 'get'})
                    if (anu.error) return reply(anu.error)
                    bufferfff = await getBuffer(anu.wiki)
                    translate(wiki, 'pt')
                    hasil = `${anu.result}`
                    client.sendMessage(from, bufferfff, image, {quoted: mek, caption: hasil})
                   break
               case 'infogempa':
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
               
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${TobzApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   bufferggg = await getBuffer(anu.map)
                   reply = ` *potência* \n ${anu.potensi} *localização* \n${anu.lokasi} *magnitude* \n${anu.magnitude} *coordenada* \n${anu.koordinat} *profundidade* \n${anu.kedalaman}`
                   client.sendMessage(from, bufferggg, image, {quoted: mek, caption: hasil})
                   break
                   case 'hentai':
                                    try {
                                    	if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                                    	
                                                if (!isNsfw) return reply('❌ *NSFW ESTÁ DESLIGADO* ❌')
                                                res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, {method: 'get'})
                                                bufferhhh = await getBuffer(res.result)
                                                client.sendMessage(from, bufferhhh, image, {quoted: mek, caption: 'Nih gan'})
                                        } catch (e) {
                                                console.log(`Error :`, color(e,'red'))
                                                reply('❌ *ERROR* ❌')
                                        }
                                        break
                case 'infogithub':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
                   teks = body.slice(5)
                   anu = await fetchJson(`http://api-melodicxt.herokuapp.com/api/githubprofile?user=${teks}&apikey=administrator)`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   bufferjjj = await getBuffer(anu.avatar_url)
                   hasil = ` *nome do usuário* \n ${anu.followers} *seguindo* \n${anu.following} *bio* \n${anu.bio} *public_repos* \n${anu.public_repos} *created_at* \n${anu.created_at} *updated_at* \n${anu.updated_at}`
                   client.sendMessage(from, bufferjjj, image, {quoted: mek, caption: hasil})
                   break
                case 'infocuaca':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
                   anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/cuaca?q=${body.slice(6)}&apiKey=${BarBarApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   hasil = ` *O lugar : ${anu.data.result.tempat}\nClima : ${anu.data.result.cuaca}\nVento : ${anu.data.result.angin}\nTemperatura : ${anu.data.result.suhu}\nUmidade : ${anu.data.result.kelembapan}`
                   client.sendMessage(from, hasil, text, {quoted: mek})
                   break
                case 'tebakgambar':
                
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${VthearApi}`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soalImg)
					setTimeout( () => {
					client.sendMessage(from, '*➸ Responda  :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Outro segundo…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Outro segundo_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Outro segundo_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, bufferkkk, image, { caption: '_ Explique o que esta imagem significa_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                case 'caklontong':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${VthearApi}`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Responda :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Outro segundos ..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Outro segundo_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Outro segundo_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'family100':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${VthearApi}`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Responda :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Outro segundo…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Outro segundo_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Outro segundo_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'game':
				
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Responda :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Outro segundo…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Outro segundo_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Outro segundo_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                case 'brainly':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					if (args.length < 1) return reply('O que você quer procurar um?')
					anu = await fetchJson(`https://api.vhtear.com/branly?query=${body.slice(9)}&apikey=${VthearApi}`, {method: 'get'})
					reply(anu.result.data)
					break
                case 'image':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					if (args.length < 1) return reply('O que voce quer procurar mana?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, { caption: '*imagem*\n\n*Resultado da pesquisa : '+goo+'*', quoted: mek })
					break
					case 'animehug':
 
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=${TobzApi}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferlll = fs.readFileSync(rano)
						client.sendMessage(from, bufferlll, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'bcgc':
 
					if (!isGroup) return reply(mess.only.group)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bufferzzz = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, bufferzzz, image, {caption: `*「 BC GROUP 」*\n\nDo Grupo  : ${groupName}\nRemetente : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDo Grupo : ${groupName}\nRemetente : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`)
						}
						reply('Grupo de transmissão bem-sucedido ')
					}
					break
                case 'pokemon':
                    client.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
				case 'inu':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://scrap.terhambar.com/pin?url=https://id.pinterest.com/pin/588916088754108677/`, {method: 'get'})
					var inu = JSON.parse(JSON.stringify(anu.result));
					var uni =  inu[Math.floor(Math.random() * inu.length)];
					nye = await getBuffer(uni)
					client.sendMessage(from, nye, image, { caption: 'Inu!!', quoted: mek })
					break
				case 'elang':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=elang&apikey=${VthearApi}`, {method: 'get'})
					var eln = JSON.parse(JSON.stringify(anu.result));
					var elnn =  eln[Math.floor(Math.random() * eln.length)];
					nyer = await getBuffer(elnn)
					client.sendMessage(from, nyer, image, { caption: 'elang!!', quoted: mek })
					break
				//animefoto
				case 'naruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=naruto&apikey=${VthearApi}`, {method: 'get'})
					var naru = JSON.parse(JSON.stringify(anu.result));
					var to =  naru[Math.floor(Math.random() * naru.length)];
					nyew = await getBuffer(to)
					client.sendMessage(from, nyew, image, { caption: 'naruto!!', quoted: mek })
					break
				case 'minato':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=minato&apikey=${VthearApi}`, {method: 'get'})
					var min = JSON.parse(JSON.stringify(anu.result));
					var ato =  min[Math.floor(Math.random() * min.length)];
					nyeq = await getBuffer(ato)
					client.sendMessage(from, nyeq, image, { caption: 'minato!!', quoted: mek })
					break
				case 'boruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=boruto&apikey=${VthearApi}`, {method: 'get'})
					var bor = JSON.parse(JSON.stringify(anu.result));
					var uto =  bor[Math.floor(Math.random() * bor.length)];
					nyet = await getBuffer(uto)
					client.sendMessage(from, nyet, image, { caption: 'boruto!!', quoted: mek })
					break
				case 'hinata':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hinata&apikey=${VthearApi}`, {method: 'get'})
					var hina = JSON.parse(JSON.stringify(anu.result));
					var ta =  hina[Math.floor(Math.random() * hina.length)];
					nyei = await getBuffer(ta)
					client.sendMessage(from, nyei, image, { caption: 'hinata!!', quoted: mek })
					break
				case 'sasuke':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=sasuke&apikey=${VthearApi}`, {method: 'get'})
					var sasu = JSON.parse(JSON.stringify(anu.result));
					var ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nyeo = await getBuffer(ke)
					client.sendMessage(from, nyeo, image, { caption: 'sasuke!!', quoted: mek })
					break
				case 'sakura':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=sakura&apikey=${VthearApi}`, {method: 'get'})
					var sak = JSON.parse(JSON.stringify(anu.result));
					var kura =  sak[Math.floor(Math.random() * sak.length)];
					nyep = await getBuffer(kura)
					client.sendMessage(from, nyep, image, { caption: 'sakura!!', quoted: mek })
					break
					//animefoto
				case 'unta':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=unta&apikey=${VthearApi}`, {method: 'get'})
					var unt1 = JSON.parse(JSON.stringify(anu.result));
					var unt2 =  unt1[Math.floor(Math.random() * unt1.length)];
					nyea = await getBuffer(unt2)
					client.sendMessage(from, nyea, image, { caption: 'unta!!', quoted: mek })
					break
					//tokyoghoul
				case 'kaneki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${VthearApi}`, {method: 'get'})
					var kan = JSON.parse(JSON.stringify(anu.result));
					var eki =  kan[Math.floor(Math.random() * kan.length)];
					nyes = await getBuffer(eki)
					client.sendMessage(from, nyes, image, { caption: 'kaneki!!', quoted: mek })
					break
					case 'picthewan':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hewanimut&apikey=${VthearApi}`, {method: 'get'})
					var kan = JSON.parse(JSON.stringify(anu.result));
					var eki =  kan[Math.floor(Math.random() * kan.length)];
					nyed = await getBuffer(eki)
					client.sendMessage(from, nyed, image, { caption: 'kaneki!!', quoted: mek })
					break
				case 'toukachan':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ToukaKirishima&apikey=${VthearApi}`, {method: 'get'})
					var tou = JSON.parse(JSON.stringify(anu.result));
					var ka =  tou[Math.floor(Math.random() * tou.length)];
					nyef = await getBuffer(ka)
					client.sendMessage(from, nyef, image, { caption: 'toukachan!!', quoted: mek })
					break
				case 'rize':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=RizeKamishiro&apikey=${VthearApi}`, {method: 'get'})
					var ri = JSON.parse(JSON.stringify(anu.result));
					var ze =  ri[Math.floor(Math.random() * ri.length)];
					nyeg = await getBuffer(ze)
					client.sendMessage(from, nyeg, image, { caption: 'rize chan!!', quoted: mek })
					break
				case 'akira':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=akiramado&apikey=${VthearApi}`, {method: 'get'})
					var ak = JSON.parse(JSON.stringify(anu.result));
					var ara =  ak[Math.floor(Math.random() * ak.length)];
					nyeh = await getBuffer(ara)
					client.sendMessage(from, nyeh, image, { caption: 'akira chan!!', quoted: mek })
					break
				case 'itori':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=itori&apikey=${VthearApi}`, {method: 'get'})
					var it = JSON.parse(JSON.stringify(anu.result));
					var ori =  it[Math.floor(Math.random() * it.length)];
					nyej = await getBuffer(ori)
					client.sendMessage(from, nyej, image, { caption: 'itori chan!!', quoted: mek })
					break
				case 'kurumi':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kurumitokisakikawai&apikey=${VthearApi}`, {method: 'get'})
					var kur = JSON.parse(JSON.stringify(anu.result));
					var imi =  kur[Math.floor(Math.random() * kur.length)];
					nyek = await getBuffer(imi)
					client.sendMessage(from, nyek, image, { caption: 'kurumi chan!!', quoted: mek })
					break
				case 'miku':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=Nakanomiku&apikey=${VthearApi}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyel = await getBuffer(ku)
					client.sendMessage(from, nyel, image, { caption: 'miku chan!!', quoted: mek })
					break
					case 'rem':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=remrezero&apikey=${VthearApi}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyez = await getBuffer(ku)
					client.sendMessage(from, nyez, image, { caption: 'rem chan!!', quoted: mek })
					break
					case 'ram':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ramrezero&apikey=${VthearApi}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyex = await getBuffer(ku)
					client.sendMessage(from, nyex, image, { caption: 'ram chan!!', quoted: mek })
					break
					case 'bokep':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isNsfw) return reply('❌ *Deve ativar o modo Nsfw* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=bokep&apikey=${VthearApi}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyec = await getBuffer(ku)
					client.sendMessage(from, nyec, image, { caption: 'COLI CONTINUAR!!', quoted: mek })
					break
					case 'pictcewek':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cewekcantik&apikey=${VthearApi}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyev = await getBuffer(ku)
					client.sendMessage(from, nyev, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
					break
					case 'pictcowok':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cowokganteng&apikey=${VthearApi}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyeb = await getBuffer(ku)
					client.sendMessage(from, nyeb, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
					break
					case 'pictlolicon':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=lolikawai&apikey=${VthearApi}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyen = await getBuffer(ku)
					client.sendMessage(from, nyen, image, { caption: 'HALLO ONII CHAN!!', quoted: mek })
					break
					case 'pictwaifu':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=waifukawai&apikey=${VthearApi}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyem = await getBuffer(ku)
					client.sendMessage(from, nyem, image, { caption: 'OHAYO DARLING!!', quoted: mek })
					break
					case 'pictneko':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=nekoanimekawai&apikey=${VthearApi}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyeqq = await getBuffer(ku)
					client.sendMessage(from, nyeqq, image, { caption: 'OHAYO ONII CHAN!!', quoted: mek })
					break
				//tokyoghoul
				case 'animehentai':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				 if (!isPremium) return reply(mess.only.premium)
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=animehentai&apikey=${VthearApi}`, {method: 'get'})
					var hen = JSON.parse(JSON.stringify(anu.result));
					var tai =  hen[Math.floor(Math.random() * hen.length)];
					nyeww = await getBuffer(tai)
					client.sendMessage(from, nyeww, image, { caption: 'hentai!!', quoted: mek })
					break
case 'japanes':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${VthearApi}`, {method: 'get'})
					var hen = JSON.parse(JSON.stringify(anu.result));
					var tai =  hen[Math.floor(Math.random() * hen.length)];
					nyeww = await getBuffer(tai)
					client.sendMessage(from, nyeww, image, { caption: 'hentai!!', quoted: mek })
					break
				case 'loli':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VthearApi}`, {method: 'get'})
					var lol = JSON.parse(JSON.stringify(anu.result));
					var i2 =  lol[Math.floor(Math.random() * lol.length)];
					nyeee = await getBuffer(i2)
					client.sendMessage(from, nyeee, image, { caption: 'Oni chan baka!!', quoted: mek })
					break
				case 'anjing':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok3 = await getBuffer(nimek)
					client.sendMessage(from, pok3, image, { quoted: mek })
					break
                case 'pinterest':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					if (args.length < 1) return reply(mess.search)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					client.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Resultado da pesquisa : '+pinte+'*', quoted: mek })
					break
					case 'xd':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (args.length < 1) return reply(mess.wait)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/pin?q=${pin}&apikey=APIKEY`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pineq = await getBuffer(trest)
					client.sendMessage(from, pineq, image, { caption: '*Pinterest*\n\n*Resultado da pesquisa : '+pinte+'*', quoted: mek })
					break
                case 'resepmasakan':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(6)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buffer1 = await getBuffer(anu.thumb_item)
                   hasil = `*título* \n ${anu.title} *nome do item* \n ${anu.item_name} *ingrediente* \n${anu.ingredient} *degrau* \n${anu.step}`
                   client.sendMessage(from, buffer1, image, {quoted: mek, caption: hasil})
                   break
                case 'indohot':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
                if (!isPremium) return reply(mess.only.premium)
                   anu = await fetchJson(`https://arugaz.herokuapp.com/api/indohot`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   hasil = `*título* \n${anu.result.judul} *gênero* \n${anu.result.genre} *duração* \n${anu.result.durasi} *url* \n${anu.result.url}`
                   client.sendMessage(from, hasil, text, {quoted: mek,})
                   break
				case 'ytmp4':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply('Onde está o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer2 = await getBuffer(anu.result)
					client.sendMessage(from, buffer2, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
					case 'run':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isOwner) return reply(mess.only.ownerB)
                sy = args.join(' ')
                return eval(sy)
                break
				case 'ban':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isOwner) return reply(mess.only.ownerB)
					client.banUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `você foi banido ${body.slice(7)}@c.us`, text)
					break
				case 'ytsearch':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('O que você está procurando?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/ytsearch?q=${body.slice(10)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'tiktok':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Onde está o url, hum?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
params = {'url': '${url}/', 'apiKey': '${apiKey}'}
res = get('https://mhankbarbar.tech/api/tiktok', params=params).json()
					//anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('irmão por causa de quê?')
                                        if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                                        var nom = mek.participant
                                        const afk = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *AFK ${tels} NÃO PERTURBE SIM*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        client.sendMessage(from, tag, text, {quoted: mek})
                                        break
case 'tiktok1':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Onde está o url, hum?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/tiktokdl?link=&apikey=${VthearApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'tiktokstalk':
					try {
						if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
						
						if (args.length < 1) return client.sendMessage(from, 'Onde está o nome de usuário, hum?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer3 = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer3, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Possível nome de usuário inválido')
					}
					break
				case 'nulis':
				case 'tulis':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('O que você quer escrever??')
					tulis = body.slice(6)
					reply(mess.wait)
					buffer4 = await getBuffer(`https://api.vhtear.com/write?text=${tulis}&apikey=${VthearApi}`)
					client.sendMessage(from, buffer4, image, {quoted: mek, caption: 'Seu professor te pegou morto'})
					break
				case 'text3d':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
              	    if (args.length < 1) return reply('Onde está o texto mano??')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'O texto é longo, no máximo 10 frases', text, {quoted: mek})
                    buffer5 = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    client.sendMessage(from, buffer5, image, {quoted: mek, caption: `${teks}`})
			     	break
			    case 'lovemake':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              	    if (args.length < 1) return reply('Onde está o texto mano??')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'O texto é longo, no máximo 10 frases', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
                    client.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
			    case 'shorturl':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/shorturl?url=${body.slice(10)}&apikey=${TobzApi}`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        break
			    case 'infonotlp':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        hasil = `*número* \n${anu.nomor} *internacional* \n${anu.international}`
			        reply(hasil)
			        break
			case 'infonomor':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                 if (args.length < 1) return reply(`Masukan Nomor\nExemplo : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internacional : ${data.international}\n╠➥ número : ${data.nomor}\n╠➥ operador : ${data.op}`
                reply(hasil)
                break
			    case 'igstalk':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
					if (args.length < 1) return reply('Entre com seu nome de usuário!!')
					ige = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${ige}&apikey=${VthearApi}`, {method: 'get'})
					buffer7 = await getBuffer(anu.result.picture)
					capt = `Usuário encontrado!!\n\n*➸ Nome :* ${anu.result.full_name}\n*➸ Nome do usuário :* ${anu.result.username}\n*➸ Followers :* ${anu.result.follower}\n*➸ Segue :* ${anu.result.follow}\n*➸ Número de Postagem :* ${anu.result.post_count}\n*➸ Private :* ${anu.result.is_private}\n*➸ Bio :* ${anu.result.biography}`
					client.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					break
				//lgiproses
				case 'tesss':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('o que você quer tio?')
					teks = body.slice(7)
					if (teks.length > 8) return reply('O texto é longo, com até 8 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/leavest?text=${teks}&apikey=xptnbot352`)
					buffer8 = await getBuffer(anu.result)
					client.sendMessage(from, buffer8, image, {quoted: mek})
					break
				case 'tep':
				
					if (args.length < 1) return reply('o que você quer tio')
					teks = body.slice(9)
					if (teks.length > 8) return reply('O texto é longo, com até 8 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/colortext?text=${teks}&apikey=xptnbot352`)
					buffer9 = await getBuffer(anu.result)
					client.sendMessage(from, buffer9, image, {quoted: mek})
					break
				//lgiproses
				case 'infomobil':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Digite o nome do carro!!!')
					ige = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/infomobil?merk=${ige}&apikey=${VthearApi}`, {method: 'get'})
					buffer0 = await getBuffer(anu.result.image)
					capt = `carro encontrado!!\n\n*➸ título :* ${anu.result.title}\n*➸ preço :* ${anu.result.harga}\n*➸ deficiência :* ${anu.result.kekurangan}\n*➸ vantagens :* ${anu.result.kelebihan}`
					client.sendMessage(from, buffer0, image, {quoted: mek, caption: capt})
					break
				case 'infomotor':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Digite o nome da motocicleta !!')
					ft1 = body.slice(11)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/infomotor?merk=${ft1}&apikey=${VthearApi}`)
					buffer11 = await getBuffer(anu.result.image)
					cptr = `Motor encontrado !!\n\n*➸ título :* ${anu.result.title}\n*➸ preço :* ${anu.result.harga}\n*➸ especificação :* ${anu.result.spesifikasi}\n*➸ deficiência :* ${anu.result.kekurangan}\n*➸ vantagens :* ${anu.result.kelebihan}`
					client.sendMessage(from, buffer11, image, {quoted: mek, caption: cptr})
					break
				case 'playstore':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					kuji = body.slice(7)
					reply(mess.wait)
					anu = await getBuffer(`https://api.vhtear.com/playstore?query={kuji}&apikey=${VthearApi}`)
					capty = `*➸ título :* ${anu.title}\n*➸ app_id :* ${anu.app_id}\n*➸ descrição :* ${anu.description}\n*➸ developer_id :* ${anu.developer_id}\n*➸ desenvolvedor :* ${anu.developer}\n*➸ Ponto :* ${anu.score}\n*➸ Preço total :* ${anu.full_price}\n*➸ preço :* ${anu.price}\n*➸ livre :* ${anu.free}`
					client.sendMessage(from, anu, image, {quoted: mek, caption: capty})
					break
			    case 'cekjodoh':                    
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
                    anu = await fetchJson(`https://arugaz.herokuapp.com/api/jodohku?nama=${quote}&text2=${wm}${body.slice(8)}`)
			        hasil = `Nome : ${anu.nama}\nCasal : ${anu.pasangan}\n\nPositivo : ${anu.positif}\nNegativo : ${anu.negatif}`
			        client.sendMessage(from, anu, text, {quoted: mek, caption: hasil})
			        break
			    case 'fototiktok':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
                    gatauda = body.slice(8)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${body.slice(8)}`)
			        buffer22 = await getBuffer(anu.result)
                    reply(anu.result)
			        break
			    case 'map':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer33 = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer33, image, {quoted: mek, caption: `${body.slice(5)}`})
				break
				case 'url2img':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Que tipo é??')
					if (!tipelist.includes(args[0])) return reply('Tipo desktop|tablet|mobile')
					if (args.length < 2) return reply('Onde está o url, hum?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer44 = await getBuffer(anu.result)
					client.sendMessage(from, buffer44, image, {quoted: mek})
					break
				case 'tstiker':
				case 'tsticker':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Cadê o texto, hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer55 = fs.readFileSync(rano)
						client.sendMessage(from, buffer55, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'otagall2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isPremium) return reply(mess.only.premium)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			    case 'kickall':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Quem é Você?')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break
			    case 'otagall3':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
			if (!isPremium) return reply(mess.only.premium)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			    case 'kbbi':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
					if (args.length < 1) return reply('O que você quer procurar um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('De acordo com Kbbi:\n\n'+anu.result)
					break
				case 'persengay':
				
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('O que você quer procurar um?')
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
					reply('De acordo com o percentual gay:\n\n'+anu.desc+anu.persen)
					break
				case 'baper':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply('Não fique entediado:\n\n'+anu.desc)
					break
				break
					case 'grup':
					case 'gc':
					case 'group':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === '1') {
					    reply(`comando recebido, mudou com sucesso o grupo todos podem enviar mensagens`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === '0') {
						reply(`comando recebido, conseguiu alterar o grupo, apenas administradores podem enviar mensagens`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'alay':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`, {method: 'get'})
					reply('nianjim\n\n'+anu.result)
					break
				case 'artinama':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('O que você quer procurar?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, {method: 'get'})
					reply('Por nome:\n\n'+anu.result)
					break
			    case 'tagall':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			    case 'otagall':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 Mencione tudo 〙✪══'+teks+'╚═〘  ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸 BOT 〙', members_id, true)
					break
				case 'clearall':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isOwner) return reply('Kamu siapa?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Exclua todos os chats com sucesso :)')
					break
				case 'bc':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isOwner) return reply('Quem é Você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `[ Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão de sucesso ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ * ঔৣ͜͡𝒁͢𝑬𝑰𝑵 𝑴͢𝑳𝑲 𝑶𝑺͢𝑯 ⃝⃕💸 Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão de sucesso')
					}
					break
				case 'add':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('A que você deseja adicionar ?')
					if (args[0].startsWith('08')) return reply('Use o código do país, mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
			    case 'kick':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você deseja chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recebidos, emitidos :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'edotensei':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você deseja chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recebidos, edotensei :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						client.groupAdd(from, [num])
					} else {
						mentions(`Pedidos recebidos, edotensei : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
						}
					break
				case 'promote':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos aceitos, você se torna administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Pedidos recebidos, você se tornou administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Comando recebido, excluir mensagem :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.deleteMessage(from, mentioned)
					} else {
						mentions(`Comando recebido, excluir mensagem : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.deleteMessage(from, mentioned)
					}
					break
			    case 'demote':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recebidos, você não é um administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Pedidos recebidos, você não é um administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'listadmins':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista admin do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
				case 'stickertoimg':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter adesivos em imagens ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
					case 'simi':
				if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Onde está o texto, hum?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
				if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo 😗️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desativado modo simi com sucesso neste grupo 😡️')
					} else {
						reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
					}
					break
				break 
				case 'wink':
					wink = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://api.i-tech.id/tools/wink?key=${TechApi}`, {method: 'get'})
                   if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                   if (!isGroup) return reply(mess.only.group)
					if (anu.error) return reply(anu.error)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${wink} && ffmpeg -i ${wink} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(wink)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break 
			    case 'nsfw':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
			if (!isOwner) return reply('Quem é Você?')
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('O modo NSFW está ativo')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Ativar com sucesso o modo nsfw neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Desativando o modo nsfw com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
				case 'anime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Quem é Você?')
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAnime) return reply('O modo anime já está ativo')
						anime.push(from)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Ativar com sucesso o modo anime neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						anime.splice(from, 1)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Modo anime desativado com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
					case 'public':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('SÓ O PROPRIETÁRIO PODE USAR BAKA ')
					if (args.length < 1) return reply('Escolha 1 (Ligado) ou 0 (Desligado) Prezado!')
					if (Number(args[0]) === 1) {
						if (isPublic) return reply('ativado')
						public.push(from)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Agora todos os membros podem enviar pedidos✔️')
					} else if (Number(args[0]) === 0) {
						public.splice(from, 1)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Agora, apenas o proprietário pode enviar pedidos✔️')
					} else {
						reply('Selecione 1 (Ligado) ou 0 (Desligado) Querida!')
					}
					break
				case 'welcome':
                                if (isBanned) return reply(mess.only.benned)
                                if (!isUser) return reply(mess.only.userB)

                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (args.length < 1) return reply('Hmmmm')
                                        if (Number(args[0]) === 1) {
                                                if (isWelkom) return reply('Já ativo um')
                                                welkom.push(from)
                                                fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
                                                reply('Ativou com sucesso o recurso de boas-vindas neste grupo ✔️')
                                                 if (args.length < 0) return reply('Hmmmm')
                                        } else if (Number(args[0]) === 0) {                            
                                                welkom.splice(from, 1)
                                                fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
                                                reply('Desativando com sucesso o recurso de boas-vindas neste grupo ✔️')
                                        } else {
                                                reply('1 para ativar, 0 para desativar')
                                        }
                                        break
				case 'clone':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Só meu dono pode')
					if (args.length < 1) return reply('A tag alvo que você deseja clonar')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Om falha')
					}
					break
				case 'setprefix':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return
					if (!isPremium) return reply(mess.only.premium)
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`O prefixo foi alterado com sucesso para :「* ${prefix} *」`)
					break
		        //fitur adminbot
		        case 'setpp2':
		if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
		
                    if (!isGroup) return reply(mess.only.group)
                    if (!isadminbot) return reply('Quem é Você?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterar com sucesso o ícone do Grupo')
                    break
                case 'bc2':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					if (!isadminbot) return reply('Quem é Você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão de sucesso ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *admin bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão de sucesso ')
					}
					break
				case 'hidetag2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
					case 'hidetag5':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
					case 'hidetag20':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(10)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
					case 'hidetag50':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(10)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
					//
				case 'setpp3':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
                    if (!isGroup) return reply(mess.only.group)
                    if (!isfrendsowner) return reply('Quem é Você?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterar com sucesso o ícone do Grupo')
                    break
                case 'bc3':
                
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isfrendsowner) return reply('Quem é Você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer66 = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer66, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão de sucesso ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *Frends bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão de sucesso ')
					}
					break
				case 'hidetag3':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					if (!isfrendsowner) return reply('Quem é Você?')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
				//frendowner
				case 'addadmin':
                   if (!isOwner) return reply('Este comando só pode ser usado pelo proprietário ANKER!', id)
                   for (let i = 0; i < mentionedJidList.length; i++) {
                   adminNumber.push(mentionedJidList[i])
                   fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                   reply('Sucesso ao adicionar ANKER Admin!')
				   }
                   break
				case 'wait':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						tutor = await getBuffer(`https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg`)
						client.sendMessage(from, tutor, image, {quoted: mek, caption: 'nih tutor tod'})
						reply('apenas uma foto')
					}
					break
case 'antiracismo':
		    	if (isBanned) return reply(mess.only.benned)    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAntiRacismo) return reply('O modo antiracismo já está ativo')
						antiracismo.push(from)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Ativado com sucesso o modo antiracismo no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antiracismo.splice(from, 1)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Modo antiracismo desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break

case 'antilink':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Grupo anti-link ativado com sucesso neste grupo ✔️')
						client.sendMessage(from,`Atencao a todos os membros ativos deste grupo anti-link. ee você enviar um link de grupo, voce sera expulso daqui  grupo`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('O modo de grupo anti-link foi desabilitado ')
						var ini = anti.clientOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
case 'mute':
                if (!isOwner) return reply(mess.only.ownerB)
                if (isMute) {
                    _mute.splice(from, 1)
                    fs.writeFileSync('./database/json/mute.json', JSON.stringify(_mute))
                    await client.reply(from, 'Success unmute!')
                } else {
                    _mute.push(from)
                    fs.writeFileSync('./database/json/mute.json', JSON.stringify(_mute))
                    await client.reply(from, 'Success mute!')
                }
            break

				default:
					if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Desculpa *${pushname2}*, Comando *${prefix}${command}* Não Listado dentro de *${prefix}menu*!`)
                  }
   				if (isGroup && isSimi && budy != undefined && body.startsWith(`${prefix}`)) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[NO]','blue'), 'Remetente', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
