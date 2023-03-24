from pprint import pprint

industries = {
  'Faker': [5, 5, 5, 3, 5, 2, 5, 4, 5, 4, 1, 4, 1, 2, 1, 3, 5, 2, 2, 2],
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

questions = [
  'I enjoy working independently.',
  'I am a creative person.',
  'I like working with people.',
  'I am detail-oriented.',
  'I am comfortable with technology.',
  'I am comfortable with public speaking.',
  'I enjoy problem-solving.',
  'I am comfortable with ambiguity.',
  'I am interested in science and/or mathematics.',
  'I have strong analytical skills.',
  'I am comfortable with physical activity.',
  'I enjoy learning new things.',
  'I am interested in environmental issues.',
  'I am interested in helping others.',
  'I am interested in the arts.',
  'I am comfortable with deadlines.',
  'I enjoy teamwork.',
  'I am interested in business.',
  'I am interested in healthcare.',
  'I enjoy traveling.'
]

print("Answer the following questions y True or n.")
answers = []
for question in questions:
  answer = input(question + " ")
  while answer.lower() not in ['y', 'n']:
    answer = input("Please answer with y or n. ")
  answers.append(answer.lower() == 'y')

scores = {}
for industry in industries:
  weights = industries[industry]
  score = 0
  for i in range(len(questions)):
    if answers[i] == True:
      score += weights[i]
    else:
      score -= weights[i]
  scores[industry] = score

pprint(scores)
top_industry = max(scores, key=scores.get)
percent = (scores[top_industry]  / len(questions) + 5) / 10 * 100
print(f"Based on your answers, you are best suited for the {top_industry} industry.{percent}% match")






