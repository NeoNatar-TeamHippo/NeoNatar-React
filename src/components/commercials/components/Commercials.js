import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import CommercialForm from './CommercialForm';
import Table from './Table';

import { NEW_VIDEO, CANCEL } from '../constants';

const Commercials = () => {
    const [visible, setvisible] = useState(false);

    const handleCancel = () => {
        setvisible(false);
    };

    return (
        <>
            <div className="d-flex justify-content-end">
                <Button type="primary" icon="plus" onClick={() => setvisible(true)}>
                    {NEW_VIDEO}
                </Button>
            </div>
            <Table />
            <Modal
                centered
                visible={visible}
                title="Upload Video"
                onCancel={handleCancel}
                footer={null}
            >
                <CommercialForm />
            </Modal>
        </>
    );
};
export default Commercials;
