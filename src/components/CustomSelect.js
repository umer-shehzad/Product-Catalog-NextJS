import { TextField, Typography, MenuItem } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Countries } from "@/constants/countriesData";

const CustomSelect = ({isMobile}) => {
    return (
        <>
            <Typography variant="p" sx={{ textTransform: "uppercase", color: 'white' }}>country</Typography>
            <TextField
                select
                defaultValue="Country"
                fullWidth
                SelectProps={{
                    IconComponent: ExpandMoreIcon,
                }}
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
                    '& .MuiSelect-icon': {
                        color: '#fff',
                        fontSize: isMobile? '3rem': '5rem'
                    },
                    '& .MuiInputBase-input': {
                        color: 'white',
                    },
                    marginTop: 0.5
                }}
            >
                {Countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </>
    )
}

export default CustomSelect
