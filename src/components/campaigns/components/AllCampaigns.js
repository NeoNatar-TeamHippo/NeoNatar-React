import React from 'react';
import { Table } from 'antd';

const data = [];
const AllCampaigns = () => (
    <Table
        dataSource={data}
        columns={
            [
                {
                    dataIndex: "videoDetails",
                    key: "videoDetails",
                    title: "Video details",
                },
                {
                    dataIndex: "category",
                    key: "category",
                    title: "Category",
                },
                {
                    dataIndex: "locations",
                    key: "locations",
                    title: "Locations",
                },
                {
                    dataIndex: "status",
                    key: "status",
                    title: "Status",
                },
            ]
        }
        rowKey={record => record.id}
    />
);

export default AllCampaigns;
