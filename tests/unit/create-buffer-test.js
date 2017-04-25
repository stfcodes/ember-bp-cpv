import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
import { validator, buildValidations } from 'ember-cp-validations';
import createBuffer from 'ember-bp-cpv';
import createObject from '../helpers/create-object';

const {
  Object: EmObject
} = Ember;

moduleFor('create-buffer', 'Unit | create buffer', {
  integration: true // Lies..
});

test('it works without validations', function(assert) {
  let model = createObject(EmObject.extend({
    firstName: 'Stefan'
  }), this);
  let controller = createObject(EmObject.extend({
    buffer: createBuffer('model')
  }), this, { model });
  let buffer = controller.get('buffer');

  assert.ok(buffer, 'class instance has a buffer property');
  assert.equal(buffer.get('firstName'), 'Stefan', 'buffer object has the correct firstName');

  buffer.set('firstName', 'Rick');
  assert.equal(buffer.get('firstName'), 'Rick', 'buffer has the updated firstName');
  assert.equal(model.get('firstName'), 'Stefan', 'model has the correct firstName');
  buffer.applyBufferedChanges();
  assert.equal(model.get('firstName'), 'Rick', 'model has the correct firstName after applying changes');
});

test('it works with validations', function(assert) {
  let model = createObject(EmObject.extend({
    firstName: ''
  }), this);
  let Validations = buildValidations({
    firstName: validator('presence', true)
  });
  let controller = createObject(EmObject.extend({
    buffer: createBuffer('model', Validations)
  }), this, { model });
  let buffer = controller.get('buffer');

  assert.equal(buffer.get('validations.isInvalid'), true, 'buffer is invalid initially');
  buffer.set('firstName', 'Stefan');
  assert.equal(buffer.get('validations.isValid'), true, 'buffer is valid now');
});
