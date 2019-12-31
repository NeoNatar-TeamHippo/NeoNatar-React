import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table, Tooltip, PageHeader } from 'antd';

import UploadVideos from './UploadVideos';

import { requestVideos, requestVideoUpload } from '../actions';
import { ALL_VIDEOS, NEW_VIDEO } from '../constants';

import { openNotification } from '../../utils/functions';

const Videos = ({ history }) => {
    const [visible, setVisible] = useState(false);
    const [formRef, setFormRef] = useState(null);
    const dispatch = useDispatch();

    const { videos } = useSelector(state => state.videos);

    useEffect(() => {
        dispatch(requestVideos());
    }, [dispatch]);

    const handleViewVideo = () => {
    };

    const handleVideoUpload = () => {
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

    const columns = [
        {
            dataIndex: 'title',
            key: 'title',
            title: 'Video Title',
        },
        {
            dataIndex: 'duration',
            key: 'duration',
            title: 'Duration(weeks)',
        },
        {
            key: 'action',
            render: (text, record) => (
                <div className="video-actions">
                    <Tooltip placement="top" title="View details">
                        <Button
                            onClick={() => { handleViewVideo(record.id); }}
                            type="link"
                            icon="eye"
                        />
                    </Tooltip>
                    <Tooltip placement="top" title="Edit">
                        <Button
                            onClick={() => { handleViewVideo(record.id); }}
                            className="text-success"
                            type="link"
                            icon="edit"
                        />
                    </Tooltip>
                    <Tooltip placement="top" title="Delete Video">
                        <Button
                            onClick={() => { handleViewVideo(record.id); }}
                            className="text-danger"
                            type="link"
                            icon="delete"
                        />
                    </Tooltip>
                </div>
            ),
            title: 'Action',
        },
    ];

    return (
        <>
            <PageHeader
                onBack={() => history.goBack()}
                title={ALL_VIDEOS}
                className="mb-2 page_header"
            />
            <UploadVideos
                wrappedComponentRef={saveFormRef}
                visible={visible}
                onCancel={() => setVisible(false)}
                onCreate={() => handleVideoUpload()}
            />
            <div style={{ marginBottom: 16 }} className="d-flex justify-content-between">
                <Button type="primary" icon="plus" onClick={() => setVisible(true)}>
                    {NEW_VIDEO}
                </Button>
            </div>
            <Table
                dataSource={videos}
                columns={columns}
                rowKey={record => record.id}
            />
        </>
    );
};

export default Videos;
