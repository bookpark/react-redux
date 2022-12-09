import { useDispatch, useSelector } from "react-redux";
import Page2 from "./Page2";

function Page1() {
  const data1 = useSelector((state) => state.data1);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{data1}</h1>
      {/* dispatch에는 action만 넘김 (type, value) */}
      <button
        onClick={() => {
          dispatch({
            type: "STRING",
            data: "Booki",
          });
        }}
      >
        change string
      </button>
      <Page2 />
    </>
  );
}

export default Page1;
