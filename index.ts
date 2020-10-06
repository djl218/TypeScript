import { calculateBmi } from "./bmiCalculator";

import express from 'express';
const app = express();

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

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});