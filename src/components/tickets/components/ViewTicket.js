/* eslint-disable react/jsx-no-literals */
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Row, Col, Avatar, Tooltip, Comment, Form, Button, List, Input,
    Typography, Icon
} from 'antd';
import moment from 'moment';
import { getTicketsById } from '../actions';

const { TextArea } = Input;

const ViewTicket = ({ match, form }) => {
    const { params } = match;
    const { id: ticketId } = params;
    const dispatch = useDispatch();
    const [comments, setcomments] = useState([{
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: <p>Welcome to NeoNatar, please tell you about your issue. We will get back to you ass soon as possible</p>,
        datetime: moment().fromNow(),
        isAdmin: true,
    }]);
    const [submitting, setsubmitting] = useState(false);
    // useEffect(() => {
    //     dispatch(getTicketsById(ticketId));
    // }, [dispatch, ticketId]);
    const commentsEndRef = useRef(null);
    useEffect(() => {
        commentsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [comments]);
    const { ticketsById, ticketsLoading } = useSelector(state => state.ticket);
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
            renderItem={props => (
                <div className={`d-flex justify-content-${!props.isAdmin ? 'end pl-4' : 'start'}`}>
                    <Comment actions={!props.isAdmin ? actions : ''} {...props} />
                </div>
            )}
        />
    );
    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                // const formValues = {
                //     body: values.body,
                // };
                setsubmitting(true);
                setTimeout(() => {
                    setsubmitting(false);
                    setcomments([...comments, {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{values.body}</p>,
                        datetime: moment().fromNow(),
                        isAdmin: false,
                    }]);
                }, 1000);
                resetFields();
            }
        });
    };
    return (
        <Row type="flex" justify="center" align="middle">
            <Col sm={24} md={22} lg={20}>
                <div className="text-center">
                    <Typography.Title level={4} type="secondary">
                        Poor Services
                    </Typography.Title>
                </div>
                <div className="d-flex flex-column">
                    <div className="scroll_container h-25 ">
                        {comments.length > 0 && <CommentList commentValue={comments} />}
                    </div>
                    <div ref={commentsEndRef} />
                    <Comment
                        className="h-75"
                        avatar={(
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
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
                                    <Button
                                        htmlType="submit"
                                        loading={submitting}
                                        onClick={handleSubmit}
                                        type="primary"
                                    >
                                        Add Comment
                                    </Button>
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
