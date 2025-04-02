import { useState } from "react";
import { Question } from "./types";
import { questions as data } from "./data";
import { Label } from "./components/ui/label";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { calculateMBTI } from "./functions";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/card";
import { ChevronRight } from "lucide-react";

import { Dialog, DialogTrigger } from "./components/ui/dialog";
import Results from "./components/Results";

function App() {
  const [questions, setQuestions] = useState<Question[]>(data);
  const [results, setResults] = useState<string>("");

  return (
    <div>
      <SiteHeader />
      <div className="py-12 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900/50 rounded-lg mb-6">
        <h1 className="text-4xl font-bold text-center mb-4">
          Myers-Briggs Type Indicator
        </h1>
        <div className="text-center max-w-3xl px-6">
          <p className="mb-4">
            MBTI stands for Myers-Briggs Type Indicator. It is a personality
            assessment tool that categorizes people into 16 different
            personality types based on four key dichotomies:
          </p>
          <ul className="space-y-2 mb-4 text-left mx-auto max-w-2xl">
            <li className="flex gap-2">
              <span className="font-semibold">
                Extraversion (E) vs. Introversion (I):
              </span>
              <span>How you gain energy (from people vs. solitude)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">
                Sensing (S) vs. Intuition (N):
              </span>
              <span>
                How you take in information (facts vs. patterns/ideas)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">
                Thinking (T) vs. Feeling (F):
              </span>
              <span>How you make decisions (logic vs. emotions)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">
                Judging (J) vs. Perceiving (P):
              </span>
              <span>
                How you approach the outside world (structured vs. flexible)
              </span>
            </li>
          </ul>
          <p className="text-sm italic">
            For example, INFP means Introversion, Intuition, Feeling, and
            Perceiving.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className=" p-6 rounded shadow-md w-full ">
          <div className="flex flex-col gap-4">
            {questions.map((question: Question, index) => (
              <Card key={question.id} className="md:w-1/2 mx-auto w-full">
                <CardHeader>
                  <CardDescription>
                    Question {index + 1} of {questions.length}
                  </CardDescription>
                  <CardTitle>
                    {" "}
                    <Label
                      htmlFor={`question-${index}`}
                      className="block mb-2 text-xl"
                    >
                      {question.text}
                    </Label>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div key={question.id} className="mb-4">
                    <RadioGroup
                      className=" flex justify-between"
                      id={`question-${index}`}
                      onValueChange={(prev) => {
                        const updatedQuestions = [...questions];
                        updatedQuestions[index].answer = prev;
                        setQuestions(updatedQuestions);
                      }}
                    >
                      {question.options.map((option) => (
                        <div
                          key={option.letter}
                          className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent cursor-pointer w-2/3"
                        >
                          <RadioGroupItem
                            id={`option-${index}-${option.letter}`}
                            value={option.letter}
                          />
                          <Label
                            htmlFor={`option-${index}-${option.letter}`}
                            className="w-full cursor-pointer"
                          >
                            {option.text}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex items-center mt-6 justify-center gap-4 hover:bg-accent cursor-pointer rounded-md px-4 py-2 w-fit mx-auto">
            <Dialog>
              <DialogTrigger
                className="flex items-center justify-center "
                onClick={() => {
                  const results = calculateMBTI(questions);
                  setResults(results);
                }}
              >
                <Label
                  htmlFor="submit"
                  className="block mb-2 text-center text-lg font-semibold"
                >
                  See Your Results
                </Label>
                <ChevronRight className="ml-1 h-4 w-4" />
              </DialogTrigger>
              {results && <Results data={results} />}
            </Dialog>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

export default App;
