"use client";
import HeaderTitle from '@/shared/HeaderTitle';
import React, { useState } from 'react';
import { Input } from 'antd';
import { FiSearch } from 'react-icons/fi';
import StudentListTable from './StudentListTable';
import StudentInfoModal from '@/ui/modal/StudentInfoModal';
import { useMediaQuery } from 'react-responsive';

const AllStudentList = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 }); 
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="flex md:flex-row flex-col md:items-center md:justify-between md:space-y-0 space-y-4 mb-6">
                <HeaderTitle title="Student List" />

                <div className="flex md:flex-row flex-col md:items-center gap-x-3 md:space-y-0 space-y-4">

                    {/* Here is the responsive width */}
                    <Input
                        placeholder="Search"
                        style={{
                            width: isMobile ? "100%" : 280,
                            height: 40,
                        }}
                        prefix={<FiSearch size={20} />}
                    />

                    <button
                        type="submit"
                        className=" bg-[#1A5FA4] h-[40px] px-6 rounded-md text-white"
                        onClick={() => setIsOpen(true)}
                    >
                        + Add Student
                    </button>
                </div>
            </div>

            <StudentListTable setIsOpen={setIsOpen} />
            <StudentInfoModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default AllStudentList;
