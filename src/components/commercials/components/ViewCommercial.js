import React from 'react';
import { Modal, Card } from 'antd';

const { Meta } = Card;

const ViewCommercial = props => {
    const { onCancel, data, onOk, selectedModal } = props;

    return (
        <>
            {
                data.map(({ description, commercialId, url, title }) => (
                    <Modal
                        key={commercialId}
                        visible={selectedModal === commercialId}
                        closable={false}
                        onCancel={onCancel}
                        title={title}
                        onOk={onOk}
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
