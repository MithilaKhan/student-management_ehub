
import React from 'react';
import { modalType } from '@/type';
import TableMain from '@/shared/TableMain';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { assignedStudentData } from '@/constants/dashboard/student-list-data';
const FilteredStudentTable = ({ setIsOpen }: modalType) => {

const columns = [
    {
      title: 'SL',
      dataIndex: 'id',
      key: 'id',
      responsive: ['sm'] as any,
      render: (val: number) => val ?? '-',
    },
    {
      title: 'Student Name',
      dataIndex: 'studentName',
      key: 'studentName',
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email',
      responsive: ['md'] as any,
    },
    {
      title: 'Mobile No.',
      dataIndex: 'mobile',
      key: 'mobile',
      responsive: ['md'] as any,
    },
    {
      title: 'Passport No.',
      dataIndex: 'passportNo',
      key: 'passportNo',
      responsive: ['lg'] as any,
    },
    {
      title: 'Batch',
      dataIndex: 'batch',
      key: 'batch',
      responsive: ['md'] as any,
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      responsive: ['lg'] as any,
    },
    {
      title: 'Section',
      dataIndex: 'section',
      key: 'section',
      responsive: ['lg'] as any,
    },
    {
      title: 'Special Fee',
      dataIndex: 'specialFee',
      key: 'specialFee',
      responsive: ['lg'] as any,
      render: (val: string) => (val && val.trim() ? val : '-----'),
    },
    {
      title: 'Delete date',
      dataIndex: 'deleteDate',
      key: 'deleteDate',
      responsive: ['lg'] as any,
      render: (val: string) => (val && val.trim() ? val : '-----'),
    },
    {
      title: 'Profile Edit',
      dataIndex: 'profileEdit',
      key: 'profileEdit',
      render: (val: string) => <span className="text-green-400 cursor-pointer">{val}</span>,
    },
    {
      title: 'Download Form',
      dataIndex: 'downloadForm',
      key: 'downloadForm',
      render: (val: string) => <span className="text-green-400 cursor-pointer">{val}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <div className="flex items-center gap-3">
          <button onClick={() => setIsOpen(true)} className="text-[#FBBF24]">
            <AiOutlineEdit size={16} />
          </button>
          <button className="text-[#FF4D4D]">
            <AiOutlineDelete size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <TableMain
        columns={columns}
        dataSource={assignedStudentData} 
         pagination={{
          pageSize: 7,
          total: assignedStudentData.length,
          showSizeChanger: false,
          showQuickJumper: false,
        }}
        className="w-full custom-table"
      />
    </div>
  );
};

export default FilteredStudentTable;