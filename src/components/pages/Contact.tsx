import React from "react";

function Error() {
  return (
    <>
      <main>
        <form action="submit">
          <label htmlFor="name" placeholder="Name"></label>
          <input id="name" type="text" />
          <label htmlFor="phone" placeholder="Phone"></label>
          <input id="phone" type="tel" />
          <label htmlFor="email"></label>
          <input id="email" type="email" />
          <label htmlFor="company"></label>
          <input id="company" type="text" />
          <label htmlFor="msg"></label>
          <textarea id="msg" />
          <input type="submit"> </input>
        </form>
      </main>
    </>
  );
}

export default Error;
