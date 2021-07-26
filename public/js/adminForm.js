const newTeaForm = document.getElementById('newTeaForm')
if (newTeaForm) {
  newTeaForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    console.log('click!')
    const nameTea = document.getElementById('nameTea').value
    const region = document.getElementById('region').value
    const description = document.getElementById('description').value
    const img = document.getElementById('img').value
    const coordinat = document.getElementById('coordinat').value
    const preAdminCreatedPoint = await fetch('/admin/newTea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nameTea: nameTea,
        region: region,
        description: description,
        img: img,
        coordinat: coordinat
      })
    })
    document.location.href = "/"
  })
}

