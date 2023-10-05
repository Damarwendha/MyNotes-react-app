function Button({ icon, handler }) {
  return (
    <img
      onClick={handler}
      src={`/images/icons8-${icon}.png`}
      className={`${icon}-image`}
    ></img>
  );
}

export default Button