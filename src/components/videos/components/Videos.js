import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table, Tooltip, PageHeader, Modal } from 'antd';

import UploadVideo from './UploadVideo';
import EditVideo from './EditVideo';
import ViewUpload from './ViewUpload';

import { requestVideos } from '../actions';
import { ALL_VIDEOS, NEW_VIDEO } from '../constants';

const { confirm } = Modal;
function showConfirm() {
    confirm({
        content: 'Are you sure? This action cannot be reversed!',
        onOk() {
        },
        title: 'Delete Video',
    });
}

const Videos = ({ history }) => {
    const [visible, setVisible] = useState(false);
    const [seeable, setSeeable] = useState(false);
    const [preview, setPreview] = useState(false);
    const dispatch = useDispatch();

    const { videos } = useSelector(state => state.videos);

    useEffect(() => {
        dispatch(requestVideos());
    }, [dispatch]);

    const columns = [
        {
            dataIndex: 'title',
            key: 'title',
            title: 'Video Title',
        },
        {
            dataIndex: 'duration',
            key: 'duration',
            title: 'Video Length (s)',
            width: '20%',
        },
        {
            key: 'action',
            render: (text, record) => (
                <div className="video-actions">
                    <Tooltip placement="top" title="View details">
                        <Button
                            onClick={() => setPreview(true)}
                            type="link"
                            icon="eye"
                        />
                    </Tooltip>
                    <Tooltip placement="top" title="Edit">
                        <Button
                            onClick={() => setSeeable(true)}
                            className="text-success"
                            type="link"
                            icon="edit"
                        />
                    </Tooltip>
                    <Tooltip placement="top" title="Delete Video">
                        <Button
                            onClick={showConfirm}
                            className="text-danger"
                            type="link"
                            icon="delete"
                        />
                    </Tooltip>
                </div>
            ),
            title: 'Action',
            width: '20%',
        },
    ];

    return (
        <>
            <EditVideo
                visible={seeable}
                onCancel={() => setSeeable(false)}
            />
            <UploadVideo
                visible={visible}
                onCancel={() => setVisible(false)}
            />
            <ViewUpload
                visible={preview}
                onCancel={() => setPreview(false)}
            />
            <PageHeader
                onBack={() => history.goBack()}
                title={ALL_VIDEOS}
                className="mb-2 page_header"
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
