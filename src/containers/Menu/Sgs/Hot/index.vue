<template>
  <div class="xcx-sgs-sgshot">
    <Title title="三国杀热榜"></Title>
    <!-- 条件搜索 -->
    <div class="search">
      <el-row>
        <el-col :span="8">
          <div class="search-item">
            <div class="label">问题内容：</div>
            <div class="component">
              <el-input
                v-model="search.content"
                size="small"
                placeholder="请输入内容"
                :style="{ width: '100%' }"
                clearable
              ></el-input>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="search-item">
            <div class="label">问题状态：</div>
            <div class="component">
              <el-select
                v-model="search.status"
                placeholder="请选择状态"
                size="small"
                :style="{ width: '100%' }"
                clearable
              >
                <el-option label="启用" :value="1" :key="1"></el-option>
                <el-option label="禁用" :value="2" :key="2"></el-option>
              </el-select>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="search-item">
            <div class="label">创建时间：</div>
            <div class="component">
              <el-date-picker
                v-model="search.time"
                value-format="yyyy-MM-dd"
                size="small"
                type="daterange"
                unlink-panels
                :style="{ width: '100%' }"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="p-t-20 p-b-20">
        <el-row>
          <el-col :span="8">
            <div class="search-item">
              <div class="label">问题等级：</div>
              <div class="component">
                <el-select
                  v-model="search.grade"
                  placeholder="请选择状态"
                  size="small"
                  :style="{ width: '100%' }"
                  clearable
                >
                  <el-option label="白银" :value="1" :key="1"></el-option>
                  <el-option label="黄金" :value="2" :key="2"></el-option>
                  <el-option label="翡翠" :value="3" :key="3"></el-option>
                  <el-option label="大师" :value="4" :key="4"></el-option>
                  <el-option label="传说" :value="5" :key="5"></el-option>
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="search-btn clearfix">
              <div class="r-right">
                <el-button type="primary" size="small" @click="handleSearch">
                  查询</el-button
                >
              </div>
              <div class="r-right p-r-8">
                <el-button plain size="small" @click="handleSearch('clear')">
                  重置</el-button
                >
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <xcx-table
      :columns="ssxzsControlColumns"
      :dataSource="list"
      name="xcxssxzscontroltable"
      :loading="loading"
    >
      <template #desc="{ row }">
        <div class="container-table-item">
          {{ row.desc }}
        </div>
      </template>
      <template #createname="{ row }">
        <div class="table-item2">
          <span>创建：</span>
          <span>{{ row.createname }}</span>
        </div>
        <div class="table-item2" v-if="row.updatename">
          <span>更新：</span>
          <span>{{ row.updatename }}</span>
        </div>
      </template>
      <template #keywords="{ row }">
        <div>
          {{ row.keywords ? row.keywords.join(",") : "--" }}
        </div>
      </template>
      <template #status="{ row }">
        <div v-if="row.status === 1">
          <el-tag type="success" size="mini">启用</el-tag>
        </div>
        <div v-if="row.status === 2">
          <el-tag type="danger" size="mini">禁用</el-tag>
        </div>
      </template>
      <template #grade="{ row }">
          {{
          row.grade === 1
              ? "白银"
              : row.grade === 2
              ? "黄金"
              : row.grade === 3
              ? "翡翠"
              : row.grade === 4
              ? "大师"
              : "传说"}}
      </template>
      <template #op="{ row }">
        <div>
          <!-- 由于随便禁用问题肯定会导致数据混乱，此处不在展示禁用按钮 -->
          <span class="m-r-5" v-if="userInfo.grade === 1 && row.status !== 1">
            <el-popconfirm
              icon="el-icon-info"
              title="点击确定即刻生效，确定要启用吗？"
              popper-class="ssxzs-popconfirm"
              @confirm="handleSwitchStatus(row, row.status)"
            >
              <el-button slot="reference" type="text">
                启用
              </el-button>
            </el-popconfirm>
          </span>
          <span class="m-r-5">
            <el-button
              type="text"
              v-if="userInfo.grade !== 3"
              @click="handleEdit(row)"
              >修改</el-button
            >
          </span>
          <span class="m-r-5">
            <el-button type="text" @click="handleOpen(row)">查看</el-button>
          </span>
        </div>
      </template>
    </xcx-table>
    <div class="p-t-20 t-a-r">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.pageNum"
        :page-sizes="[5, 10, 20]"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <Dialog
      :visible="openVisible"
      width="720px"
      title="问题详情"
      @onCancel="openVisible = false"
      :slotObject="{ content: true, footer: true }"
    >
      <template #content>
        <div class="dialog-content">
          <div class="dialog-content-form">
            <el-descriptions border>
              <template slot="title">
                <div>
                  <div>{{ opendataTitle }}</div>
                  <div class="opendata-detail">解析：{{ opendataDetail }}</div>
                </div>
              </template>
              <el-descriptions-item
                v-for="it in opendata"
                :key="it.key"
                :label="it.key"
              >
                {{ it.value }}
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import "./index.less";
import { Title, XcxTable, Dialog } from "@/components";
import { ssxzsControlColumns } from "@/common/columns";
import { pickerOptions, selectList } from "@/common/const";
import { mapState } from "vuex";
import moment from "moment";
const dynamicValidateForm = {
  a: "",
  b: "",
  c: "",
  d: "",
  desc: "",
  answer: "",
  detail: "",
  grade: "",
};
export default {
  data: () => ({
    ssxzsControlColumns,
    selectList,
    pickerOptions,
    dialogTitle: "新增问题",
    loading: false,
    visible: false,
    openVisible: false,
    okloading: false,
    list: [],
    total: 0,
    // 表单
    dynamicValidateForm: JSON.parse(JSON.stringify(dynamicValidateForm)),
    // 搜索
    search: {
      content: "",
      time: "",
      status: "",
      grade: "",
    },
    // 分页
    page: {
      pageSize: 10,
      pageNum: 1,
    },
    // 查看数据data
    opendata: [],
    opendataTitle: "",
    opendataDetail: "",
  }),
  components: {
    Title,
    XcxTable,
    Dialog,
  },
  mounted() {
    this.handleGetssxzsData();
  },
  methods: {
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.handleSummit();
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleGetssxzsData() {
      this.loading = true;
      this.$API
        .getssxzsData({
          ...this.search,
          ...this.page,
        })
        .then((res) => {
          this.list =
            res.data.map((it, index) => {
              return {
                ...it,
                index: index + 1,
                editLoading: false,
                orginTime: it.time - 0,
                orginupdatetime: it.updatetime ? it.updatetime - 0 : "",
                time: moment(it.time - 0).format("YYYY-MM-DD"),
                updatetime: it.updatetime
                  ? moment(it.updatetime - 0).format("YYYY-MM-DD")
                  : "",
                updatename: it.updatename ? it.updatename : "",
              };
            }) || [];
          this.total = res.total || 0;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    onCancel() {
      this.visible = false;
      this.resetForm("dynamicValidateForm");
      this.dynamicValidateForm = JSON.parse(
        JSON.stringify(dynamicValidateForm)
      );
    },
    // summit
    handleSummit() {
      const id = this.dynamicValidateForm.id;
      // 整理参数
      const data = {
        ...this.dynamicValidateForm,
        username: this.userInfo.name,
        useraccount: this.userInfo.phone,
      };
      if (id) {
        data.id = id;
      }
      this.okloading = true;
      this.$API
        .addssxzsData(data)
        .then(() => {
          this.$message({
            message: id ? "修改成功" : "新增成功",
            type: "success",
          });
          this.okloading = false;
          this.onCancel();
          // 没id说明是新增，搜索重置
          if (!id) {
            this.search = { content: "", time: "", status: "", grade: "" };
            this.page = { pageSize: 10, pageNum: 1 };
          }
          this.handleGetssxzsData();
        })
        .catch(() => {
          this.okloading = false;
        });
    },
    // 修改
    handleEdit(row) {
      this.dialogTitle = "修改问题";
      const dynamicValidateForm = {
        a: row.a,
        b: row.b,
        c: row.c,
        d: row.d,
        id: row.id,
        desc: row.desc,
        answer: row.answer,
        detail: row.detail,
        grade: row.grade,
      };
      // 赋值
      this.dynamicValidateForm = dynamicValidateForm;
      // 加上延时器，解决弹框一闪一闪的问题
      setTimeout(() => {
        this.visible = true;
      }, 200);
    },
    // 禁用or启用
    handleSwitchStatus(row, status) {
      if (!row.editLoading) {
        row.editLoading = true;
        this.$API
          .editssxzsDataStatus({
            id: row.id,
            status,
            username: this.userInfo.name,
            useraccount: this.userInfo.phone,
          })
          .then(() => {
            row.editLoading = false;
            this.$message({
              message: "状态修改成功",
              type: "success",
            });
            this.handleGetssxzsData();
          })
          .catch(() => {
            row.editLoading = false;
          });
      }
    },
    // 查询
    handleSearch(e) {
      if (e === "clear") {
        this.search = { content: "", time: "", status: "", grade: "" };
      }
      this.page = { pageSize: 10, pageNum: 1 };
      this.handleGetssxzsData();
    },
    // 分页相关请求
    handleSizeChange(val) {
      this.page = {
        pageSize: val,
        pageNum: 1,
      };
      this.handleGetssxzsData();
    },
    handleCurrentChange(val) {
      this.page.pageNum = val;
      this.handleGetssxzsData();
    },
    // 查看
    handleOpen(row) {
      this.opendataTitle = row.desc;
      this.opendataDetail = row.detail;
      this.opendata = [
        {
          key: "选项A",
          value: row.a || "--",
        },
        {
          key: "选项B",
          value: row.b || "--",
        },
        {
          key: "选项C",
          value: row.c || "--",
        },
        {
          key: "选项D",
          value: row.d || "--",
        },
        {
          key: "问题答案",
          value: row.answer || "--",
        },
        {
          key: "问题等级",
          value:
            row.grade === 1
              ? "白银"
              : row.grade === 2
              ? "黄金"
              : row.grade === 3
              ? "翡翠"
              : row.grade === 4
              ? "大师"
              : "传说",
        },
        {
          key: "创建用户",
          value: row.createname || "--",
        },
        {
          key: "创建账号",
          value: row.createaccount || "--",
        },
        {
          key: "创建时间",
          value: moment(row.orginTime - 0).format("YYYY-MM-DD HH:mm:ss"),
        },
        {
          key: "更新用户",
          value: row.updatename || "--",
        },
        {
          key: "更新账号",
          value: row.updateaccount || "--",
        },
        {
          key: "更新时间",
          value: row.orginupdatetime
            ? moment(row.orginupdatetime - 0).format("YYYY-MM-DD HH:mm:ss")
            : "--",
        },
      ];
      this.openVisible = true;
    },
  },
  computed: {
    ...mapState("global", ["globalInfo", "userInfo"]),
  },
  watch: {},
};
</script>
