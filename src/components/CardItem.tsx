import Image from 'next/image';
import React from 'react';

import ethLogo from '@/public/images/logos_ethereum.png';
import { HeartOutlined } from '@ant-design/icons';
import clsx from 'clsx';

type Props = {
  rarity: string;
  itemName: string;
  price: string;
  seller: string;
  sellerIcon: string;
  itemImage: string;
};

const CardItem = (props: Props) => {
  const { itemImage, itemName, price, rarity, seller, sellerIcon } = props;
  return (
    <div className="flex flex-col w-full flex-1 bg-[#3A3841] rounded-[10px] h-full gap-[24px] text-white p-[16px]">
      <div className="relative">
        <Image
          src={itemImage}
          alt={itemName}
          className="w-[235px] h-[235px] rounded-[4px] object-contain bg-white"
          width={100}
          height={100}
        />
        <div
          className={clsx(
            'absolute top-[2%] left-[2%] rounded-[4px] py-[4px] px-[12px]',
            rarity === 'Rare' && 'bg-blue-400',
            rarity === 'Mythic' && 'bg-purple-400',
            rarity === 'Legendary' && 'bg-orange-400',
            rarity === 'Epic' && 'bg-lime-400',
            'bg-[#313B45]'
          )}
        >
          {rarity}
        </div>
        <div className="absolute top-[8px] right-[8px]">
          <HeartOutlined className="text-red-500" />
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-row justify-between">
          <div>{itemName}</div>
          <div className="flex flex-row gap-[8px] items-center">
            <Image src={ethLogo} alt="eth" className="w-[8px] h-[12px]" />
            <div>{price} ETH</div>
          </div>
        </div>
        <div className="flex flex-row gap-[12px]">
          <Image
            src={sellerIcon}
            alt={seller}
            width={100}
            height={100}
            className="w-[30px] h-[30px] rounded-[100px]"
          />
          <div>{seller}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
