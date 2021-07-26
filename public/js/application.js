const registerLink = document.getElementById( 'registerLink' )
const container = document.getElementById( 'container-hbs' )
const loginFormLi = document.getElementById( 'loginFormLi' )
const butIn = document.getElementById( 'butIn' )
const commentForm = document.getElementById('commentForm')
const deleteButtons = document.getElementsByClassName('deleteComment')

if(registerLink){
  registerLink.addEventListener('click', async (event) => {
    event.preventDefault()
    registerLink.style.display = 'none'
    loginFormLi.style.display = 'block';

    const result = await (await fetch('/user/signUpForm')).text()
    console.log(result)
    container.innerHTML = result
  })
}

if(loginFormLi){
  loginFormLi.addEventListener('click', async (e) => {
    e.preventDefault();
    loginFormLi.style.display = 'none';
    registerLink.style.display = 'block'
  
    const result = await (await fetch('/user/loginform')).text()
    container.innerHTML = result;
  })
}


if(butIn){
  butIn.addEventListener('click', async (e) => {
    e.preventDefault();
  
    const result = await (await fetch('/main/logIn')).text();
    container.innerHTML = result;
  })
}

if(commentForm){
  commentForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    // console.log('click')
    const address = document.location.href
    const index = address.indexOf('article')
    const addressId = address.slice(index + 8)
    // console.log(address)
    // console.log('addressId ' + addressId)
    // console.log(address)
    const text = document.getElementById('commentInput').value
    const preResultComment = await fetch (`/article/${addressId}` , {
      method: "POST", 
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({text: text})
    })
    const resultComment = await preResultComment.json()
    // console.log(resultComment)
    document.location.href = `/article/${addressId}`
  })
}

if(deleteButtons) {
  for(let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click',async (event) => {
      event.preventDefault()
      console.log(event)
      const author = event.target.parentElement.childNodes[1].innerHTML
      await fetch('/article', {
        method: "DELETE",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({author})
      })
      document.location.href = event.target.baseURI
    })


  }
}
