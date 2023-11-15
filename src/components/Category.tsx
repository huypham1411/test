'use client';
import clsx from 'clsx';
import React, { use, useState } from 'react';

type Props = {};

const Category = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState('All');
  const categoryList = [
    'All',
    'Upper Body',
    'Lower Body',
    'Hat',
    'Shoes',
    'Accessory',
    'Legendary',
    'Mythic',
    'Epic',
    'Rare',
  ];
  return (
    <div className="flex flex-row overflow-hidden gap-[24px] w-[70%] overflow-x-visible h-[44px]">
      {categoryList.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => setSelectedItem(item)}
            className={clsx(
              ' text-white rounded-[4px] py-[10px] px-[16px] w-full',
              item === selectedItem
                ? 'bg-gradient-to-r from-[#DA458F] to-[#DA34DD]'
                : 'bg-gradient-to-r from-[#DA458F] opacity-40 to-[#DA34DD]'
            )}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
