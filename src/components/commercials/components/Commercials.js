import React from 'react';
import { Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import CommercialForm from './CommercialForm';
import Table from './Table';

import { NEW_VIDEO } from '../constants';
import { setVisible } from '../actions';

const Commercials = () => {
    const dispatch = useDispatch();
    const { visible } = useSelector(state => state.commercials);
    const handleCancel = () => {
        dispatch(setVisible(false));
    };

    return (
        <>
            <div className="d-flex justify-content-end mb-2">
                <Button type="primary" icon="plus" onClick={() => dispatch(setVisible(true))}>
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
