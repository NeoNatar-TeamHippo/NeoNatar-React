import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Tag, Table, Row, Col, Menu } from 'antd';

import {
    getTickets,
    getNewTickets,
    getPendingTickets,
    getResolvedTickets
} from '../actions';
import CreateTickets from './CreateTickets';
import { ALL, PENDING, NEW, RESOLVED, HORIZONTAL } from '../constants';

const menuItems = [ALL, PENDING, NEW, RESOLVED];
const Tickets = ({ history }) => {
    const dispatch = useDispatch();
    const { user: { isAdmin } } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getTickets());
        dispatch(getNewTickets());
        dispatch(getPendingTickets());
        dispatch(getResolvedTickets());
    }, [dispatch]);

    const { newTickets,
        pendingTickets,
        resolvedTickets,
        tickets } = useSelector(state => state.ticket);

    const [visible, setVisible] = useState(false);
    const [ticketData, setTicketData] = useState(tickets);

    const handleViewTicket = ticketId => {
        history.push(`/dashboard/tickets/${ticketId}`);
    };

    const handleChangeTab = ({ key }) => {
        let tableData;
        switch (key) {
            case ALL:
                setTicketData(tickets);
                break;
            case NEW:
                setTicketData(newTickets);
                break;
            case PENDING:
                setTicketData(pendingTickets);
                break;
            case RESOLVED:
                setTicketData(resolvedTickets);
                break;
            default:
                setTicketData(tickets);
                break;
        }
        return tableData;
    };

    const columns = [
        {
            dataIndex: 'avatar',
            key: 'avater',
            render: avater => <Avatar src={avater} />,
            title: '',
        },
        {
            dataIndex: 'customerName',
            key: 'customerName',
            title: 'Customer Name',
        },
        {
            dataIndex: 'title',
            key: 'title',
            title: 'Title',
        },
        {
            dataIndex: 'date',
            key: 'date',
            title: 'Date',
        },
        {
            dataIndex: 'priority',
            key: 'priority',
            render: priority => {
                let color;
                if (priority === 'high') {
                    color = 'red';
                }
                if (priority === 'medium') {
                    color = 'green';
                }
                if (priority === 'low') {
                    color = 'yellow';
                }
                return (
                    <Tag color={color} key={priority}>
                        {priority.toUpperCase()}
                    </Tag>
                );
            },
            title: 'Priority',
        },
    ];
    return (
        <div>
            <Row type="flex" style={{ marginBottom: 5 }}>
                <Col span={14}>
                    <Menu mode={HORIZONTAL} onClick={handleChangeTab}>
                        {
                            menuItems.map(key => (
                                <Menu.Item key={key}>
                                    {key}
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Col>
                <Col span={2} offset={8}>
                    <Button
                        onClick={() => setVisible(true)}
                        className="mb-2"
                        type="primary"
                        hidden={isAdmin}
                    >
                        {NEW}
                    </Button>
                </Col>
            </Row>
            <CreateTickets
                visible={visible}
                onCancel={() => setVisible(false)}
            />
            <Table
                columns={columns}
                dataSource={ticketData}
                onRow={record => ({
                    onClick: () => {
                        handleViewTicket(record.ticketId);
                    },
                })}
                rowKey={record => record.ticketId}
            />
        </div>
    );
};

export default Tickets;
