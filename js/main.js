// variables
let saturate = document.getElementById('saturate')
let contrast = document.getElementById('contrast')
let brightness = document.getElementById('brightness')
let sepia = document.getElementById('sepia')
let grayscale = document.getElementById('grayscale')
let blurr = document.getElementById('blur')
let hueRotate = document.getElementById('hue-rotate')

let reset = document.querySelector('span')
let upload = document.getElementById('upload')

let download = document.getElementById('download')
let img = document.getElementById('img')
let imgBox = document.querySelector('.img-box')

// download image
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// fnctions
// function remove and add inputs
window.onload = function () {
  imgBox.style.display = 'none'
  download.style.display = 'none'
  reset.style.display = 'none'
}

// function ubloaud and download image
upload.onchange = function () {
  resetValue()
  imgBox.style.display = 'block'
  download.style.display = 'block'
  reset.style.display = 'block'

  let file = new FileReader()
  file.readAsDataURL(upload.files[0])
  file.onload = () => {
    img.src = file.result
  }
  // download image
  img.onload = function () {
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    img.style.display = 'none'
  }
}
// function make filters ---rong way ----
// saturate.addEventListener('input', function () {
//   img.style.filter = `saturate(${saturate.value}%)`
// })

// function make filters --- true way ----

let filters = document.querySelectorAll('ul li input')

filters.forEach((filter) => {
  filter.addEventListener('input', function () {
    ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blurr.value}px)
        hue-rotate(${hueRotate.value}deg)

        `
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  })
})

//function make defult values of inputs and image
function resetValue() {
  img.style.filter = 'none'
  saturate.value = '100'
  contrast.value = '100'
  brightness.value = '100'
  sepia.value = '0'
  grayscale.value = '0'
  blurr.value = '0'
  hueRotate.value = '0'
}

// input for dawnload
download.onclick = function () {
  download.href = canvas.toDataURL()
}
