document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundColor = 'green'
    const newDiv = document.createElement('span')
    newDiv.innerText = 'START v3'
    document.body.appendChild(newDiv)

 	setTimeout(() => {
     	document.body.style.backgroundColor = 'blue'
    }, 3000);   
}
)