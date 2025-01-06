const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pZd3ZrOWlsa0UrdzNnNjlzM2VUUFVLVisrSk10eGxuekVoOEo3ejZYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTBRMnpvT2pXc3B6Y09MMk1HQU84TFhBcTg2SVJQQWZQbmsrbHBRTUp3az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTmFzdjE5dEQ3YWpvRjBSVVdpZ2hEcENtR09BYktJaHJkSzFRVHMvazFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRmcyRFZmUGhjbkllNkplcUJaeG5zWVF0YmxnTFpWZkJZU3hkaS9SU2hNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVFdHFkeW51c1lPY2xhVjltaUxOUjJNZTFSRlFGbTNiUGU2UzJ1ck9oRXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik4yZmhhd0RJWUJzMnZkNGFUVHRjRUVjeUJEbmQ3cGJISUxIeVg5NmhIMDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU5RaWZreisyN24xR29UNUg2R3pPRnF5eVl0VUQ0RGJPR2xDckNyeFdXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmVzYlBiWXhMaytvT3RtZVNSTWhYQVYwMlgxazA5a0hKNDlxNmM3bklROD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhFaXVUdFBCMGNzejFLWVFoakFnK1BscHlDajNaZmVENG4xcUJiSThqcWxjUzYzdEhFR3Z0d2NxTTlUa0RTbzNyQjBNVkl5dGVBeWo3U1UwY2xDTkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcsImFkdlNlY3JldEtleSI6Iko4cnQ1VGFURXFqZ0VGeSs2dmQ4K0RtN0F6dTIrS292ZGV5eXJPenI5NTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im5DbTJPc1BvUWN1d2hRQ0VaTHRRRWciLCJwaG9uZUlkIjoiNjZlMzc4ZDAtMWYxNy00MjkwLWFhNmMtNTRjMWYzOTk5YzdkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJOMEo4QTNWdnp3VkRPZWhidHJURWlOQ2NHOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKUjd0eHFEL29SUkVSUUZhUHNQcVdGMm50THc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWDM2S1lCMTYiLCJtZSI6eyJpZCI6Ijk0NzI1MDUxOTg4OjcwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ismq4rSVXCLJgCDqqpHqq4BdINC66qq26qqd4oCiIPCdmKzwnZOy6qqA4aeBIOqqnM654bSF6qqKIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQTzN3SkVIRUtYaDdyc0dHQklnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpODczWVVxZ3NueDNoNG9McGcwY3E2elpzRk42UlllSk8zVCtJajhoTEVvPSIsImFjY291bnRTaWduYXR1cmUiOiI1OTN4TWgxdjY5NUxoaWNRVW9ySmRGMHZiMnpRcyswL1p0d2xURHpSeGREVHFrd3U2SUR1bzJ0R2xsRDA4Rjd6RGlZUkRpLzVFUC9qSXVodkhWeXlBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiblJsQWc3S0NNaW5jSy9qNHdkeitBM1RiUWZMeXBEeWdQR3pmb01vVmY1WVRLSm01eFdkQXEvTlpDN09yWlBUNlFTTkFrYklWQkRXTm93dGpESHVnQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNTA1MTk4ODo3MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZdk85MkZLb0xKOGQ0ZUtDNllOSEt1czJiQlRla1dIaVR0MC9pSS9JU3hLIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2MTU5NDEwfQ==",
    CAPTION: process.env.CAPTION || "code by yessertech ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "yessertech",
    STATUS_REPLY: process.env.STATUS_REPLY || "`✅ your status seen 👀`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
