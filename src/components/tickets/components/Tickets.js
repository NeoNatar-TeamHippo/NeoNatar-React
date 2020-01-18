import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Button, Tag, Table, Row, Col, Menu, Tooltip, PageHeader } from 'antd';

import CreateTickets from './CreateTickets';
import { ALL, PENDING, NEW, RESOLVED, HORIZONTAL, TICKETS } from '../constants';
import { priorityColor } from '../../utils/functions';
import { getTickets } from '../actions';

const menuItems = [ALL, PENDING, NEW, RESOLVED];
const Tickets = ({ history }) => {
    const { user: { isAdmin, userId } } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickets({ isAdmin, userId }));
    }, [dispatch, isAdmin, userId]);

    const { tickets, ticketsLoading } = useSelector(state => state.ticket);

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
                const color = priorityColor(priority);
                return (
                    <Tag color={color} key={priority}>
                        {priority.toUpperCase()}
                    </Tag>
                );
            },
            title: 'Priority',
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
        <div>
            <PageHeader
                onBack={() => history.goBack()}
                title={TICKETS}
                className="mb-2 page_header"
            />
            <>
                <Row type="flex" style={{ marginBottom: 5 }}>
                    <Col span={14}>
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
                    loading={ticketsLoading}
                    columns={columns}
                    dataSource={ticketData}
                    rowKey={record => record.ticketId}
                />
            </>
        </div>
    );
};

export default Tickets;
