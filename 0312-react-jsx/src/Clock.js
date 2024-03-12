// 하나의 컴포넌트
function Clock(){
    return(
        <div>
            <h1>현재시간은 {new Date().toLocaleTimeString()}</h1>
        </div>
    )
}

export default Clock;