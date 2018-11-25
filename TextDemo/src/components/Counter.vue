<template lang="html">
  <div class="counter-component">
    <div class="counter-btn" @click="dis">-</div>
    <div class="counter-show">
        <input @input="inputHandler" type="text" v-model="count">
    </div>
    <div class="counter-btn" @click="add">+</div>
  </div>
</template>

<script>
export default {
  name:"Counter",
  data(){
    return{
      count:1
    }
  },
  props:{
    min:{
      type:[String,Number],
      default:1
    },
    max:{
      type:[String,Number],
      default:10
    }
  },
  methods:{
    add(event){
      if(this.count>=this.max){
        return
      }
      this.count ++
    },
    dis(event){
      if(this.count<=this.min){
        return
      }
      this.count --
    },
    inputHandler(event){
      let fix;
      if(typeof this.count === "string"){
        fix = Number(this.count.replace(/\D/g,""))
      }else{
        fix = this.min
      }
      this.count = fix
      this.$emit("countEvent",this.count)
    }
  }
}
</script>

<style lang="css" scoped>

.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
  user-select:none;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
