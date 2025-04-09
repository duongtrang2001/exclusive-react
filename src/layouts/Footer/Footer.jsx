import CreateCx from '~/utils/cxHelper';
import styles from './Footer.module.scss';
import { FacebookIcon, InstagramIcon, LinkedinIcon, Logo, SendIcon, TwitterIcon } from '~/components/Icons';
import Input from '~/components/Input/Input';
import FooterNavigation from './FooterNavigation';
import Images from '~/assets/images/Images';
import Image from '~/components/Image/Image';
import Line from '~/components/Line/Line';

const cx = CreateCx(styles);

const navigations = [
    {
        title: 'Support',
        items: [
            { content: '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.' },
            { content: 'exclusive@gmail.com' },
            { content: '+88015-88888-9999' },
        ],
    },
    {
        title: 'Account',
        items: [
            { content: 'My Account', to: '/user' },
            { content: 'Login / Register', to: '/signup' },
            { content: 'Cart', to: '/cart' },
            { content: 'Wishlist', to: '/wishlist' },
            { content: 'Shop', to: '/shop' },
        ],
    },
    {
        title: 'Quick Link',
        items: [
            { content: 'Privacy Policy', to: '/policy' },
            { content: 'Terms Of Use', to: '/terms-of-use' },
            { content: 'FAQ', to: '/faq' },
            { content: 'Contact', to: '/contact' },
        ],
    },
];

const social = [
    { icon: <FacebookIcon />, path: '/#' },
    { icon: <TwitterIcon />, path: '/#' },
    { icon: <InstagramIcon />, path: '/#' },
    { icon: <LinkedinIcon />, path: '/#' },
];

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('container-width', 'footer-wrapper')}>
                <div className={cx('group')}>
                    <Logo className={cx('logo')} />
                    <h3 className={cx('title')}>Subscribe</h3>

                    <p className={cx('title-discount')}>Get 10% off your first order</p>
                    <div className={cx('wrapper')}>
                        <Input className={cx('input-email')} type="email" placeholder="Enter your email" outline />
                        <SendIcon className={cx('send-icon')} />
                    </div>
                </div>

                {navigations.map((nav) => (
                    <FooterNavigation key={nav.title} title={nav.title} items={nav.items} />
                ))}
                <div className={cx('download-app')}>
                    <h3 className={cx('title')}>Download App</h3>
                    <p className={cx('title-sale')}>Save $3 with App New User Only</p>
                    <div className={cx('wrapper-img')}>
                        <Image className={cx('qr-code')} src={Images.qrCode} alt="QR Code" />
                        <div className={cx('wrapper-img-app')}>
                            <Image
                                className={cx('app-download')}
                                src={Images.googlePlay}
                                alt="Download app Exclusive with Google Play"
                            />
                            <Image
                                className={cx('app-download')}
                                src={Images.appStore}
                                alt="Download app Exclusive with App Store"
                            />
                        </div>
                    </div>
                    <div className={cx('social')}>
                        {social.map((item, index) => (
                            <a className={cx('icon')} key={index} href={item.path}>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Line white />
            <div className={cx('container-width')}>
                <p className={cx('copyright')}>&copy; Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
