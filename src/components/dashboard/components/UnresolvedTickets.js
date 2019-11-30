import React from 'react';
import { List } from 'antd';

import { DASHBOARD, GROUP_SUPPORT, UNRESOLVED_TICKETS, VIEW_DETAILS, TICKETS } from '../constants';

class UnresolvedTickets extends React.Component {
    render() {
        return (
            <div className="ticket-card">
                <div className="ticket-header">
                    <h3>{UNRESOLVED_TICKETS}</h3>
                    <a href={DASHBOARD} className="right-card-header">{VIEW_DETAILS}</a>
                </div>
                <p className="ticket-sub-header">{GROUP_SUPPORT}</p>
                <List
                    className="card-container"
                    border-bottom={0}
                    dataSource={TICKETS}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                title={<a href={DASHBOARD}>{item.type}</a>}
                            />
                            <div>{item.counts}</div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default UnresolvedTickets;
