import {AppBar, Box, Button, Container, MenuItem, MenuList, Toolbar, Typography} from "@mui/material";
import {Group} from "@mui/icons-material";

type Props = {
    createActivity: () => void
}

export default function NavBar({ createActivity }: Props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth='xl'>
                    <Toolbar sx={{flexGrow: 1}}>
                        <MenuList sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: 1}}>
                            <Box>
                                <MenuItem sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                                    <Group fontSize='large'></Group>
                                    <Typography variant='h4' sx={{fontWeight: 'bold'}}>Reactivity</Typography>
                                </MenuItem>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                                <MenuItem sx={{fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>Activities</MenuItem>
                                <MenuItem sx={{fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>About</MenuItem>
                                <MenuItem sx={{fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>Contacts</MenuItem>
                            </Box>
                            <Button size='large' variant='contained' color='warning' onClick={createActivity}>Create activity</Button>
                        </MenuList>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );

}