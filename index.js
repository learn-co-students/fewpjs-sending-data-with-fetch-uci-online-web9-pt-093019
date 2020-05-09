// Add your code here
function submitData(userName, userEmail) {
    let userData = {
        name: userName,
        email: userEmail
    }
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userData)
      };

      return fetch("http://localhost:3000/users", configObj)
      .then(function(response) {
          return response.json();  
      })
      .then(function(object) {
        console.log(object);
    })
    .catch(function(error) {
        alert("Error! Couldn't fetch object");
        console.log(error.message);
      });
}