

const AuthenticationButton = ({icon, type, title, handleClick , ...rest }) => {
    return(
        <button className={"authentication-button ghost"}  {...rest}>
            {<i className={`${icon}`}></i>}
            {title}
        </button>
    )
}

export default AuthenticationButton;