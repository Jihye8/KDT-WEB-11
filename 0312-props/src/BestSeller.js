import image from './bookImage.jpg'

const BestSeller = (props) =>{
    const {title, author, price, type} = props
    return(
        <div className="bg">
            <h1 className="main">이번주 베스트 셀러</h1>
            <img src={image} className="book-image"alt="book" />
            <div className='explain'>
            <h2>{title}</h2>
            <div>저자 : {author}</div>
            <div>판매가 : {price}원</div>
            <div>구분 : {type}</div>
            </div>
        </div>
    )
}

export default BestSeller;