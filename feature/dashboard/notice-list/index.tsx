"use client";
import HeaderTitle from '@/shared/HeaderTitle';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; 
import { Input } from 'antd';
import NoticeTable from './NoticeTable';
import AddNoticeModal from './AddNoticeModal';

const NoticeList = () => { 
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <HeaderTitle title="Batch List" />
                <div className='flex items-center gap-x-3'>
                    <Input placeholder="Search" className="" style={{ width: 280, height: 40 }} prefix={<FiSearch size={20} />} />
                    <button type="submit" className=" bg-[#1A5FA4] h-[40px]  px-6 rounded-md text-white" onClick={() => setIsOpen(true)}>
                        + Add Notice
                    </button>
                </div>
            </div> 
            <NoticeTable  setIsOpen={setIsOpen} /> 
             <AddNoticeModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default NoticeList;