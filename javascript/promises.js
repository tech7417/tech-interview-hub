//https://dev.to/shameel/javascript-promise-all-vs-allsettled-and-race-vs-any-3foj


const promise1 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 1 resolved"), 1000)
  );
  const promise2 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 2 resolved"), 500)
  );
  const promise3 = new Promise((_, reject) =>
    setTimeout(() => reject("Promise 3 rejected"), 200)
  );
  
  const promisesArray = [promise1, promise2, promise3];
  
  Promise.any(promisesArray)
    .then((results) => {
      console.log("All promises resolved:", results);
    })
    .catch((error) => {
      console.error("At least one promise rejected:", error);
    });