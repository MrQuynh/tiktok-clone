import Portal from '../Portal';
import classNames from 'classnames/bind';
import styles from './ModalEdit.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function ModalEdit() {
    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <div className={cx('header')}>
                        <div>Edit profile</div>
                        <AiOutlineClose />
                    </div>
                    <div className={cx('content')}>
                        <div>
                            <div>Profile photo</div>
                            <div>
                                <Image />
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={cx('footer')}></div>
                </div>
            </div>
        </Portal>
    );
}

export default ModalEdit;
