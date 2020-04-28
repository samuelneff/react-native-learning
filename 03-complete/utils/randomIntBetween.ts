export default function randomIntBetween(min: number, max: number) {
  if (typeof min !== "number") {
    throw new Error(
      `randomIntBetween expected a number for min but received ${min}`
    );
  }
  if (typeof max !== "number") {
    throw new Error(
      `randomIntBetween expected a number for min but received ${min}`
    );
  }

  return Math.round(Math.random() * (max - min)) + min;
}
