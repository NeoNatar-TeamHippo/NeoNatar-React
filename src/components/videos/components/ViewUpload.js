import React from 'react';
import { Modal, Card } from 'antd';

const { Meta } = Card;
const ViewUpload = props => {
    const { visible, onCancel } = props;

    return (
        <>
            <Modal
                visible={visible}
                onCancel={onCancel}
            >
                <Card
                    style={{ width: '90%' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" />
                </Card>
            </Modal>
        </>
    );
};

export default ViewUpload;
