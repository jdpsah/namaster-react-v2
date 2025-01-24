import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Opps!!!</h1>
      <p>Opps!!!... {err.data}</p>
      <p>Something went wrong...</p>
    </div>
  );
};

export default Error;
