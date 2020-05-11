/**
 * Cho trước hàm getRequestBodyFromValues và tham số formValues, các test case sẽ gọi hàm này và truyền đối số có định dạng tương tự như sau:

[
    { field: 'name', value: 'Ngoc Hieu' },
    { field: 'age', value: 23 },
    { field: 'address', value: 'Hà Nội' },
    // ...
]
Như các bạn thấy, formValues là một mảng có thể chứa nhiều objects. Mỗi object chứa 2 keys là field và value.

Yêu cầu
Từ array formValues đã cho, hãy trả về một object có các keys tương ứng với các fields của các objects nằm trong array formValues.
 */

function getRequestBodyFromValues(formValues) {
    var myobj = {};
    formValues.forEach(arr => {
        var a = arr.field;
        console.log(arr.field);
        console.log(arr.value);
        myobj = {
            a: arr.value
        }
        console.log(myobj);
    });
}
getRequestBodyFromValues(
    [{ field: 'name', value: 'Ngoc Hieu' },
    { field: 'age', value: 23 },
    { field: 'address', value: 'Hà Nội' }]
);

