import Header from '@/shared/Header';
import Sidebar from '@/shared/Sidebar';

const layout = ({children}: {children: React.ReactNode}) => {
    return ( 
      
            <div className={` grid grid-cols-12 text-[#ABABAB] bg-black `}>
    
                {/* side bar */}
                <div className='col-span-2 h-screen bg-[#1C1C1E] overflow-x-hidden'>
                    <Sidebar/>
                </div>
    
                {/* main container with header */}
                <div className='col-span-10 p-4 h-[100vh]'>
                    <div className='!h-[78px] flex items-center justify-end pr-5 bg-[#1C1C1E] rounded-md' >
                        <Header/>
                    </div>
    
                    <div className=' pt-4 h-[calc(100vh-95px)]   '  >
                        <div className='h-full overflow-y-auto rounded-md bg-[#1C1C1E] p-5 '>
                        {children}
                        </div>
                    </div>
                </div>
            </div> 
    );
};

export default layout; 