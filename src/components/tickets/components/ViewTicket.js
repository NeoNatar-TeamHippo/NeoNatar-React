/* eslint-disable react/jsx-no-literals */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Tag, Divider, Comment, Avatar, Tooltip } from 'antd';
import moment from 'moment';

import { getTicketsById } from '../actions';

const ViewTicket = ({ match }) => {
    const { params } = match;
    const { id: ticketId } = params;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTicketsById(ticketId));
    }, [dispatch, ticketId]);
    const { ticketsById, ticketsLoading } = useSelector(state => state.ticket);
    return (
        <div>
            <Row type="flex" justify="center">
                <Col span={10}>
                    <h2>
                        {ticketsById.title}
                        {' '}
                        <Tag>{(ticketsById.priority).toUpperCase()}</Tag>
                    </h2>
                </Col>
                <Divider />
            </Row>
            <Row type="flex" justify="left">
                <Col>
                    <Comment
                        author={<a>Han Solo</a>}
                        avatar={(
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
            )}
                        content={(
                            <p>
                            We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                            </p>
            )}
                        datetime={(
                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                <span>{moment().fromNow()}</span>
                            </Tooltip>
            )}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default ViewTicket;
