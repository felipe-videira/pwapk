const express = require('express');
const path = require('path');

const app = express();

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