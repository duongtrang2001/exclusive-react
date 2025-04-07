export const Logo = ({ width = '11.8rem', height = '2.4rem', className, color = 'black' }) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 118 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1.51705 21V3.54545H13.2784V6.58807H5.20739V10.7472H12.6733V13.7898H5.20739V17.9574H13.3125V21H1.51705ZM19.8983 7.90909L22.3017 12.4858L24.7647 7.90909H28.4892L24.6966 14.4545L28.5914 21H24.8841L22.3017 16.4744L19.7619 21H16.0119L19.8983 14.4545L16.1483 7.90909H19.8983ZM36.8114 21.2557C35.4705 21.2557 34.3171 20.9716 33.3512 20.4034C32.391 19.8295 31.6524 19.0341 31.1353 18.017C30.6239 17 30.3683 15.8295 30.3683 14.5057C30.3683 13.1648 30.6268 11.9886 31.1438 10.9773C31.6666 9.96023 32.408 9.16761 33.3683 8.59943C34.3285 8.02557 35.4705 7.73864 36.7944 7.73864C37.9364 7.73864 38.9364 7.94602 39.7944 8.36079C40.6524 8.77557 41.3313 9.35795 41.8313 10.108C42.3313 10.858 42.6069 11.7386 42.658 12.75H39.2319C39.1353 12.0966 38.8796 11.571 38.4649 11.1733C38.0558 10.7699 37.5188 10.5682 36.8541 10.5682C36.2916 10.5682 35.8001 10.7216 35.3796 11.0284C34.9649 11.3295 34.641 11.7699 34.408 12.3494C34.1751 12.929 34.0586 13.6307 34.0586 14.4545C34.0586 15.2898 34.1722 16 34.3995 16.5852C34.6325 17.1705 34.9592 17.6165 35.3796 17.9233C35.8001 18.2301 36.2916 18.3835 36.8541 18.3835C37.2688 18.3835 37.641 18.2983 37.9705 18.1278C38.3058 17.9574 38.5813 17.7102 38.7972 17.3864C39.0188 17.0568 39.1637 16.6619 39.2319 16.2017H42.658C42.6012 17.2017 42.3285 18.0824 41.8399 18.8438C41.3569 19.5994 40.6893 20.1903 39.837 20.6165C38.9847 21.0426 37.9762 21.2557 36.8114 21.2557ZM49.3333 3.54545V21H45.7026V3.54545H49.3333ZM61.3566 15.4261V7.90909H64.9872V21H61.5015V18.6222H61.3651C61.0696 19.3892 60.5782 20.0057 59.8907 20.4716C59.2088 20.9375 58.3764 21.1705 57.3935 21.1705C56.5185 21.1705 55.7486 20.9716 55.0838 20.5739C54.4191 20.1761 53.8992 19.6108 53.5242 18.8778C53.1549 18.1449 52.9674 17.267 52.9617 16.2443V7.90909H56.5924V15.5966C56.598 16.3693 56.8054 16.9801 57.2145 17.429C57.6236 17.8778 58.1719 18.1023 58.8594 18.1023C59.2969 18.1023 59.706 18.0028 60.0867 17.804C60.4674 17.5994 60.7742 17.2983 61.0071 16.9006C61.2458 16.5028 61.3622 16.0114 61.3566 15.4261ZM79.5034 11.642L76.1795 11.8466C76.1227 11.5625 76.0006 11.3068 75.8131 11.0795C75.6256 10.8466 75.3784 10.6619 75.0716 10.5256C74.7705 10.3835 74.4097 10.3125 73.9892 10.3125C73.4267 10.3125 72.9523 10.4318 72.5659 10.6705C72.1795 10.9034 71.9864 11.2159 71.9864 11.608C71.9864 11.9205 72.1114 12.1847 72.3614 12.4006C72.6114 12.6165 73.0403 12.7898 73.6483 12.9205L76.0176 13.3977C77.2903 13.6591 78.2392 14.0795 78.8642 14.6591C79.4892 15.2386 79.8017 16 79.8017 16.9432C79.8017 17.8011 79.5489 18.554 79.0432 19.2017C78.5432 19.8494 77.8557 20.3551 76.9807 20.7188C76.1114 21.0767 75.1085 21.2557 73.9722 21.2557C72.2392 21.2557 70.8585 20.8949 69.8301 20.1733C68.8074 19.446 68.208 18.4574 68.0318 17.2074L71.6028 17.0199C71.7108 17.5483 71.9722 17.9517 72.3869 18.2301C72.8017 18.5028 73.333 18.6392 73.9807 18.6392C74.617 18.6392 75.1284 18.517 75.5148 18.2727C75.9068 18.0227 76.1057 17.7017 76.1114 17.3097C76.1057 16.9801 75.9665 16.7102 75.6937 16.5C75.421 16.2841 75.0006 16.1193 74.4324 16.0057L72.1653 15.554C70.8869 15.2983 69.9352 14.8551 69.3102 14.2244C68.6909 13.5937 68.3812 12.7898 68.3812 11.8125C68.3812 10.9716 68.6085 10.2472 69.0631 9.6392C69.5233 9.03125 70.1682 8.5625 70.9977 8.23295C71.833 7.90341 72.8102 7.73864 73.9295 7.73864C75.583 7.73864 76.8841 8.08807 77.833 8.78693C78.7875 9.4858 79.3443 10.4375 79.5034 11.642ZM82.8079 21V7.90909H86.4386V21H82.8079ZM84.6318 6.22159C84.092 6.22159 83.6289 6.04261 83.2426 5.68466C82.8619 5.32102 82.6716 4.88636 82.6716 4.38068C82.6716 3.88068 82.8619 3.4517 83.2426 3.09375C83.6289 2.73011 84.092 2.54829 84.6318 2.54829C85.1716 2.54829 85.6318 2.73011 86.0125 3.09375C86.3988 3.4517 86.592 3.88068 86.592 4.38068C86.592 4.88636 86.3988 5.32102 86.0125 5.68466C85.6318 6.04261 85.1716 6.22159 84.6318 6.22159ZM102.272 7.90909L97.6948 21H93.6039L89.0272 7.90909H92.8624L95.5812 17.2756H95.7176L98.4278 7.90909H102.272ZM110.394 21.2557C109.047 21.2557 107.888 20.983 106.916 20.4375C105.95 19.8864 105.206 19.108 104.683 18.1023C104.161 17.0909 103.899 15.8949 103.899 14.5142C103.899 13.1676 104.161 11.9858 104.683 10.9688C105.206 9.9517 105.942 9.15909 106.891 8.59091C107.845 8.02273 108.965 7.73864 110.249 7.73864C111.112 7.73864 111.916 7.87784 112.661 8.15625C113.411 8.42898 114.064 8.84091 114.621 9.39205C115.183 9.94318 115.621 10.6364 115.933 11.4716C116.246 12.3011 116.402 13.2727 116.402 14.3864V15.3835H105.348V13.1335H112.984C112.984 12.6108 112.871 12.1477 112.644 11.7443C112.416 11.3409 112.101 11.0256 111.698 10.7983C111.3 10.5653 110.837 10.4489 110.308 10.4489C109.757 10.4489 109.269 10.5767 108.842 10.8324C108.422 11.0824 108.092 11.4205 107.854 11.8466C107.615 12.267 107.493 12.7358 107.487 13.2528V15.392C107.487 16.0398 107.607 16.5994 107.845 17.071C108.09 17.5426 108.433 17.9062 108.876 18.1619C109.32 18.4176 109.845 18.5455 110.453 18.5455C110.857 18.5455 111.226 18.4886 111.561 18.375C111.896 18.2614 112.183 18.0909 112.422 17.8636C112.661 17.6364 112.842 17.358 112.967 17.0284L116.325 17.25C116.155 18.0568 115.805 18.7614 115.277 19.3636C114.754 19.9602 114.078 20.4261 113.249 20.7614C112.425 21.0909 111.473 21.2557 110.394 21.2557Z"
            fill={color}
        />
    </svg>
);

export const DropdownIcon = ({ width = '1.3rem', height = '0.8rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 13 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z"
            fill="white"
        />
    </svg>
);

export const SearchIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
    </svg>
);

export const FavouriteIcon = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const CartIcon = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M3 5H7L10 22H26" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
            d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
