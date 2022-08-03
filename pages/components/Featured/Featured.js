import { KeyboardArrowDown, KeyboardArrowUpOutlined, MoreVert } from '@mui/icons-material';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from '../../../styles/Featured.module.scss';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

/* import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('yourcomponent using react apex-charts'),
  { ssr: false }
) */


const Featured = () => {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
    ];



    return (
        <div className={styles.featured}>
            <div className={styles.top}>

                <div>
                    <h1 className={styles.title}>Activities</h1>
                </div>
                <div className={styles.top1}>
                    <p className={styles.tit}>Recived</p>
                    <p className={styles.tit}>Completed</p>
                    <p className={styles.tit}>6 Month</p>
                    <MoreVert className={styles.more} fontSize='small' />
                </div>
            </div>

            <BarChart width={450} height={300} data={data}>
                <Bar dataKey="pv" barSize={10} fill="#3954FF" />
                <Bar dataKey="uv" barSize={10} fill="#FFD339" />
            </BarChart>




        </div>
    );
};

export default Featured;