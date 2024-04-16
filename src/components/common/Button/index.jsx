const Button = ({ className, type, size, title, children, handleClick , ...rest }) => {
  return (
    <button className={`primary-button ${className} ${type} ${size}`} {...rest} onClick={handleClick}>
      {title || children}
    </button>
  );
};

export default Button;
