import { useState, useEffect } from 'react';
import moment from 'moment';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ImFacebook2, } from 'react-icons/im';
import { FaYoutube } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState('');
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        const year = moment().format('YYYY');
        setCurrentYear(year);
    }, []);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    AOS.init({
        duration: 3000,
    })

    return (
        <motion.footer
            className="bg-orange-100 text-black p-4"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={footerVariants}
            transition={{ duration: 0.5 }}
        >
            <div className="footer text-white grid grid-cols-1 lg:grid-cols-4 place-items-center justify-evenly items-center">
                <div data-aos="fade-right">
                    <img className="object-cover object-center w-[80%] " src="https://i.ibb.co/vsHHVgS/Logo.png" alt="" />
                </div>
                <div data-aos="fade-right">
                    <span className="footer-title text-orange-600">Address</span>
                    <p className='text-black'>
                        Level-4, 34, Awal Centre
                        <br />
                        Banani, Dhaka, Bangladesh
                    </p>
                </div>
                <div data-aos="fade-left">
                    <span className="footer-title text-orange-600">Contact Information</span>
                    <p className='text-black'>Email: info@partyplace.com</p>
                    <p className='text-black'>Web: www.partyplace.com</p>
                    <p className="text-center text-black">
                        Phone: +880 1913 509 561 , <br /> +880 1521 353 320
                    </p>
                </div>
                <div data-aos="fade-left">
                    <span className="footer-title text-orange-600">Social</span>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <ImFacebook2 className='text-[#007cf7] ' />
                        <FaYoutube className='text-[#f70000] w-12' />
                        <FcGoogle />
                    </div>
                </div>
            </div>
            <p className="text-center pt-4">
                Copyright © <span>{currentYear} </span> - All right reserved by The Party Place Ltd
            </p>
        </motion.footer>
    );
};

export default Footer;
