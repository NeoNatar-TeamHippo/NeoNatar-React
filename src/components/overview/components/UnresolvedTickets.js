import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { List, Card, Typography, Tag } from 'antd';

import { UNRESOLVED_TICKETS, STATUS, TICKET_URL } from '../constants';
import { getTickets } from '../../tickets/actions';
import { statusColor } from '../../utils/functions'

const UnresolvedTickets = () => {
    const { user: { isAdmin, userId } } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickets({ isAdmin, userId }));
    }, [dispatch, isAdmin, userId]);
    const { tickets } = useSelector(state => state.ticket);
    const ticketData = ticket => ticket.filter(tick => tick.status !== 'resolved');
    const renderPathUrl = ticketId => `${TICKET_URL}/${ticketId}`;
    return (
        <Card title={(<Typography.Title level={4}>{UNRESOLVED_TICKETS}</Typography.Title>)}
            extra={(<Typography.Text type='secondary'>{STATUS}</Typography.Text>)}>
            <List
                dataSource={ticketData(tickets)}
                renderItem={item => {
                    const { status, title, ticketId, date, customerDetail: { customerName } } = item;
                    const color = statusColor(status);
                    return (
                        <List.Item key={ticketId}>
                            <List.Item.Meta
                                title={(
                                    <Link to={renderPathUrl(ticketId)}>
                                        {title}
                                    </Link>
                                )}
                                description={(<>
                                    <Typography.Text type='secondary'>{customerName}</Typography.Text>
                                    <span> on </span>
                                    <Typography.Text type='secondary'>{date}</Typography.Text>
                                </>)}
                            />
                            <Tag color={color} >
                                {status.toUpperCase()}
                            </Tag>
                        </List.Item>
                    );
                }}
            />
        </Card>
    );
};

export default UnresolvedTickets;
