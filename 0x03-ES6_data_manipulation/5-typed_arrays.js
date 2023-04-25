export default function createInt8TypedArray(length, position, value) {
    const arr = new ArrayBuffer(length); // ArrayBuffer
    const val = new DataView(arr); // DataView
    if (position >= length) throw new RangeError('Position outside range'); // Throws RangeError if it exceeds length
    val.setUint8(position, value);
    return val;
  }
