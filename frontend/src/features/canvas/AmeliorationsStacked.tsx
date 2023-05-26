import bois from "../game/images/bois.png"
import pierre from "../game/images/pierre.png"
import fer from "../game/images/fer.png"
import unit from "../game/images/unit.png"
import { Card, CardContent, Typography, Box, Button } from "@mui/material"
import { AmeliorationStacked } from "./Canvas"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export const AmeliorationsStacked: React.FC<{ ameliorations: AmeliorationStacked[], width: number }> = ({ ameliorations, width }) => {

    const level = 0 // fetch level by ameliorations 

    return <>
        {ameliorations.map((amelioration) => (
            <Box display="inline-block" width="100%" border="3px solid #E7B468" marginX="5px" paddingY="20px" marginY="30px">
                <Typography gutterBottom marginTop="20px" textAlign="center" variant="h6" >
                    {amelioration.description}
                </Typography>
                <Box width="100%" display="flex">
                    <Card key={amelioration.title} sx={{ margin: "10px", position: "relative"}} style={{ width: "40%", height: "min-content" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Niveau {level}
                            </Typography>
                            <Typography variant="h6" >
                                {amelioration.levels[level].description}
                            </Typography>
                        </CardContent>
                    </Card>
                    {amelioration.levels[level + 1] && <>
                        <Typography margin="auto" textAlign="center" width="20%">
                            <Button variant="contained" style={{ backgroundColor: "#E7B468", color: "black" }} size="medium" endIcon={<ArrowRightAltIcon />}>Améliorer</Button>
                            <br /><br />
                            {amelioration.levels[level].cost.bois > 0 && <><img style={{ height: "0.875rem", verticalAlign: 'middle' }} src={bois} /> {amelioration.levels[level].cost.bois}  &nbsp; </>}
                            {amelioration.levels[level].cost.pierre > 0 && <><img style={{ height: "0.875rem", verticalAlign: 'middle' }} src={pierre} /> {amelioration.levels[level].cost.pierre} &nbsp; </>}
                            {amelioration.levels[level].cost.fer > 0 && <><img style={{ height: "0.875rem", verticalAlign: 'middle' }} src={fer} /> {amelioration.levels[level].cost.fer} &nbsp;</>}
                            {amelioration.levels[level].cost.unit > 0 && <><img style={{ height: "0.875rem", verticalAlign: 'middle' }} src={unit} /> {amelioration.levels[level].cost.unit} &nbsp;</>}

                        </Typography>
                        <Card key={amelioration.title} sx={{ margin: "10px", position: "relative" }} style={{ width: "40%", height: "min-content", backgroundColor:"#212120" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Niveau {level + 1}
                                </Typography>
                                <Typography variant="h6" >
                                    {amelioration.levels[level + 1].description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </>
                    }
                </Box>
            </Box>
        ))}
    </>
}
