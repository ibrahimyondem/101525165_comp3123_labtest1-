function lowerCaseWords(mixedArray){
    return new Promise((resolve, reject) => {
        try{
        const result = mixedArray
        .filter(item => typeof item === 'string')
        .map(str => str.toLowerCase());
        resolve(result);
        }
        catch(error){
            reject("Problem with processing the array");
    }
    });
}       