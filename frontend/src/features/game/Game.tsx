import { useEffect, useRef } from "react";
import { Box } from "@mui/material"
import village from "./images/Mairie2.png"
import logo from "../../logo-notitle.png"
import "./style.css"
// @ts-ignore
import imageMapResize from 'image-map-resizer'
import React from "react";
import { Account } from "../account/Account";
import { LeftDrawer } from "../leftDrawer/LeftDrawer";
import { ResourcesBox } from "../resources/ResourcesBox";
import ImageMapper from 'react-img-mapper';
import { useContainerDimensions } from "../../hooks";

export const Game: React.FC<{ username: string }> = ({ username }) => {
    const ratio = 1.5
    const gameImageRef = useRef()
    const { width, height } = useContainerDimensions(gameImageRef)

    console.log(height)
    const MAP = {
        name: 'my-map',
        // GET JSON FROM BELOW URL AS AN EXAMPLE
        areas: [{
            "id": "469f9800-c45a-483f-b13e-bd24f3fb79f4",
            "title": "Mairie",
            "shape": "poly",
            "name": "Mairie",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [779, 275, 706, 237, 706, 201, 696, 194, 714, 161, 696, 136, 687, 74, 712, 56, 714, 27, 739, 2, 877, 4, 904, 67, 893, 110, 945, 159, 942, 223, 909, 257, 839, 243
            ],
        }],
    };
    useEffect(() => {
        imageMapResize()
    }, []);

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
                <LeftDrawer />
                <Box sx={{ width: "3px", margin: "auto", height: "80%", marginTop: "25%", backgroundColor: "#E7B468" }}></Box>
            </Box>
            <Box flex="1" ref={gameImageRef} maxHeight="100%" maxWidth="75%">
                <ImageMapper width={height*ratio} responsive={true} parentWidth={height*ratio} src={village} map={MAP} />
            </Box>
            <Box flex="1" flexShrink="3">
                <Box sx={{ width: "3px", margin: "auto", height: "80%", marginTop: "25%", backgroundColor: "#E7B468" }}></Box>
            </Box>
        </Box>
    </Box>
}
