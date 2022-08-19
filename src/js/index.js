import initTilt from "./tilt";
import initSr from "./sr";
import { addResume } from "./utils";
import resume from "../assets/RESUME_8_19_2022.pdf";

export default function initApp() {
  initSr();
  initTilt();
  // comment this if you don't want to attach your resume
  addResume(resume);
}
