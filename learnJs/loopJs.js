const weatherToday = (weather) => {
  switch (weather) {
    case 'sunny':
      return 'It is sunny today!';
    case 'rainy':
      return 'It is rainy today!';
    case 'cloudy':
      return 'It is cloudy today!';
    default:
      return 'Weather condition not recognized.';
  }
}

const weather = 'sunny';
console.log(weatherToday(weather));