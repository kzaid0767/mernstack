const fetcher = async(url) =>{
    try {
        const res = await fetch(url)
        console.log(res.ok)
        const data =  await res.json()
        console.log(data[0])
    } 
    catch {
      console.error('Failed to fetch')  
    }
  }
  /* fetch('https://jsonplfdsaaceholder.tyfdsapicode.com/tofdafdsados/fdsaf1')
    .then(response => response.json()) 
    .catch(err => console.log('Error!: ' + err)); */
    
    
  const myPromise =  new Promise((resolve, reject) => {
    let success = false
    if(success){
      resolve('all well')
    } else {
      reject('not well')
    }
  })

  myPromise
    .then(data => console.log(data))
    .catch(data =>  console.log(data))
    .finally(data =>  console.log('completion of everything'))
