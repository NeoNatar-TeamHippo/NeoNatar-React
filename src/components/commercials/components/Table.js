import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tooltip, Button, Table, Modal } from 'antd';

import ViewCommercial from './ViewCommercial';

import { TABLE_VALUES } from '../constants';
import { getCommercial, removeCommercial, deleteCommercialRequest } from '../actions';

import { openNotification } from '../../utils/functions';

const CommercialTable = () => {
    const [selectedModal, setSelectedModal] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCommercial());
    }, [dispatch]);

    const {
        commercials,
        isCommercialsLoading,
    } = useSelector(state => state.commercials);

    const showDeleteConfirm = id => {
        Modal.confirm({
            cancelText: 'No',
            content: 'This cannot be reversed',
            okText: 'Yes',
            okType: 'danger',
            onOk() {
                dispatch(deleteCommercialRequest(id));
                dispatch(removeCommercial(id));
                setTimeout(() => {
                    openNotification('Deleted Successfully', 'Delete Video');
                },
                2000);
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
                            onClick={() => setSelectedModal(record.commercialId)}
                            type="link"
                            icon="eye"
                        />
                    </Tooltip>
                    <Tooltip placement="top" title="Delete Video">
                        <Button
                            onClick={() => { showDeleteConfirm(record.commercialId); }}
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
                loading={isCommercialsLoading}
                dataSource={commercials}
                rowKey={record => record.id}
            />
        </div>
    );
};

export default CommercialTable;
