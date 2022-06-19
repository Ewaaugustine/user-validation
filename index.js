
const usersDatabase = {
  austine123: {
    firstName: "Austine",
    lastName: "Ewa",
    email: "ewaugustineizuchukwu@gmail.com",
    accountActivated: true,
    password: "austine20869",
  },

  zaiah123: {
    firstName: "Zaiah",
    lastName: "Ewa",
    email: "zaiah@gmail.com",
    accountActivated: false,
    password: "zaiah20869",
  },

  zicks123: {
    firstName: "Zicks",
    lastName: "Ewa",
    email: "zicks@gmail.com",
    accountActivated: false,
    password: "zicks20869",
  },

  izuchukwu123: {
    firstName: "Izuchukwu",
    lastName: "Ewa",
    email: "Izuchukwu@gmail.com",
    accountActivated: true,
    password: "Izuchukwu20869",
  },
}



function displayUserDetails() {
  let username = prompt("Enter your username")

  while (validateUsername(username) == false) {
    username = prompt("Username not valid. please Enter a valid username")
  }

  if (username == null) {
    return true
  }

  let password = prompt("Enter your password")

  while (validatePassword(password) == false) {
    password = prompt("password not valid. please Enter a valid password")
  }

  if (password == null) {
    return
  }

  let passwordConfirm = prompt("comfirm your password")

  while (passwordConfirm !== password) {
    passwordConfirm ==
      prompt("password incorrect. confirm your password again")
  }

  if (passwordConfirm == null) {
    return
  }

  //check if the user database contains the username
  const user = usersDatabase[username]

  if (user == undefined){
    alert("user not found! please register on the app!")
    return
  }

  
alert(`
user found with the following details:
First Name: ${user.firstName}
last Name: ${user.lastName}
Email: ${user.email}
Account Activated: ${user.accountActivated}
`)

  
}

displayUserDetails()
alert("You have come to the end of this program! Goodbye")

function validateUsername(username) {
  if (username == null) {
    return true
  }

  if (username.length > 10) {
    return false
  } else {
    return true
  }
}

function validatePassword(password) {
  if (password == null) {
    return true
  }

  if (password.length < 6) {
    return false
  } else {
    return true
  }

}