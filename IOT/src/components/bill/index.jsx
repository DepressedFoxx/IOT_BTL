import React from "react";
import { Button, Table } from "antd";
import ModalBill from "./modalBill";
import axios from "axios";

const Bill = () => {

    const modalRef = React.useRef();

    const openModal = (record) => {
        console.log(record);
        if (modalRef.current) modalRef.current.open(record);
    };

    const calculateMoney  = (waterCount) => {
        // Định nghĩa các mức giá theo bậc thang (VND/m3)
        const PRICE_LEVEL_1 = 5973;  // 0-10m3
        const PRICE_LEVEL_2 = 7052;  // 10-20m3
        const PRICE_LEVEL_3 = 8669;  // 20-30m3
        const PRICE_LEVEL_4 = 15929; // >30m3
        let totalMoney = 0;
        if (waterCount <= 0) {
            return 0;
        }
        // Tính tiền theo từng bậc
        if (waterCount > 30) {
            totalMoney += (waterCount - 30) * PRICE_LEVEL_4;
            waterCount = 30;
        }
        if (waterCount > 20) {
            totalMoney += (waterCount - 20) * PRICE_LEVEL_3;
            waterCount = 20;
        }
        if (waterCount > 10) {
            totalMoney += (waterCount - 10) * PRICE_LEVEL_2;
            waterCount = 10;
        }
        if (waterCount > 0) {
            totalMoney += waterCount * PRICE_LEVEL_1;
        }
        // Làm tròn đến số nguyên
        return Math.round(totalMoney).toLocaleString('vi-VN');
    }

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Water Count (m3)",
            dataIndex: "waterCount",
            key: "waterCount",
        },
        {
            title: "Amount (VND)",
            dataIndex: "amount",
            key: "amount",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Action",
            dataIndex: 'action',
            key: "action",
            render: (_, record) => <Button type="primary" onClick={() => openModal(record)}>View detailed</Button>,
        }
    ];

    const [data, setData] = React.useState([
        {
            key: 1,
            date: "01/01/2023",
            waterCount: 9.36,
            amount: calculateMoney(9.36),
            description: "Water Bill",
            status: "Paid",
        },
        {   
            key: 2,
            date: "01/02/2023",
            waterCount: 20.36,
            amount: calculateMoney(20.36),
            description: "Water Bill",
            status: "Paid",
        },
        {
            key: 3,
            date: "01/03/2023",
            waterCount: 30.36,
            amount: calculateMoney(30.36),
            description: "Water Bill",
            status: "Paid",
        },
    ]);

    const createBill = () => {
        axios.get("https://blynk.cloud/external/api/get?token=iVlinC-os9hUU-P6fvF5u1CKwRWjQxbE&V3")
            .then(response => {
                const value = response.data;
                const currentDate = new Date();
                const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${
                    (currentDate.getMonth() + 1).toString().padStart(2, '0')}/${
                    currentDate.getFullYear()}`;
                setData(oldState => [...oldState, { key: oldState.length + 1, date: formattedDate, waterCount: value, amount: calculateMoney(value), description: "Water Bill", status: "Unpaid" }]);
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    return (
        <div className="flex-col space-y-4">
            <div className="flex justify-between">
                <span className="text-2xl ml-3">List Bill</span>
                <button 
                    className="bg-blue-500 py-2 px-4 rounded-full text-white "
                    onClick={createBill}
                >
                    Create Bill
                </button>
            </div>
            <Table columns={columns} dataSource={[...data].reverse()} />
            <ModalBill ref={modalRef}/>
        </div>
    )
};

export default Bill;