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
    <div>
      <b-modal id="modalEdit"
         ref="modal"
         title="Edit Existing Project Details"
         @ok="handleEdit"
         @shown="clearName">
        <form @submit.stop.prevent="handleEdit">
          <p>Client Name</p>
          <b-form-input
            class="mb-3"
            type="text"
            v-model="edit_form_data.client_name">
          </b-form-input>

          <p>Company</p>
          <b-form-input
            class="mb-3"
            type="text"
            v-model="edit_form_data.company">
          </b-form-input>

          <p>Project Name</p>
          <b-form-input
            class="mb-3"
            type="text"
            v-model="edit_form_data.project_name">
          </b-form-input>

          <p>Date Published (Mon. YYYY)</p>
          <b-form-input
            class="mb-3"
            type="text"
            v-model="edit_form_data.published">
          </b-form-input>

          <p>Runtime/Length (Ex. 3:45)</p>
          <b-form-input
            class="mb-3"
            type="text"
            v-model="edit_form_data.length">
          </b-form-input>

          <p>Vimeo ID# (Ex. 222111333)</p>
          <b-form-input
            class="mb-3"
            type="number"
            v-model="edit_form_data.vimeo_id">
          </b-form-input>

          <p>Project Description</p>
          <b-form-textarea
            class="mb-3"
            type="textarea"
            v-model="edit_form_data.description"
            :rows="3"
            :max-rows="6">
          </b-form-textarea>

          <p>Select a category</p>
          <b-form-select
            :options="options"
            class="mb-3"
            v-model="edit_form_data.c2">
          </b-form-select>

          <p>Select a category</p>
          <b-form-select
            :options="options"
            class="mb-3"
            v-model="edit_form_data.c3">
          </b-form-select>
        </form>
      </b-modal>
    </div>

    <b-row no-gutters class="project-table-container">
      <b-col cols="12">
        <b-table
          class="project-table"
          responsive
          stacked="lg"
          small
          hover
          outlined
          tdClass="text-center"
          :items="items"
          :fields="fields"
        >
          <template slot="edit" slot-scope="row">
            <i class="fa fa-pencil-square-o"
              aria-hidden="true"
              v-b-modal.modalEdit
              v-b-modal.modal-center
              @click="loadEdit(row.index)"
            ></i>
            <!-- EDIT MODAL -->

          </template>

          <template slot="delete" slot-scope="row">
            <i class="fa fa-trash-o"
            aria-hidden="true"
            @click="deleteProject(row.item.id)"
            ></i>
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
        { value: 'Commercial', text: 'Commercial' },
        { value: 'Corporate', text: 'Corporate' },
        { value: 'Documentary', text: 'Documentary' },
        { value: 'DIY', text: 'DIY' },
        { value: 'Social Media', text: 'Social Media' },
        { value: 'Testimonial', text: 'Testimonial' },
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
      },
      edit_form_data: {
        id:"",
        client_name:"",
        company: "",
        project_name:"",
        date_published: "",
        length:"",
        vimeo_id:"",
        description:"",
        c2:null,
        c3:null
      },
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
    loadEdit(index){
      console.log(index);
      this.edit_form_data = this.items[index];
      console.log(this.items[index]);
    },

    handleEdit(){
      console.log("asdfasdf");
      console.log(`/update/${this.edit_form_data.id}`);
      this.axios.post(`/update/${this.edit_form_data.id}`, this.edit_form_data)
        .then((projects)=>{
          console.log("projects are", projects);
        })
    },

    handleOk (e) {
      e.preventDefault()
      this.handleSubmit();
    },

    handleSubmit () {
      console.log("in handle submit");
      this.axios.post('/projects', this.form_data).then((res)=>{
        console.log(res);
        this.clearName()
        this.$refs.modal.hide()
        this.items = res.data
      })

    },

    deleteProject(item) {
      console.log("HEEEEERREEEE");
      this.axios.delete(`/delete/${item}`).then(response => {
        console.log(response);
        this.items = this.items.filter(item => item.id != response.data);
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
