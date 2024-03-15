
const Food = (props)=>{
    return(
        <>
        <h1 className="food">{props.food}</h1>
        </>
    )
}

Food.defaultProps = {
    food : '월남쌈'
}

export default Food;