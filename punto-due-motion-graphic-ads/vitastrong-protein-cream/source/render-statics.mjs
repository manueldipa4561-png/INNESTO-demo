import { chromium } from 'playwright-core';
const S='/tmp/claude-0/-home-user-INNESTO-demo/c532069d-da6d-5e15-934b-ee20a5fe55cb/scratchpad';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--no-sandbox']});
for(const v of ['A','B','C']){const p=await b.newPage({viewport:{width:1080,height:1350}});p.on('pageerror',e=>console.log('err',e.message));
 await p.goto('http://localhost:8766/vsad/static2.html?v='+v);await p.waitForFunction('window.ready===true',{timeout:60000});
 await p.screenshot({path:`${S}/vitastrong-static2-${v}-4x5.png`});await p.close();}
await b.close();console.log('done');
