export function formatTime(timestamp){
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
    var date = new Date(timestamp);
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    return `${months[month]} ${day}, ${year}`
}