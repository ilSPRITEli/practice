function toCel(fah)
{
    let valuec = ((fah -32)/9) * 5
    let result = fah + "°F to °C = " + valuec.toFixed(2) + " °C"
    return result
    
}
function toFah(cel)
{
    let value = (((cel / 5) * 9) + 32)
    let result = cel + "°C to °F = " + value.toFixed(2) + " °F"
    return result
}
function display(ele, value)
{
    document.getElementById(ele).innerHTML = value ;
    var bruh= "10338.8" + "°F to °C = " + "5726.00" + " °C"
    var bruhs= "5726" + "°C to °F = " + "10338.80" + " °F"
    var icu= "32" + "°F to °C = " + "0.00" + " °C"
    var icus= "0" + "°C to °F = " + "32.00" + " °F"
    var boil= "212" + "°F to °C = " + "100.00" + " °C"
    var boils= "100" + "°C to °F = " + "212.00" + " °F"
    if(value == bruh) {document.getElementById("SUNP").innerHTML = `<image src="6779.jpg" width="50%" height="50%"></image><h3 style='color: red'><br><b> เท่ากับอุณหภูมิพื้นผิวของดวงอาทิตย์ </br><b></h3>`}
    else if(value == bruhs) {document.getElementById("SUNP").innerHTML = `<image src="6779.jpg" width="50%" height="50%"></image><h3 style='color: red'><br><b> เท่ากับอุณหภูมิพื้นผิวของดวงอาทิตย์ </br><b></h3>`}
    else if(value == icu) {document.getElementById("SUNP").innerHTML = `<image src="ice.jpg" width="50%" height="50%"></image><h3 style='color: steelblue'><br><b> จุดเยือกแข็งของน้ำ </br><b></h3>`}
    else if(value == icus) {document.getElementById("SUNP").innerHTML = `<image src="ice.jpg" width="50%" height="50%"></image><h3 style='color: steelblue'><br><b> จุดเยือกแข็งของน้ำ </br><b></h3>`}
    else if(value == boil) {document.getElementById("SUNP").innerHTML = `<image src="boii.jpg" width="50%" height="50%"></image><h3 style='color: salmon'><br><b> จุดเดือดของน้ำ </br><b></h3>`}
    else if(value == boils) {document.getElementById("SUNP").innerHTML = `<image src="boii.jpg" width="50%" height="50%"></image><h3 style='color: salmon'><br><b> จุดเดือดของน้ำ </br><b></h3>`}
    
    else {document.getElementById("SUNP").innerHTML =""}



 
    
}

