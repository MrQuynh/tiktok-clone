import Image from '~/components/Image';
import images from './images';

function LoadingIcon() {
    return (
        <Image
            style={{
                width: '100%',
                height: '100%',
            }}
            src={images.loading}
        />
    );
}

export default LoadingIcon;
