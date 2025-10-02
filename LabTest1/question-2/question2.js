const resolvedPromise = () => {
    return new Promise((resolve) => {
        try{
             setTimeout(() => {
            resolve("Delayed Success!");
        }, 500);
        }
        catch(error){
            resolve("Error!");
        }
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        try{
            setTimeout(() => {
            reject("Delayed Exception!");
        }, 500);
        }
        catch(error){
            reject("Error!");
        }
    });
}

