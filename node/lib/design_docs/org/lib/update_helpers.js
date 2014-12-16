// Generated by IcedCoffeeScript 1.8.0-c
(function() {
  module.exports = {
    make_audit_trail: function(team, req, key, value) {
      return {
        u: req.userCtx.name,
        dt: +new Date(),
        a: action,
        k: key,
        v: value
      };
    },
    mk_objs: function(obj, path_array, val) {
      var key, last_key, _i, _len;
      if (val == null) {
        val = {};
      }

      /*
      make a set of nested object.
      
      mk_objs({'x': 1}, ['a', 'b'], [])
       * returns {'x': 1, 'a': {'b': []}}
      
      return the val
       */
      last_key = path_array.pop();
      for (_i = 0, _len = path_array.length; _i < _len; _i++) {
        key = path_array[_i];
        if (obj[key] == null) {
          obj[key] = {};
        }
        obj = obj[key];
      }
      if (!obj[last_key]) {
        obj[last_key] = val;
      }
      return obj[last_key];
    }
  };

}).call(this);