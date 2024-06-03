/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t*1000);
    })
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t*1000);
    })
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t*1000);
    })
}

function promise_all(t1,t2,t3){
    const time1 = wait1(t1);
    const time2 = wait1(t2);
    const time3 = wait1(t3);
    return Promise.all([time1,time2,time3]);
}

async function calculateTime(t1, t2, t3) {
    const initdate= new Date();
    const start_time= initdate.getTime();
    // await promise_all(t1,t2,t3);
    await Promise.all([wait1(t1),wait2(t2),wait3(t3)]);
    const finaldate= new Date();
    const end_time = finaldate.getTime();
    return (end_time - start_time);
}

module.exports = calculateTime;
