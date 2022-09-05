import classNames from 'classnames/bind';
import { BsCheckSquare } from 'react-icons/bs';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Watching.module.scss';

const cx = classNames.bind(styles);

function Watching() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body-video')}></div>
            <div className={cx('author')}>
                <div className={cx('info')}>
                    <div className={cx('info-header')}>
                        <div>
                            <Image src="" />
                            <div>
                                <p>yentiktok12</p>
                                <p>
                                    Yên TikTok 12 <BsCheckSquare /> - 1d ago
                                </p>
                            </div>
                        </div>
                        <Button outline>Follow</Button>
                    </div>

                    <div>
                        Vì món quà chính là...Cái kết Thơm. <span>#xuhuong</span>
                        <span>gaixinh</span>
                    </div>
                </div>
                <div className={cx('comments')}></div>
            </div>
        </div>
    );
}

export default Watching;
