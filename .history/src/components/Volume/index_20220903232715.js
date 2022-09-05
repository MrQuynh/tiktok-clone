import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { AiFillSound } from 'react-icons/ai';
import { BsVolumeMuteFill } from 'react-icons/bs';
import styles from './volume.module.scss';

const cx = classNames.bind(styles);

function Volume({ videoRef }) {
    const progressRef = useRef();
    const [inputValue, setInputValue] = useState(50);
    const handleInput = (e) => {
        progressRef.current.value = e.target.value;
        setInputValue(e.target.value);
        setVolume(e.target.value / 100);
        localStorage.setItem('VOLUME', e.target.value);
    };
    const [volume, setVolume] = useState(0.5);
    useEffect(() => {
        videoRef.current.volume = volume;
    }, [volume]);

    const silentVolume = () => {
        if (volume !== 0) {
            setVolume(0);
            setInputValue(0);
            progressRef.current.value = 0;
        } else {
        }
    };

    return (
        <div className={cx('pause-body1')}>
            <div className={cx('volume')}>
                <div className={cx('slider-count')}>
                    <div className={cx('slider')}>
                        <input type="range" min="0" max="100" value={inputValue} onInput={handleInput} />
                        <progress id="progress" ref={progressRef} min="0" max="100" value="50" />
                    </div>
                </div>
            </div>

            {volume === 0 ? (
                <BsVolumeMuteFill className={cx('sound-icon')} onClick={silentVolume} />
            ) : (
                <AiFillSound className={cx('sound-icon')} onClick={silentVolume} />
            )}
        </div>
    );
}

export default Volume;