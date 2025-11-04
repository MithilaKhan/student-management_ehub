import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import FilterForm from './FilterForm';
import { Input } from 'antd';
import { FiSearch } from 'react-icons/fi';
import StudentHistoryTable from './StudentHistoryTable';
const StudentHistory = () => {
    return (
        <div>
            <HeaderTitle title="Student Details" />
            <div className='flex-center w-full h-full pb-10 '>
                <FilterForm />
            </div>

            <div className="flex items-center justify-between mb-6">
                <HeaderTitle title="Student History" />
                <Input placeholder="Search" className="" style={{ width: 280, height: 40 }} prefix={<FiSearch size={20} />} />
            </div>
            <StudentHistoryTable />
        </div>
    );
};

export default StudentHistory;