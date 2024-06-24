import React, { useEffect, useRef, useState } from "react";
import styles from "./list.less";
import { Card, Carousel, Divider } from "antd";
const dataSource = new Array(100).fill(0).map((_, index) => index + 1);
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "500px",
  color: "#fff",
  lineHeight: "500px",
  textAlign: "center",
  background: "#364d79",
};
export default () => {
  const [data, setData] = useState(dataSource.slice(0, 10));
  return (
    <Carousel
      autoplay
      adaptiveHeight={true}
      speed={3000}
      dotPosition="left"
      infinite
      beforeChange={(current: number, next: number) => {
        const cacheNum = current * 10 + 10;
        setData(dataSource.slice(cacheNum, cacheNum + 10));
      }}
    >
      {data.map((item) => (
        <div key={item}>
          {data.map((e) => (
            <div className={styles.user_liner}>
              Tom <span>{e}</span>
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
};
