import classes from "./Portfolio.module.css";
import Project from "./Project";
import JokeTyperImage from "../assets/JokeTyper.jpg"

function Portfolio() {
  return (
    <main className={classes.portfolio}>
      <Project
        height="450"
        image ={JokeTyperImage}
        url="https://superlative-yeot-ef5991.netlify.app"
        github="https://github.com/EldinKecap/TypingApp"
        title="Joke Typing App (interactive)"
        description="This app was created using HTML, CSS, JavaScript and Joke API 
        with a purpose to simulate a real person typing in three different speeds 
        with them making spelling mistakes and correcting them. It will also type 
        out any optional input provided by the user at chosen speed."
        switchSide={false}
      />
      {/* <Project
        height="750"
        url="https://trivia-quiz-app-kecap.netlify.app"
        github="https://github.com/EldinKecap/QuizApp"
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
        github="https://github.com/EldinKecap/YouTube-Channel-Search"
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
        github={false}
        title='Extreme sports club "SALT" website'
        description="The purpose of this website is to promote and showcase our social 
        infrastructure projects to the public. It has been created using WordPress 
        and Elementor. Feel free to follow us on social media to stay up-to-date 
        with our upcoming events."
        switchSide={true}
      />
      <Project
        height="700"
        url="https://hotelmanagementwebsite.onrender.com"
        title="Hotel Management website"
        github="https://github.com/EldinKecap/HotelManagementWebsite"
        description="The purpose of creating this website was to enhance my skills in NodeJS and Express framework.
        This is an app that allows for creation and management of user profiles, rooms, and allow for users
        to be checked in and out of rooms. It has a dedicated admin panel that is designe to be used by
        hotel staff."
        switchSide={false}
      />
      <Project
        height="700"
        url="https://goal-achiever.onrender.com"
        title="Goal Achiever App"
        github="https://github.com/EldinKecap/GoalTrackingApp"
        description="I needed an app to track my productivity on many different goals in my life,
        after trying a few different apps I realised I needed something simple so I created this 
        app with where I used a calendar inspired by github commit history tracker to show on which days
        I have completed my goals. For this project I used React for the front end and Firebase for the back end."
        switchSide={true}
      />
      <Project
        height="700"
        url="https://langlearnsite.netlify.app"
        title="LangLearn site"
        github="https://github.com/EldinKecap/LanguageLearningApp"
        description="This is a language learning platform that is still under construction.
        This website will be uses spatial repetition algorythm to speed up the progress of learning a new language. 
        I used ReactJS with MUI library to create the UI and the back end is implemented with Firebase."
        switchSide={false}
      /> */}
    </main>
  );
}

export default Portfolio;
