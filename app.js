// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery")
const container = document.querySelector(".grocery-container")
const lists = document.querySelector(".grocery-lists")
const clearBtn = document.querySelector(".clear-btn")
const submitBtn = document.querySelector(".submit-btn")


// edit option
let editElement
editFlag = false
let editId =""

// ****** EVENT LISTENERS **********
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data = grocery.value
    console.log(data);
    let uniqueId = new Date().getTime().toString
    if(data && !editFlag){
        console.log("display th elist");
    }
    else if(data && editFlag){
        console.log("editing on progresss");
    }
    else{
        displayAlert(`please enter the list`,`danger`)
    }
})

// ****** FUNCTIONS **********
function displayAlert(item,action){
    alert.textContent = item
    alert.classList.add(`alert-${action}`)
    setTimeout(()=>{
        alert.textContent = ""
        alert.classList.remove(`alert-${action}`)
    },1000)

}
s
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
