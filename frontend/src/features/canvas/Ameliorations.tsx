import bois from "../game/images/bois.png"
import pierre from "../game/images/pierre.png"
import fer from "../game/images/fer.png"
import unit from "../game/images/unit.png"
import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material"
import { Amelioration } from "./Canvas"
import LockIcon from '@mui/icons-material/Lock';

export const Ameliorations: React.FC<{ ameliorations: Amelioration[], level: number, width: number }> = ({ ameliorations, level, width }) => {

    return <>
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
                        <Typography variant="body2" marginTop='15px' >
                            {amelioration.cost.bois > 0 && <><img style={{ height: "0.875rem", verticalAlign: 'middle' }} src={bois} /> {amelioration.cost.bois}  &nbsp; </>}
                            {amelioration.cost.pierre > 0 && <><img style={{ height: "0.875rem", verticalAlign: 'middle' }} src={pierre} /> {amelioration.cost.pierre} &nbsp; </>}
                            {amelioration.cost.fer > 0 && <><img style={{ height: "0.875rem", verticalAlign: 'middle' }} src={fer} /> {amelioration.cost.fer} &nbsp;</>}
                            {amelioration.cost.unit > 0 && <><img style={{ height: "0.875rem", verticalAlign: 'middle' }} src={unit} /> {amelioration.cost.unit} &nbsp;</>}
                        </Typography>
                    </CardContent>
                    {amelioration.level > level && <Box sx={{ position: "absolute", top: "0", left: "0", backgroundColor: 'rgb(0,0,0,0.9)', minHeight: width * 0.16, width: "16vw" }}>
                        <Box position="absolute" width="100%" top='50%'>
                            <Box width="fit-content" margin="auto">
                                {amelioration.level === level + 1 ? <Button style={{ color: "#E7B468", borderColor: "#E7B468" }} size="large" variant="outlined">UNLOCK</Button> : <LockIcon style={{ right: "50%" }} />}</Box>
                        </Box>
                    </Box>}
                </Card>

            </Box>
        ))}
    </>
}
