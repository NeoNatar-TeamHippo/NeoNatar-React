import React from 'react';
import { Modal, Tag } from 'antd';

const LocationModal = props => {
    const { locationVisible,
        locationHandleOk,
        campaignByIdLoading,
        locationsSelected } = props;

    return (
        <Modal
            title="Campaign Locations"
            visible={locationVisible}
            onOk={locationHandleOk}
            onCancel={locationHandleOk}
        >
            <div type="flex" justify="center">
                {campaignByIdLoading
                    ? [] : locationsSelected.sort().map(location => (
                        <Tag
                            key={location}
                            color="blue"
                            style={{ marginBottom: '10px' }}
                        >
                            {location}
                        </Tag>
                    ))}
            </div>
        </Modal>
    );
};

export default LocationModal;
