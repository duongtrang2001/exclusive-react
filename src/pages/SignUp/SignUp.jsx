import { Link } from 'react-router-dom';

import CreateCx from '~/utils/cxHelper';
import styles from './SignUp.module.scss';
import Image from '~/components/Image/Image';
import Images from '~/assets/images/Images';
import Input from '~/components/Input/Input';
import Button from '~/components/Button/Button';
import { GoogleIcon } from '~/components/Icons';
import Line from '~/components/Line/Line';

const cx = CreateCx(styles);

function SignUp() {
    return (
        <div className={cx('container-width')}>
            <div className={cx('grid', 'container')}>
                <div className={cx('wrapper-image')}>
                    <Image className={cx('image')} src={Images.sideImage} alt="Side image sign up" />
                </div>
                <form action="" className={cx('form')}>
                    <h2 className={cx('title')}>Create an account</h2>
                    <span className={cx('sub-title')}>Enter your details below</span>
                    <Input borderBtm className={cx('input-text')} type="text" placeholder="Name" />
                    <Input borderBtm className={cx('input-text')} type="text" placeholder="Email or Phone Number" />
                    <Input borderBtm className={cx('input-text')} type="password" placeholder="Password" />
                    <Button className={cx('btn', 'submit')}>Create Account</Button>
                    <Button className={cx('btn', 'signup-gg')} leftIcon={<GoogleIcon />} outline>
                        Sign up with Google
                    </Button>
                    <div className={cx('wrapper-text')}>
                        <span className={cx('text')}>Already have account?</span>
                        <button className={cx('login-btn')}>Log in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
