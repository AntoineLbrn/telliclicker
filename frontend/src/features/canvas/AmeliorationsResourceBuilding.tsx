import bois from "../game/images/bois.png"
import pierre from "../game/images/pierre.png"
import fer from "../game/images/fer.png"
import unit from "../game/images/unit.png"
import { Card, CardContent, Typography, Box, Button } from "@mui/material"
import { resourceBuildingAmeliorations } from "./Canvas"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Confetti from 'react-dom-confetti';
import { useGetBuildingsQuery, usePostUpgradeBuildingCapacityMutation, usePostUpgradeBuildingProductionMutation } from "../../services/resources";
import { config } from "../../confetti"
import { boisIndex, ferIndex, isBuyable, pierreIndex } from "../../utils"
import AmeliorationResourceCost from "./AmeliorationResourceCost"


export const AmeliorationsResourceBuilding: React.FC<{ ameliorations: resourceBuildingAmeliorations, width: number, buildingId: number }> = ({ ameliorations, width, buildingId }) => {
    const { data: buildings } = useGetBuildingsQuery("buildings", { refetchOnMountOrArgChange: 600 })
    const [triggerPostUpgradeBuildingProductionMutation, { isSuccess: isUpgradeProductionSuccess }] = usePostUpgradeBuildingProductionMutation()
    const [triggerPostUpgradeBuildingCapacityMutation, { isSuccess: isUpgradeCapacitySuccess }] = usePostUpgradeBuildingCapacityMutation()

    const productionLevel = buildings?.find((building) => building.building.id === buildingId + 1)?.level;
    const capacityLevel = buildings?.find((building) => building.building.id === buildingId + 1)?.maxResourceLevel;

    return buildings && capacityLevel !== undefined && productionLevel !== undefined ? <>
        <Box key={ameliorations.production.title} display="inline-block" width="100%" border="3px solid #E7B468" marginX="5px" paddingY="20px" marginY="30px">
            <Typography gutterBottom marginTop="20px" textAlign="center" variant="h6" >
                {ameliorations.production.description}
            </Typography>
            <Box width="100%" display="flex">
                <Card key={ameliorations.production.title} sx={{ margin: "10px", position: "relative" }} style={{ width: "40%", height: "min-content" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Niveau {productionLevel}
                        </Typography>
                        <Typography variant="h6" >
                            {ameliorations.production.levels[productionLevel].description}
                        </Typography>
                    </CardContent>
                </Card>
                {ameliorations.production.levels[productionLevel + 1] && <>
                    <Typography margin="auto" textAlign="center" width="20%">
                        <Confetti active={isUpgradeProductionSuccess} config={config} />
                        <Button disabled={!isBuyable(ameliorations.capacity.levels[capacityLevel].cost, buildings)} className={isBuyable(ameliorations.capacity.levels[capacityLevel].cost, buildings) ? "" : "unbuyable"} variant="contained" onClick={() => triggerPostUpgradeBuildingProductionMutation({ buildingId })} style={{ backgroundColor: "#E7B468", color: "black", padding: "20px" }} size="medium" endIcon={<ArrowRightAltIcon />}>Améliorer</Button>
                        <br /><br />
                        <AmeliorationResourceCost buildings={buildings} img={bois} resourceIndex = {boisIndex + 1} cost={ameliorations.production.levels[productionLevel].cost.bois}  />
                        <AmeliorationResourceCost buildings={buildings} img={pierre} resourceIndex = {pierreIndex + 1} cost={ameliorations.production.levels[productionLevel].cost.pierre}  />
                        <AmeliorationResourceCost buildings={buildings} img={fer} resourceIndex = {ferIndex + 1} cost={ameliorations.production.levels[productionLevel].cost.fer}  />

                        {ameliorations.production.levels[productionLevel].cost.unit > 0 && <><img style={{ height: "0.875rem", verticalAlign: 'middle' }} src={unit} /> {ameliorations.production.levels[productionLevel].cost.unit} &nbsp;</>}

                    </Typography>
                    <Card key={ameliorations.production.title} sx={{ margin: "10px", position: "relative" }} style={{ width: "40%", height: "min-content", backgroundColor: "#212120" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Niveau {productionLevel + 1}
                            </Typography>
                            <Typography variant="h6" >
                                {ameliorations.production.levels[productionLevel + 1].description}
                            </Typography>
                        </CardContent>
                    </Card>
                </>
                }
            </Box>
        </Box>


        <Box key={ameliorations.capacity.title} display="inline-block" width="100%" border="3px solid #E7B468" marginX="5px" paddingY="20px" marginY="30px">
            <Typography gutterBottom marginTop="20px" textAlign="center" variant="h6" >
                {ameliorations.capacity.description}
            </Typography>
            <Box width="100%" display="flex">
                <Card key={ameliorations.capacity.title} sx={{ margin: "10px", position: "relative" }} style={{ width: "40%", height: "min-content" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Niveau {capacityLevel}
                        </Typography>
                        <Typography variant="h6" >
                            {ameliorations.capacity.levels[capacityLevel].description}
                        </Typography>
                    </CardContent>
                </Card>
                {ameliorations.capacity.levels[capacityLevel + 1] && <>
                    <Typography margin="auto" textAlign="center" width="20%">
                    <Confetti active={isUpgradeCapacitySuccess} config={config} />
                        <Button disabled={!isBuyable(ameliorations.capacity.levels[capacityLevel].cost, buildings)} className={isBuyable(ameliorations.capacity.levels[capacityLevel].cost, buildings) ? "" : "unbuyable"} variant="contained" onClick={() => triggerPostUpgradeBuildingCapacityMutation({ buildingId })} style={{ backgroundColor: "#E7B468", color: "black", padding: "20px" }} size="medium" endIcon={<ArrowRightAltIcon />}>Améliorer</Button>
                        <br /><br />
                        <AmeliorationResourceCost buildings={buildings} img={bois} resourceIndex = {boisIndex + 1} cost={ameliorations.capacity.levels[capacityLevel].cost.bois}  />
                        <AmeliorationResourceCost buildings={buildings} img={pierre} resourceIndex = {pierreIndex + 1} cost={ameliorations.capacity.levels[capacityLevel].cost.pierre}  />
                        <AmeliorationResourceCost buildings={buildings} img={fer} resourceIndex = {ferIndex + 1} cost={ameliorations.capacity.levels[capacityLevel].cost.fer}  />
                        {ameliorations.capacity.levels[capacityLevel].cost.unit > 0 && <><img style={{ height: "0.875rem", verticalAlign: 'middle' }} src={unit} /><span> {ameliorations.capacity.levels[capacityLevel].cost.unit} &nbsp;</span></>}

                    </Typography>
                    <Card key={ameliorations.capacity.title} sx={{ margin: "10px", position: "relative" }} style={{ width: "40%", height: "min-content", backgroundColor: "#212120" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Niveau {capacityLevel + 1}
                            </Typography>
                            <Typography variant="h6" >
                                {ameliorations.capacity.levels[capacityLevel + 1].description}
                            </Typography>
                        </CardContent>
                    </Card>
                </>
                }
            </Box>
        </Box>
    </> : <></>
}
