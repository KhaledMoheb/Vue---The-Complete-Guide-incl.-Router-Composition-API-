<template>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <h2>My Course Goal (Separate refs)</h2>
  <h3 v-if="separateRefsIsShowCourseGoal" >{{ separateRefsCourseGoal }}</h3>
  <button type="button" @click="separateRefsToggleIsShowCourseGoal" >Toggle Goal</button>
  <!-- => Ref Object -->
  <h2>My Course Goal (Ref Object)</h2>
  <h3 v-if="refObjectCourseGoalData.isShowCourseGoal" >{{ refObjectCourseGoalData.courseGoal }}</h3>
  <button type="button" @click="refObjectToggleIsShowCourseGoal" >Toggle Goal</button>
  <!-- => Reactive Object -->
  <h2>My Course Goal (Reactive)</h2>
  <h3 v-if="reactiveCourseGoalData.isShowCourseGoal" >{{ reactiveCourseGoalData.courseGoal }}</h3>
  <button type="button" @click="reactiveToggleIsShowCourseGoal" >Toggle Goal</button>
  <!-- Task 4: Also solve the assignment with the Options API -->
  <h2>My Course Goal (Options API)</h2>
  <h3 v-if="optionsAPIIsShowCourseGoal" >{{ optionsAPICourseGoal }}</h3>
  <button type="button" @click="optionsAPIToggleIsShowCourseGoal" >Toggle Goal</button>
</template>

<script>
const defaultCourseGoal = "Mastering Vue";

import { ref, reactive } from 'vue';

export default {
  data() {
    return {
      optionsAPICourseGoal: defaultCourseGoal,
      optionsAPIIsShowCourseGoal: true
    };
  },
  methods: {
    optionsAPIToggleIsShowCourseGoal() {
      this.optionsAPIIsShowCourseGoal = !this.optionsAPIIsShowCourseGoal;
    }
  },
  setup(){
    // separate Refs
    const separateRefsCourseGoal = ref(defaultCourseGoal); 
    const separateRefsIsShowCourseGoal = ref(true);

    const separateRefsToggleIsShowCourseGoal = () => {
      separateRefsIsShowCourseGoal.value = !separateRefsIsShowCourseGoal.value;
    };

    // ref object

    const refObjectCourseGoalData = ref({
      courseGoal: defaultCourseGoal,
      isShowCourseGoal: true,
    });

    const refObjectToggleIsShowCourseGoal = () => {
      refObjectCourseGoalData.value.isShowCourseGoal = !refObjectCourseGoalData.value.isShowCourseGoal;
    }

    // reactivate
    const reactiveCourseGoalData = reactive({
      courseGoal: defaultCourseGoal,
      isShowCourseGoal: true,
    });

    const reactiveToggleIsShowCourseGoal = () => {
      reactiveCourseGoalData.isShowCourseGoal = !reactiveCourseGoalData.isShowCourseGoal;
    }

    return {
      separateRefsCourseGoal,
      separateRefsIsShowCourseGoal,
      separateRefsToggleIsShowCourseGoal,
      refObjectCourseGoalData,
      refObjectToggleIsShowCourseGoal,
      reactiveCourseGoalData,
      reactiveToggleIsShowCourseGoal
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>