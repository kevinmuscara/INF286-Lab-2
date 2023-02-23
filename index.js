function findLargest(numbers) {
  let largest = numbers[0];
  for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > largest)
      largest = numbers[i];
  }

  return largest;
}

function eventHandler() {
  let numbers = document.getElementById('numbers').textContent;
  let largest = findLargest(numbers.split(','));
  document.getElementById('result').textContent = `The largest number is: ${largest}`;
}

function eventHandler2() {
  const url = "https://api.weather.gov/gridpoints/ILN/37,34/forecast/hourly"
  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', url);
  xhr.onload = function() {
    if(xhr.status === 200) {
      let temperature = JSON.parse(xhr.responseText).properties.periods[0].temperature;
      document.getElementById('result2').textContent = `It is currently ${temperature} fahrenheit.`;
    } else {
      document.getElementById('result2').textContent = "There was an error fetching the API.";
    }
  };

  xhr.send();
}

function generateRandomArray(length, min, max) {
  let randomArray = [];
  for(let i = 0; i < length; i++) {
    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomInt);
  }

  return randomArray
}

function generateNewList() {
  document.getElementById('numbers').textContent = generateRandomArray(6, 0, 100);
  document.getElementById('result').textContent = 'Click me to find the largest number in the list above.';
}

window.onload = () => generateNewList();