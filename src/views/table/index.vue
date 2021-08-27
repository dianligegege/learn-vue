<template>
  <div>
    <MyTable :column="column"
      :data="tableData"
      :row-class-name="rowClassName"
      highlight-current-row
      height="300"
      border>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '@/components/lb-table/lb-table'
export default {
  components: {MyTable},
  data() {
    return {
      column: [
          {
            prop: 'date',
            label: '日期'
          },
          {
            label: '配送信息',
            children: [
              {
                prop: 'name',
                label: '姓名'
              },
              {
                label: '地址',
                children: [
                  {
                    prop: 'province',
                    label: '省份'
                  },
                  {
                    prop: 'city',
                    label: '市区'
                  },
                  {
                    prop: 'address',
                    label: '地址'
                  }
                ]
              }
            ]
          }
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎4',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎5',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }
        ]
    }
  },
  methods: {
    rowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

