function loadPost(){
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayposts(data) )
    

    
}

loadPost() ;




function displayposts(posts){
    const idContainer = document.getElementById('post-containr')

    for(const post of posts){
        const divecrite = document.createElement('div')
        divecrite.classList.add('post')
        divecrite.innerHTML=`
        <h4> ID-${post.id} </h4>
        <h5> post:${post.title} </h5>
        <p> post description:${post.body} </p>
        
        `;
        idContainer.appendChild(divecrite)
    }
} 

// function displayposts(posts){
//     for(const post of posts){
//         console.log(post)
//         const ul = document.getElementById('post-containr')
//         const li = document.createElement('li')
//         li.innerText = post.title;
//         ul.appendChild(li)
         
//     }
// }





