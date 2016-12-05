<template>
  <div class="m">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
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

  </div>
</template>
<script>
  export default {
    data () {
      return {
        data: 34,
        activeName: 'first'
      }
    },
    watch: {
      activeName: function (val, oldvalue) {
        console.log(val)
      }
    }
  }
</script>
