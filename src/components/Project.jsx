import classes from "./Project.module.css";

function Project(props) {
  return (
    <div
      className={
        classes.projectContainer +
        (props.switchSide ? " " + classes.projectContainerSwitchSides : "")
      }
    >
      {/* <iframe
        className={classes.projectIframe}
        src={props.url}
        width="350"
        height={props.height}
      ></iframe> */}
      <div className={classes.projectImage}>
        <div className={classes.projectImageTint}></div>
        <h2 className={classes.projectImageTitle}>{props.title}</h2>
        <img src={props.image} />
        <button>
          Visit site
        </button>
      </div>
      <div className={classes.projectDescription}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>
          Website URL:{" "}
          <a href={props.url} target="_blank">
            {props.url}
          </a>
        </p>
        {props.github ? (
          <p>
            Github URL:{" "}
            <a href={props.github} target="_blank">
              {props.github}
            </a>
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Project;
