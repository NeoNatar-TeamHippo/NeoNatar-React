import React from 'react';
import { Button, Table } from 'antd';

import { ALL_COMMERCIALS, DATA, NEW } from '../constants';

const Commercials = () => (
    <Table
        dataSource={DATA}
        title={() => (
            <div>
                {ALL_COMMERCIALS}
                <Button className="mb-2" style={{ marginLeft: 100 }} size="default" type="primary">
                    {NEW}
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
