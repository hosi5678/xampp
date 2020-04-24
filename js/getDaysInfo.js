function getDaysInfo(event, ui) {

    var info = new Object();

    info.start = ui.position.left == 0 ? 1 : 1 + ui.position.left / CELL_W;
    if (ui.size) {
            info.end = info.start + (ui.size.width - DIV_W) / CELL_W;
    } else {
            info.end = info.start + (event.target.offsetWidth - DIV_W) / CELL_W;
    }
    info.days = info.end - info.start;
    info.allDay = (info.end == info.start);

    if (info.allDay) {
            info.text = `${Math.round(info.start)}日`;
    } else {
            info.text = `${Math.round(info.start)}日 ～ ${Math.round(info.end)}日`;
    }
    
    return info
}