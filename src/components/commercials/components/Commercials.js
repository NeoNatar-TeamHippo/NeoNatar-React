import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'antd';

import CreateCommercials from './CreateCommercials';

import { requestCommercials, requestCreateCommercials } from '../actions';
import { ALL_COMMERCIALS, NEW } from '../constants';

import { openNotification } from '../../utils/functions';

const Commercials = () => {
    const [visible, setVisible] = useState(false);
    const [formRef, setFormRef] = useState(null);

    const {
        commercials,
        // errorMessage,
    } = useSelector(state => state.commercials);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCommercials());
    }, [dispatch]);

    const handleCreate = () => {
        const { form: { validateFields, resetFields } } = formRef.props;
        validateFields((error, values) => {
            if (error) {
                return error;
            }
            const commercial = {
                description: values.description,
                title: values.title,
                upload: values.upload.fileList,
            };
            dispatch(requestCreateCommercials(commercial));
            setTimeout(() => {
                resetFields();
                setVisible(false);
                openNotification('Your Commercial was successfully created', 'Create Commercial');
            }, 3000);
        });
    };

    const saveFormRef = useCallback(node => {
        if (node !== null) {
            setFormRef(node);
        }
    }, []);

    return (
        <div>
            <CreateCommercials
                wrappedComponentRef={saveFormRef}
                visible={visible}
                onCancel={() => setVisible(false)}
                onCreate={() => handleCreate()}
            />
            <Table
                dataSource={commercials}
                title={() => (
                    <div>
                        {ALL_COMMERCIALS}
                        <Button
                            onClick={() => setVisible(true)}
                            className="mb-2"
                            style={{ marginLeft: 100 }}
                            type="primary"
                        >
                            {NEW}
                        </Button>
                    </div>
                )}
                bordered
                columns={
                    [
                        {
                            dataIndex: 'title',
                            key: 'title',
                            title: 'Video Details',
                        },
                        {
                            dataIndex: 'description',
                            key: 'description',
                            title: 'Brief Description',
                        },
                        {
                            dataIndex: 'duration',
                            key: 'duration',
                            title: 'Duration(weeks)',
                        },
                    ]
                }
                rowKey={record => record.id}
            />
        </div>
    );
};

export default Commercials;
