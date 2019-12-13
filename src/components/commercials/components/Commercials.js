import React from 'react';
import { Button, Icon, Table } from 'antd';

import { ALL_COMMERCIALS, DATA } from '../constants';

const Commercials = () => (
    <Table
        dataSource={DATA}
        title={() => (
            <div>
                {ALL_COMMERCIALS}
                <Button type="primary" style={{ marginLeft: 100,  color: 'white' }}>
                    <Icon type="plus-circle" style={{ marginBottom: 100 }} />
                    New
                </Button>
            </div>
        )}
        bordered
        columns={
            [
                {
                    dataIndex: 'videoDetails',
                    key: 'videoDetails',
                    title: 'Video Details',
                },
                {
                    dataIndex: 'briefDescription',
                    key: 'briefDescription',
                    title: 'Brief Description',
                },
                {
                    dataIndex: 'size',
                    key: 'size',
                    title: 'Size',
                },
            ]
        }
        rowKey={record => record.id}
    />
);

export default Commercials;
