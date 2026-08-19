const http = require('http');
const https = require('https');
const url = require('url');
const { exec } = require('child_process');

const CLIENT_ID = '809506206353-t5ua093kjsvfteult11tobklv2easuot.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:3333/callback';
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';

const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=${encodeURIComponent(SCOPE)}&access_type=offline&prompt=consent`;

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  if (parsed.pathname === '/callback' && parsed.query.code) {
    const code = parsed.query.code;
    const postData = new URLSearchParams({
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    }).toString();

    const tokenReq = https.request('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }, (tokenRes) => {
      let data = '';
      tokenRes.on('data', (chunk) => data += chunk);
      tokenRes.on('end', () => {
        const tokens = JSON.parse(data);
        console.log('\n=== TOKENS ===');
        console.log('Refresh Token:', tokens.refresh_token);
        console.log('Access Token:', tokens.access_token);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>OK ! Tu peux fermer cet onglet et retourner dans le terminal.</h1>');
        server.close();
      });
    });
    tokenReq.write(postData);
    tokenReq.end();
  }
});

server.listen(3333, () => {
  console.log('Serveur en attente sur http://localhost:3333');
  console.log('Ouverture du navigateur...');
  exec(`open "${authUrl}"`);
});
