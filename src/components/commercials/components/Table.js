import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Tooltip, Button, Table, Modal } from 'antd'
import { TABLE_VALUES } from '../constants'
import { getCommercial, removeCommercial } from '../actions'
const CommercialTable = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCommercial());
    }, [dispatch]);
    const { commercials, loadingCommercials } = useSelector(state => state.commercials);
    const showDeleteConfirm = (id) => {
        Modal.confirm({
            title: 'Are you sure delete this video?',
            content: 'This cannot be reversed',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch(removeCommercial(id))
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    const columns = [
        ...TABLE_VALUES,
        {
            key: 'action',
            render: (text, record) => (
                <>
                    <Tooltip placement="top" title="View video">
                        <Button
                            onClick={() => { console.log(record.url); }}
                            type="link"
                            icon="eye"
                        />
                    </Tooltip>
                    <Tooltip placement="top" title="Delete Video">
                        <Button
                            onClick={() => { showDeleteConfirm(record.commercialId) }}
                            type="link"
                            icon="delete"
                            className='text-danger'
                        />
                    </Tooltip>
                </>
            ),
            title: 'Action',
        },
    ];
    return (
        <div>
            <Table
                columns={columns}
                // loading={loadingCommercials}
                dataSource={commercials}
                rowKey={record => record.id}
            />
        </div>
    )
}
export default CommercialTable;