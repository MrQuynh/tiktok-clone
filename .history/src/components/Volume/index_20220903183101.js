import classNames from 'classnames/bind';
import { useRef } from 'react';
import styles from './volume.module.scss';

const cx = classNames.bind(styles);

function Volume() {
    const volumeRef = useRef();
    const mouseClick = (e) => {};
    return (
        <div className={cx('volume-control')}>
            <div className={cx('volume-control-progress')} ref={volumeRef} onClick={mouseClick}></div>
            <div className={cx('volume-control-circle')}></div>
            <div className={cx('volume-control-bar')}></div>
        </div>
    );
}

export default Volume;
