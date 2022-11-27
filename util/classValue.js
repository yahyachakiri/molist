export const classValue = (content, val) => {
    return content?.split(val)[1]?.split('>')[1]?.split('</')[0]
}

export const imgValue = (content, val) => {
    return content.split(val)[1]?.split('src="')[1]?.split('"')[0];
}
export const loopClassValue = (content, val) => {
    let array = [];
    for (let i = 1; i < content.split(val).length; i++) {
        array.push(content.split(val)[i]?.split('>')[1]?.split('</')[0])
    }
    return array;
}
export const loopImgValue = (content, val) => {
    let array = [];
    for (let i = 1; i < content.split(val).length; i++) {
        array.push(content.split(val)[1]?.split('src="')[1]?.split('"')[0])
    }
    return array;
}