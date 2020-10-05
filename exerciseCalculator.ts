interface ExerciseValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const parseArguments = (args: Array<number>, target: number): ExerciseValues => {
  let count = 0;
  const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
  const sum = args.reduce(reducer)
  let rating = 0;
  let ratingDescription = '';

  const periodLength = args.length;
  const average =  (sum / args.length); 
  const success = average > target ? true : false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] > 0) {
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

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  }
}

try {
  console.log(parseArguments([3, 0, 2, 4.5, 0, 3, 1], 2));
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}

console.log(process.argv);