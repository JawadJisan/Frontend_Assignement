import React from 'react';
import styles from '../../../styles/Sidebar.module.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import icons from '../Images/icon.png'

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.top}>
                <img src='https://i.ibb.co/VQ11GJN/icon.png' className={styles.Logo} alt="LOGO" />
            </div>
            <div className={styles.center}>
                <ul>
                    <li> <HomeIcon className={styles.icon} /><span>Dashboard</span></li>
                    <li> <GroupsIcon className={styles.icon} /><span>My Team</span></li>
                    <li> <AssignmentTurnedInIcon className={styles.icon} /><span>Task</span></li>
                    <li> <CalendarMonthIcon className={styles.icon} /><span>Calendar</span></li>
                    <li> <QueryStatsIcon className={styles.icon} /><span>Report</span></li>
                    <li> <SettingsIcon className={styles.icon} /><span>Settings</span></li>

                </ul>
            </div>

        </div>
    );
};

export default Sidebar;