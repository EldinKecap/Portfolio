import classes from './HeroArea.module.css'

function Hero() {
    return <div className={classes.heroArea}>
    <div className={classes.heroTextContainer}>
      <div>
      <h1>Eldin <br /> Kecap</h1>
      <p>I'm a Full Stack Web developer <br />
        Working with MERN stack
      </p>
      </div>
      <svg className={classes.logo} width="482" height="386" viewBox="0 0 482 386" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M429.666 267.481L429.659 267.479L429.652 267.477C403.233 260.088 378.777 241.337 356.321 210.988L352.105 205.29C344.116 194.493 334.874 187.164 324.359 183.426C314.677 179.983 304.028 179.625 292.46 182.271C294.471 177.588 296.072 172.917 297.261 168.26L297.262 168.259C301.915 149.981 297.146 131.424 283.287 112.693L231.966 43.3338C226.924 36.5203 219.042 32.2847 208.558 30.4785L208.555 30.478C202.435 29.4352 195.967 31.6167 189.236 36.5972C182.039 41.9223 177.847 49.7605 176.568 59.9257C175.716 66.4727 177.885 73.09 182.79 79.7197L240.217 157.332C244.872 163.622 246.509 171.481 244.963 181.067L244.959 181.09L244.956 181.114C244.27 186.417 241.061 191.329 234.988 195.822L213.402 211.795L139.421 111.81C134.379 104.996 126.497 100.761 116.013 98.9547L116.01 98.9542C109.89 97.9114 103.422 100.093 96.6912 105.073L53.2677 137.203C36.964 149.267 27.2814 165.449 24.2593 185.667C21.2371 205.885 25.7646 224.191 37.8281 240.495L46.5511 252.284C51.5319 259.016 58.1318 263.023 66.2826 264.241C70.1199 264.815 73.9471 264.65 77.7541 263.75L77.7662 263.747L77.7782 263.744C81.723 262.742 85.3492 261.018 88.648 258.577C92.0712 256.044 94.8488 253.034 96.9646 249.548L96.9658 249.546C100.413 243.844 102.074 238.151 101.832 232.493C101.591 226.834 99.4524 221.345 95.53 216.044L87.2431 204.844C82.9621 199.058 81.1606 191.49 82.0153 181.978C82.4956 176.634 85.3485 171.929 90.8492 167.859L99.8607 161.191L256.129 372.387C261.115 379.124 267.742 383.02 275.933 384.005C279.771 384.575 283.656 384.358 287.576 383.366C291.71 382.477 296.248 380.143 301.173 376.498C306.489 372.566 309.807 365.349 311.426 355.306L311.43 355.283L311.433 355.26C312.252 348.934 310.109 342.494 305.305 336.001L241.355 249.574L263.138 233.456C269.289 228.905 277.007 227.359 286.464 228.998L286.469 228.999C291.762 229.897 296.727 233.293 301.33 239.514C328.292 275.953 358.302 301.517 391.384 316.102C405.177 322.284 419.614 326.149 434.687 327.695C449.792 329.245 461.681 327.061 470.093 320.837C472.511 319.047 474.607 316.616 476.402 313.59L476.406 313.583L476.41 313.577C479.198 308.761 480.502 303.933 480.217 299.121C479.932 294.309 478.067 289.642 474.731 285.133C470.345 279.205 462.629 275.26 451.951 273.072L451.947 273.071C445.324 271.735 437.898 269.872 429.666 267.481Z" stroke="#C62368" stroke-width="3"/>
        <path d="M408.666 239.364L408.659 239.362L408.652 239.36C382.233 231.971 357.777 213.22 335.321 182.871L331.105 177.173C323.116 166.376 313.875 159.047 303.359 155.309C293.677 151.866 283.028 151.509 271.46 154.154C273.471 149.471 275.072 144.8 276.261 140.144L276.262 140.142C280.915 121.864 276.146 103.308 262.287 84.5766L210.966 15.217C205.924 8.40346 198.043 4.16791 187.558 2.36167L187.555 2.36122C181.435 1.31841 174.967 3.49993 168.236 8.4804C161.04 13.8051 156.847 21.6423 155.568 31.8063C154.716 38.3541 156.884 44.9723 161.79 51.6029L219.217 129.215C223.872 135.506 225.509 143.364 223.963 152.951L223.959 152.974L223.956 152.997C223.27 158.3 220.061 163.212 213.988 167.705L192.402 183.678L118.421 83.6931C113.379 76.8796 105.498 72.6441 95.0127 70.8378L95.01 70.8374C88.8904 69.7946 82.4223 71.9761 75.6913 76.9566L32.2678 109.087C15.9641 121.15 6.28146 137.332 3.25932 157.55C0.237179 177.769 4.76462 196.075 16.8281 212.378L25.5512 224.168C30.532 230.899 37.1319 234.906 45.2827 236.124C49.1199 236.698 52.9472 236.533 56.7542 235.633L56.7662 235.63L56.7783 235.627C60.723 234.626 64.3493 232.901 67.6481 230.46C71.0712 227.927 73.8489 224.917 75.9646 221.431L75.9659 221.429C79.4134 215.728 81.0738 210.035 80.8324 204.377C80.591 198.717 78.4525 193.228 74.5301 187.927L66.2431 176.727C61.9621 170.942 60.1606 163.373 61.0154 153.862C61.4956 148.517 64.3486 143.812 69.8493 139.742L78.8607 133.074L235.129 344.27C240.115 351.007 246.742 354.903 254.933 355.888C258.771 356.458 262.656 356.242 266.576 355.25C270.71 354.361 275.248 352.026 280.174 348.382C285.489 344.449 288.807 337.232 290.426 327.19L290.43 327.167L290.433 327.143C291.252 320.817 289.109 314.377 284.305 307.884L220.355 221.457L242.138 205.339C248.289 200.788 256.007 199.242 265.464 200.881L265.469 200.882C270.762 201.78 275.727 205.176 280.33 211.397C307.292 247.837 337.302 273.401 370.384 287.985C384.177 294.167 398.614 298.032 413.687 299.579C428.792 301.128 440.681 298.944 449.093 292.72C451.511 290.931 453.607 288.499 455.402 285.473L455.406 285.467L455.41 285.46C458.198 280.644 459.502 275.816 459.217 271.004C458.932 266.193 457.067 261.525 453.731 257.016C449.345 251.088 441.63 247.143 430.951 244.956L430.947 244.955C424.324 243.618 416.898 241.755 408.666 239.364Z" stroke="#FA7268" stroke-width="3"/>
        </svg>
        
      </div>
    </div>
}

export default Hero;