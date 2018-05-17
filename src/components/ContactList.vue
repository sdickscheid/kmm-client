
<template>
  <b-container fluid id="contact-list" class="flex-cols pr-2 pl-2">
    <b-row no-gutters>
      <b-col cols="12" class="create-btn-row">
        <div>
          <b-btn
          v-b-modal.modalPrevent
          v-b-modal.modal-center
          class="create-btn mt-2 px-2">
            Create New Contact
          </b-btn>

          <b-modal id="modalPrevent"
             ref="modal"
             title="Enter Contact Information"
             @ok="handleOk"
             @shown="clearName">
            <form @submit.stop.prevent="handleSubmit">
              <p>Name</p>
              <b-form-input
                class="mb-3"
                type="text"
                v-model="form_data.name">
              </b-form-input>

              <p>Company</p>
              <b-form-input
                class="mb-3"
                type="text"
                v-model="form_data.company">
              </b-form-input>

              <p>Website</p>
              <b-form-input
                class="mb-3"
                type="text"
                v-model="form_data.website">
              </b-form-input>

              <p>Email</p>
              <b-form-input
                class="mb-3"
                type="text"
                v-model="form_data.email">
              </b-form-input>

              <p>Phone</p>
              <b-form-input
                class="mb-3"
                type="text"
                v-model="form_data.phone">
              </b-form-input>

              <p>Existing Client? (select one)</p>
              <b-form-select
                :options="options"
                class="mb-3"
                v-model="form_data.client_status">
              </b-form-select>

              <p>Message</p>
              <b-form-textarea
                class="mb-3"
                type="textarea"
                v-model="form_data.message"
                :rows="3"
                :max-rows="6">
              </b-form-textarea>
            </form>
          </b-modal>
        </div>
      </b-col>
    </b-row>

    <b-row no-gutters>
      <b-col cols="12" class="text-left ml-2 mt-5">
        <h3 id="title-contact-list" class="display-5 mt-3">Contact Management</h3>
      </b-col>
    </b-row>

    <b-row no-gutters class="contact-table-container">
      <b-col cols="12">
        <b-table
          class="contact-table"
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
            <b-button size="sm" class="del-btn px-1" @click="deleteContact(row.item.id)">
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
  name: 'ContactList',
  data(){
    return {
      selected: null,
      options: [
        { value: null, text: 'Select a category', disabled: true },
        { value: 'Yes', text: 'Yes' },
        { value: 'No', text: 'No' }
      ],
      fields: [
        { key: 'id', sortable: true },
        { key: 'name', sortable: true },
        { key: 'company', sortable: true },
        { key: 'website', sortable: false },
        { key: 'email', sortable: false },
        { key: 'phone', sortable: false },
        { key: 'client_status', sortable: true },
        { key: 'message', sortable: false}
      ],
      items: [ ],
      form_data: {
        name: "",
        company: "",
        website: "",
        email: "",
        phone: "",
        client_status: null,
        message: ""
      }
    }
  },

  methods: {
    clearName () {
      this.form_data = {
        name: "",
        company: "",
        website: "",
        email: "",
        Phone: "",
        client_status: "",
        message: ""
      }
    },

    handleOk (e) {
      e.preventDefault()
      this.handleSubmit();
    },

    handleSubmit () {
      let token = localStorage.getItem("token");
      this.axios.post('/contacts', {token:token, contact:this.form_data})
        .then((res)=>{
          console.log(res);
          this.clearName()
          this.$refs.modal.hide()
      })

    },

    deleteContact(item) {
      let token = localStorage.getItem("token");
      this.axios.delete(`/delete/${item}/?token=${token}`)
        .then(response => {
          console.log(response);
          this.items = this.items.filter(item => item.id != item);
      })
      .catch(err => {
        console.log('AXIOS ERR:', err)
      })
    }
  },

  created: function(){
    let token = localStorage.getItem("token");
    this.axios.get(`/contacts/?token=${token}`)
    .then(response =>{
      console.log(response)
      this.items = response.data;
    })
    .catch(()=>{
      this.$router.push("/")
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
#contact-list {
  display: flex;
  flex-direction: column;
  height: 86vh;
  margin: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
}

/* column header */
.contact-table-container >>> th:nth-child(1) {
  text-align: center;
}

.contact-table-container >>> th:nth-child(6),
.contact-table-container >>> th:nth-child(7) {
  width: 130px;
}

.contact-table-container >>> th:nth-child(2),
.contact-table-container >>> th:nth-child(3)  {
  width: 170px;
}

/* column data */
.contact-table-container >>> td:nth-of-type(1) {
  text-align: center;
}

.contact-table-container >>> tr,
.contact-table-container >>> th,
.contact-table-container >>> td {
  border: 1px solid grey;
}

.contact-table-container >>> th {
  background-color: #555555;
  color: white;
}

.contact-table {
  margin-top: 20px;
  margin-bottom: 20px;
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
#contacttitle-project-list {
  margin-bottom: 30px;
}

</style>
