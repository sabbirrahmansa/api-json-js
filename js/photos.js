function biodata(){
    fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => divadd(data))
}
biodata();

function divadd(photos){
    const idcome = document.getElementById('div-container')
    for(const photo of photos){
        const divadd = document.createElement('div')
        divadd.classList.add('photo')
        divadd.innerHTML = `
        <h2>ID:${photo.id}</h2>
        <h4>TITLE:${photo.title}</h4>
        <h5> URL:${photo.url}</h5>
        
        
        `

        idcome.appendChild(divadd);
        
    }
    

}


