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
        <div>
            <Button type="primary" icon="plus" onClick={() => setvisible(true)}>
                {NEW_VIDEO}
            </Button>

            <Table />
            <Modal
                visible={visible}
                title="Upload Video"
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        { CANCEL }
                    </Button>,
                ]}
            >
                <CommercialForm />
            </Modal>
        </div>
    );
};

export default Commercials;
