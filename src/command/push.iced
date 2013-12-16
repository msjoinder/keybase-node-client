{Base} = require './base'
log = require '../log'
{ArgumentParser} = require 'argparse'
{add_option_dict} = require './argparse'
{PackageJson} = require '../package'
{gpg} = require '../gpg'
{BufferOutStream} = require '../stream'
session = require '../session'

##=======================================================================

exports.Command = class Command extends Base

  #----------

  use_session : () -> true

  #----------

  add_subcommand_parser : (scp) ->
    opts = 
      aliases  : []
      help : "push a PGP key from the client to the server"
    name = "push"
    sub = scp.addParser name, opts
    sub.addArgument [ "term"], { nargs : 1 }
    return opts.aliases.concat [ name ]

  #----------

  query_keys : (cb) ->

  #----------

  run : (cb) ->
    await session.login defer err
    console.log err
    console.log session.logged_in()
    cb null

##=======================================================================
