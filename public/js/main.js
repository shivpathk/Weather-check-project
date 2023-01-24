const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");

const temp_real_val = document.getElementById('temp_real_val')
const temp_status = document.getElementById('temp_status')

const dataHide = document.querySelector('.middle_layer')

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Plz write the name before search`;
    dataHide.classList.add('data_hide')
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6d7235af16bb08ce567aa7d4933919ee`;
      const response = await fetch(url);
      const data = await response.json()
      const arrData = [data];

      city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;

      const tempMood = arrData[0].weather[0].main;


    //   condition to check sunny or cloudy
    if(tempMood === "Clear"){
        temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></>"
    }else if(tempMood==="Clouds"){
        temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></>";
    }else if(tempMood==="Rain"){
        temp_status.innerHTML="<i class='fas fa-rain' style='color: #a4b0be;'></>"
    }else{
        temp_status.innerHTML = "<i class='fas fa=cloud' style = 'color:#f1f2f6;'></i>";
    }
    dataHide.classList.remove('data_hide')

    } catch {
      city_name.innerText = `Plz Enter a Valid City Name`;
      dataHide.classList.add('data_hide')
    }
  }
};

submitBtn.addEventListener("click", getInfo);
