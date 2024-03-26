
window.onload = function () {
  let checkbox = document.getElementById("myCheckbox");
  let threeD = localStorage.getItem("3d");
  let themeD = localStorage.getItem("theme");
  let styleDList = localStorage.getItem('styleList');
  let cusCssPlace = document.getElementById("cusCSS");
  console.log(styleDList + "this is style");
  if (threeD == 'on') {
    checkbox.click();
  }
  if (themeD == 'Dark') {
    document.querySelector("input#Dark").click();
  }
  if (themeD == 'Light') {
    document.querySelector("input#Light").click();
  }
  if (themeD == 'custom-theme') {
    document.querySelector("input#custom-theme").click();
    let pcolor = localStorage.getItem("primary-color");
    document.getElementById("colorPicker").value = pcolor;
    let ptext = localStorage.getItem("primary-text");
    document.getElementById("colorPickertext").value = ptext;

    let scolor = localStorage.getItem("secondary-color");
    document.getElementById("colorPicker2").value = scolor;
    let stext = localStorage.getItem("secondary-text");
    document.getElementById("colorPicker2text").value = stext;
    let customcss = `
  <style>body{
    background:${pcolor}; 
    color: ${ptext};
}
#sidNav, #list li{
  background:${scolor} !important; 
    color: ${stext};
}
</style>`;
    cusCssPlace.innerHTML = customcss;
  }
  if (styleDList == 'List') {
    document.querySelector("input#List").click();
    console.log("list must be clicked");
  }
  if (styleDList == 'Grid') {
    document.querySelector("input#Grid").click();
    console.log("grid must be clicked");
  }
};

let list = document.getElementById('list');

var theme = document.querySelectorAll('input[type=radio][name="theme"]');
var styledd = document.querySelectorAll('input[type=radio][name="style"]');
var customTheme = document.getElementById("custom-theme-options");

var checkbox = document.getElementById("myCheckbox");
checkbox.addEventListener("click", function () {
  if (checkbox.checked) {

    document.body.classList.add('addDetails');
    localStorage.setItem("3d", 'on');
  } else {

    document.body.classList.remove('addDetails');
    localStorage.setItem("3d", 'off');
  }
});


var cusCss = document.getElementById("cusCSS");
theme.forEach(function (themes) {
  themes.addEventListener('click', function () {
    var selectedFruit = document.querySelector('input[type=radio][name="theme"]:checked').value;

    document.body.classList.remove('Light', 'Dark', 'Minimalist');
    document.body.classList.add(selectedFruit);
    localStorage.setItem("theme", selectedFruit);
    if (selectedFruit == 'custom-theme') {
      customTheme.style.display = "block";
    }
    else {
      customTheme.style.display = "none";
      cusCss.innerHTML = '';
    }
  });
});

styledd.forEach(function (styles) {

  styles.addEventListener('click', function () {
    console.log(styles);

    var selectedFruit = document.querySelector('input[type=radio][name="style"]:checked').value;

    document.body.classList.remove('List', 'Grid');
    document.body.classList.add(selectedFruit);
    localStorage.setItem("styleList", selectedFruit);
  });
});
var applyBtn = document.getElementById("apply");

applyBtn.addEventListener("click", function () {

  var colorPicker = document.getElementById("colorPicker").value;
  localStorage.setItem("primary-color", colorPicker);
  var colorPickertext = document.getElementById("colorPickertext").value;
  localStorage.setItem("primary-text", colorPickertext);
  var colorPicker2 = document.getElementById("colorPicker2").value;
  localStorage.setItem("secondary-color", colorPicker2);
  var colorPicker2text = document.getElementById("colorPicker2text").value;
  localStorage.setItem("secondary-text", colorPicker2text);

  var CustomThemeCss = `
    <style>body{
      background:${colorPicker}; 
      color: ${colorPickertext};
  }
  #sidNav, #list li{
    background:${colorPicker2} !important; 
      color: ${colorPicker2text};
  }
  </style>`;
  cusCss.innerHTML = CustomThemeCss;

});
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countryList = document.getElementById('list');
    data.forEach(country => {
      const countryName = country.name.common;
      const flagUrl = country.flags.svg;
      const latlng = country.latlng;
      const listItem = document.createElement('li');
      const flagImg = document.createElement('img');
      flagImg.src = flagUrl;
      flagImg.alt = countryName + ' Flag';
      listItem.appendChild(flagImg);
      listItem.appendChild(document.createTextNode(countryName));
      const googleMapsLink = document.createElement('a');
      googleMapsLink.textContent = ' (Google Maps)';
      googleMapsLink.href = `https://www.google.com/maps/search/?api=1&query=${latlng.join(',')}`;
      googleMapsLink.target = '_blank';
      listItem.appendChild(googleMapsLink);

      countryList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching countries:', error));



let navsetting = document.getElementById('Settings');
let sidNav = document.getElementById('sidNav');
let closeNav = document.getElementById('close');
navsetting.addEventListener("click", function () {
  sidNav.style.display = 'block';

});

closeNav.addEventListener("click", function () {
  sidNav.style.display = 'none';

});