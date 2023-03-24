import React from "react";
import {QPage} from './QPage';
import { QResult } from "./QResult";

// const QResult = () => <div>Dummy Result</div>;

const industries = {
  'Technology': [3, 4, 2, 3, 5, 2, 5, 4, 5, 4, 1, 4, 1, 2, 1, 3, 5, 2, 2, 2],
  'Healthcare': [2, 2, 5, 5, 4, 5, 4, 5, 4, 5, 4, 4, 3, 5, 3, 4, 4, 2, 5, 3],
  'Finance': [3, 3, 3, 5, 4, 3, 4, 3, 3, 5, 2, 5, 1, 1, 1, 5, 2, 5, 2, 5],
  'Manufacturing': [4, 3, 3, 2, 4, 2, 4, 2, 2, 4, 4, 4, 2, 2, 3, 4, 4, 4, 4, 3],
  'Retail Trade': [3, 2, 4, 3, 2, 2, 2, 2, 2, 2, 4, 2, 1, 4, 4, 4, 4, 3, 5, 3],
  'Professional, Scientific, and Technical Services': [2, 5, 2, 2, 5, 3, 5, 5, 5, 5, 2, 5, 1, 1, 1, 5, 4, 4, 4, 3],
  'Transportation and Warehousing': [2, 2, 2, 2, 2, 2, 3, 3, 2, 3, 5, 3, 2, 2, 2, 4, 4, 4, 4, 4],
  'Construction': [3, 2, 2, 2, 2, 2, 3, 4, 2, 2, 5, 2, 2, 2, 2, 4, 5, 2, 2, 3],
  'Accommodation and Food Services': [2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 5, 2, 1, 5, 5, 5, 4, 5, 5, 3],
  'Wholesale Trade': [3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4, 4],
  'Educational Services': [2, 2, 4, 3, 3, 2, 2, 2, 4, 2, 2, 4, 2, 4, 4, 4, 4, 4, 4, 4],
  'Arts, Entertainment, and Recreation': [2, 5, 3, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 5, 5, 5, 4, 5, 5, 3],
  'Mining, Quarrying, and Oil and Gas Extraction': [2, 2, 2, 2, 3, 2, 3, 3, 2, 3, 3, 2, 1, 2, 2, 4, 4, 4, 4, 4],
  'Real Estate and Rental and Leasing': [2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 4, 4, 4, 4, 4],
  'Information': [4, 4, 2, 4, 5, 4, 4, 5, 5, 5, 2, 5, 1, 1, 1, 5, 4, 4, 4, 3],
  'Agriculture, Forestry, Fishing and Hunting': [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 3, 4, 2, 2, 3, 2, 3, 3, 3],
  'Public Administration': [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 5, 3, 2, 2, 2, 4, 4, 4, 4, 4],
  'Utilities': [2, 2, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 5, 4, 4, 4, 4],
  'Administrative and Support': [2, 2, 3, 2, 2, 2, 3, 4, 3, 3, 4, 3, 2, 2, 2, 4, 4, 4, 4, 4],
  'Management of Companies and Enterprises': [4, 4, 2, 4, 4, 4, 4, 5, 4, 5, 2, 5, 1, 1, 1, 5, 4, 4, 4, 3],
  'Other Services (except Public Administration)': [2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 5, 2, 3, 5, 5, 5, 4, 5, 5, 3]
}

const questions = [
  'I enjoy working independently.',
  'I am a creative person.',
  'I like working with people.',
]
//   'I am detail-oriented.',
//   'I am comfortable with technology.',
//   'I am comfortable with public speaking.',
//   'I enjoy problem-solving.',
//   'I am comfortable with ambiguity.',
//   'I am interested in science and/or mathematics.',
//   'I have strong analytical skills.',
//   'I am comfortable with physical activity.',
//   'I enjoy learning new things.',
//   'I am interested in environmental issues.',
//   'I am interested in helping others.',
//   'I am interested in the arts.',
//   'I am comfortable with deadlines.',
//   'I enjoy teamwork.',
//   'I am interested in business.',
//   'I am interested in healthcare.',
//   'I enjoy traveling.'
// ];
const maxWeight = 5;
const sumArray = arr => arr.reduce((sum, i) => sum + i + maxWeight, 0);

const scores = {};
const setPoints = (answers = []) => {
  Object.entries(industries).map(([industry, weights]) => {
    
  console.log({industry, weights})
    let score = 0;
    for (let i = 0; i < weights.length; i++) {
      if (answers[i] > 0) {
        score += weights[i] + maxWeight;
      } else {
        score += weights[i] * -1 + maxWeight;
      }
    }
    scores[industry] = score;
  });
}

const Career = () => {
  const [qidx, setQidx] = React.useState(0);
  console.log('rendering Career', qidx);
  const context = React.useRef([]);
  const appendWeight = num => {
    context.current.push(num);
  }
  const appendAnswer = (num = 1) => {
    context.current.push(num);
  }
  const yes = (point = 0) => {
    appendAnswer(1);
    setQidx(context.current.length);
    console.log('------context +:', context);
  };
  const no = (point = 0) => {
    appendAnswer(-1);
    setQidx(context.current.length);
    console.log('------context -:', context);
  };

  const averageWeights = () => {
    const avr = sumArray(context.current) / questions.length;
    return avr;
  }

  const calculate = () => {
    setPoints(context.current);
    // sort entries
    const sorted = Object.entries(scores);
    
    console.log('before sort:', sorted);
    sorted.sort(([k1, v1], [k2, v2]) => v2 - v1);
    console.log('sorted:', sorted);
    const [[industry, total]] = sorted;
    context.current.industry = industry;
    context.current.total = total;
    context.current.percent = total / (maxWeight * 2) * 100;
    // get top industry
  }
  
  if (qidx === questions.length) {
    calculate();
  }
  
  return (<>
    {/* {qidx} */}
    {qidx < questions.length ?
      <QPage primary text={questions[qidx]} label={String(qidx + 1).padStart(2, '0')} addPoint={yes} delPoint={no}/>
      :
      <QResult industry={context.current.industry} percent={context.current.percent}/>
    }
  </>);
};


export default Career;