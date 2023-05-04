import bois from "../game/images/bois.png"
import pierre from "../game/images/pierre.png"
import fer from "../game/images/fer.png"
import unit from "../game/images/unit.png"
import { ResourceBox } from "./ResourceBox"
import { useGetResourcesQuery } from "../../services/resources"

const boisId = 0;
const pierreId = 1;
const ferId = 2;

export const ResourcesBox: React.FC = () => {

    const { data } = useGetResourcesQuery("currentResources", {pollingInterval: 5000}) 

    return data ? <>
        <ResourceBox image={bois} value={`${data[boisId].count}`} />
        <ResourceBox image={pierre} value={`${data[pierreId].count}`} />
        <ResourceBox image={fer} value={`${data[ferId].count}`} />
        <ResourceBox image={unit} value="0/10" />
    </> : <></>
}
