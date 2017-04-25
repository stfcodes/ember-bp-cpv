# ember-bp-cpv

[![Build Status](https://travis-ci.org/shuriu/ember-bp-cpv.svg?branch=master)](https://travis-ci.org/shuriu/ember-bp-cpv)
[![npm version](https://badge.fury.io/js/ember-bp-cpv.svg)](https://badge.fury.io/js/ember-bp-cpv)
[![Ember Observer Score](https://emberobserver.com/badges/ember-bp-cpv.svg)](https://emberobserver.com/addons/ember-bp-cpv)

`ember-bp-cpv` is a small wrapper around [`ember-buffered-proxy`](https://github.com/yapplabs/ember-buffered-proxy) that reduces the boilerplate of creating a validated buffer.

## Why?

Because most of the time, you don't want to change the underlying model directly. Also because you don't want so much boilerplate.

  `ember install ember-bp-cpv`

## Usage

The intended usage is with [`ember-cp-validations`](https://github.com/offirgolan/ember-cp-validations) (not included in this addon):

```js
import Ember from 'ember';
import createBuffer from 'ember-bp-cpv';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: {
    validators: [
      validator('presence', true)
    ]
  }
});

export default Ember.Controller.extend({
  buffer: createBuffer('model', Validations)
});
```

Now in you have access to a validated `buffer` that you can use wherever you please.

You can also use the buffer without validations:

```js
import Ember from 'ember';
import createBuffer from 'ember-bp-cpv';

export default Ember.Controller.extend({
  buffer: createBuffer('model')
});
```

## Contributing

**Any contribution**, be it an issue, a feature or a bugfix is greatly appreciated :heart:

Also, if your feature or bugfix is tested, I will give you commit rights.

## Credits / Inspiration

* [`ember-validated-form-buffer`](https://github.com/simplabs/ember-validated-form-buffer)
* [`ember-buffered-proxy`](https://github.com/yapplabs/ember-buffered-proxy)
* [`ember-cp-validations`](https://github.com/offirgolan/ember-cp-validations)
