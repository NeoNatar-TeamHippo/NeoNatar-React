import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tooltip, Button, Table, Modal } from 'antd';

import ViewCommercial from './ViewCommercial';

import { TABLE_VALUES } from '../constants';
import { getCommercial, removeCommercial } from '../actions';

const CommercialTable = () => {
    const [selectedModal, setSelectedModal] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCommercial());
    }, [dispatch]);

    const { commercials } = useSelector(state => state.commercials);

    const showDeleteConfirm = id => {
        Modal.confirm({
            cancelText: 'No',
            content: 'This cannot be reversed',
            okText: 'Yes',
            okType: 'danger',
            onOk() {
                dispatch(removeCommercial(id));
            },
            title: 'Are you sure delete this video?',
        });
    };

    const columns = [
        ...TABLE_VALUES,
        {
            key: 'action',
            render: (text, record) => (
                <>
                    <Tooltip placement="top" title="View video">
                        <Button
                            onClick={() => setSelectedModal(record.id)}
                            type="link"
                            icon="eye"
                        />
                    </Tooltip>
                    <Tooltip placement="top" title="Delete Video">
                        <Button
                            onClick={() => { showDeleteConfirm(record.id); }}
                            type="link"
                            icon="delete"
                            className="text-danger"
                        />
                    </Tooltip>
                </>
            ),
            title: 'Action',
        },
    ];
    return (
        <div>
            <ViewCommercial
                selectedModal={selectedModal}
                onCancel={() => setSelectedModal(null)}
                data={commercials}
                onOk={() => setSelectedModal(null)}
            />
            <Table
                columns={columns}
                dataSource={commercials}
                rowKey={record => record.id}
            />
        </div>
    );
};

export default CommercialTable;
