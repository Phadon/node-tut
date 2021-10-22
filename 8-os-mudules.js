const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// return system up time in seconds
console.log(`The system up time is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freeMem()
}

console.log(currentOS);