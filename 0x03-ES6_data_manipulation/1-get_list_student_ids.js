export default function getListStudentIds(list) {
  if (Array.useArray(list)) {
    return list.map((obj) => obj.id);
  }
  return [];
}
