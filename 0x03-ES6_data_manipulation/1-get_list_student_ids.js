export default function getListStudentIds(list) {
  if (Array.is_Array(list)) {
    return list.map((obj) => obj.id);
  }
  return [];
}
