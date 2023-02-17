import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[44px] sm:text-[34px] text-white">
          See You Soon!
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#4C326C] rounded-[32px] gap-[12px]">
          <span className="font-normal text-[16px] text-white">
            sukhpalchauhan.me@gmail.com
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <img
            src="/sukhpal_logo.png"
            alt="Logo"
            className="md:h-20 sm:h-12 mr-4 hidden sm:block sm:items-end"
          />

          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2022 - 2023 Sukhpal Chauhan Kaur. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
