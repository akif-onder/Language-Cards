import { languages } from "../../helpers/data";

const Card = () => {
    return(
        <div className="card-area-container">
            <div className="bars"></div>
            <h1 className="language-title">Languages</h1>
            <div className="card-container">
                {
                languages.map((item, index) => {
                    return <Item card={item}/>
                })
                }
            </div>
        </div>
    )
};

export default Card;