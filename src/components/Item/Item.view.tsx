import React, { PropsWithChildren } from "react";

import classes from "./Item.module.scss";

type Props = {
  item: string;
};

const ItemView: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  return (
    <a className={classes["item"]} href="#">
      {props.item}
    </a>
  );
};

export default ItemView;
