"use client";
import HeaderTitle from '@/shared/HeaderTitle';
import React, { useState } from 'react';
import AssignToCourseForm from './AssignToCourseForm';
import ClassRoutineModal from '@/ui/modal/ClassRoutineModal';

const AssignToCourse = () => { 
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=' w-full h-full'>
            <div className='flex items-center justify-between'>
                <HeaderTitle title="Enrol Student to Course" />
                <button type="submit" className=" bg-[#198754] h-[40px]  px-6 rounded-md text-white" onClick={() => setIsOpen(true)}>
                    View Class Routine
                </button>
            </div>

            <div className=" h-[70vh] ">
                <div className='flex-center w-full h-full '>
                    <AssignToCourseForm />
                </div>
            </div> 
            <ClassRoutineModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default AssignToCourse;