import React, { useState } from "react";
import FloatingActionButtons from "../Atom/FloatingButton";
import Popovers from "../Atom/Popover";
import style from "./Home.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { nanoid } from "nanoid";
function Home() {
  const [isInput, setIsInput] = useState(false);
  const [isPlace, setIsPlace] = useState(false);
  const [order, setOrder] = useState("");
  const [id, setId] = useState("");
  const [location, setlocation] = useState("");
  const [mobile, setMobile] = useState();
  const [nextCount, setNextCount] = useState(0);
  const [err,setErr]=useState("")
  function HandleSubmit(){

  
 
    let obj = {
      location,
      order,
      mobile,
      id: nanoid(4),
      status: "Pending",
    };
    if (location !== "" && order !== "" && mobile !== "") {
      localStorage.setItem("orderDetails", JSON.stringify(obj));
      alert (`Please find your tracking id : ${obj.id}`)
    } else {
      setErr("please fill details properlly");
    
  }
  }
   function isValidMobile(value) {
    const MobilrRegex = /^[6-9]\d{9}$/ ;
    if(MobilrRegex.test(value)){
        return true
     } else{
            return false
        }
    }
  return (
    <div style={{ position: "fixed", top: "40rem", right: "2rem" }}>
      <Popovers
        button={<FloatingActionButtons />}
        htmls={
          <div className={style.home}>
            <div className={style.header_div}>
              <AccountCircleIcon />
              <h4>Baba ka Dhaba</h4>
            </div>
            <span>{err}</span>
            <p
              onClick={() => {
                setIsPlace(!isPlace);
              }}
            >
              Place Order
            </p>
            {isPlace && (
              <>
                {nextCount === 0 && (
                  <input
                    placeholder="Place Order."
                    value={order}
                    onChange={(e) => {
                      setOrder(e.target.value);
                    }}
                    required
                  />
                )}
                {nextCount === 1 && (
                  <input
                    placeholder="Mobile No"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  
                    minlength={10} 
                    maxlength={12}
                    required
                  />
                )}
                {nextCount === 2 && (
                  <input
                    placeholder="Location"
                    value={location}
                    onChange={(e) => {
                      setlocation(e.target.value);
                    }}
                    required
                  />
                )}
              {nextCount<2 &&
                <button
                  onClick={() => {
                    setNextCount(nextCount + 1);
                  }}
                disabled={!order}
                >
                Next
                </button>}
                {nextCount >=2 &&
                <button onClick={HandleSubmit}>Submit</button>}
              </>
            )}
            <p
              onClick={() => {
                setIsInput(!isInput);
              }}
            >
              Track Order
            </p>
            {isInput && (
              <input
                placeholder="Track Order."
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
            )}
          </div>
        }
      />
    </div>
  );
}

export default Home;
