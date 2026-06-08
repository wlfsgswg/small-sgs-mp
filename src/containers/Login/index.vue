<template>
  <div class="xcx-login">
    <div v-if="!isMobile">
      <div class="xcx-login-top">
        <div class="content">
          <div class="content-title">
            <div class="title-img">
              <img :src="Logo" alt="" />
            </div>
            <div class="title-text">数据后台MP</div>
          </div>
          <div class="content-login">
            <div class="desc">
              <div class="desc-first"></div>
              <div class="desc-second">整合游戏资源/用户，让数据结果呈现眼前</div>
              <div class="desc-line"></div>
              <div class="desc-third">
                覆盖多个平台：微信小程序、QQ小程序
              </div>
            </div>
            <div class="container">
              <div class="tabs">
                <div v-for="item in focusList" :key="item.label" :class="focus === item.focus ? 'active' : ''" @click="
                  (focus = item.focus),
                  (phone = ''),
                  (password = ''),
                  (errorFirst = ''),
                  (errorSecond = '')
                  ">
                  <div class="label">{{ item.label }}</div>
                  <div class="line"></div>
                </div>
              </div>
              <div>
                <el-input size="large" class="el-input" placeholder="请输入手机号码" v-model="phone"
                  @focus="errorFirst = ''" />
                <div :class="errorFirst ? 'error-show error' : 'error'">
                  {{ errorFirst }}
                </div>
              </div>
              <div>
                <el-input size="large" class="el-input" placeholder="请输入账户密码" v-model="password" type="password"
                  @focus="errorSecond = ''" />
                <div :class="errorSecond ? 'error-show error' : 'error'">
                  {{ errorSecond }}
                </div>
              </div>
              <div class="m-t-25">
                <el-button type="primary" class="el-btn" size="large" :disabled="!phone || !password"
                  @click="handleSummit" :loading="loading">
                  {{ focus === 1 ? "登 录" : "申 请" }}
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="xcx-login-bottom">
        <div class="data-num">
          <div v-for="item in list" :key="item.label">
            <div class="bottom-num">
              {{ item.label }}
            </div>
          </div>
        </div>
        <div class="bottom-line"></div>
        <div class="bottom-by">©2020-2080 small-routine by刘协</div>
      </div>
    </div>
    <div v-else>
      <div class="xcx-login-top xcx-login-top-mobile">
        <div class="content content-mobile">
          <div class="content-title content-title-mobile">
            <div class="title-img">
              <img :src="Logo" alt="" />
            </div>
            <div class="title-text">数据后台MP</div>
          </div>
          <div class="content-login">
            <div class="container container-mobile">
              <div class="tabs">
                <div v-for="item in focusList" :key="item.label" :class="focus === item.focus ? 'active' : ''" @click="
                  (focus = item.focus),
                  (phone = ''),
                  (password = ''),
                  (errorFirst = ''),
                  (errorSecond = '')
                  ">
                  <div class="label">{{ item.label }}</div>
                  <div class="line"></div>
                </div>
              </div>
              <div>
                <el-input size="large" class="el-input" placeholder="请输入手机号码" v-model="phone"
                  @focus="errorFirst = ''" />
                <div :class="errorFirst ? 'error-show error' : 'error'">
                  {{ errorFirst }}
                </div>
              </div>
              <div>
                <el-input size="large" class="el-input" placeholder="请输入账户密码" v-model="password" type="password"
                  @focus="errorSecond = ''" />
                <div :class="errorSecond ? 'error-show error' : 'error'">
                  {{ errorSecond }}
                </div>
              </div>
              <div class="m-t-25">
                <el-button type="primary" class="el-btn" size="large" :disabled="!phone || !password"
                  @click="handleSummit" :loading="loading">
                  {{ focus === 1 ? "登 录" : "申 请" }}
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./index.less";
import Logo from "@/assets/img/logo.png";
import { Message } from "element-ui";
import Cookies from "js-cookie";
import { guid, isMobileDevice } from "@/common/utils";
// 正则验证手机号
const phoneRegular = /^1\d{10}$/;
// 正则密码须同时包含英文字母、数字、特殊符号，至少8个字符
const passwordRegular = /^(?![^a-zA-Z]+$)(?!\D+$)(?![a-zA-Z0-9]+$).{8,30}$/;
export default {
  name: "login",
  data: () => ({
    Logo,
    focus: 1,
    phone: "",
    password: "",
    errorFirst: "",
    errorSecond: "",
    loading: false,
    list: [
      {
        label: "无限开盒模拟",
      },
      {
        label: "杀友小知识",
      },
      {
        label: "历史人名猜",
      },
    ],
    focusList: [
      {
        label: "账户登录",
        focus: 1,
      },
      {
        label: "账户申请",
        focus: 2,
      },
    ],
    isMobile: true
  }),
  mounted() {
    this.isMobile = isMobileDevice()
  },
  methods: {
    //  登录或申请账号
    handleSummit() {
      if (
        phoneRegular.test(this.phone) &&
        passwordRegular.test(this.password)
      ) {
        // 登录
        this.loading = true;
        this.$API[this.focus === 1 ? "getLogin" : "getApply"]({
          phone: this.phone,
          password: this.password,
        })
          .then((res) => {
            if (this.focus !== 1) {
              Message.success(
                res.message || "账号申请成功，请耐心等待管理者同意"
              );
              this.phone = "";
              this.password = "";
            } else {
              // 登录成功，存储cookie，跳转页面
              Cookies.set(
                "loginCache",
                `${guid() || "hello_world"}_${Date.parse(new Date())}_${this.phone
                }`,
                {
                  expires: 30,
                }
              );
              this.$router.push("/");
            }
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          });
      } else {
        if (!phoneRegular.test(this.phone))
          this.errorFirst = "手机号码格式不正确！";
        if (!passwordRegular.test(this.password))
          this.errorSecond =
            "密码须包含英文字母、数字、特殊符号，至少8个字符！";
      }
    },
  },
  watch: {},
  computed: {},
};
</script>