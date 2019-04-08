let students = {
    name: 'zhangli',
    age: 12
};

setTimeout(() => {
    students.name = 'dianligegeg';
}, 5000);

let showdata = function() {
    return 123;
};

export {students, showdata};