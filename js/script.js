let list = $('#list')

// function to add input to list
let addToList = function() {
  let inputValue = $('#input').val()
  // append input values in li
  let li = $('<li></li>')
  let text = $('<span></span>')
  // incase value is empty
  if (inputValue === '') {
      $('#input').attr('placeholder', 'Please enter a value!')
      return
  }
  text.append(inputValue)
  li.append(text)
  list.append(li)

  // add remove button
  let removeBtn = $('<button></button>')
  removeBtn.text('Remove')
  removeBtn.click(() => {
      li.remove()
  });
  li.append(removeBtn)

  //cross out item when done but not removed
  let crossItm = $('<button></button>')
  crossItm.text('Complete')
  crossItm.click(() => {
      li.addClass('strike')
  })
  li.append(crossItm)

  $('#input').val('')
}

$('.add-button').click(addToList)

window.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
     addToList()
  }
})
