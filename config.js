const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_39_03_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDUsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICA2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDksXG4gICAgICAgIDI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMixcbiAgICAgICAgOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDUyLFxuICAgICAgICA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICA0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAwLFxuICAgICAgICA4NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDgwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyLFxuICAgICAgICAwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRHRiMFkzUmROU2hlYlBmWFBxR1IxYSt6NnJyb0ZoeEtvU0g3SURLOGV1TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSWlvbmhkT0VTS3lTb3cxZkhVRHhkUVwiLFxuICBcInBob25lSWRcIjogXCIyYzZjZTg5ZS01NWQ5LTRiNjEtYTM3OS00ZjgzZGNjOGE3YjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgMTIzLFxuICAgICAgMTgsXG4gICAgICAyNDcsXG4gICAgICAyNDcsXG4gICAgICAxMjcsXG4gICAgICAxODEsXG4gICAgICAxOSxcbiAgICAgIDIxNixcbiAgICAgIDkzLFxuICAgICAgMjE4LFxuICAgICAgMyxcbiAgICAgIDEwMSxcbiAgICAgIDE3OSxcbiAgICAgIDE1MixcbiAgICAgIDU2LFxuICAgICAgMTYxLFxuICAgICAgMjA4LFxuICAgICAgMixcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzUsXG4gICAgICA4OSxcbiAgICAgIDExNSxcbiAgICAgIDIzOCxcbiAgICAgIDEwNyxcbiAgICAgIDE2MixcbiAgICAgIDI1MixcbiAgICAgIDIwMyxcbiAgICAgIDEwMCxcbiAgICAgIDE2MSxcbiAgICAgIDExLFxuICAgICAgMjU0LFxuICAgICAgMjUzLFxuICAgICAgMTQ2LFxuICAgICAgOTMsXG4gICAgICAxMjUsXG4gICAgICAyNyxcbiAgICAgIDEwOCxcbiAgICAgIDE1MCxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFWR01ZVjJXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2OTMyMjIzMzI6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBbW15dHpcIixcbiAgICBcImxpZFwiOiBcIjI1MjE0OTU0NDAxMzkwNzoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPQ3U4NVVCRUw3dXlMNEdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkloUnVYdDVSL3FvNXVZMGVqQlhtOUx4Z3VFV2E1NVl0RTAvT3lwZ0RiMTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYzU0WjFYSUYzTXRkeWE1bFk4eFpFUzh6K21VSXluVENuTmQwb1M0M2EyVDdmMVlpQnM1cHMzbWExLzU1N0hhRTBSb25WRVJZVU5DMFNhdnd6SW9xQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidzhxVUpTalBpVXN0eTJHc0tNL0pEeWttckhSV1R4T2hHdDNOa0h1aENrNGNNM21RaFJiMjNqRExZd1NuTitiam85VmZSdHhUWkVCNXZ6azRPcUV4QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjkzMjIyMzMyOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQxODI5OTU0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
