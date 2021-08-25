// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/katex/dist/katex.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./fonts\\KaTeX_AMS-Regular.woff2":[["KaTeX_AMS-Regular.590f7a40.woff2","node_modules/katex/dist/fonts/KaTeX_AMS-Regular.woff2"],"node_modules/katex/dist/fonts/KaTeX_AMS-Regular.woff2"],"./fonts\\KaTeX_AMS-Regular.woff":[["KaTeX_AMS-Regular.27e25fa2.woff","node_modules/katex/dist/fonts/KaTeX_AMS-Regular.woff"],"node_modules/katex/dist/fonts/KaTeX_AMS-Regular.woff"],"./fonts\\KaTeX_AMS-Regular.ttf":[["KaTeX_AMS-Regular.df2e402a.ttf","node_modules/katex/dist/fonts/KaTeX_AMS-Regular.ttf"],"node_modules/katex/dist/fonts/KaTeX_AMS-Regular.ttf"],"./fonts\\KaTeX_Caligraphic-Bold.woff2":[["KaTeX_Caligraphic-Bold.bc48536f.woff2","node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2"],"node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2"],"./fonts\\KaTeX_Caligraphic-Bold.woff":[["KaTeX_Caligraphic-Bold.d7ceb1f9.woff","node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff"],"node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff"],"./fonts\\KaTeX_Caligraphic-Bold.ttf":[["KaTeX_Caligraphic-Bold.58140e1c.ttf","node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf"],"node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf"],"./fonts\\KaTeX_Caligraphic-Regular.woff2":[["KaTeX_Caligraphic-Regular.35728534.woff2","node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2"],"node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2"],"./fonts\\KaTeX_Caligraphic-Regular.woff":[["KaTeX_Caligraphic-Regular.379ba55d.woff","node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff"],"node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff"],"./fonts\\KaTeX_Caligraphic-Regular.ttf":[["KaTeX_Caligraphic-Regular.43e14cb1.ttf","node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf"],"node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf"],"./fonts\\KaTeX_Fraktur-Bold.woff2":[["KaTeX_Fraktur-Bold.1a6fe0b3.woff2","node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2"],"node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2"],"./fonts\\KaTeX_Fraktur-Bold.woff":[["KaTeX_Fraktur-Bold.445f5e94.woff","node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.woff"],"node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.woff"],"./fonts\\KaTeX_Fraktur-Bold.ttf":[["KaTeX_Fraktur-Bold.20d7fd30.ttf","node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf"],"node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf"],"./fonts\\KaTeX_Fraktur-Regular.woff2":[["KaTeX_Fraktur-Regular.f97d6bcf.woff2","node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2"],"node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2"],"./fonts\\KaTeX_Fraktur-Regular.woff":[["KaTeX_Fraktur-Regular.0ada8e4c.woff","node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.woff"],"node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.woff"],"./fonts\\KaTeX_Fraktur-Regular.ttf":[["KaTeX_Fraktur-Regular.194dec61.ttf","node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf"],"node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf"],"./fonts\\KaTeX_Main-Bold.woff2":[["KaTeX_Main-Bold.ba9ada9f.woff2","node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff2"],"node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff2"],"./fonts\\KaTeX_Main-Bold.woff":[["KaTeX_Main-Bold.22976910.woff","node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff"],"node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff"],"./fonts\\KaTeX_Main-Bold.ttf":[["KaTeX_Main-Bold.d46878ad.ttf","node_modules/katex/dist/fonts/KaTeX_Main-Bold.ttf"],"node_modules/katex/dist/fonts/KaTeX_Main-Bold.ttf"],"./fonts\\KaTeX_Main-BoldItalic.woff2":[["KaTeX_Main-BoldItalic.04fa3087.woff2","node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2"],"node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2"],"./fonts\\KaTeX_Main-BoldItalic.woff":[["KaTeX_Main-BoldItalic.607650da.woff","node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff"],"node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff"],"./fonts\\KaTeX_Main-BoldItalic.ttf":[["KaTeX_Main-BoldItalic.314e9a10.ttf","node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf"],"node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf"],"./fonts\\KaTeX_Main-Italic.woff2":[["KaTeX_Main-Italic.9e14c1c1.woff2","node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff2"],"node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff2"],"./fonts\\KaTeX_Main-Italic.woff":[["KaTeX_Main-Italic.46b5b82b.woff","node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff"],"node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff"],"./fonts\\KaTeX_Main-Italic.ttf":[["KaTeX_Main-Italic.76c3d8ea.ttf","node_modules/katex/dist/fonts/KaTeX_Main-Italic.ttf"],"node_modules/katex/dist/fonts/KaTeX_Main-Italic.ttf"],"./fonts\\KaTeX_Main-Regular.woff2":[["KaTeX_Main-Regular.452dd42a.woff2","node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff2"],"node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff2"],"./fonts\\KaTeX_Main-Regular.woff":[["KaTeX_Main-Regular.45d11717.woff","node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff"],"node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff"],"./fonts\\KaTeX_Main-Regular.ttf":[["KaTeX_Main-Regular.e1dec154.ttf","node_modules/katex/dist/fonts/KaTeX_Main-Regular.ttf"],"node_modules/katex/dist/fonts/KaTeX_Main-Regular.ttf"],"./fonts\\KaTeX_Math-BoldItalic.woff2":[["KaTeX_Math-BoldItalic.fb7dd710.woff2","node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2"],"node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2"],"./fonts\\KaTeX_Math-BoldItalic.woff":[["KaTeX_Math-BoldItalic.2a50180b.woff","node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.woff"],"node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.woff"],"./fonts\\KaTeX_Math-BoldItalic.ttf":[["KaTeX_Math-BoldItalic.e482554e.ttf","node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf"],"node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf"],"./fonts\\KaTeX_Math-Italic.woff2":[["KaTeX_Math-Italic.48afc24d.woff2","node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff2"],"node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff2"],"./fonts\\KaTeX_Math-Italic.woff":[["KaTeX_Math-Italic.a2129d2f.woff","node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff"],"node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff"],"./fonts\\KaTeX_Math-Italic.ttf":[["KaTeX_Math-Italic.3f9cc6b6.ttf","node_modules/katex/dist/fonts/KaTeX_Math-Italic.ttf"],"node_modules/katex/dist/fonts/KaTeX_Math-Italic.ttf"],"./fonts\\KaTeX_SansSerif-Bold.woff2":[["KaTeX_SansSerif-Bold.86b990ad.woff2","node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2"],"node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2"],"./fonts\\KaTeX_SansSerif-Bold.woff":[["KaTeX_SansSerif-Bold.717ac67f.woff","node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.woff"],"node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.woff"],"./fonts\\KaTeX_SansSerif-Bold.ttf":[["KaTeX_SansSerif-Bold.060fdfbd.ttf","node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf"],"node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf"],"./fonts\\KaTeX_SansSerif-Italic.woff2":[["KaTeX_SansSerif-Italic.0796b1e0.woff2","node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2"],"node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2"],"./fonts\\KaTeX_SansSerif-Italic.woff":[["KaTeX_SansSerif-Italic.6351ba6c.woff","node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.woff"],"node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.woff"],"./fonts\\KaTeX_SansSerif-Italic.ttf":[["KaTeX_SansSerif-Italic.b9a14603.ttf","node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf"],"node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf"],"./fonts\\KaTeX_SansSerif-Regular.woff2":[["KaTeX_SansSerif-Regular.3f487e12.woff2","node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2"],"node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2"],"./fonts\\KaTeX_SansSerif-Regular.woff":[["KaTeX_SansSerif-Regular.13afaddf.woff","node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.woff"],"node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.woff"],"./fonts\\KaTeX_SansSerif-Regular.ttf":[["KaTeX_SansSerif-Regular.5191892e.ttf","node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf"],"node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf"],"./fonts\\KaTeX_Script-Regular.woff2":[["KaTeX_Script-Regular.89ee0070.woff2","node_modules/katex/dist/fonts/KaTeX_Script-Regular.woff2"],"node_modules/katex/dist/fonts/KaTeX_Script-Regular.woff2"],"./fonts\\KaTeX_Script-Regular.woff":[["KaTeX_Script-Regular.41c8ba97.woff","node_modules/katex/dist/fonts/KaTeX_Script-Regular.woff"],"node_modules/katex/dist/fonts/KaTeX_Script-Regular.woff"],"./fonts\\KaTeX_Script-Regular.ttf":[["KaTeX_Script-Regular.374e792d.ttf","node_modules/katex/dist/fonts/KaTeX_Script-Regular.ttf"],"node_modules/katex/dist/fonts/KaTeX_Script-Regular.ttf"],"./fonts\\KaTeX_Size1-Regular.woff2":[["KaTeX_Size1-Regular.0f87922f.woff2","node_modules/katex/dist/fonts/KaTeX_Size1-Regular.woff2"],"node_modules/katex/dist/fonts/KaTeX_Size1-Regular.woff2"],"./fonts\\KaTeX_Size1-Regular.woff":[["KaTeX_Size1-Regular.3ffa1cf4.woff","node_modules/katex/dist/fonts/KaTeX_Size1-Regular.woff"],"node_modules/katex/dist/fonts/KaTeX_Size1-Regular.woff"],"./fonts\\KaTeX_Size1-Regular.ttf":[["KaTeX_Size1-Regular.6edba42d.ttf","node_modules/katex/dist/fonts/KaTeX_Size1-Regular.ttf"],"node_modules/katex/dist/fonts/KaTeX_Size1-Regular.ttf"],"./fonts\\KaTeX_Size2-Regular.woff2":[["KaTeX_Size2-Regular.5180f285.woff2","node_modules/katex/dist/fonts/KaTeX_Size2-Regular.woff2"],"node_modules/katex/dist/fonts/KaTeX_Size2-Regular.woff2"],"./fonts\\KaTeX_Size2-Regular.woff":[["KaTeX_Size2-Regular.413d99b3.woff","node_modules/katex/dist/fonts/KaTeX_Size2-Regular.woff"],"node_modules/katex/dist/fonts/KaTeX_Size2-Regular.woff"],"./fonts\\KaTeX_Size2-Regular.ttf":[["KaTeX_Size2-Regular.6aff6a9b.ttf","node_modules/katex/dist/fonts/KaTeX_Size2-Regular.ttf"],"node_modules/katex/dist/fonts/KaTeX_Size2-Regular.ttf"],"./fonts\\KaTeX_Size3-Regular.woff2":[["KaTeX_Size3-Regular.10a64822.woff2","node_modules/katex/dist/fonts/KaTeX_Size3-Regular.woff2"],"node_modules/katex/dist/fonts/KaTeX_Size3-Regular.woff2"],"./fonts\\KaTeX_Size3-Regular.woff":[["KaTeX_Size3-Regular.88252b9b.woff","node_modules/katex/dist/fonts/KaTeX_Size3-Regular.woff"],"node_modules/katex/dist/fonts/KaTeX_Size3-Regular.woff"],"./fonts\\KaTeX_Size3-Regular.ttf":[["KaTeX_Size3-Regular.f65b0abc.ttf","node_modules/katex/dist/fonts/KaTeX_Size3-Regular.ttf"],"node_modules/katex/dist/fonts/KaTeX_Size3-Regular.ttf"],"./fonts\\KaTeX_Size4-Regular.woff2":[["KaTeX_Size4-Regular.ddb9f263.woff2","node_modules/katex/dist/fonts/KaTeX_Size4-Regular.woff2"],"node_modules/katex/dist/fonts/KaTeX_Size4-Regular.woff2"],"./fonts\\KaTeX_Size4-Regular.woff":[["KaTeX_Size4-Regular.f9be2d9f.woff","node_modules/katex/dist/fonts/KaTeX_Size4-Regular.woff"],"node_modules/katex/dist/fonts/KaTeX_Size4-Regular.woff"],"./fonts\\KaTeX_Size4-Regular.ttf":[["KaTeX_Size4-Regular.92cbdf26.ttf","node_modules/katex/dist/fonts/KaTeX_Size4-Regular.ttf"],"node_modules/katex/dist/fonts/KaTeX_Size4-Regular.ttf"],"./fonts\\KaTeX_Typewriter-Regular.woff2":[["KaTeX_Typewriter-Regular.62e9058d.woff2","node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2"],"node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2"],"./fonts\\KaTeX_Typewriter-Regular.woff":[["KaTeX_Typewriter-Regular.3b60890b.woff","node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff"],"node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff"],"./fonts\\KaTeX_Typewriter-Regular.ttf":[["KaTeX_Typewriter-Regular.e334f444.ttf","node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf"],"node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50467" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]);
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/katex.05a41348.js.map