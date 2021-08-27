/*
 * FileName: lb-table.vue
 * Remark: element table
 * Project: lb-element-table
 * Author: LiuBing
 * File Created: Tuesday, 19th March 2019 9:55:27 am
 * Last Modified: Tuesday, 19th March 2019 9:55:34 am
 * Modified By: LiuBing
 */

<template>
  <div class="lb-table">
    <el-table ref="elTable"
      v-bind="$attrs"
      v-on="$listeners"
      :data="data">
      <lb-column v-bind="$attrs"
        v-for="(item, index) in column"
        :key="index"
        :column="item">
      </lb-column>
    </el-table>
    <el-pagination class="lb-table-pagination"
      v-if="pagination"
      v-bind="$attrs"
      v-on="$listeners"
      @current-change="paginationCurrentChange"
      :style="{ 'margin-top': paginationTop, 'text-align': paginationAlign }">
    </el-pagination>
  </div>
</template>

<script>
import LbColumn from './lb-column'
export default {
  props: {
    column: Array,
    data: Array,
    pagination: {
      type: Boolean,
      default: false
    },
    paginationTop: {
      type: String,
      default: '15px'
    },
    paginationAlign: {
      type: String,
      default: 'right'
    },
    merge: Array
  },
  components: {
    LbColumn
  },
  data () {
    return {
      mergeLine: {},
      mergeIndex: {}
    }
  },
  computed: {
    dataLength () {
      return this.data.length
    }
  },
  methods: {
    clearSelection () {
      this.$refs.elTable.clearSelection()
    },
    toggleRowSelection (row, selected) {
      this.$refs.elTable.toggleRowSelection(row, selected)
    },
    toggleAllSelection () {
      this.$refs.elTable.toggleAllSelection()
    },
    toggleRowExpansion (row, expanded) {
      this.$refs.elTable.toggleRowExpansion(row, expanded)
    },
    setCurrentRow (row) {
      this.$refs.elTable.setCurrentRow(row)
    },
    clearSort () {
      this.$refs.elTable.clearSort()
    },
    clearFilter (columnKey) {
      this.$refs.elTable.clearFilter(columnKey)
    },
    doLayout () {
      this.$refs.elTable.doLayout()
    },
    sort (prop, order) {
      this.$refs.elTable.sort(prop, order)
    },
    paginationCurrentChange (val) {
      this.$emit('p-current-change', val)
    },
  },
  watch: {
    dataLength () {
      this.getMergeArr(this.data, this.merge)
    }
  }
}

</script>
