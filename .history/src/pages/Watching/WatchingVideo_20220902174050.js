function WatchingVideo() {
    return (
        <div>
            <video className={cx('video')} ref={videoRef} controls>
                <source src={linkVideo} />
            </video>
        </div>
    );
}

export default WatchingVideo;
