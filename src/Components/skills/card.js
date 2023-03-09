import './skills.css'
const Card=(props)=>{
    return(
        <div className="card">
            <img src={props.icon} alt="icon" className="img" />
            <p className="text">{props.name}</p>
        </div>
    )
}
export default Card;