import { color } from '@mui/system';
import React, { useState } from 'react';
import styles from '../../../styles/Members.module.scss'

const Members = () => {
    const [employs, setEmploys] = useState([]);

    fetch('http://localhost:5000/member')
        .then(res => res.json())
        .then(data => {
            setEmploys(data)
            console.log(employs, 'members Data')
        });

    return (
        <div className={styles.div}>
            <h3 className={styles.title}>Team Member Performance</h3>
            {
                employs.map((e, index) =>
                    <>
                        <div className={styles.member}>
                            <div className={styles.imgDiv}>
                                <img className={styles.img} src={e.img} alt="" />
                            </div>
                            <div className={styles.text}>
                                <h3>{e.name} </h3>
                                <p style={{ color: '#9090BA' }}>{e.degignation} </p>
                            </div>
                            <h2 style={{ color: '#00ADE1', paddingLeft: '15px', paddingRight: '15px', borderRadius: '10px', backgroundColor: '#113C5E' }}>{e.rating} </h2>
                        </div>
                    </>)
            }

            {/*  <div className={styles.member}>
                <div className={styles.imgDiv}>
                    <img className={styles.img} src="https://i.ibb.co/T19Lb7G/Rectangle-36.png" alt="" />
                </div>
                <div className={styles.text}>
                    <h3>Anirudh Arun</h3>
                    <p style={{ color: '#9090BA' }}>Project Manager</p>
                </div>
                <h2 style={{ color: '#00ADE1', paddingLeft: '15px', paddingRight: '15px', borderRadius: '10px', backgroundColor: '#113C5E' }}>9.8</h2>
            </div>
            <div className={styles.member}>
                <div className={styles.imgDiv}>
                    <img className={styles.img} src="https://i.ibb.co/N9VY6gX/Rectangle-42.png" alt="" />
                </div>
                <div className={styles.text}>
                    <h3>Samvrant</h3>
                    <p style={{ color: '#9090BA' }}>UX Designer</p>
                </div>
                <h2 style={{ color: '#00ADE1', paddingLeft: '15px', paddingRight: '15px', borderRadius: '10px', backgroundColor: '#113C5E' }}>9.2</h2>
            </div>
            <div className={styles.member}>
                <div className={styles.imgDiv}>
                    <img className={styles.img} src="https://i.ibb.co/DKfDDW6/Rectangle-43.png" alt="" />
                </div>
                <div className={styles.text}>
                    <h3>Aryamann</h3>
                    <p style={{ color: '#9090BA' }}>UI Designer</p>
                </div>
                <h2 style={{ color: '#00ADE1', paddingLeft: '15px', paddingRight: '15px', textAlign: 'right', borderRadius: '10px', backgroundColor: '#113C5E' }}>9.1</h2>
            </div>
            <div className={styles.member}>
                <div className={styles.imgDiv}>
                    <img className={styles.img} src="https://i.ibb.co/gtrrhvb/Rectangle-44.png" alt="" />
                </div>
                <div className={styles.text}>
                    <h3>Dhanush</h3>
                    <p style={{ color: '#9090BA' }}>Motion Designer</p>
                </div>
                <h2 style={{ color: '#00ADE1', textAlign: 'right', paddingLeft: '15px', paddingRight: '15px', borderRadius: '10px', backgroundColor: '#113C5E' }}>8.5</h2>
            </div> */}

        </div>
    );
};

export default Members;