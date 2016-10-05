import React from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import strings from 'lang';
import { IconSteam } from 'components/Icons';
import styles from './Home.css';

export default () => (
  <div className={styles.Buttons}>
    <div>
      <FlatButton
        label={
          <span className={styles.label}>
            <span>
              {strings.login}
            </span>
            <span>
              {strings.login_desc}
            </span>
          </span>
        }
        icon={<IconSteam />}
        href="/login"
      />
    </div>
    <div>
      <FlatButton
        label={
          <span className={styles.label}>
            <span>
              {strings.parse}
            </span>
            <span>
              {strings.parse_desc}
            </span>
          </span>
        }
        containerElement={<Link to="/request" />}
      />
    </div>
  </div>
);
