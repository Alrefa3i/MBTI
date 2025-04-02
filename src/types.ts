interface Option {
  letter: "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
  text: string;
}
export interface Question {
  id: number;
  text: string;
  group: "EI" | "SN" | "TF" | "JP";
  options: Option[];
  answer?: string;
}

export interface PersonalityType {
  type:
    | "INTJ"
    | "INTP"
    | "ENTJ"
    | "ENTP"
    | "INFJ"
    | "INFP"
    | "ENFJ"
    | "ENFP"
    | "ISTJ"
    | "ISFJ"
    | "ESTJ"
    | "ESFJ"
    | "ISTP"
    | "ISFP"
    | "ESTP"
    | "ESFP";
  description: string;
  strengths: string[];
  weaknesses: string[];
  careers: string[];
  relationships: string[];
  famousPeople: string[];
}
