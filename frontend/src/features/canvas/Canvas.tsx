import { Box, Dialog, DialogTitle, Typography } from "@mui/material"
import { useState } from "react"
import ImageMapper, { CustomArea } from "react-img-mapper"
import village from "./Mairie.png"
import { map } from "./map"
import { Ameliorations } from "./Ameliorations"
import { AmeliorationsStacked } from "./AmeliorationsStacked"

export interface Amelioration {
    image: string
    title: string
    description: string
    level: number
    cost: {
        bois: number
        pierre: number
        fer: number
        unit: number
    }
}

export interface AmeliorationStacked {
    title: string
    description: string
    levels: AmeliorationStackedLevel[]
}

interface AmeliorationStackedLevel {
    level: number
    cost: {
        bois: number
        pierre: number
        fer: number
        unit: number
    },
    description: string
}

interface TelliclickerArea extends CustomArea {
    description?: string
    ameliorations?: Amelioration[]
    ameliorationsStacked?: AmeliorationStacked[]
    backgroundImage?: string
}

export const Canvas: React.FC<{ width: number }> = ({ width }) => {
    const [currentArea, setCurrentArea] = useState<TelliclickerArea | undefined>(undefined)
    const level = 1 // Todo : fetch it

    return <>
        <Dialog scroll="paper" sx={{
            "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                    display: "inline-block",
                    backgroundColor: "black",
                    color: "#E7B468",
                    width: "100%",
                    maxWidth: '60vw',
                    height: "70%",
                    padding: "5px",
                    border: "1px solid #E7B468"
                },
            },
        }} open={!!currentArea}
            onClose={() => setCurrentArea(undefined)}
        >
            <DialogTitle sx={{backgroundImage: `url(${currentArea?.backgroundImage})`}} textAlign="center" borderBottom="1px solid #E7B468">
                <Typography fontSize="1.3em">{currentArea?.id}</Typography>
                <Typography width="70%" margin="auto" marginTop="15px" fontSize="1em" fontStyle="italic">{currentArea?.description}</Typography>
            </DialogTitle>
            <Box margin="auto" width="90%" marginTop="25px">
                {currentArea?.ameliorations && <Ameliorations ameliorations={currentArea.ameliorations} level={level} width={width} />}
                {currentArea?.ameliorationsStacked && <AmeliorationsStacked ameliorations={currentArea.ameliorationsStacked} width={width} />}
            </Box>
        </Dialog>
        <ImageMapper onClick={(area) => setCurrentArea(area)} width={width} responsive={true} parentWidth={width} src={village} map={map} />
    </>
}
