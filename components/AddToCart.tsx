import { Button, InputNumber, Space, notification } from "antd";
import { useState } from "react";

interface AddToCartProps {
  name: string;
  flavour: string;
  price: number;
}
const AddToCart = ({ name, flavour, price }: AddToCartProps) => {
  const [value, setValue] = useState(1);

  const addToCartHandler = () => {
    notification.open({
      message: "Dodano u košaricu",
      description: `${name} ${flavour} (${value}) = ${price * value}kn`,
    });
  };

  const changeValueHandler = (value: number) => {
    setValue(value);
  };

  return (
    <Space>
      <Button onClick={addToCartHandler} type="primary">
        Dodaj u košaricu
      </Button>
      <InputNumber
        onChange={changeValueHandler}
        min={1}
        max={10}
        defaultValue={1}
      />
    </Space>
  );
};

export default AddToCart;
