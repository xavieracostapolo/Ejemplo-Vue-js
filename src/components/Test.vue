<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"/>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using button-content slot -->
              <template slot="button-content">
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="text-center">
      <b-spinner label="Spinning"/>
      <b-spinner type="grow" label="Spinning"/>
      <b-spinner variant="primary" label="Spinning"/>
      <b-spinner variant="primary" type="grow" label="Spinning"/>
      <b-spinner variant="success" label="Spinning"/>
      <b-spinner variant="success" type="grow" label="Spinning"/>
    </div>

    <h2>Test file</h2>
    <div>{{ var1 }} - {{ var2 }}</div>
    <b-alert show>Default Alert</b-alert>
    <b-alert variant="success" show>Success Alert</b-alert>
    <b-alert variant="primary" show>Success Alert</b-alert>
    <b-alert variant="secondary" show>Success Alert</b-alert>
    <b-alert variant="danger" show>Success Alert</b-alert>
    <b-alert variant="warning" show dismissible>Success Alert</b-alert>
    <b-alert variant="info" show>Success Alert</b-alert>
    <div>
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success" size="sm">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
    </div>

    <b-alert show variant="success">
      <h4 class="alert-heading">Well done!</h4>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to
        run a bit longer so that you can see how spacing within an alert works with this kind of
        content.
      </p>
      <hr>
      <p
        class="mb-0"
      >Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </b-alert>

    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>

    <div>
      <b-button v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-button>
      <b-collapse id="collapse1" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
          <b-button v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-button>
          <b-collapse id="collapse1_inner" class="mt-2">
            <b-card>Hello!</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
    <div class="container">
      <div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          >
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          >
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <div class="row">
        <div class="col-lg-2">Div 1</div>
        <div class="col-lg-8">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            allowfullscreen
          />
        </div>
        <div class="col-lg-2">Div 3</div>
      </div>
      <div>
        <b-button v-b-modal.modal1>Launch demo modal</b-button>

        <!-- Modal Component -->
        <b-modal id="modal1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </div>
    </div>

    <div>
      <b-table striped hover :items="items"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    var1: String,
    var2: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      items: [
        {
          isActive: true,
          age: 40,
          first_name: 'Dickerson',
          last_name: 'Macdonald'
        },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  }
}
</script>

<style>
</style>
