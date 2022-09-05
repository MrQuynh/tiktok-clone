import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
import PropTypes from 'prop-types';

import styles from './SuggestAccounts.module.scss';
import Data from '~/FakeData/Data';

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('label')}>{label}</div>

            {Data.map((item) => (
                <AccountItem key={item.id} {...item} />
            ))}

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccounts;
