import React from 'react';
import { Avatar, Tag, Table } from 'antd';

import { DATA, NEWTICKET } from '../constants';

const TicketTable = () => (
    <Table
        dataSource={DATA}
        title={() => <b>{ NEWTICKET }</b>}
        columns={
            [
                {
                    dataIndex: 'userAvatar',
                    key: 'userAvater',
                    render: userAvater => <Avatar src={userAvater} />,
                    title: '',
                },
                {
                    dataIndex: 'ticketDetails',
                    key: 'ticketDetails',
                    title: 'Ticket details',
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
            ]
        }
        rowKey={record => record.id}
    />
);

export default TicketTable;
