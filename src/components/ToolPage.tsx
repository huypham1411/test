import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Slider } from 'antd';
import React from 'react';
import type { SliderMarks } from 'antd/es/slider';

import iconClose from '@/public/images/close.png';
import Image from 'next/image';

type Props = {};

const ToolPage = (props: Props) => {
  const marks: SliderMarks = {
    0: { label: <div className="text-[#D6D6D6]">0.01 ETH</div> },
    200: { label: <div className="text-[#D6D6D6] w-max">200 ETH</div> },
  };
  return (
    <div className="flex flex-col text-[#89888B] w-full gap-[65px] h-full">
      <Input prefix={<SearchOutlined />} placeholder="Quick search" />
      <div className="flex flex-col">
        <div className="w-full text-white">
          <div>PRICE</div>
          <Slider
            marks={marks}
            max={200}
            range
            defaultValue={[20, 100]}
            className="text-[#D6D6D6]"
            styles={{
              track: {
                background: `linear-gradient(91deg, rgba(218, 69, 143, 0.00) 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, rgba(218, 52, 221, 0.00) 102.8%);`,
              },
              rail: {
                background: '#3A3841',
              },
            }}
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
          <Select className="w-full" />
        </div>
      </div>
      <div className="flex flex-row gap-[40px] w-full">
        <div className="text-white flex flex-row items-center gap-[8px] w-[40%]">
          <Image src={iconClose} alt="close" width={10} height={10} />
          <div className="w-full">Reset filter</div>
        </div>
        <Button className="bg-gradient-to-r from-[#DA458F] to-[#DA34DD] text-white rounded-[4px] border-none w-[168px]">
          Search
        </Button>
      </div>
    </div>
  );
};

export default ToolPage;
