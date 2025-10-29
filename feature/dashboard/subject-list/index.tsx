"use client";
import React, { useState } from 'react';
import { Input } from 'antd';
import HeaderTitle from '@/shared/HeaderTitle';
import SubjectListTable from './SubjectListTable';
import { FiSearch } from 'react-icons/fi';
import SubjectListModal from '@/ui/modal/SubjectListModal';
// import { SubjectListType } from '@/type';

const SubjectList = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="">
                <div className="flex items-center justify-between mb-6">
                    <HeaderTitle title="Subject List" />
                    <div className='flex items-center gap-x-3'>
                        <Input placeholder="Search" className="" style={{ width: 280, height: 40 }} prefix={<FiSearch size={20} />} />
                        <button type="submit" className=" bg-[#1A5FA4] h-[40px]  px-6 rounded-md text-white" onClick={() => setIsOpen(true)}>
                            + Add Subject
                        </button>
                    </div>
                </div>
                <SubjectListTable isOpen={isOpen} setIsOpen={setIsOpen} />
            </div> 
            <SubjectListModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default SubjectList;