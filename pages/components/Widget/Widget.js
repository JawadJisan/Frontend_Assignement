import React from 'react';
import styles from '../../../styles/Widget.module.scss'
import { KeyboardArrowDown, KeyboardArrowUpOutlined, MoreVert } from '@mui/icons-material';
import { CircularProgressbar } from 'react-circular-progressbar';




import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { AccountBalanceWalletOutlined, MonetizationOnOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material';

const Widget = ({ type }) => {

    let data;
    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case 'works':
            data = {
                title: 'Works',
                process: 50,
                ratings: 75,
                description: 'Works Today'
                
            };
            break;
        default:
            break;
        case 'analytics':
            data = {
                title: 'Analytics',
                process: 25,
                ratings: 310,
                description: 'Analytics Today'
            };
            break;
        case 'statistics':
            data = {
                title: 'Statistics',
                process: 59,
                ratings: 89,
                description: 'Todays Status'
            };
            break;
        case 'tasks':
            data = {
                title: 'Tasks',
                process: 75,
                ratings: 15,
                description: 'Task Today'
            };
            break;

    }

    return (
        <div className={styles.widget}>
            <div className={styles.top}>
                <h1 className={styles.title}>{data.title} </h1>
                <MoreVert fontSize='small' />
            </div>
            <div className={styles.newdiv}>
                <div className={styles.featuredChart}>
                    <CircularProgressbar value={data.process} text={data.process} strokeWidth={5} />
                </div>
                <div className={styles.ddd}>
                    <h3>{data.ratings} </h3>
                    <h4>{data.description} </h4>
                </div>
            </div>
            {/* <div className={styles.right}>
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    {diff}%
                </div>
                {data.icon}
            </div> */}
        </div>
    );
};

export default Widget;