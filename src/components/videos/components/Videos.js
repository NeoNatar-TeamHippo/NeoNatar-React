import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'antd';

import UploadVideos from './UploadVideos';

import { requestVideos, requestVideoUpload } from '../actions';
import { ALL_VIDEOS, NEW } from '../constants';

import { openNotification } from '../../utils/functions';

const Videos = () => {
    const [visible, setVisible] = useState(false);
    const [formRef, setFormRef] = useState(null);

    const {
        videos,
    } = useSelector(state => state.videos);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestVideos());
    }, [dispatch]);

    const handleCreate = () => {
        const { form: { validateFields, resetFields } } = formRef.props;
        validateFields((error, values) => {
            if (error) {
                return error;
            }
            const videoUpload = {
                description: values.description,
                title: values.title,
                upload: values.upload.fileList,
            };
            dispatch(requestVideoUpload(videoUpload));
            setTimeout(() => {
                resetFields();
                setVisible(false);
                openNotification('Your video was successfully created', 'Create Video');
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
            <UploadVideos
                wrappedComponentRef={saveFormRef}
                visible={visible}
                onCancel={() => setVisible(false)}
                onCreate={() => handleCreate()}
            />
            <Table
                dataSource={videos}
                title={() => (
                    <div>
                        {ALL_VIDEOS}
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

export default Videos;
