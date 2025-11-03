
import React from 'react';
import HeaderTitle from '@/shared/HeaderTitle';
import FilteredStudentTableForSms from './FilteredStudentTableForSms';

const FilteredStudentListForSms = () => {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="">
                <div className="flex items-start justify-between mb-6">
                    <HeaderTitle title="Filtered Student List For SMS" />
                    <div className='flex flex-col items-start gap-y-2'>
                        <p className=' text-2xl font-semibold text-[#1A5FA4] pb-2'>Month: January, 2025</p>
                        <p className='font-normal text-[#ABABAB]'>Batch: IAL - A2 Accounting May 2026 B#1</p>
                        <p className='font-normal text-[#ABABAB]'>Subject: IAL Accounting A2</p>
                        <p className='font-normal text-[#ABABAB]'>Section: All Section</p>

                    </div>
                </div> 

                <FilteredStudentTableForSms  />
            </div>
            {/* <StudentCoursesModal isOpen={isOpen} setIsOpen={setIsOpen} />  */}
        </div>
    );
};

export default FilteredStudentListForSms;