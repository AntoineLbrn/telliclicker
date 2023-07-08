import { useRef } from "react";
import { Box } from "@mui/material"
import logo from "../../logo-notitle.png"
import "./style.css"
// @ts-ignore
import React from "react";
import { Account } from "../account/Account";
import { LeftDrawer } from "../leftDrawer/LeftDrawer";
import { ResourcesBox } from "../resources/ResourcesBox";
import { useContainerDimensions } from "../../hooks";
import { Canvas } from "../canvas/Canvas";

export const Game: React.FC<{ username: string }> = ({ username }) => {
    const ratio = 1.5
    const gameImageRef = useRef()
    const { height } = useContainerDimensions(gameImageRef)

    return <Box sx={{ backgroundColor: `black`, height: "100vh", width: "100%" }}>
        <Box sx={{
            display: 'inline-block', height: '9%', backgroundColor: "rgba(0,0,0,.4)", width: '100%',
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
        }}>
            <Box sx={{ float: 'left', position: 'relative', top: '50%', transform: "translateY(-50%)", }} width="15%" height="80%">
                <img style={{}} height="100%" src={logo} />
            </Box>
            <Box sx={{ float: 'left', color: "#E7B468", position: 'relative', top: '50%', transform: "translateY(-50%)", textAlign: 'center', margin: 'auto' }} width="70%" display="inline-flex" height="100%">
                <ResourcesBox />
            </Box>
            <Box
                textAlign="center"
                sx={{
                    display: "flex",
                    float: "right",
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column"
                }}
                height="100%"
                width="15%"
            >
                <Account username={username} />
            </Box>
        </Box>
        <Box sx={{ height: "90%", display: "flex" }}>
            <Box flex="1" flexShrink="3" >
                <LeftDrawer width={height*ratio} />
                <Box sx={{ width: "3px", margin: "auto", height: "80%", marginTop: "25%", backgroundColor: "#E7B468" }}></Box>
            </Box>
            <Box flex="1" ref={gameImageRef} maxHeight="100%" maxWidth="75%">
                <Canvas width={height*ratio}/>
            </Box>
            <Box flex="1" flexShrink="3">
                <Box sx={{ width: "3px", margin: "auto", height: "80%", marginTop: "25%", backgroundColor: "#E7B468" }}></Box>
            </Box>
        </Box>
    </Box>
}
