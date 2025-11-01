"use client";
import React, { useState } from 'react';
import { Input } from 'antd';
import HeaderTitle from '@/shared/HeaderTitle';
import { FiSearch } from 'react-icons/fi';
import SectionListTable from './SectionListTable';
import SectionListModal from '@/ui/modal/SectionListModal';

const SectionList = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="">
                <div className="flex items-center justify-between mb-6">
                    <HeaderTitle title="Section List" />
                    <div className='flex items-center gap-x-3'>
                        <Input placeholder="Search" className="" style={{ width: 280, height: 40 }} prefix={<FiSearch size={20} />} />
                        <button type="submit" className=" bg-[#1A5FA4] h-[40px]  px-6 rounded-md text-white" onClick={() => setIsOpen(true)}>
                            + Add Section
                        </button>
                    </div>
                </div>
                <SectionListTable isOpen={isOpen} setIsOpen={setIsOpen} />
            </div> 
            <SectionListModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default SectionList;