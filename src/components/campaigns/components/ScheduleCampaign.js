import React from 'react'
import { Descriptions, Col, Row, Button, Tooltip, Typography, Select, Divider } from "antd";
import { SELECT_OPTIONS } from '../constants';
import { openNotification } from '../../utils/functions'
const { Option } = Select
const ScheduleCampaign = () => {
    const onChange = (value) => {
        openNotification(`New Price Updated to ${1500 * value}`, 'Update')
    }
    const renderSelectOptions = () => {
        return SELECT_OPTIONS.map((option, index) => {
            return (<Option key={option.value} value={option.value}>{option.title}</Option>)
        })
    }
    return (
        <div className="mt-4">
            <Row type="flex" justify='center' align='center'>
                <Col xs={24} md={16}>
                    <Descriptions title="Campaign Info" layout="vertical" bordered>
                        <Descriptions.Item label="Title">Exactly as depicted</Descriptions.Item>
                        <Descriptions.Item label="Video">
                            <Tooltip title='View Video'>
                                <Button type='link'>
                                    Paradigm
                                    </Button>
                            </Tooltip>
                        </Descriptions.Item>
                        <Descriptions.Item label="Amount"><span> &#8358;</span> 1500</Descriptions.Item>
                        <Descriptions.Item label="Locations">
                            <div>
                                <Typography.Text>Transcorp Hilton</Typography.Text>
                                <Typography.Text type='secondary' className='ml-3'>Abuja</Typography.Text>
                                <Divider type='vertical'></Divider>
                            </div>
                        </Descriptions.Item>
                    </Descriptions>
                    <Row>
                        <Col xs={20} md={16} lg={8}>
                            <div className='mt-4'>
                                <Typography.Text strong >
                                    How long should your campaign last ?
                            </Typography.Text>
                                <Select
                                    className='w-100 mt-2'
                                    placeholder="Select Duration"
                                    onChange={onChange}
                                    defaultActiveFirstOption
                                >
                                    {renderSelectOptions()}
                                </Select>
                            </div>
                        </Col>
                    </Row>

                    <Button className='mt-4' type='primary'>
                        Proceed To Payment
                    </Button>
                </Col>
            </Row>

        </div>
    )
}
export default ScheduleCampaign;
