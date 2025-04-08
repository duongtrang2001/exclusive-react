import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import CreateCx from '~/utils/cxHelper';
import styles from './Header.module.scss';
import { DropdownIcon } from '~/components/Icons.jsx';
import Wrapper from '~/components/Wrapper/Wrapper.jsx';
import { useState } from 'react';

const cx = CreateCx(styles);

function TopHeader() {
    const [languages, setLanguages] = useState([
        { code: 'en', title: 'English', status: 'active' },
        { code: 'vi', title: 'Vietnamese', status: '' },
    ]);

    const currentActive = languages.find((lang) => lang.status === 'active');

    function handleClick(selectedLang) {
        const updateLanguages = languages.map((lang) =>
            lang.code === selectedLang.code ? { ...lang, status: 'active' } : { ...lang, status: '' },
        );

        setLanguages(updateLanguages);
    }

    return (
        <div className={cx('top-header')}>
            <div className={cx('container-width', 'wrapper')}>
                <span className={cx('text')}>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <Link to="/" className={cx('text-link')}>
                        ShopNow
                    </Link>
                </span>
                <Tippy
                    interactive
                    placement="top-start"
                    delay={[50, 200]}
                    appendTo={() => document.body}
                    render={(attrs) => (
                        <Wrapper>
                            <ul className={cx('box-languages')} tabIndex="-1" {...attrs}>
                                {languages.map((language) => (
                                    <li
                                        onClick={() => handleClick(language)}
                                        key={language.code}
                                        className={cx('language-item', { active: language.status === 'active' })}
                                    >
                                        {language.title}
                                    </li>
                                ))}
                            </ul>
                        </Wrapper>
                    )}
                >
                    <span className={cx('language')}>
                        {currentActive?.title}
                        <DropdownIcon className={cx('icon')} />
                    </span>
                </Tippy>
            </div>
        </div>
    );
}

export default TopHeader;
