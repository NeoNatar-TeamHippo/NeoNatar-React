import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import CommercialForm from './CommercialForm'
import Table from './Table'
const Commercials = () => {
    const [visible, setvisible] = useState(false)
    const handleOk = e => {
        setvisible(false)
    };
    const handleCancel = e => {
        setvisible(false)
    };
    return (
        <div>
            <Button type='primary' onClick={() => setvisible(true)}>
                New Video
            </Button>
            <Table></Table>
            <Modal visible={visible}
                title="Upload Video"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}>
                <CommercialForm></CommercialForm>
            </Modal>
        </div>
    )
}
export default Commercials;