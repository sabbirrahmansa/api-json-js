

function dataLoad(){
    const url='https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(res => res.json())
.then(data => append(data))

}

function append(data){
    console.log(data)
    for(const user of data){

        console.log(user.name)
        const ul = document.getElementById('append')
         const li = document.createElement('li')
       li.innerText = user.name
       ul.appendChild(li)

    }

    

}
// function append(data){
//     console.log(data)
//     for(const user of data){

//         console.log(user.email)
//         const ul = document.getElementById('email')
//          const li = document.createElement('li')
//        li.innerText = user.email
//        ul.appendChild(li)

//     }

    

// }

