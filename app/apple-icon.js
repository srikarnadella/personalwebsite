import { ImageResponse } from "next/og";
import { SnMark } from "./sn-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<SnMark px={180} />, size);
}
