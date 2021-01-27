const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const firstMsg = document.querySelector("#msg-1");
const secondMsg = document.querySelector("#msg-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  firstMsg.innerText = "Loading...";
  secondMsg.innerText = "";

  fetchWearherData(location);
});

const fetchWearherData = async (address) => {
  const resp = await fetch("/weather?address=" + address);
  const data = await resp.json();

  if (data.error) {
    console.log(data.error);
    firstMsg.innerText = data.error;
  } else {
    console.log(data);
    firstMsg.innerText = data.location;
    secondMsg.innerText = data.forecast;
  }
};
