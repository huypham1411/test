import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  const navigationItem = [
    'Home',
    'About us',
    'Our teams',
    'Whitepaper',
    'Marketplace',
    'Roadmap',
    'FAQs',
    'News',
    'Community',
  ];

  return (
    <div className="bg-[#17161A] text-white p-[60px] flex flex-col gap-[60px] w-full">
      <div className="flex md:flex-row sm:flex-col justify-between gap-[60px] md:gap-0">
        <div className="flex flex-col gap-[32px]">
          <div className="uppercase text-[20px] font-[700] leading-[32px]">
            Navigation
          </div>
          <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-[32px] ">
            {navigationItem.map((item: any, index: number) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[32px]">
          <div className="uppercase text-[20px] font-[700] leading-[32px]">
            contact us
          </div>
          <div className="flex flex-col gap-[32px] h-full justify-center">
            <div className="flex flex-row gap-[13px]">
              <PhoneOutlined /> 01234567
            </div>
            <div className="flex flex-row gap-[13px]">
              <MailOutlined />
              tymex-talent@tyme.com
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="uppercase font-[700] text-[20px] leading-[32px]">
            Subcribe to receive our latest update
          </div>
          <div className="flex flex-row h-full items-center gap-[20px]">
            <Input
              placeholder="Your email address"
              className="border-[#89888B] text-[#89888B]"
            />
            <Button className="bg-gradient-to-r from-[#DA458F] to-[#DA34DD] text-white">
              Subcribe
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between">
        <div>©2023 Tyme - Edit. All Rights reserved.</div>
        <div className="flex flex-row justify-between gap-[5%]">
          <div>Security</div>
          <div>Legal</div>
          <div>Privacy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
