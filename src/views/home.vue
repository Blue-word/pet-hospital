<template>
  <!-- 搜索栏 -->
  <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" @search="onSearch" />

  <!-- 分割线 -->
  <van-divider />

  <!-- 轮播图 -->
  <van-swipe class="my-swipe" :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" />
    </van-swipe-item>
  </van-swipe>

  <!-- 模块 -->
  <!-- 设置垂直间距 -->
  <van-row :gutter="[20, 20]">
    <van-col span="12">
      <van-cell-group>
        <van-grid class="aa" :column-num="1">
          <van-grid-item icon="https://26629373.s61i.faiusr.com/4/AD0I-anZDBAEGAAgopSiggYo496F_QIwVThW!1500x1500.png.webp" text="诊疗预约1" to="/models/reserve" />
        </van-grid>
      </van-cell-group>
    </van-col>
    <van-col span="12">
      <van-cell-group>
        <van-grid clickable :column-num="1">
          <van-grid-item icon="https://26629373.s61i.faiusr.com/4/AD0I-anZDBAEGAAgopSiggYo496F_QIwVThW!1500x1500.png.webp" text="诊疗预约2" to="/models/reserve" />
        </van-grid>
      </van-cell-group>
    </van-col>
  </van-row>

  <van-grid :gutter="10" :column-num="2">
    <van-grid-item class="custom-grid-item" icon="home-o" text="路由跳转" to="/" />
    <van-grid-item icon="search" text="URL 跳转" url="https://github.com" />
  </van-grid>
  <van-space direction="vertical" fill>
    <!-- 间距 -->
    <van-cell-group inset :border="false">
      <van-grid clickable :gutter="10" :column-num="2">
        <van-grid-item icon="https://26629373.s61i.faiusr.com/4/AD0I-anZDBAEGAAgopSiggYo496F_QIwVThW!1500x1500.png.webp" text="诊疗预约123" to="/models/reserve" />
        <van-grid-item icon="search" text="URL 跳转" url="https://github.com" />
      </van-grid>
    </van-cell-group>
    <van-cell-group inset>
      <van-grid clickable :gutter="20" :column-num="2">
        <van-grid-item icon="home-o" text="路由跳转" to="/" />
        <van-grid-item icon="search" text="URL 跳转" url="https://github.com" />
      </van-grid>
    </van-cell-group>
  </van-space>

  <van-card>12</van-card>

  <van-row>
    <van-col span="4">span: 4</van-col>
    <van-col span="10" offset="4">offset: 4, span: 10</van-col>
  </van-row>

  <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe> -->
  <!-- 左侧弹出 -->
  <!-- <van-cell title="展示弹出层" is-link @click="showPopup" /> -->
  <!-- <van-popup v-model:show="show" :style="{ padding: '64px' }">内容</van-popup> -->

  <van-cell title="左侧弹出" is-link @click="showPopup1" />
  <van-popup v-model:show="showLeft" position="left" :style="{ width: '35%', height: '100%' }">
    <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>

    <van-row>
      <van-col span="4">span: 4</van-col>
      <van-col span="10" offset="4">offset: 4, span: 10</van-col>
    </van-row>
  </van-popup>

  <!-- 底部导航栏 -->
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="search">预留1</van-tabbar-item>
    <van-tabbar-item name="friends" icon="friends-o">预留2</van-tabbar-item>
    <van-tabbar-item name="setting" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const value = ref("");
    const show = ref(false);
    const showLeft = ref(false);
    const active = ref("home");
    const images = ["https://26629373.s61i.faiusr.com/2/AD0I-anZDBACGAAg1ZKiggYoxrOrBzDuBTjoAg!1000x1000.jpg.webp", "https://26629373.s61i.faiusr.com/2/AD0I-anZDBACGAAg1ZKiggYo5ZXVzwcw7gU46AI!1000x1000.jpg.webp"];

    const showPopup = () => {
      show.value = true;
    };
    const showPopup1 = () => {
      showLeft.value = true;
    };
    const onSearch = (val) => {
      console.log(val);
    };

    return {
      show,
      showPopup,
      showLeft,
      showPopup1,
      value,
      onSearch,
      images,
      active,
    };
  },
};
</script>

<style>
body {
  background-color: #fee4e4; /* 自定义颜色 */
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 185px;
}
.aa .van-grid-item {
  /* 添加阴影效果 */
  box-shadow: -7px 6px 4px rgba(0, 0, 0, 0.1);
  /* 可能需要调整内边距以适应阴影效果 */
  padding: 8px;
  /* 为了保持卡片形状，可以添加边界半径 */
  border-radius: 8px;
}
.custom-grid-item {
  /* 添加阴影效果 */
  box-shadow: -7px 6px 4px rgba(0, 0, 0, 0.1);
  /* 可能需要调整内边距以适应阴影效果 */
  padding: 8px;
  /* 为了保持卡片形状，可以添加边界半径 */
  border-radius: 8px;
}
</style>
