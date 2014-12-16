// Generated by IcedCoffeeScript 1.8.0-c
(function() {
  var gh;

  gh = function(perms) {
    var is_gh_team_admin;
    is_gh_team_admin = function(user, team) {
      return perms._has_resource_role(user, 'gh', 'user') && perms._is_team_admin(user, team);
    };
    return perms.gh = {
      add_team_asset: function(user, team) {
        return perms.kratos._is_kratos_admin(user) || is_gh_team_admin(user, team);
      },
      remove_team_asset: function(user, team) {
        return perms.kratos._is_kratos_admin(user) || is_gh_team_admin(user, team);
      },
      _is_gh_team_admin: is_gh_team_admin
    };
  };

  if (typeof window !== "undefined" && window !== null) {
    gh(window.kratos.perms);
  } else if (typeof exports !== "undefined" && exports !== null) {
    module.exports = gh;
  }

}).call(this);