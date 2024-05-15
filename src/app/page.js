import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
            <Button variant="contained" sx={{ borderRadius: 0, mr: 1 }}>
              Click me!
            </Button>
          </Link>
        </span>
        to go to the Product Catalogue page.
      </div>
    </Box>
  );
}
