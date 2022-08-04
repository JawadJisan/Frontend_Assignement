import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../../../styles/Members.module.scss'
import a from '../../../public/a.png' 
import b from '../../../public/b.png' 
import c from '../../../public/c.png' 
import d from '../../../public/d.png' 

const Members = () => {

    return (
        <div className={styles.div}>
            <h3 className={styles.title}>Team Member Performance</h3>

            <div className={styles.member}>
                <div className={styles.imgDiv}>
                    {/* <img className={styles.img} src="https://i.ibb.co/T19Lb7G/Rectangle-36.png" alt="" /> */}
                    <Image
                        src={a}
                        alt="User Pic"
                        // width={54}
                        // height={54}
                        className={styles.img}
                    />  
                </div>
                <div className={styles.text}>
                    <h3>Anirudh Arun</h3>
                    <p style={{ color: '#9090BA' }}>Project Manager</p>
                </div>
                <h2 style={{ color: '#00ADE1', paddingLeft: '15px', paddingRight: '15px', borderRadius: '10px', backgroundColor: '#113C5E' }}>9.8</h2>
            </div>
            <div className={styles.member}>
                <div className={styles.imgDiv}>
                    <Image
                        src={b}
                        alt="User Pic"
                        // width={54}
                        // height={54}
                        className={styles.img}
                    />                   
                    {/* <img className={styles.img} src="https://i.ibb.co/N9VY6gX/Rectangle-42.png" alt="" /> */}
                </div>
                <div className={styles.text}>
                    <h3>Samvrant</h3>
                    <p style={{ color: '#9090BA' }}>UX Designer</p>
                </div>
                <h2 style={{ color: '#00ADE1', paddingLeft: '15px', paddingRight: '15px', borderRadius: '10px', backgroundColor: '#113C5E' }}>9.2</h2>
            </div>
            <div className={styles.member}>
                <div className={styles.imgDiv}>
                <Image
                        src={c}
                        alt="User Pic"
                        // width={54}
                        // height={54}
                        className={styles.img}
                    />  
                    {/* <img className={styles.img} src="https://i.ibb.co/DKfDDW6/Rectangle-43.png" alt="" /> */}
                </div>
                <div className={styles.text}>
                    <h3>Aryamann</h3>
                    <p style={{ color: '#9090BA' }}>UI Designer</p>
                </div>
                <h2 style={{ color: '#00ADE1', paddingLeft: '15px', paddingRight: '15px', textAlign: 'right', borderRadius: '10px', backgroundColor: '#113C5E' }}>9.1</h2>
            </div>
            <div className={styles.member}>
                <div className={styles.imgDiv}>
                    {/* <img className={styles.img} src="https://i.ibb.co/gtrrhvb/Rectangle-44.png" alt="" /> */}
                    <Image
                        src={d}
                        alt="User Pic"
                        // width={54}
                        // height={54}
                        className={styles.img}
                    />  
                </div>
                <div className={styles.text}>
                    <h3>Dhanush</h3>
                    <p style={{ color: '#9090BA' }}>Motion Designer</p>
                </div>
                <h2 style={{ color: '#00ADE1', textAlign: 'right', paddingLeft: '15px', paddingRight: '15px', borderRadius: '10px', backgroundColor: '#113C5E' }}>8.5</h2>
            </div>

        </div>
    );
};

export default Members;