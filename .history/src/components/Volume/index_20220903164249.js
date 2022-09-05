import classNames from 'classnames/bind';
import styles from './volume.module.scss';

const cx = classNames.bind(styles);

function Volume() {
    return (
        <div className={cx('volume-control')}>
            <div className={cx('volume-control-progress')}></div>
            <div className={cx('volume-control-circle')}></div>
            <div className={cx('volume-control-bar')}></div>
        </div>
    );
}

export default Volume;
