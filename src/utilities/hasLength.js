import { compose, flip, gt, propOr } from "ramda";

const hasLength = compose(
  flip(gt)(0),
  propOr(0, "length")
);

export default hasLength;
