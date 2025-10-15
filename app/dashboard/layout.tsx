import Header from '@/shared/Header';
import Sidebar from '@/shared/Sidebar';

const layout = ({children}: {children: React.ReactNode}) => {
    return ( 
      
            <div className={` grid grid-cols-12`}>
    
                {/* side bar */}
                <div className='col-span-2 h-screen '>
                    <Sidebar/>
                </div>
    
                {/* main container with header */}
                <div className='col-span-10'>
                    <div className='h-[83px] flex items-center justify-end pr-5' >
                        <Header/>
                    </div>
    
                    <div className='bg-[#F6F6F6] p-4 h-[calc(100vh-83px)]  '  >
                        <div className='h-full overflow-y-auto rounded-md  '>
                        {children}
                        </div>
                    </div>
                </div>
            </div> 
    );
};

export default layout; 