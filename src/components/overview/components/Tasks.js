import React from 'react';
import { Button, Icon, List } from 'antd';

import { DASHBOARD, TASKS_SOURCE, TASKS, VIEW_ALL, TODAY } from '../constants';

const Tasks = () => (
    <div className="ticket-card">
        <div className="ticket-header">
            <h3>{TASKS}</h3>
            <a href={DASHBOARD} className="right-card-header">{VIEW_ALL}</a>
        </div>
        <p className="ticket-sub-header">{TODAY}</p>
        <List
            className="card-container"
            border-bottom={0}
            dataSource={TASKS_SOURCE}
            renderItem={item => {
                const { buttonType, buttonText, iconType, date, type, id } = item;

                return (
                    <List.Item key={id}>
                        <List.Item.Meta
                            title={<a href={DASHBOARD}>{type}</a>}
                            description={date}
                        />
                        <Icon type={iconType} theme="twoTone" twoToneColor="#eb2f96" />
                        {/* <Button
                            size="small"
                            type={buttonType}
                            ghost
                        >
                            {buttonText}
                        </Button> */}
                    </List.Item>
                );
            }}
        />
    </div>
);

export default Tasks;
