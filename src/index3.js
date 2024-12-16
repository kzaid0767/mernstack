//Rest Countries API

fetch('https://restcountries.com/v3.1/name/tanzania')
.then(res=>res.json())
.then(data=>console.log(data))
