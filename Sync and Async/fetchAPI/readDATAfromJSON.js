console.log("-----------------------------------------------------------");
const resultData = document.querySelector(".result");

async function renderData() {
  try {
    let response = await fetch("user-data.json");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.json();
    resultData.textContent =  `Name: ${data.name} | Age: ${data.age}`;
  } catch (error) {
    resultData.textContent = "ERROR LOADING JSON " + error;
  }
}

renderData();