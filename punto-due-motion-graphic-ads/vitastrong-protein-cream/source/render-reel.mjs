import { chromium } from 'playwright-core';
const S='/tmp/claude-0/-home-user-INNESTO-demo/c532069d-da6d-5e15-934b-ee20a5fe55cb/scratchpad';
const FPS=30,N=FPS*15;
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--no-sandbox']});
const p=await b.newPage({viewport:{width:1080,height:1920}});p.on('pageerror',e=>console.log('err',e.message));
await p.goto('http://localhost:8766/vsad/jar3.html');await p.waitForFunction('window.ready===true',{timeout:60000});
for(let i=0;i<N;i++){await p.evaluate(t=>renderAt(t),i/FPS);await p.screenshot({path:`${S}/frames5/f${String(i).padStart(4,'0')}.png`});}
await b.close();console.log('done');
