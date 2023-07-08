const AmeliorationResourceCost: React.FC<{ cost: number, resourceIndex: number, buildings: any, img: any }> = ({ cost, resourceIndex, buildings, img }) => {

    const enoughResource = buildings.find((userBuilding: any) => userBuilding.building.id === resourceIndex).count > cost

    return <>
        {cost > 0 && <><img style={{ height: "0.875rem", verticalAlign: 'middle' }} src={img} /> <span className={enoughResource ? "" : "red"}>{cost} &nbsp;</span> </>}
    </>
}

export default AmeliorationResourceCost;
