const employee = {
    name : "CG",
    streetAddress : "Castle"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,
    [key]: value,
};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const emp = {...employee[key]}
        delete emp[key]
        return emp
    }
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}