// Script Shadowrocket: Xóa header "If-None-Match" trong yêu cầu
const targetPattern = /^https:\/\/spclient\.wg\.spotify\.com\/user-customization-service\/v1\/customize$/;

if (targetPattern.test($request.url)) {
    let modifiedHeaders = { ...$request.headers }; // Sử dụng toán tử spread để sao chép, tránh thay đổi đối tượng gốc
    delete modifiedHeaders["If-None-Match"]; // Xóa header mục tiêu (phân biệt chữ hoa chữ thường)

    $done({ headers: modifiedHeaders });
} else {
    $done({});
}
