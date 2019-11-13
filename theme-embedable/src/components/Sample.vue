<template>
  <div>
    <h2 class="h3 my-4 text-center">Button</h2>
    <div class="d-flex flex-wrap mb-2 justify-content-center snippet">
      <button class="btn btn-primary mr-3 mb-3">Primary</button
      ><button class="btn btn-secondary mr-3 mb-3">Secondary</button
      ><button class="btn btn-success mr-3 mb-3">Success</button><button class="btn btn-info mr-3 mb-3">Info</button
      ><button class="btn btn-warning mr-3 mb-3">Warning</button><button class="btn btn-danger mr-3 mb-3">Danger</button
      ><button class="btn btn-dark mr-3 mb-3">Dark</button>
    </div>
    <div class="d-flex flex-wrap mb-2 justify-content-center snippet">
      <button class="btn btn-outline-primary mr-3 mb-3">Primary</button
      ><button class="btn btn-outline-secondary mr-3 mb-3">Secondary</button
      ><button class="btn btn-outline-success mr-3 mb-3">Success</button
      ><button class="btn btn-outline-info mr-3 mb-3">Info</button
      ><button class="btn btn-outline-warning mr-3 mb-3">Warning</button
      ><button class="btn btn-outline-danger mr-3 mb-3">Danger</button
      ><button class="btn btn-outline-dark mr-3 mb-3">Dark</button>
    </div>
    <div class="d-flex flex-wrap mb-2 justify-content-center snippet">
      <div class="btn-group mr-3 mb-3" role="group" aria-label="Menu">
        <button class="btn btn-primary" type="button">File</button
        ><button class="btn btn-primary" type="button">Edit</button
        ><button class="btn btn-primary" type="button">View</button
        ><button class="btn btn-primary" type="button">History</button
        ><button class="btn btn-primary" type="button">Help</button>
      </div>
      <div class="btn-group mr-3 mb-3" role="group" aria-label="Menu">
        <button class="btn btn-secondary" type="button">File</button
        ><button class="btn btn-secondary" type="button">Edit</button
        ><button class="btn btn-secondary" type="button">View</button
        ><button class="btn btn-secondary" type="button">History</button
        ><button class="btn btn-secondary" type="button">Help</button>
      </div>
      <div class="btn-group mr-3 mb-3" role="group" aria-label="Menu">
        <button class="btn btn-success" type="button">File</button
        ><button class="btn btn-success" type="button">Edit</button
        ><button class="btn btn-success" type="button">View</button
        ><button class="btn btn-success" type="button">History</button
        ><button class="btn btn-success" type="button">Help</button>
      </div>
      <div class="btn-group mr-3 mb-3" role="group" aria-label="Menu">
        <button class="btn btn-info" type="button">File</button><button class="btn btn-info" type="button">Edit</button
        ><button class="btn btn-info" type="button">View</button
        ><button class="btn btn-info" type="button">History</button
        ><button class="btn btn-info" type="button">Help</button>
      </div>
      <div class="btn-group mr-3 mb-3" role="group" aria-label="Menu">
        <button class="btn btn-warning" type="button">File</button
        ><button class="btn btn-warning" type="button">Edit</button
        ><button class="btn btn-warning" type="button">View</button
        ><button class="btn btn-warning" type="button">History</button
        ><button class="btn btn-warning" type="button">Help</button>
      </div>
      <div class="btn-group mr-3 mb-3" role="group" aria-label="Menu">
        <button class="btn btn-danger" type="button">File</button
        ><button class="btn btn-danger" type="button">Edit</button
        ><button class="btn btn-danger" type="button">View</button
        ><button class="btn btn-danger" type="button">History</button
        ><button class="btn btn-danger" type="button">Help</button>
      </div>
      <div class="btn-group mr-3 mb-3" role="group" aria-label="Menu">
        <button class="btn btn-dark" type="button">File</button><button class="btn btn-dark" type="button">Edit</button
        ><button class="btn btn-dark" type="button">View</button
        ><button class="btn btn-dark" type="button">History</button
        ><button class="btn btn-dark" type="button">Help</button>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center mb-1 snippet">
      <div class="mr-3 mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-primary active"><input type="radio" name="options" checked="" /> Radio</label
        ><label class="btn btn-primary"><input type="radio" name="options" /> Radio</label
        ><label class="btn btn-primary"><input type="radio" name="options" /> Radio</label>
      </div>
      <div class="mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-primary active"><input type="checkbox" name="options" checked="" /> Checkbox</label
        ><label class="btn btn-primary"><input type="checkbox" name="options" /> Checkbox</label
        ><label class="btn btn-primary"><input type="checkbox" name="options" /> Checkbox</label>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center mb-1 snippet">
      <div class="mr-3 mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active"><input type="radio" name="options" checked="" /> Radio</label
        ><label class="btn btn-secondary"><input type="radio" name="options" /> Radio</label
        ><label class="btn btn-secondary"><input type="radio" name="options" /> Radio</label>
      </div>
      <div class="mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active"><input type="checkbox" name="options" checked="" /> Checkbox</label
        ><label class="btn btn-secondary"><input type="checkbox" name="options" /> Checkbox</label
        ><label class="btn btn-secondary"><input type="checkbox" name="options" /> Checkbox</label>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center mb-1 snippet">
      <div class="mr-3 mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-success active"><input type="radio" name="options" checked="" /> Radio</label
        ><label class="btn btn-success"><input type="radio" name="options" /> Radio</label
        ><label class="btn btn-success"><input type="radio" name="options" /> Radio</label>
      </div>
      <div class="mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-success active"><input type="checkbox" name="options" checked="" /> Checkbox</label
        ><label class="btn btn-success"><input type="checkbox" name="options" /> Checkbox</label
        ><label class="btn btn-success"><input type="checkbox" name="options" /> Checkbox</label>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center mb-1 snippet">
      <div class="mr-3 mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-info active"><input type="radio" name="options" checked="" /> Radio</label
        ><label class="btn btn-info"><input type="radio" name="options" /> Radio</label
        ><label class="btn btn-info"><input type="radio" name="options" /> Radio</label>
      </div>
      <div class="mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-info active"><input type="checkbox" name="options" checked="" /> Checkbox</label
        ><label class="btn btn-info"><input type="checkbox" name="options" /> Checkbox</label
        ><label class="btn btn-info"><input type="checkbox" name="options" /> Checkbox</label>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center mb-1 snippet">
      <div class="mr-3 mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-warning active"><input type="radio" name="options" checked="" /> Radio</label
        ><label class="btn btn-warning"><input type="radio" name="options" /> Radio</label
        ><label class="btn btn-warning"><input type="radio" name="options" /> Radio</label>
      </div>
      <div class="mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-warning active"><input type="checkbox" name="options" checked="" /> Checkbox</label
        ><label class="btn btn-warning"><input type="checkbox" name="options" /> Checkbox</label
        ><label class="btn btn-warning"><input type="checkbox" name="options" /> Checkbox</label>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center mb-1 snippet">
      <div class="mr-3 mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-danger active"><input type="radio" name="options" checked="" /> Radio</label
        ><label class="btn btn-danger"><input type="radio" name="options" /> Radio</label
        ><label class="btn btn-danger"><input type="radio" name="options" /> Radio</label>
      </div>
      <div class="mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-danger active"><input type="checkbox" name="options" checked="" /> Checkbox</label
        ><label class="btn btn-danger"><input type="checkbox" name="options" /> Checkbox</label
        ><label class="btn btn-danger"><input type="checkbox" name="options" /> Checkbox</label>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center mb-1 snippet">
      <div class="mr-3 mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-dark active"><input type="radio" name="options" checked="" /> Radio</label
        ><label class="btn btn-dark"><input type="radio" name="options" /> Radio</label
        ><label class="btn btn-dark"><input type="radio" name="options" /> Radio</label>
      </div>
      <div class="mb-2 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-dark active"><input type="checkbox" name="options" checked="" /> Checkbox</label
        ><label class="btn btn-dark"><input type="checkbox" name="options" /> Checkbox</label
        ><label class="btn btn-dark"><input type="checkbox" name="options" /> Checkbox</label>
      </div>
    </div>
    <h2 class="h3 my-4 text-center">Dropdown</h2>
    <div class="d-flex flex-wrap mb-2 justify-content-center snippet">
      <div class="btn-group mr-3 mb-3">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Jane Doe
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <div class="btn-group mr-3 mb-3">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Jane Doe
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <div class="btn-group mr-3 mb-3">
        <button
          class="btn btn-success dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Jane Doe
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <div class="btn-group mr-3 mb-3">
        <button
          class="btn btn-info dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Jane Doe
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <div class="btn-group mr-3 mb-3">
        <button
          class="btn btn-warning dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Jane Doe
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <div class="btn-group mr-3 mb-3">
        <button
          class="btn btn-danger dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Jane Doe
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <div class="btn-group mr-3 mb-3">
        <button
          class="btn btn-dark dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Jane Doe
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
    </div>
    <div class="d-flex flex-wrap mb-2 justify-content-center snippet">
      <div class="btn-group mr-3 mb-3">
        <button class="btn btn-primary" type="button">Jane Doe</button
        ><button
          class="btn btn-primary dropdown-toggle dropdown-toggle-split"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <div class="btn-group mr-3 mb-3">
        <button class="btn btn-secondary" type="button">Jane Doe</button
        ><button
          class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <div class="btn-group mr-3 mb-3">
        <button class="btn btn-success" type="button">Jane Doe</button
        ><button
          class="btn btn-success dropdown-toggle dropdown-toggle-split"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <div class="btn-group mr-3 mb-3">
        <button class="btn btn-info" type="button">Jane Doe</button
        ><button
          class="btn btn-info dropdown-toggle dropdown-toggle-split"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <div class="btn-group mr-3 mb-3">
        <button class="btn btn-warning" type="button">Jane Doe</button
        ><button
          class="btn btn-warning dropdown-toggle dropdown-toggle-split"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <div class="btn-group mr-3 mb-3">
        <button class="btn btn-danger" type="button">Jane Doe</button
        ><button
          class="btn btn-danger dropdown-toggle dropdown-toggle-split"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <div class="btn-group mr-3 mb-3">
        <button class="btn btn-dark" type="button">Jane Doe</button
        ><button
          class="btn btn-dark dropdown-toggle dropdown-toggle-split"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#">My Profile</a><a class="dropdown-item" href="#">My Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
    </div>
    <h2 class="h3 my-4 text-center">Badge</h2>
    <div class="d-flex flex-wrap mb-2 justify-content-center snippet">
      <div class="badge badge-primary mr-3 mb-2">Primary</div>
      <div class="badge badge-secondary mr-3 mb-2">Secondary</div>
      <div class="badge badge-success mr-3 mb-2">Success</div>
      <div class="badge badge-info mr-3 mb-2">Info</div>
      <div class="badge badge-warning mr-3 mb-2">Warning</div>
      <div class="badge badge-danger mr-3 mb-2">Danger</div>
      <div class="badge badge-dark mr-3 mb-2">Dark</div>
    </div>
    <h2 class="h3 my-4 text-center">Alert</h2>
    <div class="snippet">
      <div class="alert alert-success fade in alert-dismissible show">
        <button class="close" type="button" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span></button
        ><strong>Success!</strong> This alert box indicates a successful or positive action.
      </div>
    </div>
    <div class="snippet">
      <div class="alert alert-info fade in alert-dismissible show">
        <button class="close" type="button" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span></button
        ><strong>Info!</strong> This alert box indicates a neutral informative change or action.
      </div>
    </div>
    <div class="snippet">
      <div class="alert alert-warning fade in alert-dismissible show">
        <button class="close" type="button" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span></button
        ><strong>Warning!</strong> This alert box indicates a warning that might need attention.
      </div>
    </div>
    <div class="snippet">
      <div class="alert alert-danger fade in alert-dismissible show">
        <button class="close" type="button" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span></button
        ><strong>Danger!</strong> This alert box indicates a dangerous or potentially negative action.
      </div>
    </div>
    <div class="snippet">
      <div class="alert alert-primary fade in alert-dismissible show">
        <button class="close" type="button" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span></button
        ><strong>Primary!</strong> This alert box indicates an important action.
      </div>
    </div>
    <div class="snippet">
      <div class="alert alert-secondary fade in alert-dismissible show">
        <button class="close" type="button" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span></button
        ><strong>Secondary!</strong> This alert box indicates a less important action.
      </div>
    </div>
    <div class="snippet">
      <div class="alert alert-dark fade in alert-dismissible show">
        <button class="close" type="button" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span></button
        ><strong>Dark!</strong> This alert box is Dark!
      </div>
    </div>
    <h2 class="h3 my-4 text-center">Form</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="snippet">
          <div class="bg-white text-dark border rounded-sm p-4 mb-3">
            <form>
              <div class="form-group">
                <label for="form-1-email">Email address</label
                ><input
                  class="form-control"
                  id="form-1-email"
                  type="email"
                  aria-describedby="form-1-email-help"
                  placeholder="Enter email"
                /><small class="form-text text-muted" id="form-1-email-help"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <div class="form-group">
                <label for="form-1-password">Password</label
                ><input class="form-control" id="form-1-password" type="password" placeholder="Password" />
              </div>
              <div class="form-group form-check">
                <input class="form-check-input" id="form-1-tos" type="checkbox" /><label
                  class="form-check-label"
                  for="form-1-tos"
                  >I agree to the Terms of Service</label
                >
              </div>
              <button class="btn btn-primary" type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="snippet">
          <div class="bg-white text-dark border rounded-sm p-4 mb-3">
            <form>
              <div class="form-group">
                <label for="form-2-email">Email address</label
                ><input class="form-control" id="form-2-email" type="email" placeholder="Enter email" />
              </div>
              <div class="form-group">
                <label for="form-2-password">Password</label
                ><input
                  class="form-control"
                  id="form-2-password"
                  type="password"
                  aria-describedby="form-2-password-help"
                  placeholder="Password"
                /><small class="form-text text-muted" id="form-2-password-help"
                  >Remember: The password is case-sensitive.</small
                >
              </div>
              <div class="form-group form-check">
                <input class="form-check-input" id="form-2-tos" type="checkbox" /><label
                  class="form-check-label"
                  for="form-2-tos"
                  >Remember Me</label
                >
              </div>
              <button class="btn btn-primary" type="submit">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="snippet">
      <div class="bg-white text-dark border rounded-sm p-4 mb-3">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="form-3-email">Email</label
              ><input class="form-control" id="form-3-email" type="email" placeholder="Email" />
            </div>
            <div class="form-group col-md-6">
              <label for="form-3-password">Password</label
              ><input class="form-control" id="form-3-password" type="password" placeholder="Password" />
            </div>
          </div>
          <div class="form-group">
            <label for="form-3-address">Address</label
            ><input class="form-control" id="form-3-address" type="text" placeholder="1234 Main St" />
          </div>
          <div class="form-group">
            <label for="form-3-address-2">Address 2</label
            ><input class="form-control" id="form-3-address-2" type="text" placeholder="Apartment, Studio, or Floor" />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="form-3-city">City</label
              ><input class="form-control" id="form-3-city" type="text" placeholder="City" />
            </div>
            <div class="form-group col-md-4">
              <label for="form-3-state">State</label
              ><select class="form-control" id="form-3-state"
                ><option selected="">Choose...</option
                ><option>...</option></select
              >
            </div>
            <div class="form-group col-md-2">
              <label for="form-3-zip">Zip</label
              ><input class="form-control" id="form-3-zip" type="text" placeholder="Zip" />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" id="form-3-tos" type="checkbox" /><label
                class="form-check-label"
                for="form-3-tos"
                >I agree to the Terms of Service</label
              >
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
    <div class="snippet">
      <div class="bg-white text-dark border rounded-sm p-4 mb-3">
        <form>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="form-4-first-name">First name</label
              ><input
                class="form-control is-valid"
                id="form-4-first-name"
                type="text"
                placeholder="First name"
                value="Jane"
                required=""
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="form-4-last-name">Last name</label
              ><input
                class="form-control is-valid"
                id="form-4-last-name"
                type="text"
                placeholder="Last name"
                value="Doe"
                required=""
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="form-4-username">Username</label>
              <div class="input-group">
                <div class="input-group-prepend"><span class="input-group-text">@</span></div>
                <input class="form-control is-invalid" id="form-4-username" type="text" value="janedoe" required="" />
                <div class="invalid-feedback">This username is already taken!</div>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="form-4-city">City</label
              ><input class="form-control is-invalid" id="form-4-city" type="text" placeholder="City" required="" />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="form-4-state">State</label
              ><input class="form-control is-invalid" id="form-4-state" type="text" placeholder="State" required="" />
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="form-4-zip">Zip</label
              ><input class="form-control is-invalid" id="form-4-zip" type="text" placeholder="Zip" required="" />
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input is-invalid" id="form-4-tos" type="checkbox" value="" required="" /><label
                class="form-check-label"
                for="form-4-tos"
                >I Agree to the Terms of Service</label
              >
              <div class="invalid-feedback">You must agree before submitting.</div>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
    <div class="snippet">
      <div class="bg-white text-dark border rounded-sm p-4 mb-3">
        <div class="input-group mb-3">
          <div class="input-group-prepend"><span class="input-group-text" id="form-5-at">@</span></div>
          <input
            class="form-control"
            type="text"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="form-5-at"
          />
        </div>
        <div class="input-group mb-3">
          <input
            class="form-control"
            type="text"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="form-5-email-domain"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="form-5-email-domain">@example.com</span>
          </div>
        </div>
        <label for="form-5-url">Your vanity URL</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="form-5-url-prefix">https://example.com/users/</span>
          </div>
          <input class="form-control" id="form-5-url" type="text" aria-describedby="form-5-url-prefix" />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend"><span class="input-group-text">$</span></div>
          <input class="form-control" type="text" aria-label="Amount (to the nearest dollar)" />
          <div class="input-group-append"><span class="input-group-text">.00</span></div>
        </div>
        <div class="input-group">
          <div class="input-group-prepend"><span class="input-group-text">Notes</span></div>
          <textarea class="form-control" aria-label="Notes" rows="3"></textarea>
        </div>
      </div>
    </div>
    <div class="snippet">
      <div class="bg-white text-dark border rounded-sm p-4 mb-3">
        <div class="row">
          <div class="col-md-4">
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input" id="custom-checkbox-1" type="checkbox" /><label
                class="custom-control-label"
                for="custom-checkbox-1"
                >A Custom Checkbox</label
              >
            </div>
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input" id="custom-checkbox-2" type="checkbox" /><label
                class="custom-control-label"
                for="custom-checkbox-2"
                >A Custom Checkbox 2</label
              >
            </div>
            <div class="custom-control custom-checkbox mb-3">
              <input class="custom-control-input" id="custom-checkbox-3" type="checkbox" disabled="" /><label
                class="custom-control-label"
                for="custom-checkbox-3"
                >A Disabled Custom Checkbox</label
              >
            </div>
          </div>
          <div class="col-md-4">
            <div class="custom-control custom-radio">
              <input class="custom-control-input" id="custom-radio-1" type="radio" name="customRadio" /><label
                class="custom-control-label"
                for="custom-radio-1"
                >A Custom Radio</label
              >
            </div>
            <div class="custom-control custom-radio">
              <input class="custom-control-input" id="custom-radio-2" type="radio" name="customRadio" /><label
                class="custom-control-label"
                for="custom-radio-2"
                >A Custom Radio 2</label
              >
            </div>
            <div class="custom-control custom-radio mb-3">
              <input
                class="custom-control-input"
                id="custom-radio-3"
                type="radio"
                name="customRadio"
                disabled=""
              /><label class="custom-control-label" for="custom-radio-3">A Disabled Custom Radio</label>
            </div>
          </div>
          <div class="col-md-4">
            <div class="custom-control custom-switch">
              <input class="custom-control-input" id="custom-switch-1" type="checkbox" /><label
                class="custom-control-label"
                for="custom-switch-1"
                >A Custom Switch</label
              >
            </div>
            <div class="custom-control custom-switch">
              <input class="custom-control-input" id="custom-switch-2" type="checkbox" /><label
                class="custom-control-label"
                for="custom-switch-2"
                >A Custom Switch 2</label
              >
            </div>
            <div class="custom-control custom-switch mb-3">
              <input class="custom-control-input" id="custom-switch-3" type="checkbox" disabled="" /><label
                class="custom-control-label"
                for="custom-switch-3"
                >A Disabled Custom Switch</label
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <select class="custom-select mb-3"
              ><option selected="">A Custom Select</option
              ><option value="1">One</option
              ><option value="2">Two</option
              ><option value="3">Three</option></select
            >
          </div>
          <div class="col-md-4">
            <select class="custom-select mb-3 mb-md-0" multiple=""
              ><option selected="">A Custom Multiple Select</option
              ><option value="1">One</option
              ><option value="2">Two</option
              ><option value="3">Three</option></select
            >
          </div>
          <div class="col-md-4">
            <label for="custom-range-1">A Custom Range</label
            ><input class="custom-range" id="custom-range-1" type="range" />
          </div>
        </div>
      </div>
    </div>
    <h2 class="h3 my-4 text-center">Navbar</h2>
    <div class="d-flex flex-column mb-3">
      <div class="snippet">
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
          <a class="navbar-brand" href="#">Brand</a
          ><button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-0"
            aria-controls="navbar-0"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-0">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a
              ><a class="nav-item nav-link" href="#">Documentation</a><a class="nav-item nav-link" href="#">Examples</a
              ><a class="nav-item nav-link" href="#">Blog</a>
            </div>
            <div class="navbar-nav ml-auto"><a class="nav-item nav-link" href="#">Contact Us</a></div>
          </div>
        </nav>
      </div>
      <div class="snippet">
        <nav class="navbar navbar-expand-sm navbar-dark bg-secondary mb-3">
          <a class="navbar-brand" href="#">Brand</a
          ><button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-1"
            aria-controls="navbar-1"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-1">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a
              ><a class="nav-item nav-link" href="#">Documentation</a><a class="nav-item nav-link" href="#">Examples</a
              ><a class="nav-item nav-link" href="#">Blog</a>
            </div>
            <div class="navbar-nav ml-auto"><a class="nav-item nav-link" href="#">Contact Us</a></div>
          </div>
        </nav>
      </div>
      <div class="snippet">
        <nav class="navbar navbar-expand-sm navbar-dark bg-success mb-3">
          <a class="navbar-brand" href="#">Brand</a
          ><button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-2"
            aria-controls="navbar-2"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-2">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a
              ><a class="nav-item nav-link" href="#">Documentation</a><a class="nav-item nav-link" href="#">Examples</a
              ><a class="nav-item nav-link" href="#">Blog</a>
            </div>
            <div class="navbar-nav ml-auto"><a class="nav-item nav-link" href="#">Contact Us</a></div>
          </div>
        </nav>
      </div>
      <div class="snippet">
        <nav class="navbar navbar-expand-sm navbar-dark bg-info mb-3">
          <a class="navbar-brand" href="#">Brand</a
          ><button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-3"
            aria-controls="navbar-3"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-3">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a
              ><a class="nav-item nav-link" href="#">Documentation</a><a class="nav-item nav-link" href="#">Examples</a
              ><a class="nav-item nav-link" href="#">Blog</a>
            </div>
            <div class="navbar-nav ml-auto"><a class="nav-item nav-link" href="#">Contact Us</a></div>
          </div>
        </nav>
      </div>
      <div class="snippet">
        <nav class="navbar navbar-expand-sm navbar-dark bg-warning mb-3">
          <a class="navbar-brand" href="#">Brand</a
          ><button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-4"
            aria-controls="navbar-4"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-4">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a
              ><a class="nav-item nav-link" href="#">Documentation</a><a class="nav-item nav-link" href="#">Examples</a
              ><a class="nav-item nav-link" href="#">Blog</a>
            </div>
            <div class="navbar-nav ml-auto"><a class="nav-item nav-link" href="#">Contact Us</a></div>
          </div>
        </nav>
      </div>
      <div class="snippet">
        <nav class="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
          <a class="navbar-brand" href="#">Brand</a
          ><button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-5"
            aria-controls="navbar-5"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-5">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a
              ><a class="nav-item nav-link" href="#">Documentation</a><a class="nav-item nav-link" href="#">Examples</a
              ><a class="nav-item nav-link" href="#">Blog</a>
            </div>
            <div class="navbar-nav ml-auto"><a class="nav-item nav-link" href="#">Contact Us</a></div>
          </div>
        </nav>
      </div>
      <div class="snippet">
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
          <a class="navbar-brand" href="#">Brand</a
          ><button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-6"
            aria-controls="navbar-6"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-6">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a
              ><a class="nav-item nav-link" href="#">Documentation</a><a class="nav-item nav-link" href="#">Examples</a
              ><a class="nav-item nav-link" href="#">Blog</a>
            </div>
            <div class="navbar-nav ml-auto"><a class="nav-item nav-link" href="#">Contact Us</a></div>
          </div>
        </nav>
      </div>
    </div>
    <h2 class="h3 my-4 text-center">Table</h2>
    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="mb-2 font-weight-bold text-center">Plain</div>
        <div class="snippet">
          <table class="table bg-white text-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Stars</th>
                <th scope="col">Forks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bootstrap</td>
                <td>135k</td>
                <td>66k</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Semantic UI</td>
                <td>46k</td>
                <td>5k</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bulma</td>
                <td>36k</td>
                <td>3k</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Foundation</td>
                <td>28k</td>
                <td>6k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="mb-2 font-weight-bold text-center">Dark</div>
        <div class="snippet">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Stars</th>
                <th scope="col">Forks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bootstrap</td>
                <td>135k</td>
                <td>66k</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Semantic UI</td>
                <td>46k</td>
                <td>5k</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bulma</td>
                <td>36k</td>
                <td>3k</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Foundation</td>
                <td>28k</td>
                <td>6k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="mb-2 font-weight-bold text-center">Striped</div>
        <div class="snippet">
          <table class="table bg-white text-dark table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Stars</th>
                <th scope="col">Forks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bootstrap</td>
                <td>135k</td>
                <td>66k</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Semantic UI</td>
                <td>46k</td>
                <td>5k</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bulma</td>
                <td>36k</td>
                <td>3k</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Foundation</td>
                <td>28k</td>
                <td>6k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="mb-2 font-weight-bold text-center">Striped + Dark</div>
        <div class="snippet">
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Stars</th>
                <th scope="col">Forks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bootstrap</td>
                <td>135k</td>
                <td>66k</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Semantic UI</td>
                <td>46k</td>
                <td>5k</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bulma</td>
                <td>36k</td>
                <td>3k</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Foundation</td>
                <td>28k</td>
                <td>6k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="mb-2 font-weight-bold text-center">Bordered</div>
        <div class="snippet">
          <table class="table bg-white text-dark table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Stars</th>
                <th scope="col">Forks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bootstrap</td>
                <td>135k</td>
                <td>66k</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Semantic UI</td>
                <td>46k</td>
                <td>5k</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bulma</td>
                <td>36k</td>
                <td>3k</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Foundation</td>
                <td>28k</td>
                <td>6k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="mb-2 font-weight-bold text-center">Bordered + Dark</div>
        <div class="snippet">
          <table class="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Stars</th>
                <th scope="col">Forks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bootstrap</td>
                <td>135k</td>
                <td>66k</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Semantic UI</td>
                <td>46k</td>
                <td>5k</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bulma</td>
                <td>36k</td>
                <td>3k</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Foundation</td>
                <td>28k</td>
                <td>6k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="mb-2 font-weight-bold text-center">Hover</div>
        <div class="snippet">
          <table class="table bg-white text-dark table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Stars</th>
                <th scope="col">Forks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bootstrap</td>
                <td>135k</td>
                <td>66k</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Semantic UI</td>
                <td>46k</td>
                <td>5k</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bulma</td>
                <td>36k</td>
                <td>3k</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Foundation</td>
                <td>28k</td>
                <td>6k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="mb-2 font-weight-bold text-center">Hover + Dark</div>
        <div class="snippet">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Stars</th>
                <th scope="col">Forks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bootstrap</td>
                <td>135k</td>
                <td>66k</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Semantic UI</td>
                <td>46k</td>
                <td>5k</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bulma</td>
                <td>36k</td>
                <td>3k</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Foundation</td>
                <td>28k</td>
                <td>6k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="mb-2 font-weight-bold text-center">Small</div>
        <div class="snippet">
          <table class="table bg-white text-dark table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Stars</th>
                <th scope="col">Forks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bootstrap</td>
                <td>135k</td>
                <td>66k</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Semantic UI</td>
                <td>46k</td>
                <td>5k</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bulma</td>
                <td>36k</td>
                <td>3k</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Foundation</td>
                <td>28k</td>
                <td>6k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="mb-2 font-weight-bold text-center">Small + Dark</div>
        <div class="snippet">
          <table class="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Stars</th>
                <th scope="col">Forks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bootstrap</td>
                <td>135k</td>
                <td>66k</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Semantic UI</td>
                <td>46k</td>
                <td>5k</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bulma</td>
                <td>36k</td>
                <td>3k</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Foundation</td>
                <td>28k</td>
                <td>6k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <h2 class="h3 my-4 text-center">Breadcrumb</h2>
    <div class="snippet">
      <div class="d-flex flex-column bg-white pt-3 px-3 rounded-sm mb-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
          </ol>
        </nav>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
        </nav>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
      </div>
    </div>
    <h2 class="h3 my-4 text-center">Pagination</h2>
    <div class="snippet">
      <div class="d-flex justify-content-center">
        <nav aria-label="Pagination">
          <ul class="pagination">
            <li class="page-item disabled"><a class="page-link" href="#" aria-disabled="true">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item active"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="snippet">
      <div class="d-flex justify-content-center">
        <nav aria-label="Pagination">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="mx-3 align-self-center text-muted">Page 4 of 4</li>
            <li class="page-item disabled"><a class="page-link" href="#" aria-disabled="true">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <h2 class="h3 my-4 text-center">Progress</h2>
    <div class="h5 text-center">Plain</div>
    <div class="snippet">
      <div class="progress mb-2">
        <div
          class="progress-bar bg-primary"
          role="progressbar"
          style="width:75%"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress mb-2">
        <div
          class="progress-bar bg-secondary"
          role="progressbar"
          style="width:25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress mb-2">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width:50%"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress mb-2">
        <div
          class="progress-bar bg-info"
          role="progressbar"
          style="width:100%"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress mb-2">
        <div
          class="progress-bar bg-warning"
          role="progressbar"
          style="width:75%"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress mb-2">
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          style="width:25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress mb-2">
        <div
          class="progress-bar bg-dark"
          role="progressbar"
          style="width:50%"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div class="h5 text-center mt-3">With Label</div>
    <div class="snippet">
      <div class="progress mb-2">
        <div
          class="progress-bar bg-primary text-white"
          role="progressbar"
          style="width:75%;"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          75%
        </div>
      </div>
      <div class="progress mb-2">
        <div
          class="progress-bar bg-secondary text-white"
          role="progressbar"
          style="width:25%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>
      <div class="progress mb-2">
        <div
          class="progress-bar bg-success text-white"
          role="progressbar"
          style="width:50%;"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          50%
        </div>
      </div>
      <div class="progress mb-2">
        <div
          class="progress-bar bg-info text-white"
          role="progressbar"
          style="width:100%;"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          100%
        </div>
      </div>
      <div class="progress mb-2">
        <div
          class="progress-bar bg-warning text-white"
          role="progressbar"
          style="width:75%;"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          75%
        </div>
      </div>
      <div class="progress mb-2">
        <div
          class="progress-bar bg-danger text-white"
          role="progressbar"
          style="width:25%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>
      <div class="progress mb-2">
        <div
          class="progress-bar bg-dark text-white"
          role="progressbar"
          style="width:50%;"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          50%
        </div>
      </div>
    </div>
    <h2 class="h3 my-4 text-center">Card</h2>
    <div class="row">
      <div class="col-sm-6">
        <div class="snippet">
          <div class="card text-center text-dark mb-3">
            <div class="card-header">Default Card</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a class="btn btn-primary" href="#">Do Something</a>
            </div>
            <div class="card-footer">Just Now</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="snippet">
          <div class="card text-center bg-primary text-white mb-3">
            <div class="card-header">Primary Card</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a class="btn btn-light" href="#">Do Something</a>
            </div>
            <div class="card-footer">Just Now</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="snippet">
          <div class="card text-center bg-secondary text-white mb-3">
            <div class="card-header">Secondary Card</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a class="btn btn-light" href="#">Do Something</a>
            </div>
            <div class="card-footer">Just Now</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="snippet">
          <div class="card text-center bg-success text-white mb-3">
            <div class="card-header">Success Card</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a class="btn btn-light" href="#">Do Something</a>
            </div>
            <div class="card-footer">Just Now</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="snippet">
          <div class="card text-center bg-info text-white mb-3">
            <div class="card-header">Info Card</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a class="btn btn-light" href="#">Do Something</a>
            </div>
            <div class="card-footer">Just Now</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="snippet">
          <div class="card text-center bg-warning text-white mb-3">
            <div class="card-header">Warning Card</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a class="btn btn-light" href="#">Do Something</a>
            </div>
            <div class="card-footer">Just Now</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="snippet">
          <div class="card text-center bg-danger text-white mb-3">
            <div class="card-header">Danger Card</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a class="btn btn-light" href="#">Do Something</a>
            </div>
            <div class="card-footer">Just Now</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="snippet">
          <div class="card text-center bg-dark text-white mb-3">
            <div class="card-header">Dark Card</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a class="btn btn-light" href="#">Do Something</a>
            </div>
            <div class="card-footer">Just Now</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="snippet">
          <div class="card text-center bg-light text-dark mb-3">
            <div class="card-header">Light Card</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a class="btn btn-primary" href="#">Do Something</a>
            </div>
            <div class="card-footer">Just Now</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
