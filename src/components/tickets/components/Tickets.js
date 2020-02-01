import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Button, Tag, Table, Row, Col, Menu, Tooltip } from 'antd';

import CreateTickets from './CreateTickets';

import { ALL, PENDING, NEW, RESOLVED, HORIZONTAL } from '../constants';
import { getTickets } from '../actions';

import { priorityColor, statusColor } from '../../utils/functions';

const menuItems = [ALL, PENDING, NEW, RESOLVED];
const Tickets = ({ history }) => {
    const { user: { isAdmin, userId } } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const { tickets, ticketsLoading } = useSelector(state => state.ticket);

    useEffect(() => {
        if (tickets.length === 0) {
            dispatch(getTickets({ isAdmin, userId }));
        }
    }, [dispatch, isAdmin, tickets.length, userId]);

    const [visible, setVisible] = useState(false);
    const [ticketData, setTicketData] = useState(((tickets.length !== 0) ? tickets : []));

    useEffect(() => {
        setTicketData(tickets);
    }, [tickets]);

    const handleViewTicket = ticketId => {
        history.push(`/dashboard/tickets/${ticketId}`);
    };

    const handleChangeTab = ({ key }) => {
        switch (key) {
            case ALL:
                setTicketData(tickets);
                break;
            case NEW:
                setTicketData(tickets.filter(ticket => ticket.status === 'new'));
                break;
            case PENDING:
                setTicketData(tickets.filter(ticket => ticket.status === 'pending'));
                break;
            case RESOLVED:
                setTicketData(tickets.filter(ticket => ticket.status === 'resolved'));
                break;
            default:
                setTicketData(tickets);
                break;
        }
    };

    const columns = [
        {
            align: 'left',
            dataIndex: 'customerDetail',
            key: 'customerDetail',
            render: customerDetail => (
                <div className="customer-profile">
                    <Avatar src={customerDetail.avatar} />
                    <p style={{ marginLeft: '25px' }}>{customerDetail.customerName}</p>
                </div>
            ),
            title: 'Customer Profile',
        },
        {
            align: 'left',
            dataIndex: 'title',
            key: 'title',
            title: 'Title',
        },
        {
            align: 'center',
            dataIndex: 'date',
            key: 'date',
            title: 'Date',
        },
        {
            align: 'center',
            dataIndex: 'priority',
            key: 'priority',
            render: priority => {
                const color = priorityColor(priority);

                return (
                    <Tag color={color} key={priority}>
                        {priority.toUpperCase()}
                    </Tag>
                );
            },
            title: 'Priority',
            width: '150px',
        },
        {
            align: 'center',
            dataIndex: 'status',
            key: 'status',
            render: status => {
                const color = statusColor(status);

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
            render: record => (
                <Tooltip placement="top" title="View ticket">
                    <Button
                        onClick={() => handleViewTicket(record.ticketId)}
                        type="link"
                        icon="eye"
                    />
                </Tooltip>
            ),
            title: 'Action',
        },
    ];

    return (
        <>
            <Row type="flex" justify="space-between" style={{ marginBottom: 5 }}>
                <Col>
                    <Menu
                        mode={HORIZONTAL}
                        onClick={handleChangeTab}
                        defaultSelectedKeys={[ALL]}
                    >
                        {
                            menuItems.map(key => (
                                <Menu.Item key={key}>
                                    {key}
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Col>
                <Col>
                    <Button
                        onClick={() => setVisible(true)}
                        type="primary"
                        icon="plus"
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
                loading={ticketsLoading}
                columns={columns}
                dataSource={ticketData}
                rowKey={record => record.ticketId}
                size="middle"
                scroll={{ y: 350 }}
            />
        </>
    );
};

export default Tickets;
