/**
 * Created by colinhan on 31/10/2016.
 */
const tracer = require('tracer');
const config = require('config');
const fs = require('fs');
const _ = require('lodash');

var defaultSetting = {
  level: 0,
  format: '{{timestamp}} <{{title}}> [{{tag}}] {{message}} (in {{file}}:{{line}})',
};

module.exports = function(tag, logPath) {
  tag = (tag && tag.toUpperCase()) || 'NO-TAG';
  var setting = _.assign({}, defaultSetting, config.tracer);
  if(logPath) {
    setting.transport = function(data) {
      console.log(data.output);
      fs.appendFile(`${logPath}/${tag}.log`, data.output + '\n', (err) => {
        if (err) throw err;
      });
    }
  }
  setting.format = setting.format.replace(/\{\{tag}}/g, tag);
  return tracer.colorConsole(setting);
};


