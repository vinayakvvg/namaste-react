import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Error</h1>
      <h2>Oops! Something went wromng</h2>
      <div>
        {err.status} {err.statusText}
      </div>
    </div>
  );
};

export default Error;
