import { KeyboardArrowDown, KeyboardArrowUpOutlined, MoreVert } from '@mui/icons-material';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import styles from '../../../styles/Activities.module.scss'
import { Area, AreaChart } from 'recharts';






const Activities = () => {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 3500,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 4200,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 7000,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 4500,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 8000,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 4600,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 5000,
            "amt": 2100
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4000,
            "amt": 2100
        }
    ]






    return (
        <div className={styles.featured}>
            <div className={styles.top}>

                <div>
                    <h1 className={styles.title}>Team Activities</h1>
                </div>
                <div className={styles.top1}>
                    <p className={styles.tit}>6 Month</p>
                    <MoreVert className={styles.more} fontSize='small' />
                </div>
            </div>

            <div>
                <AreaChart width={730} height={320} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>




        </div>
    );
};

export default Activities;