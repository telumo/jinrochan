<template>
  <v-content>
    <v-container class="" fluid>
      <v-row no-gutters>
        <v-col md="6" offset-md="3">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// import Logo from "~/components/Logo.vue";

export default {
  data: function() {
    return {
      desserts: [
        {
          name: "sample1",
          calories: 12
        },
        {
          name: "sample2",
          calories: 12
        },
        {
          name: "sample3",
          calories: 12
        },
        {
          name: "sample4",
          calories: 12
        },
        {
          name: "sample5",
          calories: 12
        }
      ]
    };
  }
  // components: {
  //   Logo
  // }
};
</script>

<style>
</style>