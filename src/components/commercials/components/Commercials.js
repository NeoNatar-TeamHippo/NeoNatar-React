import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'antd';

import CreateCommercials from './CreateCommercials';

import * as actions from '../actions';
import { ALL_COMMERCIALS, NEW } from '../constants';

const Commercials = () => {
    const [visible, setVisible] = useState(false);
    const [formRef, setFormRef] = useState(null);

    const { commercials, isCommercialsCreated } = useSelector(state => state.commercials);

    const dispatch = useDispatch();

    useEffect(() => {
        const { resetCommercialsState, requestCommercials } = actions;
        dispatch(requestCommercials());
        if (visible && isCommercialsCreated) {
            setVisible(false);
            dispatch(resetCommercialsState());
        }
    }, [dispatch, isCommercialsCreated, visible]);

    const handleCreate = () => {
        const { form } = formRef.props;
        const { requestCreateCommercials } = actions;
        form.validateFields((error, values) => {
            if (error) {
                return error;
            }
            form.resetFields();
            const commercial = {
                description: values.description,
                title: values.title,
                upload: values.upload.file,
            };
            dispatch(requestCreateCommercials(commercial));
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
