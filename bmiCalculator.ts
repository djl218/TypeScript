interface BmiValues {
  value1: number;
  value2: number;
}

const parseArguments = (args: Array<string>): BmiValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

const calculateBmi = (height: number, weight: number) => {
  if (height < 90) throw new Error('Too short of a height');
  if (weight < 10) throw new Error('Too small of a weight');
  
  const bmi = weight / height / height * 10000;
  
  if (bmi < 18.5) {
    console.log('Underweight (unhealthy weight)');
  } else if (bmi > 18.5 && bmi < 24.9) {
    console.log('Normal (healthy weight)');
  } else if (bmi > 25 && bmi < 30) {
    console.log('Overweight (unhealthy weight)');
  } else if (bmi > 30) {
    console.log('Obese (unhealthy weight)');
  }
}

try {
  const { value1, value2 } = parseArguments(process.argv);
  calculateBmi(value1, value2);
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}