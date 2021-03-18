import "./Button.css";

const Button = ({
  text = "",
  href = null,
  newPage = false,
  inverse = false,
  big = false,
  bigText = false,
  addClass = "",
  pulse = false,
  onPress = null,
}) => {
  const buttonStyle = inverse
    ? "bg-white border-primary hover:bg-primary transform hover:text-white text-primary hover:border-white"
    : "hover:bg-white hover:border-primary bg-primary transform text-white hover:text-primary";
  return (
    <a
      onClick={onPress}
      href={href}
      target={newPage ? "_blank" : ""}
      rel="noreferrer"
    >
      <div
        className={
          "relative overflow-hidden inline-block rounded-3xl mx-1" +
          (addClass ? " " + addClass : "")
        }
      >
        <button
          className={
            (bigText ? "text-2xl " : "") +
            "duration-500 ease-in-out border transform hover:scale-105 font-bold rounded-3xl " +
            (big ? "py-6 px-10 " : "py-2 px-6 ") +
            buttonStyle
          }
        >
          {text}
        </button>
        {pulse ? (
          <div
            className="button absolute z-1"
            style={{
              // backgroundImage:
              //   "linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4))",
              // transform: "skewX(-45deg)",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              // zIndex: 0,
              animation: "button-effect 3s",
              animationIterationCount: "infinite",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <div
              className="button-effect"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4))",
                transform: "skewX(-45deg)",
                width: 40,
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                cursor: "pointer",
                userSelect: "none",
                // zIndex: 0,
                // animation: "button-effect 2s",
                // animationIterationCount: "infinite",
              }}
            />
          </div>
        ) : null}
      </div>
    </a>
  );
};

export default Button;
