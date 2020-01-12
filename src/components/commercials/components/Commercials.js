import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import CommercialForm from './CommercialForm';
import Table from './Table';
import { NEW_VIDEO } from '../constants';

const Commercials = () => {
    const [visible, setvisible] = useState(false);
    const handleOk = () => {
        setvisible(false);
    };
    const handleCancel = () => {
        setvisible(false);
    };
    return (
        <div>
            <Button type="primary" onClick={() => setvisible(true)}>
                {NEW_VIDEO}
            </Button>
            <Table />
            <Modal
                visible={visible}
                title="Upload Video"
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <CommercialForm />
            </Modal>
        </div>
    );
};
export default Commercials;
