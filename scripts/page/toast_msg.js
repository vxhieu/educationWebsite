$(document).ready(function () {
    $(".main--right__add").click(function () {
        $(".toastmsg").show().delay(3000).fadeOut(1000);;
    });
    generateToast("warning");

})
function generateToast(type) {
    let color_status = $(".toastmsg--color");
    let status = $(".title--status");
    let content_status = $(".content--status");
    let icon_status = $(".toastmsg--content__status");

    switch (type) {
        case 'success':
            status.text("Thành công");
            content_status.text("Đã gửi thông báo cho phụ huynh");
            color_status.css("background-color", "#03AE66");
            icon_status.prepend(
                $('<img>', { src: '/assets/Icons/ic_ToastMessage_Success.png' })
            );
            break;
        case 'error':
            status.text("Lỗi");
            content_status.text("Error Message");
            color_status.css("background-color", "#FA3939");
            icon_status.prepend(
                $('<img>', { src: '/assets/Icons/ic_ToastMessage_Fail.png' })
            );
            break;
        case 'warning':
            status.text("Cảnh báo");
            content_status.text("Warning Message");
            color_status.css("background-color", "orange");
            icon_status.prepend(
                $('<img>', { src: '/assets/Icons/ic_ToastMessage_Warning.png' })
            );
            break;
        case 'noti':
            status.text("Thông báo");
            content_status.text("Notification Message");

            icon_status.prepend(
                $('<img>', { src: '/assets/Icons/ic_ToastMessage_Info.png' })
            );
            break;
    }
}