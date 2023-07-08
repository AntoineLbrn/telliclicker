import bois from "../game/images/bois.png"
import pierre from "../game/images/pierre.png"
import fer from "../game/images/fer.png"
import unit from "../game/images/unit.png"
import { ResourceBox } from "./ResourceBox"
import { useGetBuildingsQuery, useGetResourcesQuery, useGetUserQuery } from "../../services/resources"

const boisId = 0;
const pierreId = 1;
const ferId = 2;

const getResourceforId = (resources: any, id: number) => {
    return resources.find((resource: any) => resource.id === id + 1)?.count;
}

const getCapacityForId = (buildings: any, id: number) => {
    return buildings.find((building: any) => building.building.id === id + 1).capacity;
}

export const ResourcesBox: React.FC = () => {

    const { data: resources } = useGetResourcesQuery("currentResources", { pollingInterval: 5000 })
    const { data: user } = useGetUserQuery("user")
    const { data: buildings } = useGetBuildingsQuery("buildings")

    return resources && buildings && user ? <>
        <ResourceBox image={bois} value={`${getResourceforId(resources, boisId)}`} max={`${getCapacityForId(buildings, boisId)}`} />
        <ResourceBox image={pierre} value={`${getResourceforId(resources, pierreId)}`} max={`${getCapacityForId(buildings, pierreId)}`} />
        <ResourceBox image={fer} value={`${getResourceforId(resources, ferId)}`} max={`${getCapacityForId(buildings, ferId)}`} />
        <ResourceBox image={unit} value={'' + user.units} max={'' + user.maxUnits} />
    </> : <></>
}
