import { Card, CardMedia, CardContent, Typography, Box, DialogTitle, DialogContent, Button } from "@mui/material"
import { useGetUnitsQuery, usePostChallengeEnnemyMutation } from "../../services/resources"
import { map } from "../canvas/map"
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { useEffect } from "react";

export const BattleDialog: React.FC<{ ennemy: any, width: number }> = ({ ennemy, width }) => {

    const [triggerPostChallengeEnnemyMutation, {isError, isSuccess}] = usePostChallengeEnnemyMutation()
    const { data: units } = useGetUnitsQuery("units");
    const unitsBuyable = map.areas.find((area) => area.id === "CASERNE")?.unitsBuyable;

    useEffect(() => {
        if (isError) {
            alert("Vos équipes ont perdu la bataille...")
        }
        if (isSuccess) {
            alert("Vos équipes ont gagné la bataille !")
            window.location.reload();
        }
    }, [isError, isSuccess])
    return <>
        <DialogTitle sx={{ backgroundSize: 'cover' }} textAlign="center" borderBottom="1px solid #E7B468">
            <Typography fontSize="1.3em">AFFRONTEMENT</Typography>
            <Typography width="70%" margin="auto" marginTop="15px" fontSize="1em" fontStyle="italic">{ennemy.description}</Typography>
        </DialogTitle>
        <DialogContent>²
            <Box width="100%" display="flex">
                <Card key={ennemy.id} sx={{ margin: "10px", position: "relative" }} style={{ maxWidth: "15vw", height: "min-content" }}>
                    <CardMedia
                        sx={{ minHeight: width * 0.15, objectFit: 'contain' }}
                        image={ennemy.img}
                        title={ennemy.title}
                        component="img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {ennemy.title}
                        </Typography>
                        <Typography variant="body2" >
                            {ennemy.points} POINTS
                        </Typography>
                    </CardContent>
                </Card>
                <Box height="100%" display="inline-block" width="10%" />
                <Box height="100%" display="inline-block" width="50%">
                    {unitsBuyable?.map((unitBuyable) => (
                        <Box alignItems="center" fontWeight="bold" display="flex" textAlign="center" fontSize="20px">
                            <CurrentUnitBox unitStock={units?.find((unit) => unit.type.id === unitBuyable.id)} />
                            <Typography margin="20px">{unitBuyable.title}</Typography>
                            <img height="80px" src={unitBuyable.image}></img>
                        </Box>
                    ))}
                    <Box>
                        <Typography color="#ff7f7f">
                            Attention, si vos unités perdent la bataille, vous les perdrez.
                        </Typography>
                        <Button onClick={() => triggerPostChallengeEnnemyMutation({ennemyId: ennemy.id})} variant="contained" style={{ backgroundColor: "#E7B468", color: "black", padding: "20px" }} fullWidth endIcon={<ElectricBoltIcon />}>
                            DÉFIER
                        </Button>
                    </Box>
                </Box>

            </Box>
        </DialogContent>
    </>
}

const CurrentUnitBox: React.FC<{ unitStock: any }> = ({ unitStock }) => {
    return <Box fontWeight="bold" textAlign="center" fontSize="20px">
        {unitStock?.stock ? unitStock.stock : 0}
    </Box>
}
