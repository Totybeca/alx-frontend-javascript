export default function createInt8TypedArray(length, position, value) {
    const buffer = new ArrayBuffer(length);
    const dataview = new DataView(buffer);
  
    try {
      dataview.setInt8(position, value);
    } catch (e) {
      throw Error('Position outside range');
    }
    return dataview;
  }
