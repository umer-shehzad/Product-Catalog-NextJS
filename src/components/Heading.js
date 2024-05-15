import { Typography } from '@mui/material';

const Heading = ({ headingName, isMobile }) => {
    return (
        <Typography variant={isMobile? 'h5': 'h3'} textAlign="center">
            {headingName}
        </Typography>
    )
}

export default Heading
