import Component from 'ember-forge-ui/components/ef-list-divider';
import Ember from 'ember';

const {
  get
} = Ember;

/**
 * @module
 * @augments ember-forge-ui/components/ef-list-divider
 */
export default Component.extend({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties


  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Manage class names dependent on list type and context of usage
   *
   * Ordered lists do not have any classes applied
   * Unordered lists are considered list groups and have their own class applied
   * Unordered lists used as navs have their own class applied
   *
   * @private
   * @override
   * @returns {undefined}
   */
  setContextClasses() {
    this._super(...arguments);

    if (!get(this, 'ordered')) {
      get(this, 'classNames').addObject((get(this, 'usedAs') === 'nav') ? 'nav-item' : 'list-group-item');
    }
  }

});
