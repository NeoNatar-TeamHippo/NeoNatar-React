import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Tag, Table, Menu, Icon } from 'antd';

import { getTickets, getNewTickets, getPendingTickets, getResolvedTickets } from '../actions';
import { ALL, PENDING, NEW, RESOLVED, MAIL, HORIZONTAL } from '../constants';

const menuItems = [ALL, PENDING, NEW, RESOLVED];
const Tickets = () => {
    const dispatch = useDispatch();
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
    const [ticketData, setTicketData] = useState(tickets);
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
            dataIndex: 'title',
            key: 'title',
            title: 'Title',
        },
        {
            dataIndex: 'customerName',
            key: 'customerName',
            title: 'Customer Name',
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
            <Menu mode={HORIZONTAL} onClick={handleChangeTab}>
                {
                menuItems.map(key => (
                    <Menu.Item key={key}>
                        {key}
                    </Menu.Item>
                ))
            }
            </Menu>
            <br />
            <Table
                // loading={ticketsLoading}
                columns={columns}
                dataSource={ticketData}
                rowKey={record => record.id}
            />
        </div>
    );
};

export default Tickets;
