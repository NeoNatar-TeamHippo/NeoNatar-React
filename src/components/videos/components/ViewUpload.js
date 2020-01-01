import React from 'react';
import { Modal, Card } from 'antd';

const ViewUpload = props => {
    const { visible, onCancel } = props;

    return (
        <>
            <Modal
                visible={visible}
                onCancel={onCancel}
                title="name"
            >
                <Card
                    size="small"
                    cover={(
                        <video className="uploaded-video" controls>
                            <source src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-2/htmlcss1-vid_brown-bear.mp4" type="video/mp4"/>
                            <track src="name" kind="captions" />
                        </video>
                    )}
                />
            </Modal>
        </>
    );
};

export default ViewUpload;
