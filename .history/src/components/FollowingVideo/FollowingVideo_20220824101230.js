import classNames from 'classnames/bind';
import FollowingItem from './FollowingItem';
import styles from './FollowingVideo.module.scss';

import Data from '~/FakeData/Data';

const cx = classNames.bind(styles);

function FollowingVideo({ accountList }) {
    return (
        <div className={cx('wrapper-following')}>
            {accountList.map((account) => (
                <FollowingItem key={account.id} data={account} />
            ))}
        </div>
    );
}

export default FollowingVideo;
