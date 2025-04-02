import { Question } from "./types";

function extraxtAnswer(questions: Question[], group: string, letter: string) {
  const filteredQuestions = questions.filter(
    (question) => question.group === group
  );
  return filteredQuestions.reduce((acc, question) => {
    const answer = question.answer;
    if (answer === letter) {
      acc++;
    }
    return acc;
  }, 0);
}

function calculateMBTI(questions: Question[]) {
  const EI =
    extraxtAnswer(questions, "EI", "E") > extraxtAnswer(questions, "EI", "I")
      ? "E"
      : "I";
  const SN =
    extraxtAnswer(questions, "SN", "S") > extraxtAnswer(questions, "SN", "N")
      ? "S"
      : "N";
  const TF =
    extraxtAnswer(questions, "TF", "T") > extraxtAnswer(questions, "TF", "F")
      ? "T"
      : "F";
  const JP =
    extraxtAnswer(questions, "JP", "J") > extraxtAnswer(questions, "JP", "P")
      ? "J"
      : "P";

  return `${EI}${SN}${TF}${JP}`;
}

export { calculateMBTI };
