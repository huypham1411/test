import Image from 'next/image';
import React from 'react';

import ethLogo from '@/public/images/logos_ethereum.png';
import { HeartOutlined } from '@ant-design/icons';

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
    <div className="flex flex-col w-[30%] bg-[#3A3841] rounded-[10px] h-[365px] gap-[24px] text-white p-[16px]">
      <div className="relative">
        <Image
          src={itemImage}
          alt={itemName}
          className="w-[235px] h-[235px] rounded-[4px]"
          width={100}
          height={100}
        />
        <div className="absolute top-[8px] left-[8px] bg-[#313B45] rounded-[4px] py-[4px] px-[12px]">
          {rarity}
        </div>
        <div className="absolute top-[8px] right-[8px]">
          <HeartOutlined />
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-row justify-between">
          <div>{itemName}</div>
          <div className="flex flex-row gap-[8px] items-center">
            <Image src={ethLogo} alt="eth" className="w-[8px] h-[12px]" />
            <div>{price}</div>
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
