<template>
  <header>
    <h2>Tables</h2>
  </header>

  <h4>Hover</h4>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Created at</th>
        <th>Status</th>
        <th class="col-md-3"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>First line</td>
        <td><span class="date"><sub>10:10</sub>01-01-2016</span></td>
        <td><span class="label label-success">Active</span></td>
        <td class="actions">
          <form-button type="primary" class="btn-xs">
            <i class="ion-edit"></i>Edit
          </form-button>&nbsp;
          <form-button type="danger" class="btn-xs">
            <i class="ion-trash-a"></i>Delete
          </form-button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Second line</td>
        <td><span class="date"><sub>11:12</sub>02-02-2016</span></td>
        <td><span class="label label-info">Standby</span></td>
        <td class="actions">
          <form-button type="primary" class="btn-xs">
            <i class="ion-edit"></i>Edit
          </form-button>&nbsp;
          <form-button type="danger" class="btn-xs">
            <i class="ion-trash-a"></i>Delete
          </form-button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5">
          Total: 2
        </td>
      </tr>
    </tfoot>
  </table>

  <h4>Striped</h4>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Created at</th>
        <th>Status</th>
        <th class="col-md-3"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>First line</td>
        <td><span class="date"><sub>10:10</sub>01-01-2016</span></td>
        <td><span class="label label-warning">Problems</span></td>
        <td class="actions">
          <form-button type="primary" class="btn-xs">
            <i class="ion-edit"></i>Edit
          </form-button>&nbsp;
          <form-button type="danger" class="btn-xs">
            <i class="ion-trash-a"></i>Delete
          </form-button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Second line</td>
        <td><span class="date"><sub>11:12</sub>02-02-2016</span></td>
        <td><span class="label label-danger">Disabled</span></td>
        <td class="actions">
          <form-button type="primary" class="btn-xs">
            <i class="ion-edit"></i>Edit
          </form-button>&nbsp;
          <form-button type="danger" class="btn-xs">
            <i class="ion-trash-a"></i>Delete
          </form-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import FormButton from 'src/elements/form/FormButton'

export default {
  components: {
    FormButton
  }
}
</script>
