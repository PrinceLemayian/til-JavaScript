"use strict";

const getUser = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  const data = await response.json();

  console.log(data);
};

getUser();
