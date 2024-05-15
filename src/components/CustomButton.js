import { Button } from "@mui/material";

const CustomButton = ({btnName, width, fontWeight}) => {
    return (
        <Button variant="contained" 
        sx={{ 
            borderRadius: 0, 
            mr: 1, 
            color: '#000', 
            backgroundColor: '#fff',
            width: {width}, 
            fontWeight: {fontWeight},
            '&:hover': {
                backgroundColor: '#fff',
            },
            }}>
            {btnName}
        </Button>
    )
}

export default CustomButton
