import classNames from 'classnames/bind';
import { useRef } from 'react';
import styles from './volume.module.scss';

const cx = classNames.bind(styles);

function Volume() {
    const inputRef = useRef();
    const progressRef = useRef();
    const handleInput = (e) => {
        console.log(progressRef.current.value);
        // progressRef.current.value = e.target.value;
    };

    // console.log(inputRef.current.value);

    // const slider = document.querySelector('input');
    // slider.oninput = () => {
    //     const progress = document.querySelector('progress');
    //     progress.value = slider.value;
    // };

    return (
        <div className={cx('slider-count')}>
            <div className={cx('slider')}>
                <input type="range" min="0" max="100" value="50" onInput={handleInput} />
                <progress ref={progressRef} min="0" max="100" value="50" />
            </div>
            <div className={cx('sliderValue')}>50</div>
        </div>
    );
}

export default Volume;
