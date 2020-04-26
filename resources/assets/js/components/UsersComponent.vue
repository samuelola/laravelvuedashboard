<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 mt-5">
                
              <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Users Table</h3>

                    <div class="card-tools">
                      <div class="input-group input-group-sm" style="width: 150px;">
                       
                          <button class="btn btn-success btn-sm wol" data-toggle="modal" data-target="#addNew">Add New  <i class="fas fa-user-plus fa fw"></i></button> 
               
                       
                      </div>
                    </div>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body table-responsive p-0">
                     <table class="table">
                       <thead class="thead-dark">
                         <tr>
                           <th scope="col">ID</th>
                           <th scope="col">First</th>
                           <th scope="col">Email</th>
                           <th scope="col">Password</th>
                           <th scope="col">Role</th>
                           <th scope="col">Bio</th>
                           <th scope="col">Registered_At</th>
                           <th scope="col">Action</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <th scope="row">1</th>
                           <td>Mark</td>
                           <td>Otto</td>
                           <td>@mdo</td>
                           <td>2</td>
                           <td>4</td>
                           <td>7</td>
                           <td>
                             <a href="#">
                               <i class="fa fa-edit btn btn-primary btn-xs"></i>
                             </a>
                             <a href="#">
                                <i class="fa fa-trash btn btn-danger btn-xs"></i> 
                             </a>
                           </td>
                         </tr>
                         <tr>
                           <th scope="row">2</th>
                           <td>Jacob</td>
                           <td>Thornton</td>
                           <td>@fat</td>
                         </tr>
                         <tr>
                           <th scope="row">3</th>
                           <td>Larry</td>
                           <td>the Bird</td>
                           <td>@twitter</td>
                         </tr>
                       </tbody>
                     </table>
                  </div>
                  <!-- /.card-body -->
                </div>

                <!-- Modal -->
                
                    <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="addNewLabel">Add User</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <form @submit.prevent="createUser">
                          <div class="modal-body">
                             <div class="form-group">
                                   <label>Username</label>
                                   <input v-model="form.name" type="text" name="name"
                                     class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                   <has-error :form="form" field="name"></has-error>
                             </div>

                                 <div class="form-group">
                                   <label>Email</label>
                                   <input v-model="form.email" type="email" name="email"
                                     class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                                   <has-error :form="form" field="email"></has-error>
                                 </div>

                                 <div class="form-group">
                                   <label>Password</label>
                                   <input v-model="form.password" type="password" name="password"
                                     class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                                   <has-error :form="form" field="password"></has-error>
                                 </div>

                                 <div class="form-group">
                                   <label>Role</label>

                                   <select name="role" id="" v-model="form.role" class="form-control" :class="{ 'is-invalid': form.errors.has('role') }">
                                       <option value="">Select Role</option>
                                       <option value="admin">Admin</option>
                                       <option value="author">Author</option>
                                       <option value="subscriber">Subscriber</option>
                                   </select>
                                   
                                   <has-error :form="form" field="role"></has-error>
                                 </div>



                                 <div class="form-group">
                                   <label>Bio</label>
                                   
                                   <textarea v-model="form.bio" name="bio" id="" cols="30" rows="10" class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }" style="margin-top: 0px; margin-bottom: 0px; height: 67px;">
                                       

                                   </textarea>

                                    <has-error :form="form" field="bio"></has-error>
                                 </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Create</button>
                          </div>
                          </form>
                        </div>
                      </div>
                    </div>
                

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
        data () {
            return {
              // Create a new form instance
              form: new Form({
                name: '',
                email:'',
                password: '',
                role:'',
                bio:'',
                photo:''
                
              })
            }
          },

          methods:{
            
             createUser(){
                // submit the form with a POST request
                this.form.post('api/user');
             }

          },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
