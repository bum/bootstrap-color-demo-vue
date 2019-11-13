<template>
  <div class="container">
    <field-set legend="Form">
      <div class="row">
        <div class="col-md-6">
          <Pane class="mb-3">
            <form @submit.prevent>
              <TextBox
                id="form-1-email"
                type="email"
                label="Email address"
                hint="Enter email"
                help="We'll never share your mail with anyone else."
              />
              <TextBox id="form-1-pass" type="password" label="Password" hint="Password" />
              <CheckBox id="form-1-tos" label="I agree to the Terms of Service" />
              <button class="btn btn-primary" type="submit">Sign up</button>
            </form>
          </Pane>
        </div>

        <div class="col-md-6">
          <Pane class="mb-3">
            <form @submit.prevent>
              <TextBox id="form-2-email" type="email" label="Email address" hint="Enter email" />
              <TextBox
                id="form-2-pass"
                type="password"
                label="Password"
                hint="Password"
                help="Remember: The password is case-sensitive."
              />
              <CheckBox id="form-2-remember" label="Remember Me" />
              <button class="btn btn-primary" type="submit">Sign In</button>
            </form>
          </Pane>
        </div>
      </div>

      <div>
        <Pane class="mb-3">
          <form>
            <div class="form-row">
              <TextBox id="form-3-email" type="email" label="Email" hint="Email" class="col-md-6" />
              <TextBox id="form-3-pass" type="pass" label="Password" hint="Password" class="col-md-6" />
            </div>
            <TextBox id="form-3-address" type="text" label="Address" hint="1234 Main St" />
            <TextBox id="form-3-address-2" type="text" label="Address 2" hint="Apartment, Studio, or Floor" />
            <div class="form-row">
              <TextBox id="form-3-city" type="text" label="City" hint="City" class="col-md-6" />
              <SelectBox id="form-3-state" label="State" :options="['Choose...', '...']" class="col-md-4" />
              <TextBox id="form-3-zip" type="text" label="Zip" hint="Zip" class="col-md-2" />
            </div>
            <CheckBox id="form-3-agree" label="I agree to the Terms of Service" />
            <button class="btn btn-primary" type="submit">Sign Up</button>
          </form>
        </Pane>
      </div>

      <div>
        <Pane class="mb-3">
          <form>
            <div class="form-row">
              <TextBox
                id="form-4-first-name"
                type="text"
                label="First name"
                hint="First name"
                help="Looks good!"
                feedback="valid"
                class="col-md-4"
              />
              <TextBox
                id="form-4-last-name"
                type="text"
                label="Last name"
                hint="Last name"
                help="Looks good!"
                feedback="valid"
                class="col-md-4"
              />
              <div class="col-md-4 mb-3">
                <label for="form-4-username"> Username </label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"> @ </span>
                  </div>
                  <input class="form-control is-invalid" id="form-4-username" type="text" value="janedoe" required />
                  <div class="invalid-feedback">This username is already taken!</div>
                </div>
              </div>
            </div>

            <div class="form-row">
              <TextBox
                id="form-4-city"
                type="text"
                label="City"
                hint="City"
                help="Please provide a valid city."
                feedback="invalid"
                required
                class="col-md-4"
              />
              <TextBox
                id="form-4-state"
                type="text"
                label="State"
                hint="State"
                help="Please provide a valid state."
                feedback="invalid"
                required
                class="col-md-4"
              />
              <TextBox
                id="form-4-zip"
                type="text"
                label="Zip"
                hint="Zip"
                help="Please provide a valid zip."
                feedback="invalid"
                class="col-md-4"
              />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input is-invalid" id="form-4-tos" type="checkbox" value required />
                <label class="form-check-label" for="form-4-tos">
                  I Agree to the Terms of Service
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <button class="btn btn-primary" type="submit">Sign Up</button>
          </form>
        </Pane>
      </div>

      <div>
        <Pane class="mb-3">
          <InputGroup type="text" id="form-5-at" prepend="@" hint="Username" />
          <InputGroup type="text" id="form-5-email" append="@example.com" hint="Recipient's username" />
          <InputGroup type="text" id="form-5-url" label="Your vanity URL" prepend="https://example.com/users/" />
          <InputGroup type="text" id="form-5-amount" prepend="$" append=".00" />
          <InputGroup prepend="Notes">
            <textarea class="form-control" aria-label="Notes" rows="3"> </textarea>
          </InputGroup>
        </Pane>
      </div>
    </field-set>
  </div>
</template>

<script>
import { FieldSet, TextBox, CheckBox, SelectBox, InputGroup, Pane } from '@/components/controls'
import { contextuals } from '@/plugins'

export default {
  components: {
    FieldSet,
    TextBox,
    CheckBox,
    SelectBox,
    InputGroup,
    Pane,
  },
  computed: {
    contextuals: () => contextuals,
    labels: () => 'File Edit View History Help'.split(' '),
  },
}
</script>
