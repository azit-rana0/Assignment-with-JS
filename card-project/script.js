const takeDataFromUser = () => {
  const firstName = prompt("Give your first name");
  const lastName = prompt("Give your last name");
  const country = prompt("Give from which country you are");
  const phoneNumber = prompt("Give your phone number");
  const state = prompt("Give your state");
  const city = prompt("Give your city");
  const village = prompt("Give your village");

  if (
    firstName == null ||
    lastName == null ||
    country == null ||
    isNaN(phoneNumber) ||
    state == null ||
    city == null ||
    village == null
  ) {
    alert("Invalid input");
  } else {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("country", country);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("state", state);
    localStorage.setItem("city", city);
    localStorage.setItem("village", village);
    alert("Data saved successfully");
  }
};

const renderData = () => {
  const keyArr = ["firstName", "lastName", "country", "phoneNumber", "state", "city", "village"];

  const valueList = document.querySelectorAll(".value");
  valueList.forEach((valueTag, index) => {
    valueTag.innerHTML = localStorage.getItem(keyArr[index]);
  });
};

if (!localStorage.getItem("firstName")) {
  takeDataFromUser();
}

renderData();
