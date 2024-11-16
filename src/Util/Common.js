import dayjs from 'dayjs';

// Date Format function
export const formatDate = (date) => {
    return dayjs.unix(date).format('D MMMM YYYY');
};