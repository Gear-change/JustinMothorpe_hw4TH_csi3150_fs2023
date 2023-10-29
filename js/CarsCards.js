var cardid = 0
var listcars = Array.from(usedCars)
const element = document.getElementById('CarsCards')
const listCarsLength = listcars.length
var divLoading = document.createElement('div')
divLoading.class = 'loader'
element.appendChild(divLoading)
divLoading.style.display = "block";
for (var i = 0; i < listCarsLength; i++){
    var thiscar = listcars[i]
    var divNewCard = document.createElement("div")
    var makemodelNewCard = document.createElement("h1")
    var mileageNewCard = document.createElement("p")
    var priceNewCard = document.createElement("p")
    var colorNewCard = document.createElement("p")
    var gasMileageNewCard = document.createElement("p")
    var makemodelNewCardtext = document.createTextNode(thiscar.year.toString() + " " + thiscar.make + " " + thiscar.model)
    var mileageNewCardText = document.createTextNode(thiscar.mileage.toString())
    var priceNewCardText = document.createTextNode("$"+ thiscar.price.toString())
    var colorNewCardtext = document.createTextNode(thiscar.color)
    var gasMileageNewCardtext = document.createTextNode(thiscar.gasMileage)
    divNewCard.className ='card'
    var newcardid = 'card' + cardid.toString()
    divNewCard.id = newcardid
    makemodelNewCard.appendChild(makemodelNewCardtext)
    mileageNewCard.appendChild(mileageNewCardText)
    priceNewCard.appendChild(priceNewCardText)
    colorNewCard.appendChild(colorNewCardtext)
    gasMileageNewCard.appendChild(gasMileageNewCardtext)
    priceNewCard.className = "price"
    divNewCard.appendChild(makemodelNewCard)
    divNewCard.appendChild(mileageNewCard)
    divNewCard.appendChild(priceNewCard)
    divNewCard.appendChild(colorNewCard)
    divNewCard.appendChild(gasMileageNewCard)
    divNewCard.class = "Card"
    var thiscarbutton = document.createElement("button")
    var thsicarbuttonp = document.createElement("p")
    var thiscarbuttontext = document.createTextNode("Buy Now")
    thiscarbutton.appendChild(thiscarbuttontext)
    thsicarbuttonp.appendChild(thiscarbutton)
    divNewCard.appendChild(thsicarbuttonp)
    element.appendChild(divNewCard)
    cardid += 1
}
divLoading.style.display = "none";
var oopsNoneFound = document.createElement('p')
var oopsNoneFoundText = document.createTextNode('Your Search turned up nothing, Change Your settings and try again, case matters!')
oopsNoneFound.appendChild(oopsNoneFoundText)
var divNullVehicles = document.createElement('div')
divNullVehicles.class = 'NoVehiclesMessage'
divNullVehicles.appendChild(oopsNoneFound)
element.appendChild(divNullVehicles)
divNullVehicles.style.display = "none";
const yearFilter = document.getElementById('yearFilter')
const makeFilter = document.getElementById('makeFilter')
const modelFilter = document.getElementById('modelFilter')
const mileageMinFilter = document.getElementById('mileageMinFilter')
const mileageMaxFilter = document.getElementById('mileageMaxFilter')
const priceMinFilter = document.getElementById('priceMinFilter')
const priceMaxFilter = document.getElementById('priceMaxFilter')

var carArrayMap = new Array()
var lengthList = listcars.length
for(let i = 0; i < lengthList; i++){
    
    var yeartemp = listcars[i].year
    var maptemp = new Map()
    maptemp.set("year", yeartemp)
    var maketemp = listcars[i].make
    maptemp.set("make", maketemp)
    var modeltemp = listcars[i].model
    maptemp.set("model", modeltemp)
    var mileagetemp = listcars[i].mileage
    maptemp.set("mileage", mileagetemp)
    var pricetemp = listcars[i].price
    maptemp.set("price", pricetemp)
    var colortemp = listcars[i].color
    maptemp.set("color", colortemp)
    var gasMileagetemp = listcars[i].gasMileage
    maptemp.set("gasMileage", gasMileagetemp)
    carArrayMap.push(maptemp)
}
//filters.yearfilter
inputSubmitNode.addEventListener('click', (e) => {
    e.preventDefault();
    divLoading.style.display = "block";
    divNullVehicles.style.display = "none";
    var carMapFilter = new Map()
    var minMilage = new Number()
    var maxMilage = new Number()
    var minPrice = new Number()
    var maxPrice = new Number()
    var minMilageBool = false
    var maxMilageBool = false
    var minPriceBool = false
    var maxPriceBool = false
    if (yearFilter.value != "0"){
        var numbertemp = new Number(yearFilter.value)
        carMapFilter.set("year", numbertemp)
        yearFilter.value = numbertemp 
    }
    if (makeFilter.value != ""){
        carMapFilter.set("make", makeFilter.value)
        makeFilter.value = makeFilter.value
    }
    if (modelFilter.value != ""){
        carMapFilter.set("model", modelFilter.value)
        makeFilter.value = makeFilter.value
    }
    if(mileageMinFilter.value != ""){
        minMilage = mileageMinFilter.value;
        minMilageBool = true
    }
    if(mileageMaxFilter.value != ""){
        maxMilage = mileageMaxFilter.value;
        maxMilageBool = true
    }
    if(priceMinFilter.value != ""){
        minPrice = priceMinFilter.value;
        minPriceBool = true
    }
    if(priceMaxFilter.value != ""){
        maxPrice = priceMaxFilter.value;
        maxPriceBool = true
    }
    var arrayFiltersColor = Array.from(filtersColor)
    var listFilterOfColors = new Array()
    for (var i = 0; i < NumberOfColors; i++) {
        if(document.getElementById(arrayFiltersColor[i]).checked){
            listFilterOfColors.push(arrayFiltersColor[i])
        }
    }
    var allhidden = true
    for(var i = 0; i < listCarsLength; i++){
        var thiscar = carArrayMap[i]
        var thiscarid = 'card' + i.toString()
        var thiscarColorInsearch = false
        document.getElementById(thiscarid).style.display = "block";
        var thiscarColor = thiscar.get('color')
        var listFilterOfColorslength = listFilterOfColors.length
        if (listFilterOfColorslength >= 1) {
            for(let j=0; j < listFilterOfColors.length; j++){
                var string1 = listFilterOfColors[j]
                if (string1.localeCompare(thiscarColor) == 0){
                    thiscarColorInsearch = true
                }
            }
        } else if (listFilterOfColorslength == 0){
            thiscarColorInsearch = true
        }
        if (carMapFilter.has('year') && carMapFilter.get('year') != thiscar.get('year')) {
            document.getElementById(thiscarid).style.display = "none";
        } else if (carMapFilter.has("make") && carMapFilter.get("make") != thiscar.get('make')) {
            document.getElementById(thiscarid).style.display = "none";
        } else if (carMapFilter.has("model") && carMapFilter.get("model") != thiscar.get('model')) {
            document.getElementById(thiscarid).style.display = "none";
        } else if (minMilageBool && minMilage >= thiscar.get("mileage")){
            document.getElementById(thiscarid).style.display = "none";
        } else if (maxMilageBool && maxMilage <= thiscar.get("mileage")){
            document.getElementById(thiscarid).style.display = "none";
        } else if (minPriceBool && minPrice >= thiscar.get("price")){
            document.getElementById(thiscarid).style.display = "none";
        } else if (maxPriceBool && maxPrice <= thiscar.get("price")){
            document.getElementById(thiscarid).style.display = "none";
        }  else if (! (thiscarColorInsearch) ) {
            document.getElementById(thiscarid).style.display = "none";
        } else {
            allhidden = false
        }
    }

    divLoading.style.display = "none";
    if (allhidden) {
        divNullVehicles.style.display = "block";
    }
})
inputResetNode.addEventListener('click', (e) => {
    for(var i = 0; i < listCarsLength; i++){
        var thiscarid = 'card' + i.toString()
        document.getElementById(thiscarid).style.display = "block";

    }
    var arrayFiltersColor = Array.from(filtersColor)
    for (var i = 0; i < arrayFiltersColor.length; i++) {
        document.getElementById(arrayFiltersColor[i]).checked = false
    }
    yearFilter.value != "0"
    makeFilter.value != ""
    modelFilter.value != ""
    mileageMinFilter.value != ""
    mileageMaxFilter.value != ""
    priceMinFilter.value != ""
    priceMaxFilter.value != ""
})