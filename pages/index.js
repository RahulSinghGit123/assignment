import { useState } from "react";
import Loginpage from "../components/loginpage";
import Fulladresspage from "@/components/fulladresspage";

export default function Home() {
  const [next, setNext] = useState(false);
  return <>
  { next ? <Fulladresspage />:<Loginpage setNext={setNext}/> }
  </>
}
