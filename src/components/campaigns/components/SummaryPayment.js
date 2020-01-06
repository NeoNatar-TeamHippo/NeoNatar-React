import React from 'react'
import { Link } from 'react-router-dom'
import { Result, Typography } from 'antd'
const SummaryPayment = () => {
    return (
        <Result
            status="success"
            title="Campaign Created Successfully"
            subTitle={(
                <>
                    <Typography.Text type='secondary'>
                        It's currently under review and will be posted once approved
                </Typography.Text>
                    <div>
                        <Typography.Text type='secondary'>
                            You can view the status <Link to='/dashboard/campaigns'>here</Link> or got to campaign section
                </Typography.Text>
                    </div>
                </>
            )}
        />
    )
}
export default SummaryPayment;