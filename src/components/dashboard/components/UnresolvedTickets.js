import React from 'react';
import { List } from 'antd';

import { CLASSNAMES } from '../constants';

const {
    CARD_CONTAINER,
    TICKET_SUB_HEADER,
    RIGHT_CARD_HEADER,
    TICKET_HEADER,
    TICKET_CARD,
} = CLASSNAMES;

const tickets = [
    { counts: 15, id: 1, type: 'Illegal Advert' },
    { counts: 33, id: 1, type: 'Increase View Locations' },
    { counts: 25, id: 1, type: 'Content Change' },
    { counts: 8, id: 1, type: 'Copyright Issues' },
];

class TabsCard extends React.Component {
    render() {
        return (
            <div className={TICKET_CARD}>
                <div className={TICKET_HEADER}>
                    <h3>Unresolved tickets</h3>
                    <a href="#" className={RIGHT_CARD_HEADER}>View details</a>
                </div>
                <p className={TICKET_SUB_HEADER}>Group: Support</p>
                <List
                    className={CARD_CONTAINER}
                    border-bottom={0}
                    dataSource={tickets}
                    renderItem={item => (
                        <List.Item title="Card title" key={item.id}>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.type}</a>}
                            />
                            <div>{item.counts}</div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default TabsCard;
