import React, { FC } from "react";
import { useHistory, useParams } from "react-router";

interface ScreenCProps {
  message: string;
  history: any;
  match: any;
}

interface ParamTypes {
  userId: string;
}

const ScreenC: FC<ScreenCProps> = (props) => {
  /* useEffect(() => {
    setTimeout(() => {
      props.history.push("/");
    }, 3000);
  }); */

  const history = useHistory();
  const { userId } = useParams<ParamTypes>();

  const onClickGoBack = () => {
    //  props.history.goBack();
    history.goBack();
  };

  return (
    <>
      <div>
        {/* <div>{"Your id is " + props.match.params.userId}</div> */}
        <div>{`Your ID is ${userId}`}</div>
        <div>{props.message}</div>
      </div>
      <div>
        <div>
          <button onClick={onClickGoBack}>Go back</button>
        </div>
      </div>
    </>
  );
};

export default ScreenC;
