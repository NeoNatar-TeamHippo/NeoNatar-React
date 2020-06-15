import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Tag, Table, Typography } from 'antd';

import { requestTransactions } from '../actions';

import { NAIRASIGN } from '../../campaigns/constants';

const TransactionsTable = () => {
    const dispatch = useDispatch();

    const { transactions, isTransactionsLoading } = useSelector(state => state.transactions);

    useEffect(() => {
        if (transactions.length === 0) {
            dispatch(requestTransactions());
        }
    }, [dispatch, transactions.length]);

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
            render: text => (
                <Typography.Text type="secondary">
                    <span className="mr-1">
                        {ReactHtmlParser(NAIRASIGN)}
                    </span>
                    {text}
                </Typography.Text>
            ),
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
                scroll={{ x: 2000, y: 350 }}
            />
        </div>
    );
};

export default TransactionsTable;
