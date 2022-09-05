import Image from '~/components/Image';
import images from './images';

function LoadingIcon() {
    return (
        <Image
            style={{
                width: '30%',
                height: '30%',
            }}
            src={images.loading}
        />
    );
}

export default LoadingIcon;
