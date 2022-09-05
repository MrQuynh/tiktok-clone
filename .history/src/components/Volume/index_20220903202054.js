import classNames from 'classnames/bind';
import { useRef } from 'react';
import styles from './volume.module.scss';

const cx = classNames.bind(styles);

function Volume() {
    // const barRef = useRef();
    // const circleRef = useRef();
    // const mouseClick = (e) => {
    //     console.log(e.clientY);
    //     // barRef.current.style.transform = 'scaleY(50%)';
    //     // circleRef.current.style.bottom = '28px';
    // };

    return (
        // <div className={cx('volume-control')}>
        //     <div className={cx('volume-control-progress')} onClick={mouseClick}></div>
        //     {/* <div className={cx('volume-control-circle')} ref={circleRef}></div>
        //     <div className={cx('volume-control-bar')} ref={barRef}></div> */}
        // </div>
        <div className={cx('slider-count')}>
            <div className={cx('slider')}>
                <input type="range" min="0" max="0" value="50" />
                <progress min="0" max="100" value="50"></progress>
            </div>
        </div>
    );
}

export default Volume;
