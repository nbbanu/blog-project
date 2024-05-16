const Button = ({ className, type, size, title, children, handleClick,disabled , ...rest }) => {
  return (
    <button className={`primary-button ${className} ${type} ${size}`} {...rest} onClick={handleClick} disabled={disabled}>
      {title || children}
    </button>
  );
};

export default Button;
