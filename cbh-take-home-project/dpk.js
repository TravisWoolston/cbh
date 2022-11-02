const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MIN_PARTITION_KEY_LENGTH = 256;
  let candidate;
  if (event) {
    const data = JSON.stringify(event);
    candidate = event?.partitionKey
      ? event.partitionKey
      : crypto.createHash("sha3-512").update(data).digest("hex");
  }
  candidate = candidate
    ? typeof candidate !== "string"
      ? JSON.stringify(candidate)
      : candidate
    : TRIVIAL_PARTITION_KEY;

  return candidate.length > MIN_PARTITION_KEY_LENGTH
    ? crypto.createHash("sha3-512").update(candidate).digest("hex")
    : candidate;
};
