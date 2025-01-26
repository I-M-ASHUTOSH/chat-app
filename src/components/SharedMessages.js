import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, IconButton, Typography } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { UpdateSidebarType } from '../redux/slices/app';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { faker } from '@faker-js/faker';
import { DocMsg, LinkMsg } from './conversation/MsgTypes';
import { SHARED_DOCS, SHARED_LINKS } from '../data';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: 320, height: '100vh' }}>
        <Stack sx={{ height: '100%' }}>
          {/* this is the header */}
          <Box
            sx={{
              boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
              width: '100%',
              backgroundColor:
                theme.palette.mode === 'light'
                  ? '#F8FAFF'
                  : theme.palette.background.paper,
            }}
          >
            <Stack
              sx={{ height: '100%', p: 2 }}
              direction="row"
              alignItems={'center'}
              spacing={3}
            >
              <IconButton
                onClick={() => {
                  console.log('clickeddd');
                  dispatch(UpdateSidebarType('CONTACT'));
                }}
              >
                <CaretLeft />
              </IconButton>
              <Typography variant="subtitle2">Shared Messages</Typography>
            </Stack>
          </Box>
          <Tabs
            sx={{ paddingLeft: 7, pt: 0.5 }}
            justifyContent="center"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Media" {...a11yProps(0)} />
            <Tab label="Link" {...a11yProps(1)} />
            <Tab label="Docs" {...a11yProps(2)} />
          </Tabs>

          <Stack
            sx={{
              height: '100%',
              position: 'relative',
              flexGrow: 1,
              overflowY: 'scroll',
              //   backgroundColor:
              //     theme.palette.mode === 'light'
              //       ? '#fff'
              //       : theme.palette.background.paper,
            }}
            p={3}
            spacing={value === 1 ? 1 : 3}
          >
            {(() => {
              switch (value) {
                case 0:
                  //Images
                  return (
                    <Grid container spacing={2}>
                      {[0, 1, 2, 3, 4, 5, 6].map(el => {
                        return (
                          <Grid item xs={4}>
                            <img
                              src={faker.image.food()}
                              alt={faker.name.fullName()}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  );

                case 1:
                  return SHARED_LINKS.map(el => <LinkMsg el={el} />);
                //Link

                case 2:
                  //Docs
                  return SHARED_DOCS.map(el => <DocMsg el={el} />);

                default:
                  break;
              }
            })()}
            {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                 
                </Box>
                <CustomTabPanel value={value} index={0}>
                  Item One
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  Item Three
                </CustomTabPanel> */}
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default SharedMessages;
