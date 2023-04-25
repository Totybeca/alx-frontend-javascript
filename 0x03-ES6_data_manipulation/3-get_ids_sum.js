export default function getStudentIdsSum(arr) {
    return arr.reduce((bur, c) => bur + c.id, 0);
}
