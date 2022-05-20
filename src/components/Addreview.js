import React, { useEffect, useState } from "react";
import "./addreview.css";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";


function Addreview() {
  const [newTitle, setTitle] = useState("");
  const [newContent, setContent] = useState("");

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3000/auth/login/success", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log("this is the user ",user)

  const HandleTitle = (e) => setTitle(e.target.value);
  const HandleContent = (e) => setContent(e.target.value);

  function logout(){
    window.open("http://localhost:3000/auth/logout","_self")
  }
  function submitReview(event) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTitle,
        content: newContent
      })
    };
    fetch("http://localhost:3000/moview/api", requestOptions)
      .then((response) => response.json())
      .then((res) => console.log(res));

    navigate("/");
  }

  return (
    <div className="review">
      <div className="review__Container">
        <h1>Add Review</h1>
        <input
          className="review__Title"
          type="text"
          onChange={HandleTitle}
          placeholder="Enter the title"
        ></input>
        <textarea
          className="review__Text"
          type="text"
          onChange={HandleContent}
          required
          placeholder="Enter the Review"
        ></textarea>
        <button type="submit" className="submit__btn" onClick={submitReview}>
          <AddIcon />
          Add
        </button>
        <button type="submit" className="logout_btn" onClick={logout}>
        
          logout
        </button>
      </div>
      <form></form>
    </div>
  );
}

export default Addreview;
