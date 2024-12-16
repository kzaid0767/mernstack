btnDiv = document.querySelector('#btnDiv') 
btnOne = document.querySelector('#btnOne') 
btnTwo = document.querySelector('#btnTwo')



const handleDivClick =()=>{
    alert('div clicked')
}
const handlebtnOneClick =(e)=>{
    e.stopPropagation()
    alert('btnOne clicked')
}
const handlebtnTwoClick =()=>{
    alert('Two clicked')
}

const handleDblClick=()=>alert('some double click')
const handleMouseOut=()=>alert('Moust out')

btnDiv.addEventListener('click', handleDivClick)
btnOne.addEventListener('click', handlebtnOneClick)
btnTwo.addEventListener('click', handlebtnTwoClick)
const redDiv = document.getElementById('redDiv')
redDiv.addEventListener('dblclick', handleDblClick)
redDiv.addEventListener('mouseover', handleMouseOut)