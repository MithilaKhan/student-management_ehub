// "use server";
import React from 'react';
import { Input } from 'antd';
import HeaderTitle from '@/shared/HeaderTitle';
import SubjectListTable from './SubjectListTable';
import { FiSearch } from 'react-icons/fi';
// import { SubjectListType } from '@/type';

const SubjectList = () => {

    return (
        <div>
            <div className="">
                <div className="flex items-center justify-between mb-6">
                    <HeaderTitle title="Users" />
                    <Input placeholder="Search" className="" style={{ width: 280, height: 40 }} prefix={<FiSearch size={20} />} />
                </div>
                <SubjectListTable  />
            </div>
        </div>
    );
};

export default SubjectList;