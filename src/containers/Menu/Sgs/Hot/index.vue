<template>
  <div class="xcx-sgs-sgshot">
    <Title title="三国杀热榜"></Title>
    <!-- 条件搜索 -->
    <div class="search p-t-20 p-b-20">
      <el-row>
        <el-col :span="8">
          <div class="search-item">
            <div class="label">搜索次数：</div>
            <div class="component">
              <el-select v-model="search.time" placeholder="请选择状态" size="small" :style="{ width: '100%' }" clearable>
                <el-option label="10次" :value="10" :key="10"></el-option>
                <el-option label="50次" :value="50" :key="50"></el-option>
                <el-option label="100次" :value="100" :key="100"></el-option>
                <el-option label="500次" :value="500" :key="500"></el-option>
                <el-option label="1000次" :value="1000" :key="1000"></el-option>
              </el-select>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="search-item">
            <div class="label">搜索内容：</div>
            <div class="component">
              <el-input v-model="search.keyword" size="small" placeholder="请输入内容" :style="{ width: '100%' }"
                clearable></el-input>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="search-btn clearfix">
            <div class="r-right">
              <el-button type="primary" size="small" @click="handleSearch">
                查询</el-button>
            </div>
            <div class="r-right p-r-8">
              <el-button plain size="small" @click="handleSearch('clear')">
                重置</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 总体数据 -->
    <div class="p-b-20 t-a-r">
      <span class="m-r-10">总计：{{ total }} 条数据</span>
      <span class="m-r-10">选中：{{ list.length }} 条数据</span>
      <span>筛掉：{{ remove }}条数据</span>
    </div>
    <!-- 内容展示 -->
    <div class="list">
      <div class="list-item" v-for="item in list" :key="item.id">
        <div class="list-item-top"><img :src="item.user.avatar" alt="" class="img">
          <div class="name"> {{ item.user.nick_name }} </div>
          <div class="lv">Lv.{{ item.user.grade }}</div>
          <span class="time">
            <span class="m-r-10">ID：{{ item.id }}</span>
            <span>创建时间：{{ item.created_at }}</span>
          </span>
        </div>
        <div class="list-item-content">
          <div class="title">{{ item.title }}</div>
          <div class="text">{{ item.body }}</div>
          <div class="preview-imgs">
            <div class="it" v-if="item.body_image && item.body_image.length">
              <img :src="item.body_image[0]" alt="" class="img">
            </div>
          </div>
          <div class="bottom">
            <div class="tag"></div>
            <div class="view">
              <img
                src="data:image/png;base64,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"
                alt="" class="icon"><span class="likeText">{{ item.view_count }}</span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAAAAXNSR0IArs4c6QAABQpJREFUWEftmGtsFFUUx/9nZsuWZxSIGDSIYoh+INEERdSEh1GKjw+GWEJ32gp0dyxbujv1SYgREjRBoDvbh7CzW7HdadGN0WBIatAENaDER+SDCZqIKMEYQSI1Bfqae8zMdhVhH7OljXzgfJu95/zPb869e/bcJVzlRlc5H64BXukOXavg/15BPdY+C7JntsR8gxB8I4BBSaIzgugUrKGfw2r1iSuBHNEW6/GuGWCxgsEhAs3NB0DAcQFEiK29I4EtCrClpX2aNU5+loEN2aG4P/05eXOsRzwD4tW6uuozbqvqGjCy03yAZPoA4KnD4gLADwR8Soz35aGez4PBYK+91traOmlAmjJfkmmlAC+9pMq9bKFMq1UOuYF0BajHO9eCOXGR4DeSROvqa3xfukmix7oeBIntABZk/Il4TchfubtQfEHAiGGuIaBtWKgXzBvCamVLIeFs67ph+gE0ApjkHASgNhRQdhU4w7mXdaNzGcAfOh6MXsFiScMzVV+PBC4T07irY75E0gHQMCTT0pDqO5BLM2cFG1Op8dLZ/t8BmgzGBRAWhQPKV1cCl4nVDfMeAJ8BKAXw61k+N3eTqp7Ppp0TMGoktzHoObdbUSx4JN4RJJaco8LA61pAedE14PZY13QPiWMAphBwOBRQFhYL4MZfN5IHAFoMUH8f9854SVV7Lo3LWsFo3AwyI/N2j2oBpdtNwmJ9ognzIRb42NklZn9Irby4UzhyWQF1o3M/wA8DdCwc8N1ebOJi/HWj80eA5wD0UTjge8RNBSlqmOcZKCWmnSHVt66YhMX6RuPJN5iploC+UECZkD6S/9plFYzs3DObZOu4U14JT4dqlPZikxbjryeSKgQ5vVBm6c71asX3eQGb4uZ9gvFFGlBaHqqpSPfBMbJoIlnGgpwzLhEW1vuVw/krGE8uJiancTLxEs1f+ckYsTmykQL5Lt9io/MuAn9rBwtLrGqorXp7LAH1uLkSDCcHg+7WAr4jeSvIzPaX5AKIvMx4U1OVtWMJGI11vMAkbXUAz/FMTav8LS+gvRiNmfuY8JgzHU/A9HpF+WusIKOGuY/h5DoRDii3XJonax9s3JUsk6T0wWXGe5qqrBgLwKYmc4oopTMAe4gpEVJ99rTzH8sKaG+zbph7iegJh5HQoPkVfbQho4b5WmY6Z1m6X1tb4XSPgltsO7S0t08b6pftnjQdgMVMWzTVt2m0ILe2tU32Wt5T6YmGj868zjuvvLzccg1oO+4w2ufKkO35b7L9TIR3Q37lqdGAjMbNbmaUOd2CsaxBVfZn0y04UTfHuu6wJHEQjGmOAOMnj0xL62p8v4wUVI+bSTCUtB7vDquVa3JpFQS0AxsTiakkSrsJuNeNaK5kr6RS467vGXgLjFXDPkekPiyqr8/dJVwB2mIRI9lAoB1pYXo5HPBtKaaCzW175ltD1jsg3DascczjHVpQV53/CuoKMBozq5kQB1AC4CSXTJynrX7yrBvAiGEuJ2AjwAud8SNthz0D1uNu7scFAbc1d9xa4pW+A2CPQrbZ91n7OZ/dBGAGgDkAMvdo+8ANgrDxz5NDzZs3r+5z84IFASOGuZ6AJjdiuX14EExNg5Jofd5f5Yxybq0gYFPcvFkwHwJolltR+ycSREfBfFCQtX+iKDmkqhV/FBH/j2tBQNszlUrJp09jvNsEwWC58xfIaJgrwNFINFKNa4AjrVwm7qqv4N++vNg5Co8KEwAAAABJRU5ErkJggg=="
                alt="" class="icon"><span class="likeText">{{ item.reply_count }}</span>
              <div style="align-items: center; display: flex;">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAAAAXNSR0IArs4c6QAABBVJREFUWEftl19oW3UUx7/npkmGm1jXF6WiHYhsasHNBycIijKfxkTQOrt7558t9zZEk3ujzDkcfVAco6y5iXU2Ny2hze3UuAd17Emx4oOCTEXdZNAHZbjoQyFurNia5h65NwnOmr9r2gTs7+mX/M7v/D58z/mde36ENh/U5nxYA1xuhP6fCuqJ1A4w+UHYTMzfAjgekqUvr0XNpisYS5iqxYgshSHAH5LF0UYhmwo4PJa6XbBoxoZg4BIxn2eizQTcACC34FroeWXfvkwjkE0F1I3UWwC9YMNYjHvDivjjsURyu4vdX9lQxOwLKdJYSwCPjo9f7817bXU2AJhWZfFhG2RkZKJr0eOaLap6SJPFIy0B1A3zdQCvOSCEJzWfeNKeRxNmgBkj9twC7QjLez5ddcDo2JTEFk8WD55RZfGOEoRumD8B2ALggiqLtzUC56RFoxtK9ul02pPJ/nkTyHUIgFL8f86yrIfCA3vP2L8joyfuJ8EqlZc3VFk83Oh5VQFjsZiXvRt3M/EgQJtqOL/CJDym+fo/K9lFDTPGwIt1QM1agHxLp+fjvr6+/NX2FQGTyeS6Szn35wDuq3FADoSvrUXPU2F/38WrbaOG+SYDr9YB6Jgw+CVNlobrAtQN8x0AA8U8yFrA5cKcugHuIKIMM8eFeejBoOislRt63HyPCdurQRKoC2D79v8nT8sqmE6nXZnswhyIvCB8ofrEB/9J+qmfAe5hxoSmiM/Wq041u6hhfsDAEwAyqix211Qw8vbkFnIL9u2za8NudUB8f6UAhyYn17vnhSuOf4Kp+kSpNqAxdQ+Bv3PygvlxTZE+XCnAiGE+T8C47V8QhF3B/f2n2gpQj6c+AtEuAFlVFjcuTYWyORhZJQUjyWQn5dzZ4g2OarKkthWgnpgKgjlaCG9+W3D/M05atU2IdcP8BsC2YnnpKXRpbQKoxyduBbl+KZRWDKk+8UC5UtSyHIwYqZcJNORUl7zVG/LvPdtWgLph/gCgF4yzqiL2VirkLVFw2DhxlwCrqBgfVGXpaFsB6gnzCBgHnfKSd23S/E/buVh2tERB3TB/BdANok9U355HK8EVvn5lxkoW6uiY+QhbKLX9AVUWjzcMGBs177QEnHM2WpDUAdFs1rc4EjdHiBCw/f2Vy918IPDc7w0DDk5Pd9w4c3EOgIeZv/csXn4gEAg4HYduLK/d0hPmLBhdBJwOyeLOanAVQ2wvRIzUMQKFi0YZBi4UnPFWgLwA/wHQ+VoH/GudeQOI7na8EPdrPundWvsrtvyDg8l1nd0dKQLZjWRTBwPnruO5rYqi5Go5rvpoisfj7nlav5MBH4CGn4xLD2cgR+AzzDisKdJvteCqhriezathc83v4tWAW1OwGSqvhXi5Kv4NU81ASET1r0QAAAAASUVORK5CYII="
                  alt="" class="icon"><span class="likeText">{{ item.like_count }}</span>
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
import { Title } from "@/components";
import { mapState } from "vuex";
export default {
  data: () => ({
    dialogTitle: "新增问题",
    loading: false,
    list: [],
    total: 0,
    remove: 0,
    // 搜索
    search: {
      keyword: "",
      time: "",
    },
    // 分页
    page: 1
  }),
  components: {
    Title,
  },
  mounted() {
    this.handleGetHotlist();
  },
  methods: {
    handleGetHotlist() {
      const { keyword, time } = this.search;
      this.loading = true;
      const data =
        keyword ? {
          category_id: '',
          is_theme: '0',
          keyword,
        } : {
          category_id: '1',
          include: 'user,label',
          has_label: '0',
          just_video: '0'
        }
      data.page = this.page;
      this.$API[keyword ? 'searchSgslist' : 'getSgslist'](data)
        .then((res) => {
          const orginData = res?.data || []
          this.total += orginData.length
          // 处理，留下阅读高的数据
          const readNumMaxData = orginData.filter(it => (Number(it.view_count - 0) > 6666))
          this.list = [...this.list, ...readNumMaxData]
          this.remove = this.total - this.list.length
          if (this.page < time) {
            this.page++
            this.handleGetHotlist()
          } else {
            this.loading = false;
          }

        })
        .catch(() => {
          this.loading = false;
        });
    },
    // 查询
    handleSearch(e) {
      if (e === "clear") {
        this.search = { keyword: "", time: "" };
      }
      this.page = 1;
      this.list = [];
      this.total = 0;
      this.handleGetHotlist();
    },
  },
  computed: {
    ...mapState("global", ["globalInfo", "userInfo"]),
  },
  watch: {},
};
</script>