import { Card, InputNumber, Button, Space } from "antd";
import Link from "next/link";
import { useEffect } from "react";
import AddToCart from "./AddToCart";
const { Meta } = Card;

export type ArticleProps = {
  name: string;
  flavour: string;
  price: number;
  imageUrl: string;
  slug: any;
  description: string;
};

export const Article = (data: ArticleProps) => {
  return (
    <Card
      hoverable
      style={{ width: "350px", marginRight: "10px" }}
      cover={
        <Link href={`/article/${data.slug?.current}`} passHref>
          <img
            style={{ width: "350px", height: "300px", objectFit: "cover" }}
            alt={data.flavour}
            src={data.imageUrl}
          />
        </Link>
      }
      actions={[
        <AddToCart
          name={data.name}
          flavour={data.flavour}
          price={data.price}
          key={Math.floor(Math.random() * 10)}
        />,
      ]}
    >
      <Meta
        title={data.name + " " + data.flavour.toLocaleLowerCase()}
        description={data.description}
      />
    </Card>
  );
};
