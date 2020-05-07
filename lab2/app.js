document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundColor = 'green'
    const newDiv = document.createElement('span')
    newDiv.innerText = 'START v3'
    document.body.appendChild(newDiv)

 	setTimeout(() => {
     	document.body.style.backgroundColor = 'blue'
     	   let list = document.createElement('ol')
		    list.setAttribute("style", "list-style: upper-latin;")
		    list.start = 3;
		    const numbers = 15
		    let count = 0

		    setTimeout(() => {
		    setInterval(() => {
		        if (count < numbers) {
		            count++
		            let li = document.createElement('li')
		            li.innerText = count
		            list.appendChild(li)
		            document.body.appendChild(list)
		        }
		    }, 1000)



		}, 2000)
    }, 3000);   
}
)