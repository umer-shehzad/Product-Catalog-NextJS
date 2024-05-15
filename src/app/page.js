import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CustomButton from '@/components/CustomButton';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div>
        <span>
          <Link href="/prod-catalogue">
            <CustomButton btnName="click me!"/>
          </Link>
        </span>
        to go to the Product Catalogue page.
      </div>
    </Box>
  );
}
