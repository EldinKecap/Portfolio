import classes from "./Portfolio.module.css";
import Project from "./Project";

function Portfolio() {
  return (
    <main className={classes.portfolio}>
      <Project
        height="450"
        url="https://superlative-yeot-ef5991.netlify.app"
        title="Joke Typing App (interactive)"
        description="This app was created using HTML, CSS, JavaScript and Joke API 
        with a purpose to simulate a real person typing in three different speeds 
        with them making spelling mistakes and correcting them. It will also type 
        out any optional input provided by the user at chosen speed."
        switchSide={false}
      />
      <Project
        height="700"
        url="https://trivia-quiz-app-kecap.netlify.app"
        title="Trivia Quiz App (interactive)"
        description="I used HTML, CSS, JavaScript and TriviQuiz API to create a Trivia
        Quiz which allows any user to select category, difficulty and a number of 
        questions they want to answer. Questions are time limited and upon completion
        you are presented with data about your run. Give it a try and have fun."
        switchSide={true}
      />
      <Project
        height="700"
        url="https://eldinkecap.github.io"
        title="YouTube Channel Search (interactive)"
        description="For this project I wanted to implement YouTube API. I used HTML, 
        MaterializeCSS and JavaScript to allow users to search for channels and redirect
        them to the YouTube Channels or let them browse through the videos of the selected 
        channels."
        switchSide={false}
      />
    </main>
  );
}

export default Portfolio;
