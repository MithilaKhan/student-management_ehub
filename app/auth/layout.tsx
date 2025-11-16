import React from 'react';
import { Poppins } from 'next/font/google';
import { ConfigProvider } from 'antd';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className="w-full flex items-center justify-center relative text-[#bdbbbb] bg-black"
            style={{ height: "100vh" }}
        >
            <div
                className={`${poppins.className} shadow-xl bg-[#4d4d51]/60 bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-100/50 p-7 rounded-md w-[570px] relative z-10`}
            >
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#ffffff1a',
                        },
                    }} >
                    {children}
                </ConfigProvider>
            </div>
        </div>
    );
};

export default Layout;
