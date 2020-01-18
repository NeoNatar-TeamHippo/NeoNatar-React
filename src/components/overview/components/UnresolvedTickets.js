import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List } from 'antd';

import { UNRESOLVED_TICKETS, STATUS, TICKET_URL } from '../constants';
import { getTickets } from '../../tickets/actions';

const UnresolvedTickets = () => {
    const { user: { isAdmin, userId } } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickets({ isAdmin, userId }));
    }, [dispatch, isAdmin, userId]);
    const { tickets } = useSelector(state => state.ticket);
    const ticketData = ticket => ticket.filter(tick => tick.status !== 'resolved');
    return (
        <div className="ticket-card">
            <div className="ticket-header">
                <h3>{UNRESOLVED_TICKETS}</h3>
                <h3 className="right-card-header">{STATUS}</h3>
            </div>
            <List
                className="card-container"
                border-bottom={0}
                dataSource={ticketData(tickets)}
                renderItem={item => {
                    const { status, title, ticketId } = item;

                    return (
                        <List.Item key={ticketId}>
                            <List.Item.Meta
                                title={<a href={`${TICKET_URL}/${ticketId}`}><h6>{title}</h6></a>}
                            />
                            <div><h6>{status}</h6></div>
                        </List.Item>
                    );
                }}
            />
        </div>
    );
};

export default UnresolvedTickets;
