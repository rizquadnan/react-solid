import { GoodButton } from "./good";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

export function OCP() {
  return (
    <div className="flex space-x-10">
      <GoodButton
        text="Go Home"
        icon={<HiOutlineArrowNarrowRight />}
      />
      <GoodButton
        text="Go Back"
        icon={<HiOutlineArrowNarrowLeft />}
      />
    </div>
  );
}
