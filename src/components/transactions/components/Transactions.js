import React from 'react';
import { PageHeader } from 'antd';

import TransactionsTable from './Table';

const Transactions = ({ history }) => (
    <div>
        <PageHeader
            onBack={() => history.goBack()}
            title="Transactions"
            className="mb-2 page_header"
        />
        <TransactionsTable />
    </div>
);

export default Transactions;
