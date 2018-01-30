
<template>
  <b-container fluid id="project-list" class="flex-cols pr-2 pl-2">
    <b-row no-gutters>
      <b-col cols="12" class="create-btn-row">
        <div>
          <b-btn
          v-b-modal.modalPrevent
          v-b-modal.modal-center
          class="create-btn mt-2 px-2">
            Create New Project
          </b-btn>

          <b-modal id="modalPrevent"
             ref="modal"
             title="Enter New Project Details"
             @ok="handleOk"
             @shown="clearName">
            <form @submit.stop.prevent="handleSubmit">
              <p>Client Name</p>
              <b-form-input
                class="mb-3"
                type="text"
                v-model="form_data.client_name">
              </b-form-input>

              <p>Company</p>
              <b-form-input
                class="mb-3"
                type="text"
                v-model="form_data.company">
              </b-form-input>

              <p>Project Name</p>
              <b-form-input
                class="mb-3"
                type="text"
                v-model="form_data.project_name">
              </b-form-input>

              <p>Date Published (Mon. YYYY)</p>
              <b-form-input
                class="mb-3"
                type="text"
                v-model="form_data.published">
              </b-form-input>

              <p>Runtime/Length (Ex. 3:45)</p>
              <b-form-input
                class="mb-3"
                type="text"
                v-model="form_data.length">
              </b-form-input>

              <p>Vimeo ID# (Ex. 222111333)</p>
              <b-form-input
                class="mb-3"
                type="number"
                v-model="form_data.vimeo_id">
              </b-form-input>

              <p>Project Description</p>
              <b-form-textarea
                class="mb-3"
                type="textarea"
                v-model="form_data.description"
                :rows="3"
                :max-rows="6">
              </b-form-textarea>

              <p>Select a category</p>
              <b-form-select
                :options="options"
                class="mb-3"
                v-model="form_data.c2">
              </b-form-select>

              <p>Select a category</p>
              <b-form-select
                :options="options"
                class="mb-3"
                v-model="form_data.c3">
              </b-form-select>
            </form>
          </b-modal>
        </div>
      </b-col>
    </b-row>

    <b-row no-gutters>
      <b-col cols="12" class="text-left ml-2 mt-5">
        <h3 id="title-project-list" class="display-5 mb-5">Project List</h3>
      </b-col>
    </b-row>

    <b-row no-gutters class="project-table-container">
      <b-col cols="12">
        <b-table
          class="project-table"
          responsive
          stacked="lg"
          small
          hover
          outlined
          :items="items"
          :fields="fields"
        >
          <template slot="edit" slot-scope="row">
            <b-button size="sm" class="edit-btn px-1">
             {{ }} Edit
            </b-button>
          </template>
          <template slot="delete" slot-scope="row">
            <b-button size="sm" class="del-btn px-1" @click="deleteProject(row.item.id)">
             {{ }} Delete
            </b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>

  </b-container>

</template>


<script>


export default {
  name: 'ProjectList',
  data(){
    return {
      selected: null,
      options: [
        { value: null, text: 'Select a category', disabled: true },
        { value: 'About', text: 'About' },
        { value: 'Audition/Talent', text: 'Audition/Talent' },
        { value: 'Campaign', text: 'Campaign' },
        { value: 'Commercials', text: 'Commercials' },
        { value: 'Corporate', text: 'Corporate' },
        { value: 'Documentary', text: 'Documentary' },
        { value: 'DIY', text: 'DIY' },
        { value: 'Social Media', text: 'Social Media' },
        { value: 'Testimonials', text: 'Testimonials' },
      ],
      fields: [
        { key: 'id', sortable: true },
        { key: 'client_name', sortable: true },
        { key: 'company', sortable: true },
        { key: 'project_name', sortable: false },
        { key: 'published', sortable: true },
        { key: 'length', sortable: false },
        { key: 'vimeo_id', sortable: false },
        { key: 'c2', sortable: true },
        { key: 'c3', sortable: true },
        { key: 'edit', sortable: false },
        { key: 'delete', sortable: false }
      ],
      items: [ ],
      form_data: {
        client_name:"",
        company: "",
        project_name:"",
        date_published: "",
        length:"",
        vimeo_id:"",
        description:"",
        c2:null,
        c3:null
      }
    }
  },

  methods: {
    clearName () {
      this.form_data = {
        client_name:"",
        company: "",
        project_name:"",
        date_published: "",
        length:"",
        vimeo_id:"",
        description:"",
        c2:"",
        c3:""
      }
    },

    handleOk (e) {
      e.preventDefault()
      this.handleSubmit();
    },

    handleSubmit () {
      this.axios.post('/projects', this.form_data).then((res)=>{
        console.log(res);
        this.clearName()
        this.$refs.modal.hide()
      })

    },

    deleteProject(item) {
      console.log("HEEEEERREEEE");
      this.axios.delete(`/delete/${item}`).then(response => {
        this.items = this.items.filter(item => item.id != item);
        console.log("HEEEEERREEEE 2")
      })
      .catch(err => {
        console.log('AXIOS ERR:', err)
      })
    }
  },

  created: function(){
    this.axios.get('/projects')
    .then(response =>{
      console.log(response)
      this.items = response.data;
    })
  },

}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#project-list {
  display: flex;
  flex-direction: column;
  height: 86vh;
  margin: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.create-btn-row {
  display: flex;
  justify-content: flex-end;
}

.create-btn {
  padding: 5px;
  background-color: lightgreen;
  color: #222222;
  border-color: #888888;
}
.create-btn:hover {
  padding: 5px;
  background-color: green;
  color: #dddddd;
  border-color: #222222;
}

.edit-btn {
  background-color: orange;
  padding-top: 1px;
  padding-botton: 1px;
  border-color: #aaaaaa;
}

.del-btn {
  background-color: red;
  padding-top: 1px;
  padding-botton: 1px;
  border-color: #aaaaaa;
}
#title-project-list {
  margin-bottom: 30px;
}

.project-table {
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>
