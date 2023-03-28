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
        height="750"
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
        description="For this project I wanted to implement YouTube API. To achieve this, 
        I used HTML, MaterializeCSS and JavaScript to allow users to search for channels 
        and redirect them to the YouTube Channels or let them browse through the videos 
        of the selected channels. Find your favorite YouTuber."
        switchSide={false}
      />
      <Project
        height="700"
        url="https://saltclub.team"
        title='Extreme sports club "SALT" website'
        description="The purpose of this website is to promote and showcase our social 
        infrastructure projects to the public. It has been created using WordPress 
        and Elementor. Feel free to follow us on social media to stay up-to-date 
        with our upcoming events."
        switchSide={true}
      />
      <Project
        height="700"
        url="https://hotelmanagementwebsite-e47k.onrender.com"
        title='Hotel Management website'
        description="I built this website to practice nodeJS with express framework by building
        an app that allows for creation and management of user profiles, rooms, and allow for users
        to be checked in and out of rooms. It has a dedicated admin panel that is designe to be used by
        hotel staff."
        switchSide={false}
      />
    </main>
  );
}

export default Portfolio;
