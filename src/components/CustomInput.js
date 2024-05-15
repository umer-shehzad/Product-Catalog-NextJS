import { TextField, Typography } from "@mui/material"

const CustomInput = () => {
    return (
        <>
            <Typography variant="p" sx={{ textTransform: "uppercase", color: 'white' }}>company name</Typography>
            <TextField
                placeholder='Lorem Ispum'
                variant="outlined"
                fullWidth
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#f2f2f2',
                            borderRadius: 0
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#fff',
                        },
                    },
                    '& .MuiOutlinedInput-root:hover fieldset': {
                        borderColor: '#ffffff',
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: 'white',
                    },
                    '& .MuiInputBase-input': {
                        color: 'white',
                    },
                    marginTop: 0.5
                }}
            />
        </>
    )
}

export default CustomInput
