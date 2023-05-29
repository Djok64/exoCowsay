let myInfo = require('./information');
const cowsay = require('cowsay');
console.log(myInfo);
 myInfoTab = Object.values(myInfo)
console.log(myInfoTab)
const sayMyInfo = myInfoTab.join(',')
console.log(sayMyInfo)
console.log(cowsay.say({
    text: sayMyInfo, 
    e :"XX",
    T :"S "
}));

