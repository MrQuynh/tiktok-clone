import Image from '~/components/Image';
import images from './images';

function LoadingIcon() {
    return (
        <Image
            style={{
                width: '150%',
                height: '150%',
            }}
            src={images.loading}
        />
    );
}

export default LoadingIcon;
