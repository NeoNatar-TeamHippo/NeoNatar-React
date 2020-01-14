import { notification } from 'antd';

export const renderRateFormat = text => {
    let color;
    let rateText;
    if (parseInt(text, 10) <= 200) {
        // @TODO: change from volcano to something else
        // also dont show test low, mediun high
        color = 'volcano';
        rateText = 'LOW';
    } else if (parseInt(text, 10) <= 500) {
        color = 'orange';
        rateText = 'MEDIUM';
    } else {
        color = 'green';
        rateText = 'HIGH';
    }
    return { color, rateText };
};

export const renderPrice = text => {
    let type;
    // @TODO: uniform color for the price
    if (parseInt(text, 10) <= 200) {
        type = 'danger';
    } else if (parseInt(text, 10) <= 500) {
        type = 'warning';
    } else {
        type = 'secondary';
    }
    return { type };
};

export const openNotification = (description, message, type) => {
    notification[type]({
        description,
        duration: 5,
        message,
    });
};

export const normFile = e => {
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

export const handleFormData = formValues => {
    const formData = new FormData();
    Object.keys(formValues).forEach(key => {
        formData.append(key, formValues[key]);
        if (key === 'video') {
            formValues[key].forEach(element => {
                formData.append('video', element.originFileObj);
            });
        } else if (key === 'images') {
            formValues[key].forEach(element => {
                formData.append('images', element.originFileObj);
            });
        }
    });
    return formData;
};

export const priorityColor = priority => {
    let color;
    if (priority === 'high') {
        color = 'red';
    }
    if (priority === 'medium') {
        color = 'green';
    }
    if (priority === 'low') {
        color = 'yellow';
    }
    return color;
};

export const statusColor = status => {
    let color;
    if (status === 'disapproved') {
        color = 'red';
    }
    if (status === 'live') {
        color = 'green';
    }
    if (status === 'pending') {
        color = 'yellow';
    }
    if (status === 'ended') {
        color = 'grey';
    }
    return color;
};
