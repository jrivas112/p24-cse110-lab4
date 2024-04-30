let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
}


for (let n in statistics) {
  if(`${n}`.indexOf("r") == 0 || (`${statistics[n]}` % 2 != 0 )){
    console.log(`${statistics[n]}`);
  }
}