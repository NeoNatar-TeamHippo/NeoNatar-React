import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader, Button, Typography, Empty, Row, Col, Modal, Form, Icon, Input } from 'antd';
import DataList from './Lists';
import { DESCRIPTION_CREATE, CREATE_NOW, EMPTY_ICON_URL, CANCEL } from '../constants';
import { getSavedLocations, newSavedLocation } from '../actions';
import { openNotification } from '../../utils/functions';

const SavedLocations = ({ history, form }) => {
    const dispatch = useDispatch();
    const { savedLocations, formLoading } = useSelector(state => state.savedLocation);
    const [visible, setvisible] = useState(false);
    const handleCreateList = () => {
        setvisible(true);
    };
    const handleCancel = () => {
        setvisible(false);
    };
    const { getFieldDecorator, resetFields, validateFields } = form;
    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                const { title, description } = values;
                const formValues = {
                    description,
                    title,
                };
                dispatch(newSavedLocation(formValues));
                setTimeout(() => {
                    resetFields();
                    setvisible(false);
                    openNotification('Add locations to your new list', 'New List Created');
                }, 5000);
            }
        });
    };
    useEffect(() => {
        dispatch(getSavedLocations());
    }, [dispatch]);
    return (
        <>
            <PageHeader
                onBack={() => history.goBack()}
                title="Saved Locations"
                subTitle={(
                    <Button onClick={() => handleCreateList()} type="primary">{CREATE_NOW}</Button>
                )}
                className="mb-2 page_header"
            />
            {savedLocations.length === 0 ? (
                <Empty
                    image={EMPTY_ICON_URL}
                    imageStyle={{
                        height: 60,
                    }}
                    description={(
                        <Typography.Text type="secondary">
                            {DESCRIPTION_CREATE}
                        </Typography.Text>
                    )}
                >
                    <Button onClick={() => handleCreateList()} type="primary">{CREATE_NOW}</Button>
                </Empty>
            )
                : (
                    <Row type="flex" justify="center" align="middle">
                        <Col className="mt-2" sm={24} md={16} lg={12}>
                            <DataList />
                        </Col>
                    </Row>
                )
            }
            <Modal
                title="Create a new list of locations"
                centered
                visible={visible}
                onCancel={() => handleCancel()}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        {CANCEL}
                    </Button>,
                ]}
            >
                <Form onSubmit={handleSubmit}>
                    <Form.Item hasFeedback>
                        {getFieldDecorator('title', {
                            rules: [{ message: 'Please give a title', required: true }],
                        })(<Input
                            prefix={<Icon type="tag" />}
                            type="text"
                            placeholder="Title"
                        />)}
                    </Form.Item>
                    <Form.Item hasFeedback>
                        {getFieldDecorator('description', {
                            rules: [{ message: 'Briefly describe your choice', required: true }],
                        })(<Input.TextArea
                            prefix={<Icon type="file" />}
                            type="text"
                            placeholder="Description"
                            rows={4}
                        />)}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={formLoading}
                            block
                        >
                            {CREATE_NOW}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
const WrappedSavedLocations = Form.create({ name: 'locationForm' })(SavedLocations);
export default WrappedSavedLocations;
