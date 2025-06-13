let promiseOne = new Promise((resolve, reject) => {
  // async task -
  // eg. setTimeout
  setTimeout(() => {
    console.log("created: Promise I ");
    resolve();
  }, 1000);
});

// to call
promiseOne.then(() => {
  console.log("promised I consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("created promise II");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async II resolved");
});

let promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      promise: 3,
      username: "chai",
      email: "chai@example.com",
    });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

let promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    // what to do when something is error, so here do red
    let error = true;

    if (!error) {
      resolve({ username: "hitesh", password: "myPassword" });
    } else {
      reject(`ERROR: something went wrong`);
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((user) => {
    console.log(user);
  })
  .catch((c) => {
    console.log(c);
  })
  .finally(() => {
    console.log(`promise is either resolved or rejected`);
  });

let promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ promise: "five", username: "javascript", password: "1234" });
    } else {
      reject(`javascript promiseFive went wrong`);
    }
  }, 1000);
});

async function consumePromiseFive() {
  // let response = await promiseFive;
  // console.log(response)

  try {
    let response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
// call the function
consumePromiseFive();

async function getUsers() {
  // here we get the data in string
  let response = await fetch("https://api.github.com/users/hiteshchoudhary");

  // string to json
  let data = await response.json();
  console.log(data);

  try {
    // got data in string
    let response = await fetch("https://api.github.com/users/hiteshchoudhary");

    // changed string to json
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E", error);
  }
 }
getUsers(); // this will executive before all the above code? fetch has high priority "callback queue"
