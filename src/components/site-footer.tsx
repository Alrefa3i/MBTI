export function SiteFooter() {
  return (
    <footer className=" py-6 md:py-10 bg-gradient-to-t from-foreground/20 to-background ">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between mx-auto">
        <div className="flex flex-col gap-2">
          <a href="/" className="font-bold text-lg">
            QuestionHub
          </a>
          <p className="text-sm text-muted-foreground">
            Helping you find answers to your questions.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Cookie Policy
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} QuestionHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
