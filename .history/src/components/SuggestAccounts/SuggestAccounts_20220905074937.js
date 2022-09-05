import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
import PropTypes from 'prop-types';

import styles from './SuggestAccounts.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SuggestAccounts({ label, data = [], onViewChange, seeMore }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('label')}>{label}</div>

            {data.map((user) => (
                <AccountItem key={user.id} {...user} />
            ))}

            <p className={cx('more-btn')} onClick={onViewChange}>
                {seeMore ? 'See more' : 'See less'}
            </p>
        </div>
    );
}

SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestAccounts;
