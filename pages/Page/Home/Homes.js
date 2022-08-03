import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from '../../../styles/Homes.module.scss'
import Widget from '../../components/Widget/Widget';

import dynamic from 'next/dynamic'

const Featured = dynamic(()=>import('../../components/Featured/Featured'),
{ ssr: false } )
const Activities = dynamic(()=>import('../../components/Featured/Activities'),
{ ssr: false } )




import Members from './Members';


const Homes = () => {
    return (
        <div className={styles.home}>
            <Sidebar />
            <div className={styles.homeContainer}>
                <Navbar />

                <div className={styles.firstdiv}>
                    <div style={{paddingLeft: '20px'}} className={styles.widgets}>
                        <Widget type="user"></Widget>
                        <Widget type="user"></Widget>
                        <Widget type="user"></Widget>
                        <Widget type="user"></Widget>
                    </div>
                    <div style={{paddingRight: '50px'}}>
                        <Featured></Featured>
                    </div>
                </div>


                <div className={styles.secondDiv}>
                    <div style={{paddingLeft: '40px'}}>
                        <Activities></Activities>
                    </div>
                    <div style={{paddingRight: '50px'}}>
                        <Members></Members>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default Homes;