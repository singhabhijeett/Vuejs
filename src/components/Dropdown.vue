<script>
import DropdownMenu from "v-dropdown-menu/vue2"
import "v-dropdown-menu/dist/vue2/v-dropdown-menu.css"
export default {
  components: {
    DropdownMenu
  }
}
</script>


<template>
   <dropdown-menu>
  <template #trigger>
    <button>Open Dropdown</button>
  </template>
  <template #header> Dropdown Header </template>
  <template #body>
    <ul>
      <li v-for="i in 6" :key="i">
        <a href="">Item {{ i }}</a>
      </li>
    </ul>
  </template>
  <template #footer> Dropdown Footer </template>
</dropdown-menu>
</template>