const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="efeurhobobullish@gmail.com"
global.location="Lagos/Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/efeurhobo/Empire_Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6ntq2i.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©by 𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349064721790";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'   // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/6ntq2i.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_32_02_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMTA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICA2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMyLFxuICAgICAgICA3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDc2LFxuICAgICAgICAyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDg4LFxuICAgICAgICA5NixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTksXG4gICAgICAgIDE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICA2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDc1LFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFZnYrbEd2KzN6YnpYOS9jWE13VlBsR3JDQy9NYlF5U1k0amc3cXRCcHJjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSNXBWa2FValNzNlNaeGRybWpsTWtRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFlZDZhYTFkLWQyYTktNDdhZS04M2UxLTMyZTlmYzcyMTYxNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDI1MSxcbiAgICAgIDg2LFxuICAgICAgMTIsXG4gICAgICAxOTksXG4gICAgICAyNSxcbiAgICAgIDIwNixcbiAgICAgIDE5MixcbiAgICAgIDEyNCxcbiAgICAgIDIyNSxcbiAgICAgIDI1MixcbiAgICAgIDIwNSxcbiAgICAgIDE2LFxuICAgICAgMTY4LFxuICAgICAgODgsXG4gICAgICAxMDQsXG4gICAgICA3MCxcbiAgICAgIDk5LFxuICAgICAgMTkzLFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDAsXG4gICAgICAzNyxcbiAgICAgIDEwNSxcbiAgICAgIDI1MixcbiAgICAgIDkxLFxuICAgICAgMjAwLFxuICAgICAgMjEyLFxuICAgICAgMTE3LFxuICAgICAgNzIsXG4gICAgICA5NixcbiAgICAgIDIwMSxcbiAgICAgIDE1NyxcbiAgICAgIDExNixcbiAgICAgIDE4MSxcbiAgICAgIDIwNCxcbiAgICAgIDIzNixcbiAgICAgIDIwMSxcbiAgICAgIDE3NyxcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0TDlXWEs4Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2NDcyMTc5MDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNvZGlxY29uY2VwdFwiLFxuICAgIFwibGlkXCI6IFwiMTEwMzU5NTUzODMwOTYxOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09EQWhKb0NFS21pd2IwR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSnBPUEUwM0NONnJ1UzFBeUlBeHpHbUVkTTBIWnlkMVd5WFhyZ1Vja0puUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEK0xVZ1dTbU5zdm9xdmV2MlpRSXBrZTBaSlFtQ1Z4RXVlVWs5aXRKem5SemhMa1dUWC9qV21yMzdZaGQ0ejB2ckZhSkcxTG5sVTljengrZzFWSGNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsY3lIcTMxOEpkbWo0UzNwKzBYU3poNEpGRXVjQUI1alAvZkNiZllTSkFKeXhDU01Mc2owQ3JCd2FzZVRiSnViVlBHblVjZkdlc28ybTNFQ2FEYVJoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY0NzIxNzkwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM5NjA4MzY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1U4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHVTguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwRzR2aTUyZUR3clhTMFZYMGU2Znhta0VvM3Npakw5SVY2VmlHRHk4ckdZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU5MTQ3MDY4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM5NjA4MzcyOTg1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞 』```", //*『sᴜʙsᴄʀɪʙᴇ • Empire_Md』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "Empire_Md",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Empire_Md",
  ownername:process.env.OWNER_NAME|| "𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "kUSnarK3Xxue73tRHxzrd9sb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-c5_mjyTPg76Sl7gx6yADErKcLzUlfhs4KcNxFBFso4T3BlbkFJQpbBq0QN6CAr8ia7bqJmveKPTmentTE6guHxlLUnUA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_59adeb8a55b9c60aba5ed8b8001135049f773814fb35e722";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
