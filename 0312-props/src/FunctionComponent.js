import PropType from 'prop-types';
export default function FunctionComponent({name, time, children}) {
    // const {name, time} = props
  return (
    <div>
      <h1>Hi {name}</h1>
      <h1>시간은 {time}</h1>
      <div>{children}</div>
    </div>
  )
}

FunctionComponent.defaultProps = {
    name : 홍길동
}

FunctionComponent.propTypes = {
    name : PropTypes.string
}
