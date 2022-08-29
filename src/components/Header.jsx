import { Box, Typography, Container } from '@mui/material';

function Header() {

    const primaryColorBox = {
        marginInlineStart: 0, 
        marginInlineEnd: 0, 
        marginBlockStart: 0, 
        marginBlockEnd: 0, 
        paddingInlineStart: "2rem", 
        paddingInlineEnd: "2rem", 
        paddingBlockStart: "2rem", 
        paddingBlockEnd: "2rem",
        backgroundColor: "#212121",
        color: "#f0f0f0"
    }

    return ( 
        <>
            <Box component="header" sx={primaryColorBox}>
                <Container maxWidth="md" >
                    <Typography variant="h1" component="h1" align="center">
                        Palindrome Birthday
                    </Typography>
                </Container>
            </Box>
            <Container sx={{my: "2rem"}} maxWidth="md" align="center" >
                Find out if your birthday is a palindrome or not.
            </Container>
        </>
     );
}

export default Header;