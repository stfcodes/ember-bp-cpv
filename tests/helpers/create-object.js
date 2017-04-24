import Ember from 'ember';

const {
  getOwner
} = Ember;

export default function(object, context, options = {}) {
  return object.create(getOwner(context).ownerInjection(), options);
}
