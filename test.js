const {nerdvision} = require('@nerdvision/agent')
var i = 0;
nerdvision.init('804026a8c624b17f9f32773856de36cf81307e80f86e24fd7e4423ccd5b25e6f523ff6838c78af2e7cd3ba9fb6ec7f1981256a5ca37a7c994eb6c84e829c1b2b')
setInterval(()=>{
    console.log(new Date(),i);
},1000);