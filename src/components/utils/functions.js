export const renderRateFormat = text => {
    let color;
    let rateText;
    if (parseInt(text, 10) <= 200) {
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
    if (parseInt(text, 10) <= 200) {
        type = 'danger';
    } else if (parseInt(text, 10) <= 500) {
        type = 'warning';
    } else {
        type = 'secondary';
    }
    return { type };
}
;