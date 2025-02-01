import React from 'react';
import { Dialog,DialogContent, Slide, DialogTitle,Grid } from '@mui/material';
import { transform } from 'framer-motion';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Shortcuts = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
    >
      <DialogTitle>Keyboard Shortcuts</DialogTitle>
      <DialogContent sx={{mt:4}}>
            <Grid>

            </Grid>

      </DialogContent>
    </Dialog>
  );
};

export default Shortcuts;
