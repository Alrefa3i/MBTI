import { Question, PersonalityType } from "./types";

export const TotlalQuestionsPerType = 5;

export const questions: Question[] = [
  // Extraversion vs. Introversion (EI)
  {
    id: 0,
    group: "EI",
    text: "When you are in a group of people, would you usually rather:",
    options: [
      { letter: "E", text: "Join in the talk of the group" },
      { letter: "I", text: "Talk individually with people you know" },
    ],
  },
  {
    id: 1,
    group: "EI",
    text: "Do you prefer being the center of attention or remaining in the background?",
    options: [
      { letter: "E", text: "Being the center of attention" },
      { letter: "I", text: "Remaining in the background" },
    ],
  },
  {
    id: 2,
    group: "EI",
    text: "At social gatherings, do you:",
    options: [
      { letter: "E", text: "Mingle with many people" },
      { letter: "I", text: "Stick with a few close friends" },
    ],
  },
  {
    id: 3,
    group: "EI",
    text: "Do you feel recharged by:",
    options: [
      { letter: "E", text: "Interacting with others" },
      { letter: "I", text: "Spending time alone" },
    ],
  },
  {
    id: 4,
    group: "EI",
    text: "When making plans, do you prefer:",
    options: [
      { letter: "E", text: "Group activities" },
      { letter: "I", text: "Personal time or one-on-one interactions" },
    ],
  },

  // Sensing vs. Intuition (SN)
  {
    id: 5,
    group: "SN",
    text: "Do you prefer to focus on:",
    options: [
      { letter: "S", text: "Concrete facts and details" },
      { letter: "N", text: "Abstract ideas and theories" },
    ],
  },
  {
    id: 6,
    group: "SN",
    text: "When solving problems, do you rely more on:",
    options: [
      { letter: "S", text: "Past experiences and proven methods" },
      { letter: "N", text: "Innovative approaches and gut feelings" },
    ],
  },
  {
    id: 7,
    group: "SN",
    text: "Do you prefer discussions that are:",
    options: [
      { letter: "S", text: "Practical and realistic" },
      { letter: "N", text: "Speculative and imaginative" },
    ],
  },
  {
    id: 8,
    group: "SN",
    text: "When learning something new, do you:",
    options: [
      { letter: "S", text: "Focus on details and specifics" },
      {
        letter: "N",
        text: "Look for the big picture and underlying principles",
      },
    ],
  },
  {
    id: 9,
    group: "SN",
    text: "When reading, do you prefer material that is:",
    options: [
      { letter: "S", text: "Fact-based and straightforward" },
      { letter: "N", text: "Conceptual and open to interpretation" },
    ],
  },

  // Thinking vs. Feeling (TF)
  {
    id: 10,
    group: "TF",
    text: "When making decisions, do you rely more on:",
    options: [
      { letter: "T", text: "Objective logic and analysis" },
      { letter: "F", text: "Personal values and feelings" },
    ],
  },
  {
    id: 11,
    group: "TF",
    text: "In conflict situations, do you tend to:",
    options: [
      { letter: "T", text: "Focus on resolving the issue logically" },
      { letter: "F", text: "Consider the emotional impact on everyone" },
    ],
  },
  {
    id: 12,
    group: "TF",
    text: "Do you find it easier to:",
    options: [
      { letter: "T", text: "Critique ideas based on their merits" },
      {
        letter: "F",
        text: "Empathize with others and understand their feelings",
      },
    ],
  },
  {
    id: 13,
    group: "TF",
    text: "When receiving feedback, do you prefer it to be:",
    options: [
      { letter: "T", text: "Direct and factual" },
      { letter: "F", text: "Gentle and considerate" },
    ],
  },
  {
    id: 14,
    group: "TF",
    text: "Do you value more:",
    options: [
      { letter: "T", text: "Fairness and consistency" },
      { letter: "F", text: "Compassion and empathy" },
    ],
  },

  // Judging vs. Perceiving (JP)
  {
    id: 15,
    group: "JP",
    text: "When planning your day, do you prefer:",
    options: [
      { letter: "J", text: "A well-structured schedule" },
      { letter: "P", text: "A flexible, spontaneous plan" },
    ],
  },
  {
    id: 16,
    group: "JP",
    text: "Do you like to have your plans:",
    options: [
      { letter: "J", text: "Clearly defined in advance" },
      { letter: "P", text: "Open-ended with room for change" },
    ],
  },
  {
    id: 17,
    group: "JP",
    text: "When working on a project, do you prefer:",
    options: [
      { letter: "J", text: "A clear plan and timeline" },
      { letter: "P", text: "A more spontaneous approach" },
    ],
  },
  {
    id: 18,
    group: "JP",
    text: "Do you find it easier to:",
    options: [
      { letter: "J", text: "Stick to a schedule" },
      { letter: "P", text: "Adapt as you go" },
    ],
  },
  {
    id: 19,
    group: "JP",
    text: "In your free time, do you prefer to:",
    options: [
      { letter: "J", text: "Plan activities ahead of time" },
      { letter: "P", text: "Decide on the spur of the moment" },
    ],
  },
];

export const personalityTypes: PersonalityType[] = [
  {
    type: "INTJ",
    description:
      "The Architect: INTJs are strategic visionaries who design long‐term plans by synthesizing complex ideas with analytical precision.",
    strengths: [
      "High confidence in their insights",
      "Self-reliant and independent",
      "Relentlessly determined to reach goals",
      "Open to unconventional solutions",
      "Deeply curious about abstract systems",
    ],
    weaknesses: [
      "Overly critical when evaluating ideas",
      "Perfectionistic tendencies can stall progress",
      "May appear arrogant in interpersonal interactions",
      "Resistant to altering firmly held convictions",
      "Tends to prioritize logic over emotional nuances",
    ],
    careers: [
      "Research Scientist",
      "Systems Engineer",
      "Legal Strategist",
      "University Professor",
      "Software Developer",
    ],
    relationships: [
      "Value intellectual stimulation and mutual autonomy",
      "May struggle with overt emotional expression while remaining deeply loyal",
    ],
    famousPeople: [
      "Isaac Newton",
      "Stephen Hawking",
      "Elon Musk",
      "Marie Curie",
    ],
  },
  {
    type: "INTP",
    description:
      "The Logician: INTPs are analytical problem-solvers who thrive on unraveling abstract concepts and exploring innovative theories.",
    strengths: [
      "Highly analytical and reflective",
      "Open-minded and receptive to new ideas",
      "Intensely curious about how things work",
      "Independent in thought and method",
      "Innovative in generating theoretical models",
    ],
    weaknesses: [
      "Excessively critical of ideas, including their own",
      "Can be stubborn when challenged on their logic",
      "Often disorganized in day-to-day affairs",
      "Tends to overlook practical details",
      "May experience social awkwardness in interpersonal settings",
    ],
    careers: [
      "Research Scientist",
      "Philosopher",
      "Software Developer",
      "Mathematician",
      "Technical Writer",
    ],
    relationships: [
      "Seek intellectually engaging and autonomous relationships",
      "May find emotional expression challenging while remaining committed",
    ],
    famousPeople: [
      "Albert Einstein",
      "Charles Darwin",
      "Bill Gates",
      "Marie Curie",
    ],
  },
  {
    type: "ENTJ",
    description:
      "The Commander: ENTJs are decisive and assertive leaders who excel in organizing complex strategies and inspiring others to achieve shared objectives.",
    strengths: [
      "Natural leadership and decisiveness",
      "Strategic in planning and execution",
      "Confident in decision-making",
      "Efficient and goal-oriented",
      "Skilled at organizing teams and resources",
    ],
    weaknesses: [
      "Can be overly critical in pursuit of efficiency",
      "May be inflexible when plans face unexpected challenges",
      "At times, may come off as arrogant",
      "Impatience with slower processes or ideas",
      "Tendency to dominate discussions and decision-making",
    ],
    careers: [
      "Executive Manager",
      "Entrepreneur",
      "Corporate Strategist",
      "Attorney",
      "Consultant",
    ],
    relationships: [
      "Value ambition, competence, and clear goals in partnerships",
      "May find it challenging to express vulnerability, yet remain loyal",
    ],
    famousPeople: [
      "Napoleon Bonaparte",
      "Margaret Thatcher",
      "Franklin D. Roosevelt",
    ],
  },
  {
    type: "ENTP",
    description:
      "The Debater: ENTPs are innovative and agile thinkers who relish intellectual challenges and are adept at deconstructing ideas through lively debate.",
    strengths: [
      "Inventive and quick-witted",
      "Energetic in generating ideas",
      "Skilled at thinking on their feet",
      "Highly curious about diverse subjects",
      "Capable of seeing multiple sides of an issue",
    ],
    weaknesses: [
      "May engage in contentious debates for their own sake",
      "Can struggle with maintaining organization",
      "Prone to impulsiveness in decision-making",
      "May show inconsistency in following through on ideas",
      "Often overly critical in evaluating concepts",
    ],
    careers: [
      "Entrepreneur",
      "Consultant",
      "Journalist",
      "Marketing Strategist",
      "Public Speaker",
    ],
    relationships: [
      "Prefer relationships that stimulate their intellect and offer spontaneity",
      "May resist long-term commitments despite a strong sense of loyalty",
    ],
    famousPeople: [
      "Thomas Edison",
      "Mark Twain",
      "Richard Branson",
      "Leonardo da Vinci",
    ],
  },
  {
    type: "INFJ",
    description:
      "The Advocate: INFJs combine deep empathy with strong intuition, enabling them to advocate for meaningful causes and inspire others with their vision.",
    strengths: [
      "Deeply empathetic and insightful",
      "Creative with a unique perspective",
      "Determined to uphold their values",
      "Skilled at understanding others’ emotions",
      "Committed to personal integrity and growth",
    ],
    weaknesses: [
      "Highly sensitive to criticism and conflict",
      "Prone to withdrawing into privacy",
      "May become perfectionistic under pressure",
      "Idealistic expectations can lead to disappointment",
      "Can struggle with decisiveness when overwhelmed",
    ],
    careers: [
      "Counselor",
      "Psychologist",
      "Writer",
      "Artist",
      "Social Advocate",
    ],
    relationships: [
      "Seek deep, emotionally resonant connections",
      "May have difficulty verbalizing feelings, yet remain profoundly loyal",
    ],
    famousPeople: [
      "Martin Luther King Jr.",
      "Mother Teresa",
      "Nelson Mandela",
      "J.K. Rowling",
    ],
  },
  {
    type: "INFP",
    description:
      "The Mediator: INFPs are idealistic and empathetic individuals driven by a strong sense of purpose and a desire to express their inner values through creative endeavors.",
    strengths: [
      "Profoundly empathetic and caring",
      "Richly creative in artistic pursuits",
      "Passionate about their ideals",
      "Open to diverse perspectives",
      "Sensitive to the nuances of human experience",
    ],
    weaknesses: [
      "Sometimes disconnected from practical realities",
      "Prone to self-isolation during stressful periods",
      "Highly sensitive to emotional hurt",
      "Indecisiveness may hinder progress",
      "Tendency to overlook pragmatic details",
    ],
    careers: ["Writer", "Counselor", "Artist", "Social Worker", "Educator"],
    relationships: [
      "Value authenticity and deep emotional connections",
      "Seek partners who appreciate their introspective and supportive nature",
    ],
    famousPeople: [
      "William Shakespeare",
      "J.R.R. Tolkien",
      "Princess Diana",
      "Audrey Hepburn",
    ],
  },
  {
    type: "ENFJ",
    description:
      "The Protagonist: ENFJs are charismatic and empathetic leaders who inspire others through their passion, communication skills, and commitment to personal growth.",
    strengths: [
      "Charismatic and persuasive",
      "Empathetic and supportive",
      "Highly reliable and organized",
      "Natural at motivating others",
      "Committed to the welfare of those around them",
    ],
    weaknesses: [
      "Can be overly idealistic in expectations",
      "Tendency to prioritize others’ needs over their own",
      "Sensitive to criticism in personal roles",
      "May struggle with setting and maintaining boundaries",
      "Occasionally over-committed to responsibilities",
    ],
    careers: [
      "Educator",
      "Counselor",
      "Human Resources Manager",
      "Public Relations Specialist",
      "Non-profit Director",
    ],
    relationships: [
      "Place high importance on mutual growth and emotional connection",
      "Invest deeply in nurturing and harmonious relationships",
    ],
    famousPeople: [
      "Barack Obama",
      "Oprah Winfrey",
      "Martin Luther King Jr.",
      "Jennifer Lawrence",
    ],
  },
  {
    type: "ENFP",
    description:
      "The Campaigner: ENFPs are enthusiastic and imaginative individuals who thrive on exploring new ideas, possibilities, and experiences with energy and creativity.",
    strengths: [
      "Highly enthusiastic and optimistic",
      "Remarkably creative in diverse settings",
      "Naturally social and engaging",
      "Deeply empathetic toward others",
      "Flexible and adaptable in changing situations",
    ],
    weaknesses: [
      "May struggle with focus and follow-through",
      "Prone to disorganization in daily routines",
      "Tendency to be overly reactive emotionally",
      "Often overthinks decisions",
      "Might compromise personal boundaries to please others",
    ],
    careers: [
      "Actor",
      "Journalist",
      "Counselor",
      "Marketing Specialist",
      "Event Planner",
    ],
    relationships: [
      "Cherish authenticity and dynamic communication",
      "Seek partners who appreciate their spontaneity and imaginative nature",
    ],
    famousPeople: [
      "Robin Williams",
      "Robert Downey Jr.",
      "Ellen DeGeneres",
      "Mark Twain",
    ],
  },
  {
    type: "ISTJ",
    description:
      "The Inspector: ISTJs are dependable and detail-oriented individuals who value tradition, structure, and a methodical approach to tasks and responsibilities.",
    strengths: [
      "Honest and reliable",
      "Strong sense of duty",
      "Highly organized and systematic",
      "Practical in problem-solving",
      "Logical and focused on facts",
    ],
    weaknesses: [
      "May be inflexible when routines are challenged",
      "Can appear insensitive in emotionally charged situations",
      "Judgmental when standards are not met",
      "Resistant to rapid changes or unconventional ideas",
      "Tends to adhere strictly to established methods",
    ],
    careers: [
      "Accountant",
      "Military Officer",
      "Attorney",
      "Medical Doctor",
      "Project Manager",
    ],
    relationships: [
      "Value stability, reliability, and clear expectations",
      "Express commitment through consistent and practical support",
    ],
    famousPeople: [
      "George Washington",
      "Queen Elizabeth II",
      "Warren Buffett",
      "Jeff Bezos",
    ],
  },
  {
    type: "ISFJ",
    description:
      "The Defender: ISFJs are dependable, warm-hearted individuals who dedicate themselves to caring for others and creating stable, nurturing environments.",
    strengths: [
      "Empathetic with a keen eye for detail",
      "Exceptionally reliable and conscientious",
      "Patient and devoted to supporting others",
      "Highly organized and methodical in daily tasks",
      "Skilled at anticipating and addressing the needs of those around them",
    ],
    weaknesses: [
      "May struggle to assert their own needs",
      "Tendency toward excessive self-sacrifice",
      "Can be resistant to change or new ideas",
      "Prone to internalizing criticism",
      "Sometimes hesitant to express deeper emotions",
    ],
    careers: [
      "Healthcare Professional (e.g., Nurse, Medical Assistant)",
      "Educator (e.g., Teacher, School Counselor)",
      "Social Services (e.g., Social Worker, Community Organizer)",
      "Administrative Roles (e.g., Office Manager, Executive Assistant)",
      "Detail-Oriented Creative Fields (e.g., Interior Designer)",
    ],
    relationships: [
      "Value long-term, supportive relationships built on trust and care",
      "Prefer stability and mutual respect in their partnerships",
      "May find it challenging to express personal needs while caring for others",
      "Demonstrate love through practical actions and unwavering loyalty",
    ],
    famousPeople: [
      "Mother Teresa",
      "Kate Middleton",
      "Rosa Parks",
      "Christopher Walken",
    ],
  },
  {
    type: "ESTJ",
    description:
      "The Executive: ESTJs are assertive organizers who excel at establishing order, making decisions, and managing both projects and people with clear structure.",
    strengths: [
      "Highly organized and methodical",
      "Dependable and honest",
      "Dedicated to achieving results",
      "Strong sense of duty and responsibility",
      "Skilled at enforcing practical standards",
    ],
    weaknesses: [
      "May be inflexible when faced with alternative approaches",
      "Can be overly judgmental of deviations from the norm",
      "Sometimes harsh in communication",
      "Struggles to relax outside of responsibilities",
      "Tends to prioritize rules over personal expression",
    ],
    careers: [
      "Project Manager",
      "Military Officer",
      "Judge",
      "Financial Advisor",
      "Corporate Executive",
    ],
    relationships: [
      "Value clear expectations and structured commitments",
      "Express care through consistent and responsible actions",
    ],
    famousPeople: [
      "Michelle Obama",
      "Sonia Sotomayor",
      "Frank Sinatra",
      "John D. Rockefeller",
    ],
  },
  {
    type: "ESFJ",
    description:
      "The Caregiver: ESFJs are warm and conscientious individuals who thrive on fostering harmony, building community, and taking care of others’ well-being.",
    strengths: [
      "Highly empathetic and caring",
      "Loyal and supportive",
      "Strong organizational skills",
      "Naturally sociable and engaging",
      "Attentive to the needs of others",
    ],
    weaknesses: [
      "May overly depend on external validation",
      "Tendency to be rigid in social expectations",
      "Sensitive to criticism and conflict",
      "Can exhibit controlling behavior when stressed",
      "Risk of self-sacrifice at the expense of personal needs",
    ],
    careers: [
      "Nurse",
      "Teacher",
      "Social Worker",
      "Human Resources Manager",
      "Event Planner",
    ],
    relationships: [
      "Prioritize harmony, consistency, and mutual care",
      "Invest deeply in creating a supportive and structured home life",
    ],
    famousPeople: [
      "Taylor Swift",
      "Bill Clinton",
      "Jennifer Garner",
      "Steve Harvey",
    ],
  },
  {
    type: "ISTP",
    description:
      "The Virtuoso: ISTPs are practical and adaptable problem-solvers who excel in hands-on environments and quickly navigate challenges with resourcefulness.",
    strengths: [
      "Optimistic and solution-focused",
      "Creative in real-world problem solving",
      "Pragmatic and action-oriented",
      "Spontaneous in adapting to change",
      "Independent and self-sufficient",
    ],
    weaknesses: [
      "Can be stubborn in their methods",
      "May seem detached in emotional situations",
      "Tends to value privacy to a fault",
      "Easily bored with repetitive tasks",
      "Inclined toward taking risks without full evaluation",
    ],
    careers: ["Engineer", "Mechanic", "Pilot", "Athlete", "Forensic Scientist"],
    relationships: [
      "Cherish independence while maintaining loyalty",
      "Prefer expressing affection through practical, tangible actions",
    ],
    famousPeople: [
      "Michael Jordan",
      "Tom Cruise",
      "Clint Eastwood",
      "Milla Jovovich",
    ],
  },
  {
    type: "ISFP",
    description:
      "The Adventurer: ISFPs are sensitive and artistic individuals who live in the moment, expressing themselves through creativity and a deep appreciation for beauty.",
    strengths: [
      "Naturally artistic and inventive",
      "Highly sensitive to sensory experiences",
      "Passionate about personal expression",
      "Imaginative in creative endeavors",
      "Steadfastly loyal in relationships",
    ],
    weaknesses: [
      "Can be unpredictable in planning",
      "Prone to stress under high-pressure situations",
      "Strong desire for independence may hinder teamwork",
      "Avoidance of conflict can lead to unresolved issues",
      "Often focused on immediate pleasures rather than long-term goals",
    ],
    careers: ["Artist", "Designer", "Musician", "Veterinarian", "Chef"],
    relationships: [
      "Value emotional connection and creative expression of love",
      "Prefer to show affection through thoughtful, tangible gestures",
    ],
    famousPeople: [
      "Bob Dylan",
      "Britney Spears",
      "Michael Jackson",
      "Frida Kahlo",
    ],
  },
  {
    type: "ESTP",
    description:
      "The Entrepreneur: ESTPs are energetic and adaptable individuals who excel in dynamic environments, preferring action and immediate problem-solving over prolonged planning.",
    strengths: [
      "Decisive and bold in action",
      "Highly rational in critical situations",
      "Practical and resourceful",
      "Original in approaching challenges",
      "Keenly perceptive of immediate surroundings",
    ],
    weaknesses: [
      "Impatient with delays or inefficiencies",
      "Prone to taking risks without full deliberation",
      "May struggle with long-term structure",
      "Defiant when challenged by authority",
      "Sometimes insensitive in interpersonal dynamics",
    ],
    careers: [
      "Entrepreneur",
      "Sales Representative",
      "Marketing Specialist",
      "Law Enforcement Officer",
      "Professional Athlete",
    ],
    relationships: [
      "Enjoy relationships filled with spontaneity and excitement",
      "Value freedom and immediate connection over structured routines",
    ],
    famousPeople: [
      "Donald Trump",
      "Madonna",
      "Jack Nicholson",
      "Ernest Hemingway",
    ],
  },
  {
    type: "ESFP",
    description:
      "The Entertainer: ESFPs are vivacious and people-oriented individuals who bring energy and warmth to every interaction, making everyday experiences lively and engaging.",
    strengths: [
      "Vibrantly expressive and outgoing",
      "Original in social interactions",
      "Practical with a hands-on approach to life",
      "Observant of others’ needs",
      "Skilled in interpersonal communication",
    ],
    weaknesses: [
      "Highly sensitive to criticism",
      "Conflict-averse in stressful situations",
      "May become easily bored with routine",
      "Tend to overlook long-term planning",
      "Occasionally struggle with maintaining focus",
    ],
    careers: [
      "Actor",
      "Event Planner",
      "Sales Representative",
      "Flight Attendant",
      "Tour Guide",
    ],
    relationships: [
      "Cherish fun, affectionate, and dynamic partnerships",
      "Express love through engaging experiences and thoughtful attention",
    ],
    famousPeople: ["Marilyn Monroe", "Jamie Foxx", "Adele", "Will Smith"],
  },
];
