console.log('Client side javascript file is loaded!')
const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const messageone=document.querySelector('#message-1')
const messagetwo=document.querySelector('#message-2')
const messagethree=document.querySelector('#message-3')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault() 
    messageone.textContent='loading...'
    messagetwo.textContent=' '
    const location=search.value 
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            messageone.textContent=data.error
        }
        else{
            messageone.textContent=data.longitude
            messagetwo.textContent=data.latitude
            messagethree.textContent=data.temperature
        }
    })
})


})

