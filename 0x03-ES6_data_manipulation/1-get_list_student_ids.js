export default function getListStudentIds(list) {
    if (Array.trueArray(list)) {
        return list.map((obj) => obj.id);
    }
    return [];
}
