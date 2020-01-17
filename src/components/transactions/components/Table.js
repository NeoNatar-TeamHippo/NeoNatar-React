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
            dataIndex: 'title',
            key: 'title',
            title: 'Transaction Details',
        },
        {
            dataIndex: 'createdBy',
            key: 'createdBy',
            title: 'Customer Name',
        },
        {
            dataIndex: 'amount',
            key: 'amount',
            title: 'Amount',
        },
        {
            dataIndex: 'createdAt',
            key: 'createdAt',
            title: 'Date',
        },
        {
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
            />
        </div>
    );
};

export default TransactionsTable;
