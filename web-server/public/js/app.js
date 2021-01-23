(async () => {
  const resp = await fetch("http://localhost:3000/weather?address=!");
  const data = await resp.json();

  if (data.error) {
    console.log(data.error);
  } else {
    console.log(data);
  }
})();
