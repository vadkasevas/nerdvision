const {nerdvision} = require('@nerdvision/agent')
var i = 0;
nerdvision.init('ad4220d8e6812e8df2eafd7805ba33aa3ba785e5582b93a4915d28ba62106eed307bed7435969742d2f3c1395120c3ea21f98111ce5c223dde34629551c81e3c')
setInterval(()=>{
    console.log(new Date(),i);
},1000);