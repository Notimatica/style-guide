<template>
  <header>
    <h2>Form elements</h2>
  </header>

  <form role="form">
    <div class="row">
      <div class="col-md-6">
        <form-input
          label="Text input"
          placeholder="Placeholder">
        </form-input>
      </div>
      <div class="col-md-6">
        <form-input
          id="text-input-error"
          label="Error input"
          message="Your input is invalid"
          :error.sync="true"
          :value.sync="invalid">
        </form-input>
      </div>
    </div>

    <form-input
      id="text-input-disabled"
      label="Disabled input"
      :disabled="true"
      :value.sync="disabled">
    </form-input>

    <form-input
      id="text-input-group-left"
      label="Input group"
      :group="{left:true,text:'@'}"
      placeholder="Email">
    </form-input>
    <form-input
      id="text-input-group-right"
      :group="{right:true,text:'@'}"
      placeholder="Email">
    </form-input>

    <div class="row">
      <div class="col-md-4">
        <form-checkbox
          :checked="true">
          Common checkbox
        </form-checkbox>
        <form-checkbox
          :disabled="true">
          Disabled checkbox
        </form-checkbox>
        <form-checkbox
          message="You have to check it"
          :error="true">
          Invalid checkbox
        </form-checkbox>

      </div>
      <div class="col-md-4">
        <form-radio name="form-radio">
          <form-radio-btn value="first" :checked="true">First option</form-radio-btn>
          <form-radio-btn value="second" :disabled="true">Second disabled option</form-radio-btn>
          <form-radio-btn value="third">Third option</form-radio-btn>
        </form-radio>
      </div>

      <div class="col-md-4">
        <form-toggle>Sample toggle</form-toggle>
        <form-toggle :disabled="true">Disabled toggle</form-toggle>

        <form-select
          placeholder="Select value"
          :options="options">
        </form-select>
      </div>
    </div>

    <form-textarea
      label="Textarea"
      placeholder="Placeholder"
      :rows="4"
      help="Long boring help message with lots of text">
    </form-textarea>

    <placeholders-editable
      label="PlaceholdersEditable"
      :value.sync="contenteditable">
    </placeholders-editable>

    <multiple-select
      label="Multiselect"
      :options="multiselect.options"
      :values.sync="multiselect.selected">
    </multiple-select>
    Result: {{ multiselect.selected | json }}

    <br /><br />
    <div class="form-group">
      <label>Custom Multiselect:</label>
      <vue-multiselect
        :options="options"
        :selected.sync="selected"
        :multiple="true"
        :searchable="true"
        :hide-selected="true"
        key="value"
        label="text">
      </vue-multiselect>
    </div>

    Result: {{ selected | json }}

    <image-select
      label="Image selector"
      help="Enter valid image url"
      :height="300"
      :width="300">
    </image-select>
  </form>
</template>

<script>
import VueMultiselect from 'vue-multiselect'

import FormInput from 'components/FormInput'
import FormTextarea from 'components/FormTextarea'
import FormSelect from 'components/FormSelect'
import FormRadio from 'components/FormRadio'
import FormRadioBtn from 'components/FormRadioBtn'
import FormCheckbox from 'components/FormCheckbox'
import FormToggle from 'components/FormToggle'
import MultipleSelect from 'components/MultipleSelect'
import PlaceholdersEditable from 'components/PlaceholdersEditable'
import ImageSelect from 'components/ImageSelect'

export default {
  data () {
    return {
      invalid: 'Invalid input',
      disabled: 'Disabled value',
      options: [
        { value: 'one', text: 'One' },
        { value: 'two', text: 'Two' },
        { value: 'three', text: 'Three' }
      ],
      selected: ['one'],
      multiselect: {
        options: [
          { value: 'one', text: 'Lorem ipsum dolor sit amet consectetur', selected: true },
          { value: 'two', text: 'Duis aute irure dolor in reprehenderit voluptate', selected: false },
          { value: 'three', text: 'Excepteur sint occaecat cupidatat non proident', selected: false }
        ],
        selected: []
      },
      contenteditable: 'Hello %name%! This is a daily message from %project%. %date%'
    }
  },
  components: {
    FormInput,
    FormTextarea,
    FormSelect,
    FormRadio,
    FormRadioBtn,
    FormCheckbox,
    FormToggle,
    MultipleSelect,
    PlaceholdersEditable,
    VueMultiselect,
    ImageSelect
  }
}
</script>
