import Ember from 'ember';
import BufferedProxy from 'ember-buffered-proxy/proxy';

const {
  computed,
  get,
  getOwner
} = Ember;

function instantiateBuffer(model, owner, ...mixins) {
  let ownerInjection = owner.ownerInjection();
  return BufferedProxy.extend(...mixins).create(ownerInjection, { content: model });
}

export default function createBuffer(modelProperty, ...mixins) {
  return computed(modelProperty, function() {
    let model = get(this, modelProperty);
    let owner = getOwner(this);
    return instantiateBuffer(model, owner, ...mixins);
  });
}
