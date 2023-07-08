import { Box, Dialog, DialogTitle, Typography } from "@mui/material"
import { useState } from "react"
import ImageMapper, { CustomArea } from "react-img-mapper"
import village from "./Mairie.png"
import { map } from "./map"
import { Mairie } from "./Mairie"
import { AmeliorationsResourceBuilding } from "./AmeliorationsResourceBuilding"
import { Caserne } from "./Caserne"

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

export interface AmeliorationsResource {
    title: string
    description: string
    levels: AmeliorationResourceLevel[]
}

interface AmeliorationResourceLevel {
    level: number
    cost: {
        bois: number
        pierre: number
        fer: number
        unit: number
    },
    description: string
}

export interface UnitBuybable {
    id: number
    image: string
    title: string
    level: number
    description: string
    cost : {
        bois: number
        pierre: number
        fer: number
        unit: number
    }
}

export interface resourceBuildingAmeliorations {
    production: AmeliorationsResource
    capacity: AmeliorationsResource
}

interface TelliclickerArea extends CustomArea {
    description?: string
    ameliorations?: Amelioration[]
    resourceBuildingAmeliorations?: resourceBuildingAmeliorations
    unitsBuyable?: UnitBuybable[]
    backgroundImage?: string
    buildingId?: number
}

export const Canvas: React.FC<{ width: number }> = ({ width }) => {
    const [currentArea, setCurrentArea] = useState<TelliclickerArea | undefined>(undefined)

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
            <DialogTitle sx={{ backgroundImage: `url(${currentArea?.backgroundImage})`, backgroundSize: 'cover' }} textAlign="center" borderBottom="1px solid #E7B468">
                <Typography fontSize="1.3em">{currentArea?.id}</Typography>
                <Typography width="70%" margin="auto" marginTop="15px" fontSize="1em" fontStyle="italic">{currentArea?.description}</Typography>
            </DialogTitle>
            <Box margin="auto" width="90%" marginTop="25px">
                {currentArea?.ameliorations && currentArea?.id==="MAIRIE" && <Mairie ameliorations={currentArea.ameliorations} width={width} />}
                {currentArea?.unitsBuyable && currentArea?.id==="CASERNE" && <Caserne unitsBuyable={currentArea.unitsBuyable} width={width} />}
                {currentArea?.resourceBuildingAmeliorations && currentArea?.buildingId !== undefined && <AmeliorationsResourceBuilding buildingId={currentArea.buildingId} ameliorations={currentArea.resourceBuildingAmeliorations} width={width} />}
            </Box>
        </Dialog>
        <ImageMapper onClick={(area) => setCurrentArea(area)} width={width} responsive={true} parentWidth={width} src={village} map={map} />
    </>
}
