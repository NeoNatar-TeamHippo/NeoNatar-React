import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Row, Col, Avatar, Tooltip, Comment, Form, Button, List, Input,
    Typography, Icon
} from 'antd';
import moment from 'moment';
import { getTicketsById, postTicketMessage, resolveTicket } from '../actions';
import { ADDCOMMENT, MARKED_AS_RESOLVED, IS_RESOLVED } from '../constants';

const { TextArea } = Input;

const ViewTicket = ({ match, form }) => {
    const { params } = match;
    const { id: ticketId } = params;
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.user);
    const { ticketsById: { title,
        avatar,
        customerName,
        status,
        messages } } = useSelector(state => state.ticket);

    useEffect(() => {
        dispatch(getTicketsById(ticketId));
    }, [dispatch, ticketId]);

    const userIsAdmin = user.isAdmin;

    const [submitting, setsubmitting] = useState(false);
    const commentsEndRef = useRef(null);

    const [comments, setcomments] = useState(messages);

    useEffect(() => {
        commentsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [comments]);

    const { getFieldDecorator, resetFields, validateFields } = form;
    const actions = [
        <span key="delete_message">
            <Tooltip title="delete message">
                <Icon
                    type="delete"
                    className="text-danger"
                // onClick={handleDelete}
                />
            </Tooltip>
        </span>,
    ];
    const CommentList = ({ commentValue }) => (
        <List
            dataSource={commentValue}
            itemLayout="horizontal"
            renderItem={item => (
                <div className={`d-flex justify-content-${!item.isAdmin ? 'end pl-4' : 'start'}`}>
                    <Comment actions={!item.isAdmin ? actions : ''} {...item} />
                </div>
            )}
        />
    );
    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                setsubmitting(true);
                setTimeout(() => {
                    setsubmitting(false);
                    setcomments([...comments, {
                        author: customerName,
                        avatar,
                        content: <p>{values.body}</p>,
                        datetime: moment().fromNow(),
                        isAdmin: userIsAdmin,
                    }]);
                    dispatch(postTicketMessage({ body: values.body }, ticketId));
                }, 1000);
                resetFields();
            }
        });
    };
    const markAsResolved = () => {
        dispatch(resolveTicket(ticketId));
    };
    return (
        <Row type="flex" justify="center" align="middle">
            <Col sm={24} md={22} lg={20}>
                <div className="text-center">
                    <Typography.Title level={4} type="secondary">
                        {title}
                    </Typography.Title>
                </div>
                <div className="d-flex flex-column">
                    <div className="scroll_container h-25 ">
                        {messages.length > 0 && <CommentList commentValue={messages} />}
                    </div>
                    <div ref={commentsEndRef} />
                    <Comment
                        className="h-75"
                        hidden={status === IS_RESOLVED}
                        avatar={(
                            <Avatar
                                src={avatar}
                                alt={customerName}
                            />
                        )}
                        content={(
                            <Form onSubmit={handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('body', {
                                        rules: [
                                            {
                                                message: 'You can\'t send an empty message',
                                                required: true,
                                            },
                                        ],
                                    })(<TextArea
                                        rows={4}
                                        placeholder="Message to admin..."
                                    />)}
                                </Form.Item>
                                <Form.Item>
                                    <Row type="flex" justify="end">
                                        <Col span={8}>
                                            <Button
                                                htmlType="submit"
                                                loading={submitting}
                                                onClick={handleSubmit}
                                                type="primary"
                                            >
                                                {ADDCOMMENT}
                                            </Button>
                                        </Col>
                                        <Col span={5} offset={11}>
                                            <Button
                                                type="primary"
                                                icon="check"
                                                onClick={markAsResolved}
                                                hidden={!userIsAdmin}
                                            >
                                                {MARKED_AS_RESOLVED}
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form.Item>
                            </Form>
                        )}
                    />
                </div>
            </Col>
        </Row>
    );
};
const WrappedViewTicketForm = Form.create({ name: 'messageForm' })(ViewTicket);
export default WrappedViewTicketForm;
