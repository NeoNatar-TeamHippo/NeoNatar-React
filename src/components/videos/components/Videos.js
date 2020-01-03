import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table, Tooltip, PageHeader, Modal } from 'antd';

import UploadVideo from './UploadVideo';
import EditVideo from './EditVideoById';
import ViewUpload from './ViewUpload';

import { requestVideos, requestDeleteVideo } from '../actions';
import { ALL_VIDEOS, NEW_VIDEO } from '../constants';

import { openNotification } from '../../utils/functions';

const { confirm } = Modal;

const Videos = ({ history }) => {
    const [visible, setVisible] = useState(false);
    const [seeable, setSeeable] = useState(false);
    const [selectedModal, setSelectedModal] = useState(null);
    const dispatch = useDispatch();

    const { videos } = useSelector(state => state.videos);

    useEffect(() => {
        dispatch(requestVideos());
    }, [dispatch]);
    console.log(videos);
    const showConfirm = id => {
        confirm({
            cancelText: 'No',
            content: 'This action cannot be reversed! Are you sure?',
            okText: 'Yes',
            okType: 'danger',
            onCancel() { },
            onOk() {
                dispatch(requestDeleteVideo(id));
                setTimeout(() => {
                    openNotification('Deleted Successfully', 'Delete Video');
                }, 3000);
            },
            title: 'Do you want to delete this Video?',
        });
    };

    const deleteVideo = id => {
        showConfirm(id);
    };

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
            render: item => (
                <div className="video-actions">
                    <Tooltip placement="top" title="View details">
                        <Button
                            onClick={() => setSelectedModal(item.id)}
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
                            onClick={() => deleteVideo(item.id)}
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
            <EditVideo
                visible={seeable}
                onCancel={() => setSeeable(false)}
            />
            <UploadVideo
                visible={visible}
                onCancel={() => setVisible(false)}
                onOk={() => setVisible(false)}
            />
            <ViewUpload
                selectedModal={selectedModal}
                onCancel={() => setSelectedModal(null)}
                data={videos}
                onOk={() => setSelectedModal(null)}
            />
            <Table
                dataSource={videos}
                columns={columns}
                rowKey={record => record.id}
            />
        </>
    );
};

export default Videos;
