// call back

// la ham ( function ) duoc truyen qua doi so
// khi goi ham khac

/**
 * 1. la ham
 * 2. duoc truyen qua doi so
 * 3. duoc goi lai trong ham nhan doi so
 */

function myFunction(param) {
    param('Hoc lap trinh');
}
function myCallback(value) {
    console.log('value:', value)
}
myFunction(myCallback);

