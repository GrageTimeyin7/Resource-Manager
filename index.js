const createAResourceButton = document.getElementById('button')
const form = document.getElementById('form')
const formCancel = document.getElementById('formCancel')
const formSubmit  = document.getElementById('formSubmit')
const overlay = document.getElementById('overlay')

const inputFieldOne = document.getElementById('inputOne')
const inputFieldTwo =   document.getElementById('inputTwo')
const inputTextThree =  document.getElementById('inputThree')

const emptycontainerlist = document.getElementById('emptycontainerlist')
const containerList = document.getElementById('containerList')

let detailsArray = []

createAResourceButton.addEventListener('click' , function(){
    overlay.style.display = 'flex'
})
formCancel.addEventListener('click', function(){
     overlay.style.display = 'none'
})
formSubmit.addEventListener('click', function(){
    overlay.style.display = 'none'
})


form.addEventListener('submit', function(event){
event.preventDefault()

let websiteName = inputFieldOne.value
let websiteLink = inputFieldTwo.value
let websiteDescription = inputTextThree.value 



let inputdata = {
    webName : websiteName ,
    webDesc : websiteDescription,
    webLink : websiteLink
    
}

detailsArray.push(inputdata)

form.reset()
printUI()
})



function printUI(){

   containerList.innerHTML = ``

  detailsArray.forEach(function(item, index){
        let webitemOne = item.webName
       let webitemTwo =  item.webDesc
      
    
    
    let itemContainer = document.createElement('div')
    itemContainer.className = 'itemContainer'
    itemContainer.setAttribute('id', 'container')
    itemContainer.style.backgroundColor = '#121212'
    
    

    let textGroup = document.createElement('div')
    textGroup.className = 'textGroup'
    
    
    
    let heading = document.createElement('h3')
    heading.textContent = webitemOne
    heading.style.color = '#EBEBEB'
    heading.style.fontSize = '0.875rem'

    let description = document.createElement('p')
    description.textContent = webitemTwo
    description.style.color = '#ebebebd0'
    description.style.fontSize = '0.75rem'

    let icon = document.createElement('i')
    icon.className = 'fa-solid fa-trash'
    icon.setAttribute('id', 'deleteicon')
    icon.style.color = '#888888'

    textGroup.append(heading,description)
    
    itemContainer.append(textGroup,icon)
    containerList.appendChild(itemContainer)
    console.log(detailsArray)
    


    icon.addEventListener('click',function(){
       
        itemContainer.remove();
        detailsArray.splice(index, 1)
        printUI();
})
})
}

