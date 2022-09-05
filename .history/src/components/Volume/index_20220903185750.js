import classNames from 'classnames/bind';
import { useRef } from 'react';
import styles from './volume.module.scss';

const cx = classNames.bind(styles);

function Volume() {
    const barRef = useRef();
    const circleRef = useRef();
    const mouseClick = (e) => {
        console.log(e.offsetTop);
        // barRef.current.style.transform = 'scaleY(50%)';
        // circleRef.current.style.bottom = '28px';
    };

    return (
        <div className={cx('volume-control')}>
            <div className={cx('volume-control-progress')} onMouseDown={mouseClick}></div>
            {/* <div className={cx('volume-control-circle')} ref={circleRef}></div>
            <div className={cx('volume-control-bar')} ref={barRef}></div> */}
        </div>
    );
}

export default Volume;
