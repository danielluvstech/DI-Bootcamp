const aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});

aPromise.then(result => console.log(result));