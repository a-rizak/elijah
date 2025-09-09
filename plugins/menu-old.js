const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require("os");
const axios = require('axios');
const fs = require('fs');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const dec = `╭━━━〔 *${config.BOT_NAME} Main Menu* 〕━━━╮
┃🔰*𝙊𝙣𝙬𝙚𝙧:* ${config.OWNER_NAME}
┃🔰*𝙈𝙤𝙙𝙚:* ${config.MODE}
┃🔰*𝙥𝙡𝙖𝙩𝙛𝙤𝙧𝙢:* vercel
┃🔰*𝙏𝙮𝙥𝙚:* Node.Js (Multi Device)
┃🔰*𝙋𝙧𝙚𝙛𝙞𝙭:* ${config.PREFIX}
┃🔰*𝙑𝙚𝙧𝙨𝙞𝙤𝙣:* 5.0.0 Pro
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━〔 🧩 *Command Categories* 〕━━╮
┃🔰Quranmenu
┃🔰Prayertime
┃🔰Aimenu
┃🔰Anmiemenu
┃🔰Reactions
┃🔰Convertmenu
┃🔰Funmenu
┃🔰Dlmenu
┃🔰Listcmd
┃🔰Mainmenu
┃🔰Groupmenu
┃🔰Allmenu
┃🔰Ownermenu
┃🔰Othermenu
┃🔰Logo
┃🔰Repo
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/dn82e9.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363416335506023@newsletter',
                        newsletterName: 'glen',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/criss-vevo/CRISS-DATA/raw/refs/heads/main/autovoice/menunew.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "logo",
    alias: ["logomenu"],
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Logo List* 〕━━┈⊷
┃
┃🔰neonlight
┃🔰blackpink
┃🔰dragonball
┃🔰3dcomic
┃🔰america
┃🔰naruto
┃🔰sadgirl
┃🔰clouds
┃🔰futuristic
┃🔰3dpaper
┃🔰eraser
┃🔰sunset
┃🔰leaf
┃🔰galaxy
┃🔰sans
┃🔰boom
┃🔰hacker
┃🔰devilwings
┃🔰nigeria
┃🔰bulb
┃🔰angelwings
┃🔰zodiac
┃🔰luxury
┃🔰paint
┃🔰frozen
┃🔰castle
┃🔰tatoo
┃🔰valorant
┃🔰bear
┃🔰typography
┃🔰birthday
┃🔰
╰──────────────┈⊷`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/dn82e9.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363416335506023@newsletter',
                        newsletterName: "glen",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "reactions",
    desc: "Shows the reaction commands",
    category: "menu",
    react: "💫",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        let dec = `╭━━〔 *Reactions Menu* 〕━━┈⊷
┃🔰
┃🔰bully @tag
┃🔰cuddle @tag
┃🔰cry @tag
┃🔰hug @tag
┃🔰awoo @tag
┃🔰kiss @tag
┃🔰lick @tag
┃🔰pat @tag
┃🔰smug @tag
┃🔰bonk @tag
┃🔰yeet @tag
┃🔰blush @tag
┃🔰smile @tag
┃🔰wave @tag
┃🔰highfive @tag
┃🔰handhold @tag
┃🔰nom @tag
┃🔰bite @tag
┃🔰glomp @tag
┃🔰slap @tag
┃🔰kill @tag
┃🔰happy @tag
┃🔰wink @tag
┃🔰poke @tag
┃🔰dance @tag
┃🔰cringe @tag
┃🔰
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/dn82e9.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363416335506023@newsletter',
                        newsletterName: "glen",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Download Menu* 〕━━┈⊷
┃🔰
┃🔰facebook
┃🔰mediafire
┃🔰tiktok
┃🔰twitter
┃🔰Insta
┃🔰apk
┃🔰img
┃🔰tt2
┃🔰pins
┃🔰apk2
┃🔰fb2
┃🔰pinterest 
┃🔰spotify
┃🔰play
┃🔰play2
┃🔰play3
┃🔰play4
┃🔰play5
┃🔰play6
┃🔰play7
┃🔰play8
┃🔰play9
┃🔰play10
┃🔰audio
┃🔰video
┃🔰video2
┃🔰video3
┃🔰video4
┃🔰video5
┃🔰video6
┃🔰video7
┃🔰video8
┃🔰video9
┃🔰video10
┃🔰ytmp3
┃🔰ytmp4
┃🔰song
┃🔰darama
┃🔰gdrive
┃🔰ssweb
┃🔰tiks
┃🔰
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/dn82e9.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363416335506023@newsletter',
                        newsletterName: "glen",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `╭━━〔 *Group Menu* 〕━━┈⊷
┃🔰
┃🔰grouplink
┃🔰kickall
┃🔰kickall2
┃🔰kickall3
┃🔰add
┃🔰remove
┃🔰kick
┃🔰promote 
┃🔰demote
┃🔰dismiss 
┃🔰revoke
┃🔰setgoodbye
┃🔰setwelcome
┃🔰delete 
┃🔰getpic
┃🔰ginfo
┃🔰delete 
┃🔰disappear on
┃🔰disappear off
┃🔰disappear 7D,24H
┃🔰allreq
┃🔰updategname
┃🔰updategdesc
┃🔰joinrequests
┃🔰senddm
┃🔰mute
┃🔰unmute
┃🔰lockgc
┃🔰unlockgc
┃🔰invite
┃🔰tag
┃🔰hidetag
┃🔰tagall
┃🔰tagadmins
┃🔰
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://res.cloudinary.com/dgy2dutjs/image/upload/v1751659999/url.crissvevo.co.tz/%E1%B4%8F%CA%99%E1%B4%87%E1%B4%85%E1%B4%9B%E1%B4%87%E1%B4%84%CA%9C1_pl1cki.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363416335506023@newsletter',
                        newsletterName: "ʜᴜɴᴛᴇʀ xᴍᴅ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `╭━━〔 *Fun Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• shapar
┃◈┃• rate
┃◈┃• insult
┃◈┃• hack
┃◈┃• ship
┃◈┃• character
┃◈┃• pickup 
┃◈┃• joke
┃◈┃• hrt
┃◈┃• hpy
┃◈┃• syd
┃◈┃• anger
┃◈┃• shy
┃◈┃• kiss
┃◈┃• mon
┃◈┃• cunfuzed
┃◈┃• setpp
┃◈┃• hand
┃◈┃• nikal
┃◈┃• hold
┃◈┃• hug
┃◈┃• nikal
┃◈┃• hifi
┃◈┃• poke
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://res.cloudinary.com/dgy2dutjs/image/upload/v1751659999/url.crissvevo.co.tz/%E1%B4%8F%CA%99%E1%B4%87%E1%B4%85%E1%B4%9B%E1%B4%87%E1%B4%84%CA%9C1_pl1cki.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363416335506023@newsletter',
                        newsletterName: "ʜᴜɴᴛᴇʀ xᴍᴅ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Other Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• timenow
┃◈┃• date
┃◈┃• count
┃◈┃• calculate
┃◈┃• countx
┃◈┃• flip
┃◈┃• coinflip
┃◈┃• rcolor
┃◈┃• roll
┃◈┃• fact
┃◈┃• cpp
┃◈┃• rw
┃◈┃• pair
┃◈┃• pair2
┃◈┃• pair3
┃◈┃• fancy
┃◈┃• logo <text>
┃◈┃• define
┃◈┃• news
┃◈┃• movie
┃◈┃• weather
┃◈┃• srepo
┃◈┃• insult
┃◈┃• save
┃◈┃• wikipedia
┃◈┃• gpass
┃◈┃• githubstalk
┃◈┃• yts
┃◈┃• ytv
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://res.cloudinary.com/dgy2dutjs/image/upload/v1751659999/url.crissvevo.co.tz/%E1%B4%8F%CA%99%E1%B4%87%E1%B4%85%E1%B4%9B%E1%B4%87%E1%B4%84%CA%9C1_pl1cki.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363416335506023@newsletter',
                        newsletterName: "ʜᴜɴᴛᴇʀ xᴍᴅ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Main Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ping
┃◈┃• live 
┃◈┃• alive
┃◈┃• runtime
┃◈┃• uptime 
┃◈┃• repo
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• restart
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://res.cloudinary.com/dgy2dutjs/image/upload/v1751659999/url.crissvevo.co.tz/%E1%B4%8F%CA%99%E1%B4%87%E1%B4%85%E1%B4%9B%E1%B4%87%E1%B4%84%CA%9C1_pl1cki.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363416335506023@newsletter',
                        newsletterName: "ʜᴜɴᴛᴇʀ xᴍᴅ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Owner Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• listcmd
┃◈┃• allmenu
┃◈┃• repo
┃◈┃• block
┃◈┃• unblock
┃◈┃• fullpp
┃◈┃• setpp
┃◈┃• restart
┃◈┃• shutdown
┃◈┃• updatecmd
┃◈┃• alive
┃◈┃• ping 
┃◈┃• gjid
┃◈┃• jid
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://res.cloudinary.com/dgy2dutjs/image/upload/v1751659999/url.crissvevo.co.tz/%E1%B4%8F%CA%99%E1%B4%87%E1%B4%85%E1%B4%9B%E1%B4%87%E1%B4%84%CA%9C1_pl1cki.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363416335506023@newsletter',
                        newsletterName: "ʜᴜɴᴛᴇʀ xᴍᴅ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Convert Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• sticker
┃◈┃• sticker2
┃◈┃• emojimix
┃◈┃• fancy
┃◈┃• take
┃◈┃• tomp3
┃◈┃• tts
┃◈┃• trt
┃◈┃• base64
┃◈┃• unbase64
┃◈┃• binary
┃◈┃• dbinary
┃◈┃• tinyurl
┃◈┃• urldecode
┃◈┃• urlencode
┃◈┃• url
┃◈┃• repeat 
┃◈┃• ask
┃◈┃• readmore
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://res.cloudinary.com/dgy2dutjs/image/upload/v1751659999/url.crissvevo.co.tz/%E1%B4%8F%CA%99%E1%B4%87%E1%B4%85%E1%B4%9B%E1%B4%87%E1%B4%84%CA%9C1_pl1cki.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363416335506023@newsletter',
                        newsletterName: "ʜᴜɴᴛᴇʀ xᴍᴅ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `╭━━〔 *Anime Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• fack
┃◈┃• dog
┃◈┃• awoo
┃◈┃• garl
┃◈┃• waifu
┃◈┃• neko
┃◈┃• megnumin
┃◈┃• neko
┃◈┃• maid
┃◈┃• loli
┃◈┃• animegirl
┃◈┃• animegirl
┃◈┃• animegirl1
┃◈┃• animegirl2
┃◈┃• animegirl3
┃◈┃• animegirl4
┃◈┃• animegirl5
┃◈┃• anime1
┃◈┃• anime1
┃◈┃• anime2
┃◈┃• anime3
┃◈┃• anime4
┃◈┃• anime5
┃◈┃• animenews
┃◈┃• foxgirl
┃◈┃• naruto
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://res.cloudinary.com/dgy2dutjs/image/upload/v1751659999/url.crissvevo.co.tz/%E1%B4%8F%CA%99%E1%B4%87%E1%B4%85%E1%B4%9B%E1%B4%87%E1%B4%84%CA%9C1_pl1cki.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363416335506023@newsletter',
                        newsletterName: "ʜᴜɴᴛᴇʀ xᴍᴅ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Ai Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ai
┃◈┃• gpt3
┃◈┃• gpt2
┃◈┃• gptmini
┃◈┃• gpt
┃◈┃• meta
┃◈┃• blackbox
┃◈┃• luma
┃◈┃• dj 
┃◈┃• criss
┃◈┃• vevo
┃◈┃• gpt4
┃◈┃• bing
┃◈┃• imagine 
┃◈┃• imagine2
┃◈┃• copilot
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://res.cloudinary.com/dgy2dutjs/image/upload/v1751659999/url.crissvevo.co.tz/%E1%B4%8F%CA%99%E1%B4%87%E1%B4%85%E1%B4%9B%E1%B4%87%E1%B4%84%CA%9C1_pl1cki.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363416335506023@newsletter',
                        newsletterName: "ʜᴜɴᴛᴇʀ xᴍᴅ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
