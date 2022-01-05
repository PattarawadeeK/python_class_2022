/**
 *
 * @param {number} come
 * @param {number} pay
 * @param {number} per_head
 * @param {number} pak
 * @returns number
 */
function come_x_pay_y(come, pay, per_head, pak) {
    let amt = Math.floor(pak / come) * pay * per_head + (pak % come) * per_head;
    return amt;
}
come_x_pay_y();
console.log(come_x_pay_y(4, 3, 100, 5));
