import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Slider } from 'antd';
import React, { useState } from 'react';
import type { SliderMarks } from 'antd/es/slider';

import iconClose from '@/public/images/close.png';
import Image from 'next/image';

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
  onResetTool: (setDraft: any) => void;
};

const ToolPage = (props: Props) => {
  const { setToolSelected, toolSelected, onResetTool } = props;
  const [draftSelected, setDraftSelected] = useState(toolSelected);

  const marks: SliderMarks = {
    0: { label: <div className="text-[#D6D6D6]">0 ETH</div> },
    200: { label: <div className="text-[#D6D6D6] w-max">200 ETH</div> },
  };

  const priceSort = [
    { value: 'asc', label: 'Low to high' },
    { value: 'desc', label: 'High to low' },
  ];

  const handleSliderChange = (value: any) => {
    setDraftSelected({
      ...draftSelected,
      priceFrom: value[0],
      priceTo: value[1],
    });
  };

  const handlePriceSort = (value: any) => {
    setDraftSelected({
      ...draftSelected,
      sort: {
        price: value,
      },
    });
  };

  const handleClickSearch = () => {
    setToolSelected(draftSelected);
  };

  const handleSearch = (e: any) => {
    setDraftSelected({
      ...draftSelected,
      search: e.target.value,
    });
  };

  return (
    <div className="flex flex-col text-[#89888B] w-full gap-[65px] h-full">
      <Input
        prefix={<SearchOutlined />}
        placeholder="Quick search"
        onChange={handleSearch}
        value={draftSelected.search}
      />
      <div className="flex flex-col gap-[24px]">
        <div className="w-full text-white">
          <div>PRICE</div>
          <Slider
            marks={marks}
            max={200}
            range
            defaultValue={[20, 200]}
            value={[draftSelected.priceFrom, draftSelected.priceTo]}
            className="text-[#D6D6D6]"
            styles={{
              track: {
                background:
                  'linear-gradient(91deg,rgba(218, 69, 143, 0.00) 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, rgba(218, 52, 221, 0.00) 102.8%)',
              },
              rail: {
                background: '#3A3841',
              },
            }}
            onChange={handleSliderChange}
          />
        </div>
        <div className="w-full">
          <div>TIER</div>
          <Select className="w-full" />
        </div>
        <div className="w-full">
          <div>THEME</div>
          <Select className="w-full" />
        </div>
        <div className="w-full">
          <div>TIME</div>
          <Select className="w-full" />
        </div>
        <div className="w-full">
          <div>PRICE</div>
          <Select
            className="w-full"
            options={priceSort}
            defaultValue={'asc'}
            onChange={handlePriceSort}
            value={draftSelected.sort.price}
          />
        </div>
      </div>
      <div className="flex md:flex-row gap-[40px] w-full sm:flex-col">
        <div
          className="text-white flex flex-row items-center gap-[8px] w-[100%] cursor-pointer"
          onClick={() => {
            onResetTool(setDraftSelected);
          }}
        >
          <Image src={iconClose} alt="close" width={10} height={10} />
          <div className="w-full">Reset filter</div>
        </div>
        <Button
          className="bg-gradient-to-r from-[#DA458F] to-[#DA34DD] text-white rounded-[4px] border-none md:w-full sm:w-[90%]"
          onClick={handleClickSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default ToolPage;
