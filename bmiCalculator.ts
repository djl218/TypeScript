type Result = string;

const calculateBmi = (height: number, weight: number): Result => {
  const bmi = weight / height / height * 10000;
  
  if (bmi < 18.5) {
    return 'Underweight (unhealthy weight)';
  } else if (bmi > 18.5 && bmi < 24.9) {
    return 'Normal (healthy weight)';
  } else if (bmi > 25 && bmi < 30) {
    return 'Overweight (unhealthy weight)';
  } else {
    return 'Obese (unhealthy weight)';
  }
}

try {
  console.log(calculateBmi(180, 74))
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}

console.log(process.argv)