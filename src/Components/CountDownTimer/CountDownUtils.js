import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestamMs) {
    const timestampDayJs = dayjs(timestamMs);
    const nowDayjs = dayjs();
    return {
        seconds: getRemaingSeconds(nowDayjs, timestampDayJs),
        minutes: getRemaingMinutes(nowDayjs, timestampDayJs),
        hours: getRemaingHours(nowDayjs, timestampDayJs),
        days: getRemaingDays(nowDayjs, timestampDayJs),
    }
}

function getRemaingSeconds(nowDayjs, timestampDayJs) {
    const seconds = timestampDayJs.diff(nowDayjs, 'seconds') % 60;
    return seconds;
}

function getRemaingMinutes(nowDayjs, timestampDayJs) {
    const minutes = timestampDayJs.diff(nowDayjs, 'minutes') % 60;
    return minutes;
}

function getRemaingHours(nowDayjs, timestampDayJs) {
    const hours = timestampDayJs.diff(nowDayjs, 'hours') % 24;
    return hours;
}

function getRemaingDays(nowDayjs, timestampDayJs) {
    const days = timestampDayJs.diff(nowDayjs, 'days');
    return days;
}