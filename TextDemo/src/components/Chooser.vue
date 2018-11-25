<template lang="html">
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item,index) in changerData" :key="index"
          @click="chooseHandler(index)"
          :class="{active:nowIndex === index}"
          >
        {{item.value}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Chooser',
  data(){
    return{
      nowIndex:0
    }
  },
  methods:{
    chooseHandler(index){
      this.nowIndex = index
      this.$emit("chooserEvent",this.changerData[index])
    }
  },
  props:{
    changerData:{
      type:Array,
      default:function(){
        return [
          {
            value:"一个月",
            id:1
          }
        ]
      }
    }
  }
}
</script>

<style lang="css" scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
