function draggable_sortable(div_name){

    var div_name="#"+div_name;

    console.log(div_name);

    $(div_name).resizable({
        handles: "w,e"
        , grid: [CELL_W, CELL_H]
        , resize: function( event, ui ) {
                var info = getDaysInfo(event, ui);
                $("#date").text(info.text)
        }
        , stop: function( event, ui ) {
                var info = getDaysInfo(event, ui);
                alert(info.text);
        }
    });

// ドラッグ設定
    $(div_name).draggable({
        containment: "#detailTable"
        , grid: [CELL_W, CELL_H+7]
        , opacity: 0.7
        , scroll: true
        , drag: function( event, ui ) {
                var info = getDaysInfo(event, ui);
                $("#date").text(info.text)
        }
        , stop: function( event, ui ) {
                var info = getDaysInfo(event, ui);
                alert(info.text);
        }
    });

    $('#sortdata').sortable();

}