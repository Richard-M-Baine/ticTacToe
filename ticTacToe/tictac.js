function xVictory(){
  let body = document.getElementById('body')
  let winMusic = document.createElement('audio')
            winMusic.src = './win.mp3'
            winMusic.autoplay = true
            body.append(winMusic)

let list = document.getElementsByName('done')
for (let i = 0; i < list.length; i ++){
  let element = list[i]
  element.remove()

}

let x = document.createElement('h1')
x.setAttribute('id','victory')
x.innerText = 'x'
body.appendChild(x)

}
function oVictory(){
  let body = document.getElementById('body')
  let winMusic = document.createElement('audio')
            winMusic.src = './win.mp3'
            winMusic.autoplay = true
            body.append(winMusic)

  let list = document.getElementsByName('done')
  for (let i = 0; i < list.length; i ++){
    let element = list[i]
    element.remove()
  }

  let x = document.createElement('h1')
x.setAttribute('id','victory')
x.innerText = 'o'
body.appendChild(x)


}






let col1 = []
let col2 = []
let col3 = []
let row1 = []
let row2 = []
let row3 = []
let diag1 = []
let diag2 = []

let count = 1
let thing = 'x'



window.addEventListener("DOMContentLoaded", event => {
  let body = document.getElementById('body')




  let div = document.getElementById('main')
  let buttonArray = document.getElementsByClassName('button')

  for (let i = 0; i < buttonArray.length; i ++){
    let button = buttonArray[i]
    button.addEventListener('click', e => {
      let id = button.getAttribute('id')
      let image = document.createElement('img')
      if (count % 2 === 0){ image.src = 'player-o.svg'
    thing = 'o'}
      else{image.src = 'player-x.svg'
    thing = 'x'}
      div.appendChild(image)
      count ++
      button.replaceWith(image)
      image.setAttribute('id',id)
      image.setAttribute('name','done')
      if (id === '1' || id === '4' || id ==='7'){col1.push(thing)}
      if (id === '2' || id === '5' || id ==='8'){col2.push(thing)}
      if (id === '3' || id === '6' || id === '9'){col3.push(thing)}
      if (id === '1' || id === '2' || id === '3'){row1.push(thing)}
      if (id === '4' || id === '5' || id === '6'){row2.push(thing)}
      if (id === '7' || id ==- '8' || id ==='9'){row3.push(thing)}
      if (id === '1' || id === '5' || id === '9'){diag1.push(thing)}
      if (id === '3' || id === '5' || id === '7'){diag2.push(thing)}
      let array = [col1,col2,col3,row1,row2,row3,diag1,diag2]
      for (let i = 0; i < array.length; i ++){
        let row = array[i]
        if (row.length > 2){
          if (row[0] === 'x' && row[1] === 'x' && row[2] === 'x'){
            xVictory()

          }
          if (row[0] === 'o' && row[1] === 'o' && row[2] === 'o'){
            oVictory()
          }

        }
      }
})
    
   
  }








});