"use client"
import { Box, useMediaQuery, createTheme } from '@mui/material';
import Heading from '@/components/Heading';
import CustomButton from '@/components/CustomButton';
import CustomAvatar from '@/components/CustomAvatar';
import CustomInput from '@/components/CustomInput';
import CustomSelect from '@/components/CustomSelect';

function Page() {
    const headingName = "Product Catalogue";
    const theme = createTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            {/* Heading */}
            <Box mt={4} mb={5}>
                <Heading headingName={headingName} isMobile={isMobile} />
            </Box>

            {/* Form */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: '600px',
                    margin: 'auto',
                    padding: '0 20px',
                }}
            >
                {/* Image */}
                <Box mb={2} width="60%">
                    <CustomAvatar isMobile={isMobile} />
                </Box>

                {/* Company Name */}
                <Box mb={2} width="60%">
                    <CustomInput />
                </Box>

                {/* Country */}
                <Box mb={2} width="60%">
                    <CustomSelect isMobile={isMobile} />
                </Box>

                {/* Submit */}
                <Box width="60%" textAlign='center' mt={5}>
                    <CustomButton btnName="Submit" width="65%" fontWeight={700} />
                </Box>
            </Box>
        </>
    )
}

export default Page;
