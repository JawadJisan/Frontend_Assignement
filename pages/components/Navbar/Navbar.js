import React from 'react';
import styles from '../../../styles/Navbar.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ListIcon from '@mui/icons-material/List';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MessageIcon from '@mui/icons-material/Message';

const Navbar = () => {
    return (
      <div className={styles.navbar}>
          <div className={styles.wrapper}>
              <p className={styles.title}>Dashboard</p>
              <div className={styles.items}>
                  <div className={styles.item}>
                      <SearchIcon className={styles.icon} />
                  </div>
                  <div className={styles.item}>
                    <CircleNotificationsIcon className={styles.icon}/>
                    <span className='counter'>1</span>
                  </div>
                  
                  <div className={styles.item}>
                     <img src="https://api.lorem.space/image/face?hash=92048" alt=""  className={styles.avater}
                     />
                     
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Navbar;