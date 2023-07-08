import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { ennemies } from './ennemies';
import fer from "../game/images/fer.png"
import { BattleDialog } from './BattleDialog';
import { useGetUserQuery } from '../../services/resources';


const drawerWidth = 350;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const LeftDrawer: React.FC<{width: number}> = ({width}) => {
  const theme = useTheme();
  const [currentEnnemy, setEnnemy] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const { data: user } = useGetUserQuery("user");

  const handleDialogOpen = (ennemy: any) => {
    setEnnemy(ennemy);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box position="absolute" left="10px" color="#E7B468" height="5vh" top="40%">
        <Button
          color="inherit"
          variant="outlined"
          size="large"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
          startIcon={<AutoAwesomeIcon />}
        >
          DÉFIS
        </Button>
      </Box>
      <Drawer
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            backgroundColor: "black",
            borderColor: "#E7B468",
            color: "#E7B468",
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ color: "#E7B468" }}>
          <IconButton color="inherit" onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {ennemies.map((ennemy) => (
            !user?.ennemiesBeaten.includes(ennemy.id) && <>
              <Card onClick={() => handleDialogOpen(ennemy)} sx={{ display: 'flex', backgroundColor: "#302d29", color: "#E7B468" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: "70%", margin: "5px 0" }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {ennemy.title}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      {ennemy.points} points
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: 90, objectFit: 'contain' }}
                  image={ennemy.img}
                  alt="Live from space album cover"
                />
              </Card>
              <Dialog scroll="paper" sx={{
            "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                    display: "inline-block",
                    backgroundColor: "black",
                    color: "#E7B468",
                    width: "100%",
                    maxWidth: '60vw',
                    height: "70%",
                    padding: "5px",
                    border: "1px solid #E7B468"
                },
            },
        }}
                onClose={handleDialogClose}
                open={openDialog}
              >
                <BattleDialog width={width} ennemy={currentEnnemy} />
              </Dialog>
              <Divider />
            </>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}