import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";

const Header = () => {
  return (
    <header className="flex w-full h-16 pt-4 px-4">
        <div className="w-1/5 items-center">
            <h3 className="text-[#88c47c] text-3xl">IOT</h3>
        </div>
        <div className="flex w-4/5 items-center justify-between">
            <div>
                <LeftOutlined style={{color: 'white'}}/>
                <span className="text-white ml-2">Overview</span>
            </div>
            <div className="flex gap-4 items-center">
                <div className="text-white bg-[#1d1d1d] py-2 px-5 rounded-full">Hello, Admin</div>
                <Avatar style={{backgroundColor: '#88c47c'}}/>
            </div>
        </div>
    </header>
  );
};

export default Header;