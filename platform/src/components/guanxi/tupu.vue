<template>
  <div>

    <el-card class="box-card">
      <div id="main" style="width: calc(100vw - 100px);height: 800px;"></div>
    </el-card>
  </div>
</template>

<script>
  import {getDatat18, getDatat54} from "../../api/api";

  let echarts = require('echarts')
  export default {
    name: "guanxi",
    data() {
      return {
        tableData: {},
        gudong: [],
        ren: [],
        duiwai: [],
        names: [],
        nums: [],
        cat: 0,
        lineNum: 1,
        s_name: 0,
      }
    },
    mounted() {
      this.getDatatEcha()
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      strnewline(str) {
        var len = str.length;
        if (len > 10) {
          var i = (len / 3) + 1;
          var j = len - i * 2;
          //alert(i);
          str = str.substr(0, i) + '\n' + str.substr(i, i) + '\n' + str.substr(2 * i, len);
          //str = str.substr(0,len-5) ;
        } else if (len <= 10 && len > 5) {
          var i = len / 2;
          str = str.substr(0, i) + '\n' + str.substr(i);
        }
        return str;
      },
      getDatatEcha() {
        var myChart = echarts.init(document.getElementById('main'));
        let params = {
          droseakey: `${localStorage.getItem('droseakey')}`,
          entname: `${localStorage.getItem('name')}`
        }
        getDatat54(params).then((res) => {
          console.log(res.data)
          var rel = JSON.parse(res.data.data).relationships;
          var nodes = JSON.parse(res.data.data).nodes;
          if (nodes) {
            for (var i = 0; i < nodes.length; i++) {
              var ids = nodes[i].id
              if (nodes[i].labels[0] == "Human") {
                this.cat = 0;
                this.s_name = nodes[i].properties.name;
              } else {
                this.cat = 1;
                this.s_name = this.strnewline(nodes[i].properties.name);
              }
              var jsonString = {
                name: this.s_name,
                category: this.cat,
                label: this.s_name,
                symbolSize: 80
              };
              this.names.push(jsonString);
            }
            for (var i = 0; i < rel.length; i++) {
              var s = rel[i].startNode;
              var e = rel[i].endNode;
              for (let j = 0; j < this.names.length; j++) {
                if (s == nodes[j].id) {
                  var star_n = this.names[j].name
                }
                if (e == nodes[j].id) {
                  var end_n = this.names[j].name
                }
              }
              var linkString = {
                source: star_n,
                target: end_n,
                name: rel[i].properties.labels[0]
              };
              this.nums.push(linkString);


            }
          }

          let _this = this
          myChart.setOption({
            title: {text: ''},
            tooltip: {
              formatter: function (x) {
                return x.data.des;
              }
            },
            legend: {
              x: 'left',
              data: ['自然人', '公司']
            },
            series: [
              {
                type: 'graph',
                layout: 'force',
                symbolSize: 80,
                roam: true,
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                  normal: {
                    textStyle: {
                      fontSize: 14,
                    }
                  }
                },
                force: {
                  repulsion: 2500,
                  edgeLength: [10, 50]
                },
                draggable: true,
                categories: [{
                  name: '自然人'
                }, {
                  name: '公司'
                },],
                itemStyle: {
                  normal: {
                    label: {
                      show: true,
                      position: 'inside',
                      textStyle: {
                        color: '#fff'
                      }
                    }
                  }
                },
                lineStyle: {
                  normal: {
                    width: 2,
                    color: 'red'

                  }
                },
                edgeLabel: {
                  normal: {
                    show: true,
                    formatter: function (x) {
                      return x.data.name;
                    }
                  }
                },
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      fontSize: 10,
                    }
                  }
                },
                nodes: _this.names,
                links: _this.nums
              }
            ]
          })


        })

      }
    }

  }
</script>

<style scoped>
  .int {
    font-size: 12px;
    margin-top: 10px;
  }
</style>
