<template>
  <div class="m">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <a href="index.html">首页</a></el-breadcrumb-item>
      <el-breadcrumb-item>招标立项</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="m-tb">
      <el-col :span="24">
        <el-tabs :active-name="activeName">
          <el-tab-pane label="用户管理" name="first"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
          <el-tab-pane label="角色管理" name="third"></el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <el-button type="primary">新增</el-button>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data: 34,
        activeName: 'first',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    watch: {
      activeName: function (val, oldvalue) {
        console.log(val)
      }
    }
  }
</script>
<style lang="less">
  @import 'index.less';
</style>
