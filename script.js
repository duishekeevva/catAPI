const submit = document.querySelector('#submit')
const img=document.querySelector('#img')
submit.addEventListener('click', () => {
    fetch(`https://api.thecatapi.com/v1/images/search`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            img.src=json[0].url
            console.log(img.src=json[0].url)
        })
})