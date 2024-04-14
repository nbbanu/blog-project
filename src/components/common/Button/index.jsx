const Button = ({ className, type, size, title, children, ...rest }) => {
  return (
    <button className={`${className} ${type} ${size}`} {...rest}>
      {title || children}
    </button>
  );
};

export default Button;
