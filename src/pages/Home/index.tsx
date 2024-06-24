import React from "react";
import ReactEcharts from 'echarts-for-react'
import styles from "./index.less";
import { Card } from "antd";
import {getOptions} from './option.js';
import { PageContainer } from "@ant-design/pro-components";
import List from "./components/list";

const Home = () => {
  return (
    <PageContainer>
      <div className={styles.card_box}>
        <Card style={{ width: 350 }}>
          <p>在线用户量</p>
          <p>9999+</p>
        </Card>
        <Card style={{ width: 350 }}>
          <p>在线用户量</p>
          <p>9999+</p>
        </Card>
        <Card style={{ width: 350 }}>
          <p>在线用户量</p>
          <p>9999+</p>
        </Card>
        <Card style={{ width: 350 }}>
          <p>在线用户量</p>
          <p>9999+</p>
        </Card>
      </div>
      <div className={styles.trade_box}>
        <Card className={styles.type_box}>
            <ReactEcharts option={getOptions()} style={{height: '500px', width: '800px'}}/>
        </Card>
        <Card className={styles.user_box} title = "优质达人榜">
            <List />
        </Card>
      </div>
    </PageContainer>
  );
};

export default Home;
