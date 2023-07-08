import { GetUserData } from "../../services/resources";
import unit from "../game/images/unit.png"

const AmeliorationUnitCost: React.FC<{ cost: number, user: GetUserData }> = ({ cost, user }) => {

    const enoughResource = cost + user.units <= user.maxUnits;

    return <>
        {cost > 0 && <><img style={{ height: "0.875rem", verticalAlign: 'middle' }} src={unit} /> <span className={enoughResource ? "" : "red"}>{cost} &nbsp;</span> </>}
    </>
}

export default AmeliorationUnitCost;
