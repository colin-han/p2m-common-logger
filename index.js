/**
 * Created by colinhan on 31/10/2016.
 */
const tracer = require('tracer');
const config = require('config');
const _ = require('lodash');

var defaultSetting = {
  level: 0,
  format: '{{timestamp}} <{{title}}> [{{tag}}] {{message}} (in {{file}}:{{line}})'
};

module.exports = function(tag) {
  var setting = _.assign({}, defaultSetting, config.tracer);
  tag = (tag && tag.toUpperCase()) || 'NO-TAG';
  setting.format = setting.format.replace(/\{\{tag}}/g, tag);
  return tracer.colorConsole(setting);
};

