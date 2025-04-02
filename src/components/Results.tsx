import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { personalityTypes } from "../data";
import { useMemo } from "react";

import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";

const Results = ({ data }: { data: string }) => {
  // Find the matching personality type from the data
  const personalityType = useMemo(() => {
    console.log("Data:", data);
    return personalityTypes.find((type) => type.type === data) || null;
  }, [data]);

  if (!personalityType) {
    return (
      <DialogContent className="overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Please answer all questions</DialogTitle>
          <DialogDescription>
            You need to complete all questions to see your personality type
            results.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    );
  }

  return (
    <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-auto">
      <ScrollArea className="h-full pr-4">
        <DialogHeader className="text-center pb-2">
          <Badge variant="outline" className="mx-auto mb-2 text-lg px-3 py-1">
            {personalityType.type}
          </Badge>
          <DialogTitle className="text-2xl font-bold">
            {personalityType.type.split("").join("-")}
          </DialogTitle>
          <DialogDescription className="text-lg mt-2">
            {personalityType.description}
          </DialogDescription>
        </DialogHeader>

        <Separator className="my-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Strengths */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-green-600 dark:text-green-400">
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {personalityType.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Weaknesses */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-red-600 dark:text-red-400">
                Weaknesses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {personalityType.weaknesses.map((weakness, index) => (
                  <li key={index}>{weakness}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Careers */}
        <Card className="mt-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-blue-600 dark:text-blue-400">
              Ideal Careers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {personalityType.careers.map((career, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {career}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Relationships */}
        <Card className="mt-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-purple-600 dark:text-purple-400">
              Relationships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              {personalityType.relationships.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Famous People */}
        <Card className="mt-4 mb-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-amber-600 dark:text-amber-400">
              Famous People
            </CardTitle>
            <CardDescription>
              Notable individuals with this personality type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {personalityType.famousPeople.map((person, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {person}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </ScrollArea>
    </DialogContent>
  );
};

export default Results;
