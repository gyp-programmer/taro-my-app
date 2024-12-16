/*
 * 我的入口
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-11-15 15:37:48
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { useCallback } from "react";
import { View, Button, Text } from "@tarojs/components";
import { getEnv, showModal, showToast } from "@tarojs/taro";

export default function Mime() {
  const env = getEnv();

  const handleModal = useCallback(() => {
    showModal({
      title: "提示",
      content: "这是一个模态弹窗",
      success: function (res) {
        if (res.confirm) {
          showToast({
            title: "加载中",
            icon: "loading",
            duration: 2000,
          });
        } else if (res.cancel) {
          showToast({
            title: "加载失败",
            icon: "none",
            duration: 2000,
          });
        }
      },
    });
  }, [showModal]);

  return (
    <View>
      <Text>当前环境：{env}</Text>
      <Button className="button" onClick={handleModal}>
        使用Modal
      </Button>
    </View>
  );
}
