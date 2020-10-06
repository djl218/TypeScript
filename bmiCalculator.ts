interface BmiValues {
  value1: number;
  value2: number;
}

interface Result {
  weight: number;
  height: number;
  bmi: string;
}

const parseArguments = (args: Array<string>): BmiValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

export const calculateBmi = (height_: number, weight_: number): Result => {
  if (height_ < 90) throw new Error('Too short of a height');
  if (weight_ < 10) throw new Error('Too small of a weight');
  
  const bmi: number = weight_ / height_ / height_ * 10000;
  let message = '';
  
  if (bmi < 18.5) {
    message = 'Underweight (unhealthy weight)';
    console.log(message);
  } else if (bmi > 18.5 && bmi < 24.9) {
    message = 'Normal (healthy weight)';
    console.log(message);
  } else if (bmi > 25 && bmi < 30) {
    message = 'Overweight (unhealthy weight)';
    console.log(message);
  } else if (bmi > 30) {
    message = 'Obese (unhealthy weight)';
    console.log(message);
  }

  return {
    weight: weight_,
    height: height_,
    bmi: message
  };
};

try {
  const { value1, value2 } = parseArguments(process.argv);
  calculateBmi(value1, value2);
} catch (e) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log('Something went wrong, error message: ', e.message);
}