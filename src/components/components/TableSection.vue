<<template>
  <el-table 
    @click.native="toggleEditMode"
    :data="paramsForRender.data"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      prop="state"
      label="State"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="City"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="Zip"
      width="120">
      
    </el-table-column>
    <div v-if="isEditMode">
      <el-table-column
        fixed="right"
        label="Operations"
        width="120">
        <template scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>Name: {{ scope.row.name }}</p>
              <p>Addr: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
        </template>
        <!--<template scope="scope">
          <div>
            <el-button
            size="small"
            @click.stop="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
            size="small"
            type="danger"
            @click.stop="handleDelete(scope.$index, scope.row)">Delete</el-button>
            <el-button @click.stop="handleClick" type="text" size="small">Edit</el-button>
          </div>
        </template>-->
    </el-table-column>
    </div>
  </el-table>
</template>
<<script>
import { TABLE_SECTION } from '../../constants/cmpName'
export default {
  name: TABLE_SECTION,
  props: ['paramsForRender'],
  data() {
    return {
      isEditMode: false,
      isClickedInInterval: false,
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(`index:${index}, row:${row}`);
    },
    handleDelete(index, row) {
      console.log(`index:${index}`);
      console.log('row:',row)
    },
    toggleEditMode(){
      console.log('toggling edit mode!');
      if( this.isClickedInInterval ){
        this.isEditMode = !this.isEditMode;
      } else{
          this.isClickedInInterval = true;
          setTimeout( _=> this.isClickedInInterval = false , 200);
      }
    }
  },
  
}
</script>
<<style>

</style>
