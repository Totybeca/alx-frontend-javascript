export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length); 
  const daView = new DataView(buff);
  if (position >= length) throw new RangeError('Position outside range'); // Throws RangeError if it exceeds length
  daView.setUint8(position, value);
  return daView;
}
