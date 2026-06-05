<template>
  <div class="xcx-menu">
    <div class="left">
      <LeftMenu />
    </div>
    <div class="right">
      <div class="content">
        <div class="header">
          <div>
            <el-dropdown trigger="hover">
              <span class="el-dropdown-link">
                {{ this.global.phone}}<i class="el-icon-caret-bottom el-icon--right c999"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div class="header-dropdown-item">关于</div>
                <div class="header-dropdown-item" @click="loginOut">退出</div>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="img">
            <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="" />
          </div>
          <div class="line"></div>
          <div class="img2">
            <el-dropdown trigger="hover">
              <span class="el-dropdown-link">
                <i class="el-icon-info routine-open"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div class="header-dropdown-item-routine">
                  <img :src="Routine" alt="" />
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="container">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LeftMenu } from "@/components";
import Cookies from "js-cookie";
import "./index.less";
import Routine from "@/assets/img/routine.jpg";
import store from '@/store'
export default {
  name: "myMenu",
  components: {
    LeftMenu,
  },
  data: () => ({
    global: {},
    Routine,
  }),
  mounted() {
    const loginCache = Cookies.get()?.loginCache;
    const phone = (loginCache && loginCache.split("_")[2]) || "";
    if (phone) this.global.phone = phone;
    //   请求用户信息
    this.$API.getGlobal({ phone }).then((res) => {
      this.global = res.data;
      // 存全局
      store.commit("global/setUserInfo", res.data);
    });
  },
  methods: {
    loginOut() {
      Cookies.remove('loginCache')
      this.$router.push("/login");
    }
  },
  watch: {},
  computed: {},
};
</script>
