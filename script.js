function myFunction(text) {
  var h = document.createElement("H1");
  var t = document.createTextNode(text);

  h.appendChild(t);

  document.body.appendChild(h);
}

myFunction("You will find assignment in Console🌟");

//Question 1: How to compare two JSON have the same properties without order?
//Solution:

let obj1 = {
  name: "Person 1",
  age: 5,
};

let obj2 = {
  age: 5,
  name: "Person 1",
};

let result = true;

for (let key in obj1) {
  if (obj1[key] !== obj2[key]) {
    result = false;
    break;
  }
}

console.log(result);

//Output: true;

//*************************************************************************************************************
//Question 2: Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console.

//Creating an XMLHTTPRequest Object (Has the capability to load data from server)
const countriesRequest = new XMLHttpRequest(); //Instantiating

//Opening a connection to Internet (Configuration)
countriesRequest.open("GET", "https://restcountries.com/v3.1/all");

//Actually making the request
countriesRequest.send();

//Get the data in desired format
countriesRequest.onload = function () {
  const countries = JSON.parse(countriesRequest.responseText);

  countries.forEach((Country) => {
    console.log(
      "Country Name:",
      Country.name.common,
      ", Country Flag: ",
      Country.flag
    );
  });
};

/*
Output:
Country Name: ... , Country Flag:  ...
 */

//*************************************************************************************************************
//Question 3: Use the same rest countries and print all countries names, regions, sub-region and populations.

//Creating an XMLHTTPRequest Object (Has the capability to load data from server)
const newCountriesRequest = new XMLHttpRequest();

//Opening a connection to Internet (Configuration)
newCountriesRequest.open("GET", "https://restcountries.com/v3.1/all");

//Actually making the request
newCountriesRequest.send();

//Get the data in desired format
newCountriesRequest.onload = function () {
  const newCountries = JSON.parse(newCountriesRequest.responseText);

  newCountries.forEach((newCountry) => {
    console.log(`
      Name : ${newCountry.name.common},
      Region : ${newCountry.region},
      Subregion : ${newCountry.subregion},
      Population : ${newCountry.population}
    `);
  });
};

/*
Output:
Name : ...,
Region : ...,
Subregion : ...,
Population : ...
 */
