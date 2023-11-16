'use client';
import clsx from 'clsx';
import React, { use, useEffect, useState } from 'react';

type Props = {
  setToolSelected: React.Dispatch<
    React.SetStateAction<{
      page: number;
      sort: {
        price: string;
      };
      priceFrom: number;
      priceTo: number;
      category: string;
      search: string;
    }>
  >;
  toolSelected: {
    page: number;
    sort: {
      price: string;
    };
    priceFrom: number;
    priceTo: number;
    category: string;
    search: string;
  };
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  reset: boolean;
};

const Category = (props: Props) => {
  const { setToolSelected, toolSelected, reset, setReset } = props;
  const [selectedItem, setSelectedItem] = useState(toolSelected.category);

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
  const handleCategoryChange = (item: string) => {
    setSelectedItem(item);
    setToolSelected({ ...toolSelected, category: item });
  };

  useEffect(() => {
    if (reset) {
      setReset(false);
      setSelectedItem('All');
    }
  }, [reset]);

  return (
    <div className="flex flex-row overflow-hidden gap-[24px] w-full overflow-x-visible h-[44px]">
      {categoryList.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleCategoryChange(item)}
            className={clsx(
              ' text-white rounded-[4px] py-[10px] px-[16px] w-full cursor-pointer',
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
