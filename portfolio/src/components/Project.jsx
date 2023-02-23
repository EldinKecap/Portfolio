import classes from "./Project.module.css";

function Project(props) {
  return (
    <div
      className={
        classes.projectContainer +
        (props.switchSide ? " " + classes.projectContainerSwitchSides : "")
      }
    >
      <iframe
        className={classes.projectIframe}
        src={props.url}
        width="350"
        height={props.height}
      ></iframe>
      <div className={classes.projectDescription}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Project;
