import React, { useState } from "react";
import "../Home/Home.css";

const Home = () => {
  const [input, setInput] = useState("");
  const [todolist, settodoList] = useState([]);
  const [editid, seteditid] = useState(0);

  const addlist = () => {
    if (editid) {
      const upd = todolist.find((dod) => dod.id === editid);
      const listt = todolist.map((todo) =>
        todo.id === upd.id
          ? (todo = { id: todo.id, input  })
          : { id: todo.id, input: todo.input}
      );
      settodoList(listt);
      seteditid(0);
      setInput("");
      return;
    }

    if (input !== "") {
      settodoList([{ id: `${input}-${Date.now()}`, input }, ...todolist]);
      setInput("");
    }
  };

  const itemdelete = (del) => {
    const fill = todolist.filter((to) => to.id !== del);
    settodoList([...fill]);
  };

  const itemupdate = (up) => {
    const upd = todolist.find((dod) => dod.id === up); 
    setInput(upd.input);
    seteditid(up); 
  };

  return (
    <div className="container py-5 main">
      <div className="row">
        <div className="container  d-flex justify-content-center sub-main">
          <div className="row">
            <h1 className="d-flex justify-content-center py-4 text-main">
              THINGS TO DO
            </h1>
            <div className="main-input-field">
              <input
                className="input-field"
                type="text"
                placeholder="Add New"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              &nbsp;
              <button className="Add-button" onClick={() => addlist()}>
                {editid ? "Edit" : "Add"}
              </button>
            </div>
            <br />
            <fieldset>
              <br />
              {todolist.map((i) => (
                <>
                  <div className="list-name">
                    <div className="todo-info">
                      &nbsp;
                      <label for=" " key={i.id}>
                        {i.input}
                      </label>
                    </div>
                    <div className="btn-main">
                      <button
                        className="upbtn"
                        onClick={() => itemupdate(i.id)}
                      >
                        Update
                      </button>
                      &nbsp;
                      <button
                        className="delbtn"
                        onClick={() => itemdelete(i.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
