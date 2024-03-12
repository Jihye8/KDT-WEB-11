import './Earthworm.css';
import grass from './grass.png'

function Earthworm(){
    
    return (
        <>
        <div className="main">
        <div className="body b1"></div>
        <div className="body b2"></div>
        <div className="body b3"></div>
        <div className="body b4"></div>
        <div className="body b5"></div>
        <div className="face f1"></div>
        <div className="face f2"></div>
        <img src={grass} className="grass"alt="grass" />
        </div>
        <div className='grass-bg'></div>
       
        </>
    )
}
export default Earthworm;