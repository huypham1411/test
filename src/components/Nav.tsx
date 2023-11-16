'use client';
import { Button, Dropdown, MenuProps, Popover } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import icon from '@/public/images/icon.png';
import { MenuOutlined } from '@ant-design/icons';

type Props = {};

const Nav = (props: Props) => {
  const [activeTab, setActiveTab] = useState('MARKETPLACE ROADMAP');
  const menuItems = [
    { name: 'HOME' },
    { name: 'ABOUT US' },
    { name: 'OUR TEAMS' },
    { name: 'MARKETPLACE ROADMAP', active: true },
    { name: 'WHITE PAPER' },
  ];
  const items: MenuProps['items'] = menuItems.map((item) => {
    return {
      key: item.name,
      label:
        activeTab === item.name ? (
          <div
            className="flex flex-row gap-[10px]"
            onClick={() => setActiveTab(item.name)}
          >
            <div className="text-[#DA458F] ">{item.name.split(' ')[0]}</div>
            {item.name.split(' ')[1]}
          </div>
        ) : (
          item.name
        ),
    };
  });

  return (
    <div className="flex flex-row bg-[#17161A] justify-between py-[32px] pl-[15%] pr-[2%] relative items-center w-full">
      <div className="hidden lg:flex flex-row gap-[10%] text-white">
        {menuItems.map((item, index) => {
          return (
            <div
              key={index}
              className={
                'text-[14px] font-[700] leading-[20px] min-w-fit cursor-pointer'
              }
              onClick={() => setActiveTab(item.name)}
            >
              {activeTab === item.name ? (
                <div className="flex flex-row gap-[10px]">
                  <div className="text-[#DA458F] ">
                    {item.name.split(' ')[0]}
                  </div>
                  {item.name.split(' ')[1]}
                </div>
              ) : (
                item.name
              )}
            </div>
          );
        })}
      </div>
      {/* mobile menu */}
      <div className="lg:hidden" onClick={(e) => e.preventDefault()}>
        <Dropdown menu={{ items }}>
          <MenuOutlined className="text-white" />
        </Dropdown>
      </div>
      <div className="flex flex-row gap-[3%] items-center">
        <Button className="bg-[#DA458F] blur-[50] text-white leading-[24px] text-[16px] font-[600] border-none">
          Connect Wallet
        </Button>
        <Image src={icon} alt={'icon'} className="w-[56px] h-[24px]" />
      </div>
    </div>
  );
};

export default Nav;
