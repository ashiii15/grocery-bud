function display(content){
    result.value += content
}
function clearBox(){
    result.value = ""
}
function calculate(){
    try{
        result.value = eval(result.value)
    }
    catch{
        result.value = "ERROR!!"
    }
}
function deleteInp(){
    result.value = result.value.slice(0,-1)
}