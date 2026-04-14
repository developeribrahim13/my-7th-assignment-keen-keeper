import React from 'react';
import ftrlogo from '/assets/logo-xl.png'
import insta from '/assets/instagram.png'
import fb from '/assets/facebook.png'
import twtr from '/assets/twitter.png'
const Footer = () => {
    return (
        <footer className='bg-[#244D3F] pt-14 pb-6'>
        <div className='max-w-[80%] mx-auto'>
            <div className='flex flex-col items-center justify-center gap-4 pb-5'>
                <img src={ftrlogo} alt='footer-logo'></img>
                <p className='text-gray-200 max-[988px]:text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h3 className='text-gray-50 text-xl font-medium mt-2'>Social Links</h3>
                <div className='flex item-center gap-2.5'>
                    <img src={insta} alt='instagram-logo'></img>
                    <img src={fb} alt='facebook-logo'></img>
                    <img src={twtr} alt='twitter-logo'></img>
                </div>
            </div>
            <div className="lg:flex justify-between items-center pt-5 border-t border-gray-600">
                <p className='text-gray-400 text-center lg:text-left max-[390px]:text-sm'>© 2026 KeenKeeper. All rights reserved.</p>
                <ul className="flex justify-center items-center text-gray-400 gap-8 max-[431px]:text-sm max-[387px]:text-[12px]">
                    <li><a href='#'></a>Privacy Policy</li>
                    <li><a href='#'></a>Terms of Sercive</li>
                    <li><a href='#'></a>Cookies</li>
                </ul>
            </div>
        </div>
        </footer>
    );
};

export default Footer;