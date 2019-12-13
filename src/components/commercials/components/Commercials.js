import React from 'react';
import { Button, Table } from 'antd';

import { ALL_COMMERCIALS, DATA } from '../constants';

const Commercials = () => (
    <Table
        dataSource={DATA}
        title={() => (
            <div>
                {ALL_COMMERCIALS}
                <Button type="default" />
            </div>
        )}
        bordered
        columns={
            [
                {
                    dataIndex: 'sn',
                    key: 'sn',
                    title: 'S/N',
                },
                {
                    dataIndex: 'transactionDetails',
                    key: 'transactionDetails',
                    title: 'Transaction Details',
                },
                {
                    dataIndex: 'customerName',
                    key: 'customerName',
                    title: 'Customer Name',
                },
                {
                    dataIndex: 'cost',
                    key: 'cost',
                    title: 'Cost',
                },
                {
                    dataIndex: 'date',
                    key: 'date',
                    title: 'Date',
                },
            ]
        }
        rowKey={record => record.id}
    />
);

export default Commercials;
