import React, { PropsWithChildren } from "react";

import ItemView from "./Item.view";

type Props = {
  item: string;
};

const Item: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  return <ItemView item={props.item}></ItemView>;
};

export default Item;
