// Generated by IcedCoffeeScript 1.7.1-b
(function() {
  var ArgumentParser, Base, Command, E, PackageJson, add_option_dict, iced, log, session, __iced_k, __iced_k_noop,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  iced = require('iced-coffee-script').iced;
  __iced_k = __iced_k_noop = function() {};

  Base = require('./base').Base;

  log = require('../log');

  ArgumentParser = require('argparse').ArgumentParser;

  add_option_dict = require('./argparse').add_option_dict;

  PackageJson = require('../package').PackageJson;

  E = require('../err').E;

  session = require('../session').session;

  exports.Command = Command = (function(_super) {
    __extends(Command, _super);

    function Command() {
      return Command.__super__.constructor.apply(this, arguments);
    }

    Command.prototype.use_session = function() {
      return true;
    };

    Command.prototype.add_subcommand_parser = function(scp) {
      var name, opts, sub;
      opts = {
        help: "logout from the server"
      };
      name = "logout";
      sub = scp.addParser(name, opts);
      return [name];
    };

    Command.prototype.run = function(cb) {
      var err, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/node-client/src/command/logout.iced",
            funcname: "Command.run"
          });
          session.logout(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return err = arguments[0];
              };
            })(),
            lineno: 29
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          return cb(err);
        };
      })(this));
    };

    return Command;

  })(Base);

}).call(this);
