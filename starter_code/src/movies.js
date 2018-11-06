/* eslint no-restricted-globals: 'off' */
function turnHoursToMinutes(arr) {
  var newarr = arr.map(function (mov) {
      var duracion = 0;
      if (isNaN(mov.duration)) {        
          var durarr = mov.duration.split(" ");
          var hrMin = 0;
          var min = 0;
          if (durarr.length < 2) {
              if (durarr[0].includes("h")) {
                  hrMin = durarr[0].split("h")[0] * 60;
              } else {
                  min = durarr[0].split("m")[0];
              }
          } else {
              hrMin = durarr[0].split("h")[0] * 60;
              min = durarr[1].split("m")[0];
          }

          duracion = parseInt(hrMin) + parseInt(min);
      } else {
          duracion = mov.duration;
      }
      return {
          title: mov.title,
          year: mov.year,
          director: mov.director,
          duration: duracion,
          genre: mov.genre,
          rate: mov.rate
      };
  });

  return newarr;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(mov){
  var totalRates = mov.reduce(function(sum, rates){
    return sum + parseInt(rates.rate);
  },0);
  return (totalRates/(mov.length));
}
// Get the average of Drama Movies
function dramaMoviesRate(mov){
var totalRates = mov.reduce(function (sum, rates) {
  if (rates.genre.indexOf("drama") && !isNaN(rates.rate)) {
      return sum + parseInt(rates.rate);
  } else {
      return sum;
  }
}, 0);
console.log(totalRates);
var contador = mov.reduce(function (sum, rates) {
  if (rates.genre.indexOf("drama")) {
      return sum + 1;
  } else {
      return sum;
  }
}, 0);
return (totalRates / (contador));}
 console.log(dramaMoviesRate(movies));
// Order by time duration, in growing order
function orderByDuration(mov){
  var movDur = mov.sort(function(a , b) {
    return a.duration - b.duration;
  });
  return movDur;
}
console.log(orderByDuration(movies));
// How many movies did STEVEN SPIELBERG
function howManyMovies(mov){
  var stevenDramaM = movies.filter(function(dm){
    return dm.director === 'Steven Spielberg' && dm.genre.includes('Drama');
  });
  if(stevenDramaM.director === 'Steven Spielberg'){
  return 'Steven Spielberg directed '+ stevenDramaM.length + ' drama movies!';
  } else{
  return 'Steven Spielberg directed '+ 0 +' drama movies!';
  }
}
console.log(howManyMovies(movies));
// Order by title and print the first 20 titles
function orderAlphabetically(mov){
var orderAmov = mov.map(function(a){
  var title = a.title;
  return title;
  });
  if(orderAmov.length > 20){
    return orderAmov.slice(230);
  } else {
    return orderAmov;
  }
}
console.log(orderAlphabetically(movies));
// Best yearly rate average
function bestYearAvg(mov){

}
