const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission & page reload

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerText = 'Please enter a valid height';
  } else if (isNaN(weight) || weight <= 0) {
    results.innerText = 'Please enter a valid weight';
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);

    let category;

    if (bmi < 18.6) {
      category = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = 'Normal weight';
    } else {
      category = 'Overweight';
    }
    results.innerText = `Your BMI is ${bmi} and status is ${category}`;
  }
});
