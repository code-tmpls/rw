const fetch = require('node-fetch');

/* Package Management ::: START */
async function fetchPackageInfo() {
    const response = await fetch('https://registry.npmjs.org/e-ui-react');
    return await response.json();
}

fetchPackageInfo().then(response => { 
    let npmVersionSplit = response['dist-tags']?.latest?.split(".");
    let npmMajorVersion = parseInt(npmVersionSplit?.[0]);
    let npmMinorVersion = parseInt(npmVersionSplit?.[1]);
    let npmPatchVersion = parseInt(npmVersionSplit?.[2]); 
    console.log(npmMajorVersion+" "+npmMinorVersion+" "+npmPatchVersion); 
    const fs = require('fs');
    fs.readFile('./../package.json', (err, data) => {
        let packageJsonObj = JSON.parse(data);
        let versionSplit = packageJsonObj.version;
        let majorVersion = parseInt(versionSplit?.[0]);
            majorVersion = (majorVersion>npmMajorVersion || majorVersion === npmMajorVersion)?majorVersion : npmMajorVersion;
        let minorVersion = parseInt(versionSplit?.[1]);
            minorVersion = (minorVersion>npmMinorVersion || minorVersion === npmMinorVersion)?minorVersion : npmMinorVersion;
        let patchVersion = parseInt(versionSplit?.[2]); 
            patchVersion = (patchVersion>npmPatchVersion || patchVersion === npmPatchVersion)?patchVersion : (npmPatchVersion+1);
        if (err) throw err;
        packageJsonObj.version = majorVersion+"."+minorVersion+"."+patchVersion;
        packageJsonObj = JSON.stringify(packageJsonObj,  null, 1);
        fs.writeFile('./../package.json', packageJsonObj, (err) => {
            if (err) throw err;
        }); 
    });
});
/* Package Management ::: END */