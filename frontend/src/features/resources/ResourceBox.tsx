import { Box } from "@mui/material"

export const ResourceBox: React.FC<{ value: string, image: string, max: string }> = ({ value, image, max }) => {

    return <>
        <Box sx={{ display: 'flex', flexBasis: "12%", flexShrink: '2' }}>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }} height="100%">
            <img height="60%" src={image} />
        </Box>
        <Box sx={{ display: 'flex', flexGrow: "4", whiteSpace:'nowrap', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', marginLeft: "10px" }} height="100%">
            <span>{value} / {max}</span>
        </Box>
    </>
}
