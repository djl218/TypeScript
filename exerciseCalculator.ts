interface ParsedValues {
  value1: number;
  value2: Array<number>;
}

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const interpretArguments = (args: Array<string>): ParsedValues => {
  if (args.length < 4) throw new Error('Not enough arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: args.map(Number).slice(3)
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

export const calculateExercise = (target: number, hours: Array<number>): Result=> {
  let count = 0;
  const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
  const sum: number = hours.reduce(reducer);
  let rating = 0;
  let ratingDescription = '';

  const periodLength = hours.length;
  const average =  (sum / hours.length); 
  const success = average > target ? true : false;

  for (let i = 0; i < hours.length; i++) {
    if (hours[i] > 0) {
      count++;
    }
  }

  const trainingDays = count;

  if (average > target) {
    rating = 3;
    ratingDescription = 'good job!';
  } else if (average < target) {
    rating = 2;
    ratingDescription = 'not too bad but could be better';
  } else if (average < 1){
    rating = 1;
    ratingDescription = 'not enough exercise';
  }

  const exerciseValues = {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  };

  console.log(exerciseValues);

  return exerciseValues;
};

try {
  const { value1, value2 } = interpretArguments(process.argv);
  calculateExercise(value1, value2);
} catch (e) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log('Something went wrong, error message: ', e.message);
}