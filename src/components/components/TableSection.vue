<template>
  <section>
    <el-table
      @click.native="toggleEditMode"
      :data="paramsForRender.data"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="Date">
        <template scope="scope">
          <el-popover v-if="isEditMode" placement="top">
            <p>Please enter the new value:</p>
            <input type="text" placeholder="Please input" v-model="editTableInput"
                   @keyup.enter="inputChange(scope.$index, 'date')"></input>
            <div slot="reference" class="name-wrapper">
              <el-tag class="pointer">{{ scope.row.date }}</el-tag>
            </div>
          </el-popover>
          <div v-else>{{ scope.row.date }}</div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="120">
        <template scope="scope">
          <el-popover v-if="isEditMode" placement="top">
            <p>Please enter the new value:</p>
            <input v-model="editTableInput" type="text" @keyup.enter="inputChange(scope.$index, 'name')"></input>
            <div slot="reference" class="name-wrapper">
              <el-tag class="pointer">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
          <div v-else>{{ scope.row.name }}</div>
        </template>
      </el-table-column>
      <el-table-column
        prop="state"
        label="State"
        width="120">
        <template scope="scope">
          <el-popover v-if="isEditMode" placement="top">
            <p>Please enter the new value:</p>
            <input v-model="editTableInput" type="text" @keyup.enter="inputChange(scope.$index, 'state')"></input>
            <div slot="reference" class="name-wrapper">
              <el-tag class="pointer">{{ scope.row.state }}</el-tag>
            </div>
          </el-popover>
          <div v-else>{{ scope.row.state }}</div>
        </template>
      </el-table-column>
      <el-table-column
        prop="city"
        label="City"
        width="120">
        <template scope="scope">
          <el-popover v-if="isEditMode" placement="top">
            <p>Please enter the new value:</p>
            <input v-model="editTableInput" type="text" @keyup.enter="inputChange(scope.$index, 'city')"></input>
            <div slot="reference" class="name-wrapper">
              <el-tag class="pointer">{{ scope.row.city }}</el-tag>
            </div>
          </el-popover>
          <div v-else>{{ scope.row.city }}</div>
        </template>
      </el-table-column>
      <!--<el-table-column
        prop="address"
        label="Address"
        width="300">
        <template scope="scope">
          <el-popover v-if="isEditMode" placement="top">
            <p>Please enter the new value:</p>
            <input v-model="editTableInput" type="text" @keyup.enter="inputChange(scope.$index, 'address')"></input>
            <div slot="reference" class="name-wrapper">
              <el-tag class="pointer">{{ scope.row.address }}</el-tag>
            </div>
          </el-popover>
          <div v-else>{{ scope.row.address }}</div>
        </template>
      </el-table-column>
      <el-table-column
        prop="zip"
        label="Zip"
        width="120">
        <template scope="scope">
          <el-popover v-if="isEditMode" placement="top">
            <p>Please enter the new value:</p>
            <input v-model="editTableInput" type="text" @keyup.enter="inputChange(scope.$index, 'zip')"></input>
            <div slot="reference" class="name-wrapper">
              <el-tag class="pointer">{{ scope.row.zip }}</el-tag>
            </div>
          </el-popover>
          <div v-else>{{ scope.row.zip }}</div>
        </template>
      </el-table-column>-->
    </el-table>
    <close-btn class="closeBtn" :cmp="paramsForRender"></close-btn>

  </section>
</template>
<script>
  import {TABLE_SECTION} from '../../constants/cmpName'
  import CloseBtn from '../editor/CloseBtn';

  export default {
    name: TABLE_SECTION,
    props: ['paramsForRender'],
    data() {
      return {
        isEditMode: false,
        isClickedInInterval: false,
        editTableInput: ''
      }
    },
    components: {CloseBtn},
    // watch: {
    //   // whenever question changes, this function will run
    //   question: function (newQuestion) {
    //     this.answer = 'Waiting for you to stop typing...'
    //     this.getAnswer()
    //   }
    // },
    methods: {
      handleEdit(index, row) {
        console.log(`index:${index}, row:${row}`);
      },
      handleDelete(index, row) {
        console.log(`index:${index}`);
        console.log('row:', row)
      },
      toggleEditMode(){
        if (this.isClickedInInterval) {
          this.isEditMode = !this.isEditMode;
          console.log('toggling edit mode!');
        } else {
          this.isClickedInInterval = true;
          setTimeout(_ => this.isClickedInInterval = false, 200);
        }
      },
      inputChange(index, key){
        //let cmp = this.$store.getters.componentById(this.paramsForRender.id)
        const cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        cmpEdited.data[index][key] = this.editTableInput;
        this.$store.commit({
          type: 'editCmp',
          cmp: cmpEdited
        })
        // console.log(`editinf the table cell with value =${this.editTableInput} at index:${index} of cmp`, cmpEdited.data[index]);
        this.editTableInput = '';
      }
    },

  }
</script>
<style>
  .pointer:hover {
    cursor: pointer;
  }
</style>
