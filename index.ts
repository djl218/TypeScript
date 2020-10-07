import { calculateBmi } from "./bmiCalculator";
import { calculateExercise } from "./exerciseCalculator";

import express from 'express';
const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height_ = Number(req.query.height);
  const weight_ = Number(req.query.weight);

  if (Number.isInteger(height_) && Number.isInteger(weight_)) {
    res.send(calculateBmi(height_, weight_));
  } else {
    res.send({
      error: "malformatted parameters"
    });
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const body = req.body;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let hours: any = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let target: any = 0;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (Array.isArray(body.daily_exercises)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    hours = (body.daily_exercises).map(Number);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  } else if (body.daily_exercises === undefined) {
    hours = undefined;
  } else {
    hours = null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!isNaN(body.target)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    target = Number(body.target);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  } else if (body.target === undefined) {
    target = undefined;
  } else {
    target = null;
  }

  if (hours === undefined || target === undefined) {
    res.send({
      error: "parameters missing"
    });
  } else if (hours === null || target === null){
    res.send({
      error: "malformatted parameters"
    });  
  } else {
    res.send(calculateExercise(target, hours));
  }
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});