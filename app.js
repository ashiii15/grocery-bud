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
    let Id = new Date().getTime().toString
    if(data && !editFlag){
        const element = document.createElement("article")
        element.classList.add("grocery-items")
        // add id
        const attr = document.createAttribute("data-id")
        attr.value = Id
        element.setAttributeNode(attr)
        element.innerHTML = `<p class="title">${data}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div> `
        lists.appendChild(element)
        // display
        container.classList.add("show-container")
        displayAlert(`item added successfully`,`success`)


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
        // remove items
        alert.classList.remove(`alert-${action}`)
    },1000)

}
clearBtn.addEventListener("click",()=>{
    const items =document.querySelectorAll(".grocery-items")
    if(items.length > 0){
        items.forEach((item)=>{
            lists.removeChild(item)
            lists.classList.remove("grocery-items")
            container.classList.remove("show-container")
            
        })
    }

})

// setback default
function setbackToDefault(){
    grocery.value = ""
    editFlag = false
    editId = ""
    submitBtn.textContent = "submit"
}
setbackToDefault()

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
