<template>
  <div>
      <el-button type="primary" size="small" icon="el-icon-plus" @click="addCompany">添加监控对象</el-button>

      <el-table :data="tableData" style="width: 100%" :show-overflow-tooltip="true">
        <el-table-column
          type="index"
          label="序号"
          width="60"
        >
        </el-table-column>
        <el-table-column prop="name" label="监控名称" width="200" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="code" label="身份证号&信用代码" width="150">
        </el-table-column>
        <el-table-column prop="phone" label="手机号">
        </el-table-column>
        <el-table-column prop="monistartdate" label="监控开始">
        </el-table-column>
        <el-table-column prop="monimonths" label="监控月数">
        </el-table-column>
        <el-table-column prop="newsstartdate" label="舆情开始">
        </el-table-column>
        <el-table-column prop="newsenddate" label="舆情结束">
        </el-table-column>
        <el-table-column prop="newsaliveday" label="更新频率">
        </el-table-column>
        <el-table-column label="是否启用" prop="flag">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.flag"
              :active-value="1"
              :inactive-value="2"
              active-color="#13ce66"
              @change="flagchange(scope)"
              inactive-color="#ff4949">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="goNews">查看</el-button>
            <el-button type="success" size="mini" @click="putCompany(scope)">设置</el-button>
            <el-button type="danger" size="mini" @click="deleteData(scope)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>

    <el-dialog :title="this.Toptitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="140px" size="small">
        <el-form-item label="监控类型">
          <el-select v-model="form.monitype" placeholder="请选择" :disabled="flag">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="监控名称">
          <el-input v-model="form.name" :disabled="flag"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" v-if="this.form.monitype == 1">
          <el-input v-model="form.code" :disabled="flag"></el-input>
        </el-form-item>
        <el-form-item label="社会统一信用代码" v-if="this.form.monitype == 2">
          <el-input v-model="form.code" :disabled="flag"></el-input>
        </el-form-item>
        <el-form-item label="监控对象手机号">
          <el-input v-model="form.phone" :disabled="flag"></el-input>
        </el-form-item>
        <el-form-item label="监控开始日期" v-if="this.Toptitle == '修改监控对象'">
          <el-date-picker
            v-model="form.monistartdate"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="监控持续月数" v-if="this.Toptitle == '修改监控对象'">
          <el-input v-model="form.monimonths"></el-input>
        </el-form-item>
        <el-form-item label="舆情监控开始日期" v-if="this.Toptitle == '修改监控对象'">
          <el-date-picker
            v-model="form.newsstartdate"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="舆情监控结束日期" v-if="this.Toptitle == '修改监控对象'">
          <el-date-picker
            v-model="form.newsenddate"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="舆情更新频率" v-if="this.Toptitle == '修改监控对象'">
          <el-input v-model="form.newsaliveday"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="putItal">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import {getListData, PostListData, ChangeData, DeleteData} from "../../api/api";

  export default {
    name: "addCompany",
    data() {
      return {
        options: [{
          value: '1',
          label: '个人'
        }, {
          value: '2',
          label: '企业'
        },],
        tableData: [],
        form: {
          objid: '',//标识
          droseakey: `${localStorage.getItem('droseakey')}`,
          monitype: '2', //监控类型
          name: '',  //监控名称
          code: '', //身份证或者信用码
          phone: '',//监控手机号
          monistartdate: '', //监控开始日期
          monimonths: '',//监控持续月数
          newsstartdate: '',//监控舆情开始日期
          newsenddate: '',//舆情监控结束日期
          newsaliveday: '',//更新频率
          createuser: ''//创建用户
        },
        formLabelWidth: '120px',
        dialogFormVisible: false,
        flag: false,    //操控下拉
        Toptitle: '添加监控对象'
      }
    },
    mounted() {
      this.getList()
    },
    methods: {

      // 确定修改按钮&&确定新增按钮
      putItal() {
        this.dialogFormVisible = false
        PostListData(this.form).then((res) => {
          this.getList()
        })
      },

      //删除
      deleteData(scope) {
        let params = {
          droseakey: `${localStorage.getItem('droseakey')}`,
          objid: scope.row.id
        }

        this.$confirm('即将删除该公司, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          DeleteData(params).then((res) => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getList()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

      //是否启用
      flagchange(scope) {
        let params = {
          droseakey: `${localStorage.getItem('droseakey')}`,
          objid: scope.row.id,
          flag: scope.row.flag
        }
        ChangeData(params).then((res) => {
        })
      },

      //清空Form
      emply() {
        this.form = {
          objid: '',//标识
          droseakey: `${localStorage.getItem('droseakey')}`,
          monitype: '2', //监控类型
          name: '',  //监控名称
          code: '', //身份证或者信用码
          phone: '',//监控手机号
          monistartdate: '', //监控开始日期
          monimonths: '',//监控持续月数
          newsstartdate: '',//监控舆情开始日期
          newsenddate: '',//舆情监控结束日期
          newsaliveday: '',//更新频率
          createuser: ''//创建用户
        }
      },

      //新增弹框
      addCompany() {
        this.dialogFormVisible = true
        this.flag = false
        this.Toptitle = '添加监控对象'
        this.emply()
        this.form.objid = ''
      },

      //修改弹框
      putCompany(val) {
        this.Toptitle = '修改监控对象'
        let newObj = Object.assign({}, val.row)
        this.form = newObj
        this.flag = true
        if (val.row.monitype == 1) {
          this.form.monitype = '1'
        } else {
          this.form.monitype = '2'
        }
        this.form.objid = val.row.id
        this.dialogFormVisible = true
      },

      //获取数据
      getList() {
        let params = {
          page: 1,
          rows: `30`,
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getListData(params).then((res) => {
          for (let i = 0; i < res.data.rows.length; i++) {
            //这里的步骤为手动改变时间戳数据为日期
            res.data.rows[i].monistartdate = this.timestampToTime(res.data.rows[i].monistartdate)
            res.data.rows[i].newsstartdate = this.timestampToTime(res.data.rows[i].newsstartdate)
            res.data.rows[i].newsenddate = this.timestampToTime(res.data.rows[i].newsenddate)
          }
          this.tableData = res.data.rows
        })
      },
      goNews() {
        this.$router.push('/home/plat')
      },

      //通用函数， 当返回数据为时间戳可用来转换
      timestampToTime(timestamp) {
        var date = new Date(timestamp);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        return Y + M + D;
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 12px;
    color: red;
    margin-left: 20px;
  }
</style>
