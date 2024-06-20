<!-- 诊疗预约 -->
<template>
  <!-- 顶部标题+返回 -->
  <van-nav-bar title="诊疗预约" left-text="返回" left-arrow @click-left="onClickLeft" />

  <!-- 分割线 -->
  <van-divider />

  <!-- 表单 -->
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="username" required name="name" label="预约人" placeholder="请填写预约人姓名" :rules="[{ required: true, message: '请填写预约人姓名' }]" />
      <van-field v-model="phone" required name="phone" label="联系电话" placeholder="请填写联系电话" :rules="[{ phonePattern, message: '请输入正确的电话号码' }]" />
      <van-field v-model="petBreed" required name="petBreed" label="宠物品种" placeholder="请填写宠物品种" :rules="[{ required: true, message: '请填写宠物品种' }]" />

      <van-field v-model="reserveDate" required is-link readonly name="reserveDate" label="预约日期" placeholder="点击选择日期" @click="showDatePicker = true" />
      <van-popup v-model:show="showDatePicker" position="bottom">
        <van-date-picker title="选择月日" :formatter="formatterDate" :min-date="minDate" :max-date="maxDate" :columns-type="['month', 'day']" @confirm="onDateConfirm" @cancel="showDatePicker = false" />
      </van-popup>

      <van-field v-model="reserveTime" required is-link readonly name="reserveTime" label="预约时间" placeholder="点击选择时间" @click="showTimePicker = true" />
      <van-popup v-model:show="showTimePicker" position="bottom">
        <van-time-picker title="预约时间选择" :formatter="formatterTime" :min-hour="9" :max-hour="22" :columns-type="['hour', 'minute']" @confirm="onTimeConfirm" @cancel="showTimePicker = false" />
      </van-popup>

      <van-field v-model="remark" rows="3" autosize label="备注" type="textarea" placeholder="请输入留言" />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const username = ref("");
    const phone = ref("");
    const petBreed = ref("");
    const phonePattern = /\d{11}/;
    const reserveTime = ref("");
    const reserveDate = ref("");
    const remark = ref("");

    const showDatePicker = ref(false);
    const showTimePicker = ref(false);
    const onDateConfirm = ({ selectedValues }) => {
      reserveDate.value = selectedValues.join("-");
      showDatePicker.value = false;
      showTimePicker.value = true;
    };
    const onTimeConfirm = ({ selectedValues }) => {
      reserveTime.value = selectedValues.join(":");
      showTimePicker.value = false;
    };
    const onClickLeft = () => history.back();
    const onSubmit = (values) => {
      console.log("submit", values);
    };

    const formatterDate = (type, option) => {
      if (type === "month") {
        option.text += "月";
      }
      if (type === "day") {
        option.text += "日";
      }
      return option;
    };

    const formatterTime = (type, option) => {
      if (type === "hour") {
        option.text += "时";
      }
      if (type === "minute") {
        option.text += "分";
      }
      return option;
    };

    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 6);

    return {
      username,
      phone,
      petBreed,
      phonePattern,
      reserveTime,
      reserveDate,
      onDateConfirm,
      onTimeConfirm,
      showDatePicker,
      showTimePicker,
      onSubmit,
      onClickLeft,
      minDate: new Date(),
      maxDate: maxDate,
      formatterDate,
      formatterTime,
      remark,
    };
  },
};
</script>

<style>
body {
  background-color: #f8f8f8; /* 自定义颜色 */
}
</style>
