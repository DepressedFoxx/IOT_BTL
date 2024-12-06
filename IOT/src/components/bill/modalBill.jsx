import { Modal, Table } from "antd";
import React, { forwardRef } from "react";

const ModalBill = (_props, ref) => {

    const [visible, setVisible] = React.useState(false);

    const [data, setData] = React.useState();

    React.useImperativeHandle(ref, () => ({
        open: (record) => { 
            setVisible(true); 
            setData(record)
            getMoneyandWater(record.waterCount);
        },
        close: () => {
            setVisible(false);
            setData();
            setLevelMoney([]);
            setLevelWater([]);
        },
    }), [visible]);

    // Định nghĩa các mức giá theo bậc thang (VND/liters)
    const PRICE_LEVEL_1 = 5973;  // 0-10 liters
    const PRICE_LEVEL_2 = 7052;  // 10-20 liters
    const PRICE_LEVEL_3 = 8669;  // 20-30 liters
    const PRICE_LEVEL_4 = 15929; // >30 liters

    const [levelMoney, setLevelMoney] = React.useState([]);
    const [levelWater, setLevelWater] = React.useState([]);

    const getMoneyandWater = (waterCount) => {
        const levelMoney = [];
        const levelWater = [];

        // Tính tiền theo từng bậc
        if (waterCount > 30) {
            levelMoney.push(Math.round((waterCount - 30) * PRICE_LEVEL_4 * 100) / 100);
            levelWater.push(Math.round((waterCount - 30)*100)/100);
            waterCount = 30;
        }
        if (waterCount > 20) {
            levelMoney.push(Math.round((waterCount - 20) * PRICE_LEVEL_3 * 100) / 100);
            levelWater.push(Math.round((waterCount - 20)*100)/100);
            waterCount = 20;
        }
        if (waterCount > 10) {
            levelMoney.push(Math.round((waterCount - 10) * PRICE_LEVEL_2 * 100) / 100);
            levelWater.push(Math.round((waterCount - 10)*100)/100);
            waterCount = 10;
        }
        if (waterCount > 0) {
            levelMoney.push(Math.round(waterCount * PRICE_LEVEL_1 * 100) / 100);
            levelWater.push(Math.round(waterCount*100)/100);
        }

        while (levelMoney.length < 4) {
            levelMoney.unshift(0); // Add 0 to the beginning of the array
            levelWater.unshift(0); // Add 0 to the beginning of the array
        }

        setLevelMoney(levelMoney);
        setLevelWater(levelWater);
    }

    const columns = [
        {
            title: "Level (liters)",
            dataIndex: "level",
            key: "level",
        },
        {
            title: "Price Level (VND/liters)",
            dataIndex: "priceLevel",
            key: "priceLevel",
        },
        {
            title: "Water Level (liters)",
            dataIndex: "waterLevel",
            key: "waterLevel",
        },
        {
            title: "Money Level (VND)",
            dataIndex: "moneyLevel",
            key: "moneyLevel",
        },
    ];

    console.log(levelMoney);
    console.log(levelWater);

    const dataSource = [
        {
            key: "1",
            level: "0-10",
            priceLevel: PRICE_LEVEL_1,
            waterLevel: levelWater[3],
            moneyLevel: levelMoney[3],
        },
        {
            key: "2",
            level: "10-20",
            priceLevel: PRICE_LEVEL_2,
            waterLevel: levelWater[2],
            moneyLevel: levelMoney[2],
        },    
        {
            key: "3",
            level: "20-30",
            priceLevel: PRICE_LEVEL_3,
            waterLevel: levelWater[1],
            moneyLevel: levelMoney[1],
        },
        {
            key: "4",
            level: "30+",
            priceLevel: PRICE_LEVEL_4,
            waterLevel: levelWater[0],
            moneyLevel: levelMoney[0],
        },
    ];

    return (
        <Modal 
            open={visible} 
            title="Bill Detail"
            footer={null}
            onCancel={
                () => {
                    setVisible(false)
                    setData();
                }}
            >
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <span className="font-bold">Date:</span>
                    <span>{data?.date}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold">Description:</span>
                    <span>{data?.description}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold">Status:</span>
                    <span>{data?.status}</span>
                </div>
                <Table columns={columns} dataSource={dataSource}/>
            </div>
        </Modal>
    )
};

export default forwardRef(ModalBill);