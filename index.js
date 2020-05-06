// Add your code here

const postUrl = 'http://localhost:3000/users'
const formObject = document.querySelector('form')

function submitData(userName, userEmail) {
    
    let formData = {
        name: userName,
        email: userEmail
    }
    
    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch(postUrl, configObject)
        .then(resp => resp.json())
        .then( json => {
            const bodyAppend = `Name: ${json.name}  Email: ${json.email}   ID: ${json.id}`
            document.body.append(bodyAppend)
        })
        .catch(error => {
            document.body.append(error.message)
        })
}

formObject.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const userName = event.target.name.value
    const userEmail = event.target.email.value

    submitData(userName, userEmail)
})