const Button = (props)=>{
    // children은 고정값
    const {link, children} = props
    return (
        <a href={link}>
            <button>{children}</button>
        </a>
    )
}

export default Button;