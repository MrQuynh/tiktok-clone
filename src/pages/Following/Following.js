import classNames from 'classnames/bind';
import FollowingVideo from '~/components/FollowingVideo';
import styles from './Following.module.scss';

const cx = classNames.bind(styles);

function Following() {
    return (
        <div className={cx('wrapper')}>
            <FollowingVideo />
        </div>
    );
}

export default Following;
