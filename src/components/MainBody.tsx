'use client';
import React, { useEffect, useState } from 'react';
import ToolPage from './ToolPage';
import Category from './Category';
import CardItem from './CardItem';
import { Button, Spin } from 'antd';
import Footer from './Footer';

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
  const [data, setData] = useState<any>([]);
  // const [page, setPage] = useState(1);
  const initToolStatus = {
    page: 1,
    sort: {
      price: 'asc',
    },
    priceFrom: 20,
    priceTo: 200,
    category: 'All',
    search: '',
  };
  const [toolSelected, setToolSelected] = useState(initToolStatus);
  const [reset, setReset] = useState(false);
  // const getData = async () => {
  //   const res = await (await fetch(`/api/items`)).json();
  //   setData(res);
  // };
  const onResetTool = (setDraft: any) => {
    setDraft(initToolStatus);
    setToolSelected(initToolStatus);
    setReset(true);
  };

  const fetchDataWithPaginate = async () => {
    const res = await fetch('/api/items', {
      method: 'POST',
      body: JSON.stringify(toolSelected),
    });
    const items = await res.json();
    setData(items);
  };

  useEffect(() => {
    // getData();
    fetchDataWithPaginate();
  }, [toolSelected]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // getData();
      fetchDataWithPaginate();
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative">
      <div className="bg-bg-main h-full flex flex-row pt-[120px] gap-[40px] pl-[10%] pr-[10%] justify-center relative pb-[20%]">
        <div className="flex w-[30%]">
          <ToolPage
            toolSelected={toolSelected}
            setToolSelected={setToolSelected}
            onResetTool={onResetTool}
          />
        </div>
        <div className="flex flex-col w-[60%] h-[50%]">
          <Category
            setToolSelected={setToolSelected}
            toolSelected={toolSelected}
            setReset={setReset}
            reset={reset}
          />
          <div className="flex h-[50%] overflow-y-auto">
            <div className="grid md:grid-cols-3 grid-cols-1 pt-[40px] gap-[40px] w-full flex-wrap h-[1000px]">
              {data.length > 0 ? (
                data.map((item: Item, index: number) => {
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
                })
              ) : (
                <Spin size="large" />
              )}
            </div>
          </div>
          <div className="w-full justify-center flex mt-[55px]">
            <Button
              onClick={() =>
                setToolSelected({
                  ...toolSelected,
                  page: toolSelected.page + 1,
                })
              }
              className="w-[326px] h-[70px] bg-gradient-to-r from-[#DA458F] to-[#DA34DD] border-none text-white"
            >
              View more
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainBody;
