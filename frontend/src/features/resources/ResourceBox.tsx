import { Box } from "@mui/material"

export const ResourceBox: React.FC<{ value: string, image: string }> = ({ value, image }) => {

    return <>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', marginLeft: "15%" }} height="100%">
            <img height="60%" src={image} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', marginLeft: "10px" }} height="100%">
            {value}
        </Box>
    </>
}
