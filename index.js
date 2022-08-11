const b = document.querySelector("#in")
const but = document.querySelector(".btn")
let api = "52fceb64eb14f322fe4ebb7988c17272"


function d(){
if( b.value != ""){
ra(b.value)


}
else{
    document.querySelector("#c").innerHTML='<p style="display:none;">City Name: "+cn+"</p>';
    document.querySelector("#a").innerHTML='<p style="display:none;">Temperature:"+da.main.temp+" °C</p>';
    document.querySelector("#n").innerHTML='<p style="display:none;">Humaditiy:"+da.main.humidity+"%</p>'
    document.querySelector("#s").innerHTML='<p style="display:none;">Wind Speed:"+da.wind.speed+"m/s</p>'
document.querySelector(".card-text").innerHTML="<p>please enter the location</p>"
}

}

function ra(c){

if( c != ""){
let   lin = 'https://api.openweathermap.org/data/2.5/weather?q='+b.value+'&units=metric&appid='+api;
document.querySelector(".card-text").innerHTML='<p style="display:none;">oops...! something went wrong</p>'
document.querySelector("#c").innerHTML='<p style="display:none;">City Name: "+cn+"</p>';
document.querySelector("#a").innerHTML='<p style="display:none;">Temperature:"+da.main.temp+" °C</p>';
document.querySelector("#n").innerHTML='<p style="display:none;">Humaditiy:"+da.main.humidity+"%</p>'
document.querySelector("#s").innerHTML='<p style="display:none;">Wind Speed:"+da.wind.speed+"m/s</p>'
fetch(lin)
.then((res) =>   res.json())

.then(data =>  weather(data))
.catch((err) => 
document.querySelector(".card-text").innerHTML="<p>oops..... something went wrong</p>"
)

}}
function weather(da){
const cn = b.value.toUpperCase()


document.querySelector("#a").innerHTML="<p>Temperature:"+da.main.temp+" °C</p>";
document.querySelector("#n").innerHTML="<p>Humaditiy:"+da.main.humidity+"%</p>"
document.querySelector("#s").innerHTML="<p>Wind Speed:"+da.wind.speed+"m/s</p>"
}