export const urlParams = () =>{
    const baseUrl = window.location.protocol+'//'+window.location.host+'/';
    const basePath = window.location.href.replaceAll(baseUrl,'').replaceAll('#','');
    const basePrefix = () =>basePath.split('/').map((data)=>'..').join('/');
    return { baseUrl:baseUrl, basePath: basePath, basePrefix: basePrefix() };
};