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
        case 'user':
            data = {
                title: 'Works',
                isMoney: false,
                link: 'See all Users',
                icon: <PersonOutlineIcon className='icon' />
            };
            break;
        default:
            break;
        case 'order':
            data = {
                title: 'Orders',
                isMoney: false,
                link: 'See all Orders',
                icon: <ShoppingCartCheckoutOutlined className='icon' />
            };
            break;
        case 'earning':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View Net Earnings',
                icon: <MonetizationOnOutlined className='icon' />
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See Details',
                icon: <AccountBalanceWalletOutlined className='icon' />
            };
            break;

    }

    return (
        <div className={styles.widget}>
            <div className={styles.top}>
                <h1 className={styles.title}>Works</h1>
                <MoreVert fontSize='small' />
            </div>
            <div className={styles.newdiv}>
                <div className={styles.featuredChart}>
                    <CircularProgressbar value={50} text={"50%"} strokeWidth={5} />
                </div>
                <div className={styles.ddd}>
                    <h3>75</h3>
                    <h4>Works Today</h4>
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