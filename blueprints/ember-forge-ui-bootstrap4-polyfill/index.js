module.exports = {

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        'ember-forge/ember-forge-ui-bootstrap4#form-components'
      ]
    });
  }
};
