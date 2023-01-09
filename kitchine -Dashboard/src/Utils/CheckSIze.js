export default function CheckSize(img) {
  const MIN_FILE_SIZE = 10; // 0.1MB
  const MAX_FILE_SIZE = 1024; // 1MB

  const fileSizeKiloBytes = img.size / 1024;

  if (fileSizeKiloBytes < MIN_FILE_SIZE) {
    return false;
  }
  if (fileSizeKiloBytes > MAX_FILE_SIZE) {
    return false;
  }
  return true;
}
