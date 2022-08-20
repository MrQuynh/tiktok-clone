import Video from '~/components/Video';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Data from '~/FakeData/Data';

import { BiSkipNextCircle } from 'react-icons/bi';
import { useEffect, useMemo, useRef, useState } from 'react';

const cx = classNames.bind(styles);
const bigData = Data;
function Home() {
    const bodyRef = useRef();
    const [active, setActive] = useState(false);
    window.onscroll = () => {
        if (window.scrollY > 150) {
            setActive(true);
        } else setActive(false);
    };

    const backToTop = () => {
        bodyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };

    return (
        <div className={cx('body')} ref={bodyRef}>
            {bigData.map((data, index) => (
                <Video key={index} {...data} />
            ))}

            <BiSkipNextCircle className={cx('back-to-top', active && 'active')} onClick={backToTop} />
        </div>
    );
}

export const useElementOnScreen = (options, targetRef) => {
    const [isVisible, setIsVisible] = useState();
    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };
    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [targetRef, optionsMemo]);
    return isVisible;
};
export default Home;
