"use client";
import React, { useState } from 'react';
import { Input } from 'antd';
import HeaderTitle from '@/shared/HeaderTitle';
import { FiSearch } from 'react-icons/fi';
import BatchListTable from './BatchListTable';
import BatchListModal from '@/ui/modal/BatchListModal';

const BatchList = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="">
                <div className="flex items-center justify-between mb-6">
                    <HeaderTitle title="Batch List" />
                    <div className='flex items-center gap-x-3'>
                        <Input placeholder="Search" className="" style={{ width: 280, height: 40 }} prefix={<FiSearch size={20} />} />
                        <button type="submit" className=" bg-[#1A5FA4] h-[40px]  px-6 rounded-md text-white" onClick={() => setIsOpen(true)}>
                            + Add Batch
                        </button>
                    </div>
                </div>
                <BatchListTable isOpen={isOpen} setIsOpen={setIsOpen} />
            </div> 
            <BatchListModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default BatchList;