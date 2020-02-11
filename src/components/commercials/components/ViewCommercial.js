import React from 'react';
import { Modal, Card } from 'antd';

const { Meta } = Card;

const ViewCommercial = props => {
    const { onCancel, data, onOk, selectedModal } = props;

    return (
        <>
            {
                data.map(({ description, id, url, title }) => (
                    <Modal
                        key={id}
                        visible={selectedModal === id}
                        closable
                        onCancel={onCancel}
                        title={title}
                        onOk={onOk}
                        footer={null}
                    >
                        <Card
                            cover={(
                                <video className="uploaded-video" controls>
                                    <source src={url} />
                                    <track src="name" kind="captions" />
                                </video>
                            )}
                        >
                            <Meta description={description} />
                        </Card>
                    </Modal>
                ))
            }
        </>
    );
};

export default ViewCommercial;
