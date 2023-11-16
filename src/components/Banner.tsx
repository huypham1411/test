import Image from 'next/image';
import React from 'react';

import bannerBg from '@/public/images/banner_image.png';
import sideBanner from '@/public/images/side_banner.png';
import bannerTitle from '@/public/images/banner.png';
import mainBanner from '@/public/images/main_image.png';
import bgTitle from '@/public/images/bg_main_title.png';

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="relative">
      <Image
        src={bannerBg}
        alt="banner-bg"
        className="w-full h-full"
        priority
      />
      <Image
        src={sideBanner}
        alt="side-banner"
        className="w-full h-full mt-[-12px]"
        priority
      />
      <div className="absolute w-[60%] left-[7.7%] top-[9%]">
        <Image src={bannerTitle} alt="banner-title" className="w-full h-full" />
      </div>
      <div className="absolute top-0 right-[8%] w-[26.5%]">
        <div className="relative">
          <Image
            className="w-full h-full"
            src={mainBanner}
            alt="main-img"
            priority
          />
          <div className="absolute top-[70%]">
            <div className="relative w-[108%] flex items-center">
              <Image
                src={bgTitle}
                alt="bg-title"
                className="w-full h-full"
                priority
              />
              <div className="absolute w-full leading-[112%] text-[120%] md:text-[220%] lg:text-[320%] font-[700] text-white text-center pr-[20%]">
                THE DJ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
