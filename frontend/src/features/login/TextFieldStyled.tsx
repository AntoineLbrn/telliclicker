import * as React from 'react';
import TextField from '@mui/material/TextField';

export const TextFieldStyled = React.forwardRef((props: any, ref: any) => {
    return (
        <TextField
            {...props}
            ref={ref}
            sx={{
                marginBottom: "30px"
            }}
            inputProps={{
                sx: {
                    color: 'black',
                }
            }}
        />
    );
});