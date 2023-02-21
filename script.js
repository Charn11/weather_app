let getData = async (location) => {
    
    try{
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=91100b691e4b6463d7b0fb0765c24f34", {mode: "cors"});
        let WData = await response.json();
        console.log(WData);

        let dataDiv = document.createElement('div');
        dataDiv.setAttribute('id','dataDiv');
        document.getElementById('main').appendChild(dataDiv);

        if(WData.cod == 404){
            dataDiv.remove();
        }
        //display data

        //name
        let nameDiv = document.createElement('div');
        nameDiv.setAttribute('id','nameDiv');
        nameDiv.innerText = WData.name+", "+WData.sys.country;
        dataDiv.appendChild(nameDiv);

        //temperature
        let tempDiv = document.createElement('div')
        tempDiv.setAttribute('id','temp');
        let img = document.createElement('img');
        let tempDesc = document.createElement('p');
        tempDesc.innerText = Math.round((WData.main.temp)-273.15)+"° C";

        //diplay weather icons
        
        //overcast and broken clouds
        if(WData.weather[0].id == 804 || WData.weather[0].id == 803)
        {
            img.src = "./all/overcast.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }
        
        //scattered clouds
        else if(WData.weather[0].id == 802){
            img.src = "./all/cloudy.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        //few clouds
        else if(WData.weather[0].id == 801){
            if(WData.weather[0].icon == "02d")
            {
                img.src = "./all/partly-cloudy-day.svg";
                weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
            }
            else{
                img.src = "./all/partly-cloudy-night.svg";
                weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
            }
        }

        //clear sky
        else if(WData.weather[0].id == 800){
            if(WData.weather[0].icon == "01d")
            {
                img.src = "./all/clear-day.svg";
                weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
            }
            else{
                img.src = "./all/clear-night.svg";
                weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
            }
        }

        //mist
        else if(WData.weather[0].id == 701){
            img.src = "./all/mist.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        //smoke
        else if(WData.weather[0].id == 711){
            img.src = "./all/smoke-particles.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        //haze
        else if(WData.weather[0].id == 721){
            img.src = "./all/haze.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        //dust
        else if(WData.weather[0].id == 731 || WData.weather[0].id == 751 ||
            WData.weather[0].id == 761 || WData.weather[0].id == 762){
            img.src = "./all/dust-wind.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        //fog
        else if(WData.weather[0].id == 741){
            img.src = "./all/fog.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        //squall
        else if(WData.weather[0].id == 771){
            img.src = "./all/wind.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        //tornado
        else if(WData.weather[0].id == 781){
            img.src = "./all/tornado.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        //snow
        else if(WData.weather[0].id == 600  || WData.weather[0].id == 601 || WData.weather[0].id == 602 ||
            WData.weather[0].id == 620 || WData.weather[0].id == 621 || WData.weather[0].id == 622){
            img.src = "./all/snow.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        //sleet
        else if(WData.weather[0].id == 611  || WData.weather[0].id == 612 || WData.weather[0].id == 613 ||
            WData.weather[0].id == 615 || WData.weather[0].id == 616){
            img.src = "./all/sleet.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        //rain
        else if(WData.weather[0].id == 500 ||WData.weather[0].id == 501 ||WData.weather[0].id == 502 ||
            WData.weather[0].id == 503 ||WData.weather[0].id == 504 ||WData.weather[0].id == 511 ||
            WData.weather[0].id == 520 ||WData.weather[0].id == 521 || WData.weather[0].id == 522 ||
            WData.weather[0].id == 531){
            img.src = "./all/rain.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        //drizzle
        else if(WData.weather[0].id == 300 ||WData.weather[0].id == 301 ||WData.weather[0].id == 302 ||
            WData.weather[0].id == 310 ||WData.weather[0].id == 311 ||WData.weather[0].id == 312 ||
            WData.weather[0].id == 313 ||WData.weather[0].id == 314 || WData.weather[0].id == 321){
            img.src = "./all/drizzle.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        //thunderstorm with rain
        else if(WData.weather[0].id == 200 || WData.weather[0].id == 201 || WData.weather[0].id == 202 ||
            WData.weather[0].id == 230 || WData.weather[0].id == 231 || WData.weather[0].id == 232){
            img.src = "./all/thunderstorms-rain.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        //thunderstorm
        else if(WData.weather[0].id == 210 || WData.weather[0].id == 211 || WData.weather[0].id == 212 ||
            WData.weather[0].id == 221){
            img.src = "./all/thunderstorms.svg";
            weatherIcon(img,tempDesc,tempDiv,dataDiv,WData);
        }

        let infoDiv = document.createElement('div');
        infoDiv.setAttribute('id','infoDiv');

        //feels
        let feelsDiv = document.createElement('div')
        feelsDiv.setAttribute('id','feels');
        feelsDiv.innerText ="Feels like "+Math.round((WData.main.feels_like)-273.15)+"° C";
        infoDiv.appendChild(feelsDiv);

        //wind
        let windInfo = document.createElement('p');
        let windSpeed = Math.round(WData.wind.speed+(18/5));
        let windDeg = WData.wind.deg;
        windInfo.setAttribute('id', 'wind');

        //winddegree function
        windDirection(windDeg, windInfo, windSpeed, infoDiv, dataDiv);

        //humidity
        let humidity = document.createElement('p');
        humidity.setAttribute('id','humid');
        humidity.innerText = "Humidity: "+WData.main.humidity+"%";
        infoDiv.appendChild(humidity);

            //seacrh bar
            let searchDiv = document.createElement('div');
            searchDiv.setAttribute('id','searchDiv')

            let newSearch = document.createElement('input');
            newSearch.setAttribute('id','newploc');
            newSearch.setAttribute('type','text');
            newSearch.setAttribute('placeholder','Enter New location');
            newSearch.setAttribute('autocomplete','off');
            searchDiv.appendChild(newSearch);

            let newButton = document.createElement('button');
            newButton.setAttribute('type','button');
            newButton.setAttribute('id','newSearch');
            newButton.innerText="SEARCH";
            searchDiv.appendChild(newButton);
            dataDiv.appendChild(searchDiv);

            newButton.addEventListener('click', e => {
                newLocation(document.getElementById('newploc').value);
                dataDiv.remove();
            });

    }    
    catch(error)
    {
        let errorPage = document.createElement('div');
        errorPage.setAttribute('id','errorDiv');
        let errorInfo = document.createElement('p');
        errorInfo.setAttribute('id','errorInfo');
        errorInfo.innerText = "Sorry didn't get it :( Please Try again";
        errorPage.appendChild(errorInfo);
        document.getElementById('main').appendChild(errorPage);
        console.log("error")
    }
}

let search = document.getElementById("search");
search.addEventListener("click", e=> {
    let inploc = document.getElementById('inploc').value;
    getData(inploc)
    search.remove();
    document.getElementById('inploc').remove();
    document.getElementById('formDiv').remove();
})


//weather description function
let description = (a) => {
    let weatherDesc = document.createElement('p')
    weatherDesc.innerText = a;
    weatherDesc.setAttribute("id",'weatherDesc');
     return weatherDesc;
}

//display weather icons
let weatherIcon = (img,tempDesc,tempDiv,dataDiv,WData) => {
    img.setAttribute('id','icon');
    tempDesc.setAttribute('id','descp');
    tempDiv.appendChild(img);
    tempDiv.appendChild(tempDesc);
    tempDiv.appendChild(description(WData.weather[0].description));
    dataDiv.appendChild(tempDiv);
}

//wind display
let windDirection = (windDeg, windInfo, windSpeed, infoDiv, dataDiv) => {
    if((windDeg>=0 && windDeg<=23) || (windDeg>=337 && windDeg<=360)){
        windInfo.innerText = "Wind: "+windSpeed+" km/h, Direction: North ("+windDeg+"°)";
    }
    else if(windDeg>=28 && windDeg<=68){
        windInfo.innerText = "Wind: "+windSpeed+" km/h, Direction: North East ("+windDeg+"°)";
    }
    else if(windDeg>=69 && windDeg<=113){
        windInfo.innerText = "Wind: "+windSpeed+" km/h, Direction: East ("+windDeg+"°)";
    }
    else if(windDeg>=114 && windDeg<=158){
        windInfo.innerText = "Wind: "+windSpeed+" km/h, Direction: South East ("+windDeg+"°)";
    }
    else if(windDeg>=159 && windDeg<=203){
        windInfo.innerText = "Wind: "+windSpeed+" km/h, Direction: South ("+windDeg+"°)";
    }
    else if(windDeg>=204 && windDeg<=248){
        windInfo.innerText = "Wind: "+windSpeed+" km/h, Direction: South West ("+windDeg+"°)";
    }
    else if(windDeg>=249 && windDeg<=293){
        windInfo.innerText = "Wind: "+windSpeed+" km/h, Direction: West ("+windDeg+"°)";
    }
    else if(windDeg>=294 && windDeg<=336){
        windInfo.innerText = "Wind: "+windSpeed+" km/h, Direction: North West ("+windDeg+"°)";
    }
    else{
        windInfo.innerText = "";
    }
    infoDiv.appendChild(windInfo);
    dataDiv.appendChild(infoDiv);
}

let newLocation = (location) => {
    getData(location);
}