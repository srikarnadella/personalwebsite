import { ImageResponse } from "next/og";
import { SnMark } from "./sn-mark";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<SnMark px={512} />, size);
}
