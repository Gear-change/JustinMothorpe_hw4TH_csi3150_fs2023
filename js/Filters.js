let inputcarsLength = inputcars.length
let filtersColor = new Set()
for (let x = 0; x < inputcarsLength; x++){
  let thiscar = inputcars[x]
  let booltemp = filtersColor.has(thiscar.color)
  if (!booltemp) {
      filtersColor.add(thiscar.color)
  }
}
let NumberOfColors = filtersColor.size
const colorElement = document.getElementById("filters")
for (let color of filtersColor){
  let inputNewColorNode = document.createElement("input")
  inputNewColorNode.type = 'checkbox'
  inputNewColorNode.id = color
  let labelNewColorNode = document.createElement("label")
  let labelNewColorNodeText = document.createTextNode(color)
  let newIdColorlbl = color + "Label"
  labelNewColorNode.appendChild(labelNewColorNodeText)
  labelNewColorNode.id = newIdColorlbl
  labelNewColorNode.for = color
  colorElement.appendChild(labelNewColorNode)
  colorElement.appendChild(inputNewColorNode)
}
let inputSubmitNode = document.createElement("button")
let inputSubmitNodetext = document.createTextNode("Submit")
inputSubmitNode.appendChild(inputSubmitNodetext)
colorElement.appendChild(inputSubmitNode)
let inputResetNode = document.createElement('input')
inputResetNode.type = 'reset'
inputResetNode.value = 'Reset'
colorElement.appendChild(inputResetNode)