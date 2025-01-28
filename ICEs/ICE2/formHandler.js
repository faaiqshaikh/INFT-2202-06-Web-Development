// Validate form inputs

let registrationform = document.getElementById("registrationform")
registrationform.addEventListener("submit", handleInput)

function handleinput(eventObj){
    eventObj.preventDefault();
    let isFormValid = true;
    let formInputs = eventObj.target.elements

    //Email
    let inputEmail = formInputs.inputEmail4.value

    // Phone Number
    let inputPhone = formInputs.inputPhone.value

    // Password
    let passwordOne = formInputs.inputPassword4.value
    let passwordTwo = formInputs.inputPassword5.value

    // ZIP Code
    let inputZip = formInputs.inputZip.value
    if (isFormValid) {
        confirmDetails([...formInputs])
    }
}

function confirmDetails(inputArr) {
    // Grab the form
    let form = document.querySelector("#registrationform") // CSS Selector
    // Hide the form
    form.setAttribute("hidden", "true")
    // Change the contents of the inside of the registration-container DIV to a summary of all the information they inputted
    let registrationContainer = document.querySelector(".registration-container") 

    // Iterate over inputArr and for each input let's create a new <p> and set the contents of the element to the input data. And then we will append this element to the registration-container
    document.querySelector("h1").innerText = "Confirmation Page"

    inputArr.forEach(function(inputElement) {
        let newParagraph = document.createElement("p")
        newParagraph.innerText = inputElement.value
        registrationContainer.appendChild(newParagraph)
    })

    // Add a confirmation button at the bottom of the summary
    let confirmationBtn = document.createElement("button")
    confirmationBtn.innerText = "Confirm Details"
    confirmationBtn.addEventListener("click", submitRegistration)
    registrationContainer.append(confirmationBtn)


    // Once the user clicks the confirmation button, call the submitRegistration() function (i.e. use addEventListener())
}