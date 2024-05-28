import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const Event = () => {
  const [counter, setCounter] = useState(1);
  const [liked, setMessage] = useState(true);

  const handleState = () => {
    if (liked == true) {
      increasedbyone();
    } else {
      decreasedbyone();                           
    }
    setMessage(!liked); // toggle between true and false
  };
  const increasedbyone = () => setCounter(counter + 1);
  const decreasedbyone = () => setCounter(counter - 1);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={handleState} text="Like" disabled={!liked} />
      <Button onClick={handleState} text="UnLike" disabled={liked} />
      {/* <Button onClick={increasedbyone} text="plus" /> 
      <Button onClick={decreasedbyone} text="minus" /> */}
    </div>
  );
};
export default Event;
