// Add your code here
/*  
let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
   
fetch("http://localhost:3000/dogs", configObj).then(function(response) {
        return response.json();
    }).then(function(object) {
        console.log(object);
    });
    */

function submitData(userName, userEmail) {
    const formData = {
        name: userName,
        email: userEmail
    }

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configurationObject).then(function(resp) {
        return resp.json();
    }).then(function(object) {
        
        const docBody = document.getElementsByTagName('body')[0]
        const newElement = document.createElement("h2")
        newElement.innerText = object.id 
        docBody.appendChild(newElement)
    }).catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
      });
}

submitData()