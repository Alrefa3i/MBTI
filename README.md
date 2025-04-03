# Myers-Briggs Type Indicator (MBTI) React Application

This project is a React application built with TypeScript and Vite that implements a simplified version of the Myers-Briggs Type Indicator (MBTI) personality assessment.

## Overview

The application presents users with a series of questions designed to assess their preferences across four key dichotomies:

- **Extraversion (E) vs. Introversion (I):** How you gain energy.
- **Sensing (S) vs. Intuition (N):** How you take in information.
- **Thinking (T) vs. Feeling (F):** How you make decisions.
- **Judging (J) vs. Perceiving (P):** How you approach the outside world.

Based on the user's answers, the application calculates their MBTI personality type and provides a brief description.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A superset of JavaScript that adds static typing.
- **Vite:** A build tool that provides a fast and efficient development experience.
- **Radix UI:** A set of accessible and unstyled UI primitives.
- **Tailwind CSS:** A utility-first CSS framework for styling the application.

## Project Structure

- `src/`: Contains the source code for the application.
  - `components/`: React components used in the application.
    - `Results.tsx`: Displays the MBTI results.
  - `types.ts`: Defines the TypeScript interfaces for the project.
  - `functions.ts`: Contains the core logic for calculating the MBTI personality type.
  - `data.ts`: Contains the questions and personality type data.
  - `App.tsx`: The main application component.

## Running the Application

1.  Clone the repository.
2.  Install the dependencies: `npm install`
3.  Start the development server: `npm run dev`
4.  Open your browser and navigate to the address shown in the terminal (usually `http://localhost:5173/`).
