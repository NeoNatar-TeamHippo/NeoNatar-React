import React from 'react';
import { Icon, List, Card, Typography } from 'antd';

import { DASHBOARD, TASKS_SOURCE, TASKS, TODAY } from '../constants';

const Tasks = () => (
    <Card title={TASKS} >
        <div>
            <Typography.Text className='mb-2'>{TODAY}</Typography.Text>
            <List
                dataSource={TASKS_SOURCE}
                renderItem={item => {
                    const { iconType, date, type, id } = item;
                    return (
                        <List.Item key={id}>
                            <List.Item.Meta
                                title={<a href={DASHBOARD}>{type}</a>}
                                description={date}
                            />
                            <Icon type={iconType} theme="twoTone" twoToneColor="#eb2f96" />
                        </List.Item>
                    );
                }}
            />
        </div>

    </Card>
);

export default Tasks;
