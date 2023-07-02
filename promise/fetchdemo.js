const fetchData = () => {
  fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
  })
    .then((res) => {
      res
        .json()
        .then((data) => {
          //html
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchData1 = async () => {
  const res = await fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
};

const addData = async () => {
  const data = {
    name: "morpheus",
    job: "leader",
  };

  const res = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  console.log(resData);
};

fetchData();
fetchData1();
addData();

function getUserCurrentLocation() {

    var location ={}
  const successCallback = (position) => {
    console.log(position.coords.latitude, position.coords.longitude);

  };

  const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  console.log("location...",location);
  return location;
}
//getUserCurrentLocation();

async function forcastWeather() {
    var location = getUserCurrentLocation();
    console.log("location...",location);
  const res = await fetch(
    "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon="+location.lon+"&lat"+location.lat,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6",
        "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      },
    }
  );
  const data = await res.json();
    console.log(data);
}

forcastWeather();
