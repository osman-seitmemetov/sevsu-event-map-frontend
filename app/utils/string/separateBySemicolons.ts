export const separateBySemicolons = (str: string) => {
    let separated = str.split(';\n')
    if (separated[separated.length - 1] === '') {
        separated.splice(separated.length - 1)
    } else {
        separated[separated.length - 1] = separated[separated.length - 1].slice(0, -1);
    }

    console.log("sep", separated)
    return separated;
}