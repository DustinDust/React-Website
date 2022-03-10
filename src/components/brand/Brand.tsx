import React from 'react';
import styles from './Brand.module.css';
import brandImage from './import';

export default function Brand() {
  return (
    <div className={`${styles.gpt3__brand} section__padding`}>
      <div className={styles['gpt3__brand-image']}>
        <img src={brandImage.Google} alt='google' />
      </div>
      <div className={styles['gpt3__brand-image']}>
        <img src={brandImage.Slack} alt='slack' />
      </div>
      <div className={styles['gpt3__brand-image']}>
        <img src={brandImage.Atlassian} alt='atlassian' />
      </div>
      <div className={styles['gpt3__brand-image']}>
        <img src={brandImage.Dropbox} alt='dropbox' />
      </div>
      <div className={styles['gpt3__brand-image']}>
        <img src={brandImage.Shopify} alt='shopify' />
      </div>
    </div>
  );
}
