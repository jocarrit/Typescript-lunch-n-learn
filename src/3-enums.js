// Enums
// String Enums
var size;
(function (size) {
    size["XS"] = "xs";
    size["S"] = "s";
    size["M"] = "m";
    size["XL"] = "xl";
})(size || (size = {}));
function sayTShirtSize(size) {
    console.log('My T-shirt size is ' + size);
}
sayTShirtSize(size.XL);
// Numeric Enums
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["yes"] = 0] = "yes";
    UserResponse[UserResponse["no"] = 1] = "no";
})(UserResponse || (UserResponse = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
