import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, PageHeader, Table, Tooltip } from 'antd';

import { requestTransactions } from '../actions';

const Transactions = ({ history }) => {
    const { transactions, isTransactionsLoading } = useSelector(state => state.transactions);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestTransactions());
    }, [dispatch]);

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
            key: 'action',
            render: () => (
                <div className="video-actions">
                    <Tooltip placement="top" title="View details">
                        <Button
                            type="link"
                            icon="eye"
                        />
                    </Tooltip>
                </div>
            ),
            title: 'Action',
            width: '20%',
        },
    ];
    return (
        <div>
            <PageHeader
                onBack={() => history.goBack()}
                title="Transactions"
                className="mb-2 page_header"
            />
            <Table
                loading={isTransactionsLoading}
                columns={columns}
                dataSource={transactions}
                rowKey={record => record.id}
            />
        </div>
    );
};

export default Transactions;
