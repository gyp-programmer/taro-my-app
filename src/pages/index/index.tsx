/*
 * 首页
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-11-15 10:24:26
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import { Component, PropsWithChildren } from "react";
import { View, Button, Text } from "@tarojs/components";
import { navigateTo } from "@tarojs/taro";
import { observer, inject } from "mobx-react";

import "./index.less";

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

@inject("store")
@observer
class Index extends Component<PropsWithChildren<PageStateProps>> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props.store;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props.store;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props.store;
    counterStore.incrementAsync();
  };

  jumpUrl = () => {
    navigateTo({
      url: "/pages/mime/index",
    });
  };

  render() {
    const {
      counterStore: { counter },
    } = this.props.store;
    return (
      <View className="index">
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <Button onClick={this.jumpUrl}>跳转到我的中心</Button>
      </View>
    );
  }
}

export default Index;
