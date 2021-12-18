import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import ChangePassword from './ChangePassword';
import PersonInfo from './PersonInfo';
import axios from "axios";
import NoTicketsYet from './NoTicketsYet';
import Ticket from "./Ticket";

import MyTickets from "./MyTickets";

export default function ProfileNav() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <TabContext value={value}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="1" label="Personal Info" />
                    <Tab value="2" label="My Tickets" />
                    <Tab value="3" label="Password" />

                </Tabs>
                <TabPanel value="1"><PersonInfo key={"1"} personID={"61b38e1f43fb1cc2ab42101b"} /></TabPanel>
                <TabPanel value="2"><MyTickets personID={"61b38e1f43fb1cc2ab42101b"}/></TabPanel>
                <TabPanel value="3"><ChangePassword personID={"61b38e1f43fb1cc2ab42101b"}/></TabPanel>
            </TabContext>
        </Box>
    );
}
