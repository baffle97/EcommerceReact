

export function verify(userName, password) {
    let validUserName = "Priyanshu";
    let validPassword = "261997";
  
    return new Promise((resolve) => {
      setTimeout(() => {
        const isValid = userName === validUserName && password === validPassword;
        resolve(isValid);
      }, 1000);
    });
  }

export function checkValidRoute(){
  let isValidRoute = localStorage.getItem("loggedIn")
  return isValidRoute;
}
  