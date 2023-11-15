'use client';
import React, { useEffect, useState } from 'react';
import ToolPage from './ToolPage';
import Category from './Category';
import CardItem from './CardItem';
import { Button } from 'antd';
import nearFooter from '@/public/images/near_footer.png';
import Image from 'next/image';

type Props = {};

type Item = {
  name: string;
  rarity: string;
  price: string;
  owner: string;
  itemImage: string;
  ownerAvatar: string;
};
const MainBody = (props: Props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await (await fetch('/api/items')).json();
      setData(res);
    };
    getData();
  }, []);
  return (
    <div className="relative">
      <div className="bg-bg-main h-screen flex flex-row pt-[120px] gap-[40px] pl-[10%] pr-[10%] justify-center relative">
        <div className="flex w-[30%]">
          <ToolPage />
        </div>
        <div className="flex flex-col w-[60%]">
          <Category />
          <div className="flex pt-[40px]">
            {data.length > 0 &&
              data.map((item: Item, index) => {
                return (
                  <CardItem
                    itemImage={item?.itemImage}
                    itemName={item?.name}
                    price={item?.price}
                    rarity={item?.rarity}
                    seller={item?.owner}
                    sellerIcon={item?.ownerAvatar}
                    key={index}
                  />
                );
              })}
          </div>
          <div className="w-full justify-center flex mt-[55px]">
            <Button className="w-[326px] h-[70px] bg-gradient-to-r from-[#DA458F] to-[#DA34DD] border-none text-white">
              View more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;