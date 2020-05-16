const express = require('express');
const path = require('path');

const app = express();

if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https')
            res.redirect(`https://${req.header('host')}${req.url}`)
        else
            next()
    })
}

app.use(express.static(__dirname + '/dist/pwApk'));

app.get('/.well-known/assetlinks.json', (req, res) => {
    res.sendFile(path.join(__dirname+'/dist/pwApk/assets/assetlinks.json'));
});

app.get('/privacy.html', (req, res) => {
    res.sendFile(path.join(__dirname+'/dist/pwApk/assets/privacy.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/dist/pwApk/index.html'));
});

app.listen(process.env.PORT || 8080);