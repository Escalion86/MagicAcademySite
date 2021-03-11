const Button = ({
  text = "",
  href = "",
  newPage = false,
  inverse = false,
  big = false,
  bigText = false,
  addClass = "",
}) => {
  const buttonStyle = inverse
    ? "bg-white border-primary hover:bg-primary transform hover:text-white text-primary hover:border-white"
    : "hover:bg-white hover:border-primary bg-primary transform text-white hover:text-primary";
  return (
    <a href={href} target={newPage ? "_blank" : ""} rel="noreferrer">
      <button
        className={
          (bigText ? "text-2xl " : "") +
          "mx-1 duration-500 ease-in-out border transform hover:scale-105 font-bold rounded-3xl " +
          (big ? "py-6 px-10 " : "py-2 px-6 ") +
          buttonStyle +
          (addClass ? " " + addClass : "")
        }
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
