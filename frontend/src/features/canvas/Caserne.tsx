import bois from "../game/images/bois.png"
import pierre from "../game/images/pierre.png"
import fer from "../game/images/fer.png"
import unit from "../game/images/unit.png"
import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material"
import LockIcon from '@mui/icons-material/Lock';
import AmeliorationResourceCost from "./AmeliorationResourceCost"
import { boisIndex, ferIndex, pierreIndex } from "../../utils"
import { useGetBuildingsQuery, useGetUnitsQuery, usePostBuyUnitMutation, useGetUserQuery } from "../../services/resources"
import { UnitBuybable } from "./Canvas"
import AmeliorationUnitCost from "./AmeliorationUnitCost"

export const Caserne: React.FC<{ unitsBuyable: UnitBuybable[], width: number }> = ({ unitsBuyable, width }) => {

    const { data: buildings } = useGetBuildingsQuery("buildings", { refetchOnMountOrArgChange: 600 })
    const { data: user } = useGetUserQuery("user");
    const { data: units } = useGetUnitsQuery("units");
    const [triggerPostBuyUnit] = usePostBuyUnitMutation()

    return user ? <>
        {unitsBuyable.map((unitBuyable) => (
            <Box display="inline-block" key={unitBuyable.id}>
                <Card key={unitBuyable.id} sx={{ margin: "10px", position: "relative" }} style={{ maxWidth: "15vw", height: "min-content" }}>
                    <CardMedia
                        sx={{ maxHeight: width * 0.15, objectFit: 'contain' }}
                        image={unitBuyable.image}
                        title={unitBuyable.title}
                        component="img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {unitBuyable.title}
                        </Typography>
                        <Typography variant="body2" >
                            {unitBuyable.description}
                        </Typography>
                        <Typography variant="body2" marginTop='15px' >
                            <AmeliorationResourceCost buildings={buildings} img={bois} resourceIndex={boisIndex + 1} cost={unitBuyable.cost.bois} />
                            <AmeliorationResourceCost buildings={buildings} img={pierre} resourceIndex={pierreIndex + 1} cost={unitBuyable.cost.pierre} />
                            <AmeliorationResourceCost buildings={buildings} img={fer} resourceIndex={ferIndex + 1} cost={unitBuyable.cost.fer} />
                            <AmeliorationUnitCost cost={unitBuyable.cost.unit} user={user} />
                            
                                <Box>
                                    {unitBuyable.level <= user.level && <Button fullWidth onClick={() => triggerPostBuyUnit({ unitId: unitBuyable.id })} style={{ color: "#E7B468", borderColor: "#E7B468", margin: "20px 0" }} size="large" variant="outlined">recruter</Button>}
                                    <CurrentUnitBox unitStock={units?.find((unit) => unit.type.id === unitBuyable.id)} />
                                </Box>
                    </Typography>
                </CardContent>
                {unitBuyable.level > user.level && <Box sx={{ position: "absolute", top: "0", left: "0", backgroundColor: 'rgb(0,0,0,0.9)', minHeight: width * 0.16, width: "16vw" }}>
                    <Box position="absolute" width="100%" top='50%'>
                        {unitBuyable.level > user.level &&
                            <Box width="fit-content" margin="auto">
                                <Box textAlign="center">
                                    <LockIcon />
                                </Box>
                                Mairie de niveau {unitBuyable.level} nécessaire
                            </Box>}
                    </Box>
                </Box>}
            </Card>

            </Box>
        ))}
    </> : <></>
}

const CurrentUnitBox: React.FC<{ unitStock: any }> = ({ unitStock }) => {
    return <Box fontWeight="bold" textAlign="center" fontSize="20px">
        Actuel : {unitStock?.stock ? unitStock.stock : 0} 
    </Box>
}
