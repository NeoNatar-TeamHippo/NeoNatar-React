import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tag, Table } from 'antd';

import { requestTransactions } from '../actions';

const TransactionsTable = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestTransactions());
    }, [dispatch]);

    const { transactions, isTransactionsLoading } = useSelector(state => state.transactions);

    const columns = [
        {
            align: 'left',
            dataIndex: 'title',
            key: 'title',
            title: 'Transaction Details',
        },
        {
            align: 'left',
            dataIndex: 'createdBy',
            key: 'createdBy',
            title: 'Customer Name',
        },
        {
            align: 'right',
            dataIndex: 'amount',
            key: 'amount',
            title: 'Amount',
        },
        {
            align: 'center',
            dataIndex: 'createdAt',
            key: 'createdAt',
            title: 'Date',
        },
        {
            align: 'center',
            dataIndex: 'status',
            key: 'status',
            render: status => {
                let color;
                if (status === 'invalid') {
                    color = 'red';
                } else {
                    color = 'green';
                }
                return (
                    <Tag color={color} key={status}>
                        {status.toUpperCase()}
                    </Tag>
                );
            },
            title: 'Status',
        },
    ];
    return (
        <div>
            <Table
                loading={isTransactionsLoading}
                columns={columns}
                dataSource={transactions}
                rowKey={record => record.id}
                size="middle"
                scroll={{ y: 350 }}
            />
        </div>
    );
};

export default TransactionsTable;
