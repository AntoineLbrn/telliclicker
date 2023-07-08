import bois from "../game/images/bois.png"
import pierre from "../game/images/pierre.png"
import fer from "../game/images/fer.png"
import unit from "../game/images/unit.png"
import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material"
import { Amelioration } from "./Canvas"
import LockIcon from '@mui/icons-material/Lock';
import Confetti from "react-dom-confetti"
import { config } from "../../confetti"
import AmeliorationResourceCost from "./AmeliorationResourceCost"
import { boisIndex, ferIndex, pierreIndex } from "../../utils"
import { useGetBuildingsQuery, useGetUserQuery, usePostUpgradeMairieMutation } from "../../services/resources"

export const Mairie: React.FC<{ ameliorations: Amelioration[], width: number }> = ({ ameliorations, width }) => {

    const { data: buildings } = useGetBuildingsQuery("buildings", { refetchOnMountOrArgChange: 600 })
    const { data: user } = useGetUserQuery("user")
    const [triggerPostUpgradeMairieMutation, { isSuccess: isUpgradeSuccess }] = usePostUpgradeMairieMutation()

    return user ? <>
        {ameliorations.map((amelioration) => (
            <Box display="inline-block" key={amelioration.level}>
                <Card key={amelioration.level} sx={{ margin: "10px", position: "relative" }} style={{ maxWidth: "15vw", height: "min-content" }}>
                    <CardMedia
                        sx={{ minHeight: width * 0.15 }}
                        image={amelioration.image}
                        title={amelioration.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {amelioration.title}
                        </Typography>
                        <Typography variant="body2" >
                            {amelioration.description}
                        </Typography>
                        {amelioration.level > user.level && <Typography variant="body2" marginTop='15px' >
                        <AmeliorationResourceCost buildings={buildings} img={bois} resourceIndex = {boisIndex + 1} cost={amelioration.cost.bois}  />
                        <AmeliorationResourceCost buildings={buildings} img={pierre} resourceIndex = {pierreIndex + 1} cost={amelioration.cost.pierre}  />
                        <AmeliorationResourceCost buildings={buildings} img={fer} resourceIndex = {ferIndex + 1} cost={amelioration.cost.fer}  />
                        {amelioration.cost.unit > 0 && <><img style={{ height: "0.875rem", verticalAlign: 'middle' }} src={unit} /><span> {amelioration.cost.unit} &nbsp;</span></>}

                        </Typography>}
                    </CardContent>
                    {amelioration.level > user.level && <Box sx={{ position: "absolute", top: "0", left: "0", backgroundColor: 'rgb(0,0,0,0.9)', minHeight: width * 0.16, width: "16vw" }}>
                        <Box position="absolute" width="100%" top='50%'>
                            <Confetti active={isUpgradeSuccess} config={config} />
                            <Box width="fit-content" margin="auto">
                                {amelioration.level === user.level + 1 ? <Button onClick={triggerPostUpgradeMairieMutation} style={{ color: "#E7B468", borderColor: "#E7B468" }} size="large" variant="outlined">UNLOCK</Button> : <LockIcon style={{ right: "50%" }} />}
                            </Box>
                        </Box>
                    </Box>}
                </Card>

            </Box>
        ))}
    </> : <></>
}
