import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Card, Typography, Tag, Empty } from 'antd';

import { UNRESOLVED_TICKETS, STATUS, TICKET_URL, ON, NO_UNRESOLVED } from '../constants';

import { getTickets } from '../../tickets/actions';
import { statusColor } from '../../utils/functions';

import EMPTY_ICON_URL from '../../../images/svgs/undraw_active_support_6rwo.svg';

const UnresolvedTickets = () => {
    const { user: { isAdmin, userId } } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickets({ isAdmin, userId }));
    }, [dispatch, isAdmin, userId]);
    const { tickets } = useSelector(state => state.ticket);
    const ticketData = tickets.filter(tick => tick.status !== 'resolved');
    const renderPathUrl = ticketId => `${TICKET_URL}/${ticketId}`;

    return (
        <Card
            title={(<Typography.Title level={4}>{UNRESOLVED_TICKETS}</Typography.Title>)}
            extra={(
                <Typography.Text type="secondary">
                    {ticketData.length === 0 ? STATUS : ''}
                </Typography.Text>
            )}
        >
            {ticketData.length === 0 ? (
                <Empty
                    image={EMPTY_ICON_URL}
                    description={(
                        <Typography.Text type="secondary">
                            {NO_UNRESOLVED}
                        </Typography.Text>
                    )}
                />
            ) : (
                    <List
                        dataSource={ticketData}
                        renderItem={item => {
                            const { status, title, ticketId, date,
                                customerDetail: { customerName } } = item;
                            const color = statusColor(status);

                            return (
                                <List.Item key={ticketId}>
                                    <List.Item.Meta
                                        title={(
                                            <Link to={renderPathUrl(ticketId)}>
                                                {title}
                                            </Link>
                                        )}
                                        description={(
                                            <>
                                                <Typography.Text type="secondary">
                                                    {customerName}
                                                </Typography.Text>
                                                <span className='mx-2'>
                                                    {ON}
                                                </span>
                                                <Typography.Text type="secondary">
                                                    {date}
                                                </Typography.Text>
                                            </>
                                        )}
                                    />
                                    <Tag color={color}>
                                        {status.toUpperCase()}
                                    </Tag>
                                </List.Item>
                            );
                        }}
                    />
                )}
        </Card>
    );
};

export default UnresolvedTickets;
