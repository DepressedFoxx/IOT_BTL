import { Modal, Table } from "antd";
import React, { forwardRef } from "react";

const ModalBill = (_props, ref) => {

    const [visible, setVisible] = React.useState(false);

    const [data, setData] = React.useState();

    // Định nghĩa các mức giá theo bậc thang (VND/m3)
    const PRICE_LEVEL_1 = 5973;  // 0-10m3
    const PRICE_LEVEL_2 = 7052;  // 10-20m3
    const PRICE_LEVEL_3 = 8669;  // 20-30m3
    const PRICE_LEVEL_4 = 15929; // >30m3

    let waterCount = data?.waterCount || 0;

    let levelMoney1 = 0;
    let levelMoney2 = 0;
    let levelMoney3 = 0;
    let levelMoney4 = 0;

    let levelWater1 = 0;
    let levelWater2 = 0;
    let levelWater3 = 0;
    let levelWater4 = 0;

    // Tính tiền theo từng bậc
    if (waterCount > 30) {
        levelMoney4 += Math.round((waterCount - 30) * PRICE_LEVEL_4 * 100) / 100;
        levelWater4 = Math.round((waterCount - 30)*100)/100;
        waterCount = 30;
    }
    if (waterCount > 20) {
        levelMoney3 += Math.round((waterCount - 20) * PRICE_LEVEL_3 * 100) / 100;
        levelWater3 = Math.round((waterCount - 20)*100)/100;
        waterCount = 20;
    }
    if (waterCount > 10) {
        levelMoney2 += Math.round((waterCount - 10) * PRICE_LEVEL_2 * 100) / 100;
        levelWater2 = Math.round((waterCount - 10)*100)/100;
        waterCount = 10;
    }
    if (levelMoney1 > 0) {
        totalMoney += waterCount * PRICE_LEVEL_1;
        levelWater1 = Math.round(waterCount*100)/100;
    }

    const columns = [
        {
            title: "Level (m3)",
            dataIndex: "level",
            key: "level",
        },
        {
            title: "Price Level (VND/m3)",
            dataIndex: "priceLevel",
            key: "priceLevel",
        },
        {
            title: "Water Level (m3)",
            dataIndex: "waterLevel",
            key: "waterLevel",
        },
        {
            title: "Money Level (VND)",
            dataIndex: "moneyLevel",
            key: "moneyLevel",
        },
    ];

    const dataSource = [
        {
            key: "1",
            level: "0-10",
            priceLevel: PRICE_LEVEL_1,
            waterLevel: levelWater1,
            moneyLevel: levelMoney1,
        },
        {
            key: "2",
            level: "10-20",
            priceLevel: PRICE_LEVEL_2,
            waterLevel: levelWater2,
            moneyLevel: levelMoney2,
        },    
        {
            key: "3",
            level: "20-30",
            priceLevel: PRICE_LEVEL_3,
            waterLevel: levelWater3,
            moneyLevel: levelMoney3,
        },
        {
            key: "4",
            level: "30+",
            priceLevel: PRICE_LEVEL_4,
            waterLevel: levelWater4,
            moneyLevel: levelMoney4,
        },
    ];

    React.useImperativeHandle(ref, () => ({
        open: (record) => { 
            setVisible(true); 
            setData(record)
        },
        close: () => {
            setVisible(false);
            setData();
        },
    }), [visible]);

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