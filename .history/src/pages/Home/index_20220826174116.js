import Video from '~/components/Video';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { BiSkipNextCircle } from 'react-icons/bi';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useElementOnScreen } from '~/hooks';

import * as videoListService from '~/services/getVideoList';

const cx = classNames.bind(styles);

function Home() {
    const bodyRef = useRef();
    const [active, setActive] = useState(false);
    const [page, setPage] = useState(1);
    const [more, setMore] = useState(false);
    window.onscroll = () => {
        if (window.scrollY > 150) {
            setActive(true);
        } else setActive(false);
    };

    const backToTop = () => {
        bodyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };
    // get data
    const [videoList, setVideoList] = useState([]);
    useEffect(() => {
        videoListService
            .getVideoList({ type: 'for-you', page })
            .then((data) => {
                setVideoList((prev) => [...prev, ...data]);
                setMore(data.length > 0);
            })
            .catch((error) => console.log(error));
    }, [page]);
    // load more video
    const observer = useRef();
    const lastVideoRef = useCallback(
        (node) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prevPage) => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [more],
    );
    // play video
    // const videoRef = useRef();
    // const options = {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 0.5,
    // };
    // const isVisible = useElementOnScreen(options, videoRef);
    // console.log(isVisible);
    return (
        <div className={cx('body')} id="content" ref={bodyRef}>
            {videoList.map((account, index) => {
                if (videoList.length === index + 1) {
                    return (
                        <div ref={lastVideoRef} key={account.id}>
                            <Video data={account} />
                        </div>
                    );
                } else {
                    return <Video key={account.id} data={account} />;
                }
            })}

            <BiSkipNextCircle className={cx('back-to-top', active && 'active')} onClick={backToTop} />
        </div>
    );
}

export default Home;
