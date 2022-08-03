import React from 'react';
import styles from '../../../styles/Member.module.scss'


const Member = ({ e }) => {
    return (
        <div className={styles.div}>

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
        </div>
    );
};

export default Member;