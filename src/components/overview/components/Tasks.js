import React, { useState } from 'react';
import { List, Card, Typography, Button, Tooltip, Modal, Form, Input, Empty } from 'antd';
import moment from 'moment';

import { TASKS, CREATE_TASKS, CREATE_TODO } from '../constants';

import EMPTY_ICON_URL from '../../../images/svgs/undraw_to_do_list_a49b.svg';

const Tasks = ({ form }) => {
    const [tasks, settasks] = useState([]);
    const [visible, setVisible] = useState(false);
    const { getFieldDecorator, resetFields, validateFields } = form;
    const handleSubmit = e => {
        e.preventDefault();
        validateFields(async (err, values) => {
            if (!err) {
                const newTask = {
                    date: moment(Date.now()).format('LLLL'),
                    id: Date.now(),
                    title: values.title,
                };
                settasks([...tasks, newTask]);
                resetFields();
                setVisible(false);
            }
        });
    };
    const deleteTask = id => {
        const newTasks = tasks.filter(task => id !== task.id);
        settasks(newTasks);
    };

    return (
        <>
            <Card
                title={(<Typography.Title level={4}>{TASKS}</Typography.Title>)}
                extra={(
                    <Tooltip title="New Task">
                        <Button
                            icon="plus"
                            shape="circle-outline"
                            type="primary"
                            onClick={() => setVisible(true)}
                        />
                    </Tooltip>
                )}
            >
                {tasks.length === 0 ? (
                    <Empty
                        image={EMPTY_ICON_URL}
                        description={(
                            <Typography.Text type="secondary">
                                {CREATE_TODO}
                            </Typography.Text>
                        )}
                    />
                ) : (
                    <List
                        dataSource={tasks}
                        renderItem={item => {
                            const { id, date, title } = item;

                            return (
                                <List.Item key={id}>
                                    <List.Item.Meta
                                        title={(
                                            <Typography.Text ellipsis>
                                                {title}
                                            </Typography.Text>
                                            )}
                                        description={(
                                            <Typography.Text type="secondary" ellipsis>
                                                {date}
                                            </Typography.Text>
                                            )}
                                    />
                                    <Tooltip title="delete">
                                        <Button
                                            icon="delete-o"
                                            type="link"
                                            onClick={() => deleteTask(id)}
                                        />
                                    </Tooltip>
                                </List.Item>
                            );
                        }}
                    />
                )}

            </Card>
            <Modal
                title="New Task"
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
                centered
            >
                <Form onSubmit={handleSubmit}>
                    <Form.Item label="Title" hasFeedback>
                        {getFieldDecorator('title', {
                            rules: [{ message: 'Title cannot be empty', required: true }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                        >
                            {CREATE_TASKS}
                        </Button>
                    </Form.Item>
                </Form>

            </Modal>
        </>
    );
};
const WrappedTasks = Form.create({ name: 'tasks' })(Tasks);

export default WrappedTasks;
