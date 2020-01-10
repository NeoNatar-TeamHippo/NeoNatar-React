import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, PageHeader, Tag, Table, Row, Col, Menu, Tooltip } from 'antd';

import { ALL, VALID, INVALID } from '../constants';
import { requestTransactions } from '../actions';

const menuItems = [ALL, VALID, INVALID];

const Tickets = ({ history }) => {
    const dispatch = useDispatch();

    const { transactions } = useSelector(state => state.transactions);

    console.log(transactions);
    useEffect(() => {
        dispatch(requestTransactions());
    }, [dispatch]);
    const handleChangeTab = () => {
        let tableData;
        // switch (key) {
        //     case ALL:
        //         setTicketData(tickets);
        //         break;
        //     case NEW:
        //         setTicketData(newTickets);
        //         break;
        //     case PENDING:
        //         setTicketData(pendingTickets);
        //         break;
        //     case RESOLVED:
        //         setTicketData(resolvedTickets);
        //         break;
        //     default:
        //         setTicketData(tickets);
        //         break;
        // }
        return tableData;
    };

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
            <Row type="flex" style={{ marginBottom: 5 }}>
                <Col span={14}>
                    <Menu mode="horizontal" onClick={handleChangeTab}>
                        {
                            menuItems.map(key => (
                                <Menu.Item key={key}>
                                    {key}
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={transactions}
                rowKey={record => record.id}
            />
        </div>
    );
};

export default Tickets;
