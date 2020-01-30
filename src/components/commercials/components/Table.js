import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tooltip, Button, Table, Modal } from 'antd';

import ViewCommercial from './ViewCommercial';
import { TABLE_VALUES } from '../constants';
import { getCommercial, removeCommercial } from '../actions';

const CommercialTable = () => {
    const [selectedModal, setSelectedModal] = useState(null);
    const dispatch = useDispatch();
    const { commercials, isCommercialsLoading } = useSelector(state => state.commercials);
    useEffect(() => {
        if (commercials.length === 0) {
            dispatch(getCommercial());
        }
    }, [commercials.length, dispatch]);

    const [commercialData, setCommercialData] = useState(commercials);
    useEffect(() => {
        setCommercialData(commercials);
    }, [commercials]);

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
            align: 'center',
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
                loading={isCommercialsLoading}
                columns={columns}
                dataSource={commercialData}
                rowKey={record => record.id}
                size="middle"
                scroll={{ y: 350 }}
            />
        </div>
    );
};

export default CommercialTable;
