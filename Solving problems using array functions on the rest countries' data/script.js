var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function() {
    var res=JSON.parse(request.response);
    // console.log(res);

// a. Get all the countries from the Asia continent /region using the Filter function;

var asian = res.filter((element)=>element.region == "Asia");
console.log(asian);

// b. Get all the countries with a population of less than 2 lakhs using Filter function;

var population = res.filter((element)=>element.population<200000);
console.log(population);

// c. Print the following details name, capital, flag using forEach function;

res.forEach((ele)=>console.log(`Country Name:${ele.name.common} ; Capital:${ele.capital} ; Flag:${ele.flags.svg}`));

// d. Print the total population of countries using reduce function;

var tpop = res.reduce((acc,cv)=>acc+cv.population,0);
console.log("Total country population is : " + tpop);

// e. Print the country which uses US Dollars as currency;

var currency = res.filter((ele)=>ele.currencies == 'USD').map((ele)=>ele.name.common);
console.log(currency);

}