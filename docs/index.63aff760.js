// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kQMTH":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"adjPd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _simulationFragGlsl = require("./simulation.frag.glsl");
var _simulationFragGlslDefault = parcelHelpers.interopDefault(_simulationFragGlsl);
var _simulationVertGlsl = require("./simulation.vert.glsl");
var _simulationVertGlslDefault = parcelHelpers.interopDefault(_simulationVertGlsl);
var _renderFragGlsl = require("./render.frag.glsl");
var _renderFragGlslDefault = parcelHelpers.interopDefault(_renderFragGlsl);
var _renderVertGlsl = require("./render.vert.glsl");
var _renderVertGlslDefault = parcelHelpers.interopDefault(_renderVertGlsl);
// "global" variables
let gl, transformFeedback, framebuffer, simulationProgram, simulationPosition, renderProgram, buffers, mouseX = 0, mouseY = 0, uMouse, uTime, uCohesion, uSeparation, uAlign, uCohesionScale, uSeparationScale, uAlignScale, uCohesionAudio, uSeparationAudio, uAlignAudio, uDiffuse, uAudio, uAudioRender, audioCtx, analyser, ctxReady;
const textures = [], agentCount = 16384;
const PARAMS = {
    cohesionDist: 0.4,
    separationDist: 0.1,
    alignDist: 0.05,
    cohesionScale: 1,
    separationScale: 1,
    alignScale: 1
};
const AUDIO = {
    cohesionAudio: 1,
    separationAudio: 1,
    alignAudio: 1
};
window.onload = function() {
    const canvas = document.getElementById('gl');
    gl = canvas.getContext('webgl2');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.onmousemove = function(event) {
        mouseX = -1 + event.x / canvas.width * 2;
        mouseY = -1 + event.y / canvas.height * 2;
        mouseY *= -1;
    };
    ctxReady = false;
    window.onkeydown = function() {
        if (!ctxReady) {
            // audio init
            audioCtx = new AudioContext();
            const audioElement = document.getElementById('audioElement');
            const player = audioCtx.createMediaElementSource(audioElement);
            player.connect(audioCtx.destination);
            // audio graph setup
            analyser = audioCtx.createAnalyser();
            analyser.fftSize = 1024 // 512 bins
            ;
            player.connect(analyser);
            ctxReady = true;
        }
    };
    const pane = new Tweakpane.Pane();
    const tab = pane.addTab({
        pages: [
            {
                title: 'Behavior'
            },
            {
                title: 'Audio'
            }
        ]
    });
    tab.pages[0].addInput(PARAMS, 'cohesionDist', {
        min: 0,
        max: 0.5
    });
    tab.pages[0].addInput(PARAMS, 'separationDist', {
        min: 0,
        max: 0.5
    });
    tab.pages[0].addInput(PARAMS, 'alignDist', {
        min: 0.02,
        max: 0.5
    });
    tab.pages[0].addInput(PARAMS, 'cohesionScale', {
        min: 1,
        max: 30
    });
    tab.pages[0].addInput(PARAMS, 'separationScale', {
        min: 1,
        max: 30
    });
    tab.pages[0].addInput(PARAMS, 'alignScale', {
        min: 1,
        max: 30
    });
    tab.pages[1].addInput(AUDIO, 'cohesionAudio', {
        min: 0,
        max: 10
    });
    tab.pages[1].addInput(AUDIO, 'separationAudio', {
        min: 0,
        max: 10
    });
    tab.pages[1].addInput(AUDIO, 'alignAudio', {
        min: 0,
        max: 10
    });
    makeSimulationPhase();
    makeRenderPhase();
    makeTextures();
    framebuffer = gl.createFramebuffer();
    render();
};
function makeProgram(vert, frag, transform = null) {
    let vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vert);
    gl.compileShader(vertexShader);
    let err = gl.getShaderInfoLog(vertexShader);
    if (err !== '') console.log(err);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, frag);
    gl.compileShader(fragmentShader);
    err = gl.getShaderInfoLog(fragmentShader);
    if (err !== '') console.log(err);
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    // transform feedback must happen before shader is linked / used.
    let trasformFeedback;
    if (transform !== null) {
        transformFeedback = gl.createTransformFeedback();
        gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);
        gl.transformFeedbackVaryings(program, transform, gl.SEPARATE_ATTRIBS);
    }
    gl.linkProgram(program);
    // return an array containing shader program and transform feedback
    // if feedback is enabled, otherwise just return shader program
    return transform === null ? program : [
        program,
        transformFeedback
    ];
}
function makeBuffers(array, count = 1, usage = gl.STATIC_DRAW) {
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, array, usage);
    let buffers1 = null;
    if (count > 1) {
        buffers1 = [
            buffer
        ];
        for(let i = 0; i < count; i++){
            const buff = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buff);
            gl.bufferData(gl.ARRAY_BUFFER, array.byteLength, usage);
            buffers1.push(buff);
        }
    }
    return Array.isArray(buffers1) ? buffers1 : buffer;
}
function makeSimulationPhase() {
    // pass in our vertex/fragment shader source code, and specify
    // that the attribute agent_out should be fed into transform feedback
    const shader = makeProgram(_simulationVertGlslDefault.default, _simulationFragGlslDefault.default, [
        'agent_out'
    ]);
    simulationProgram = shader[0];
    transformFeedback = shader[1];
    gl.useProgram(simulationProgram);
    buffers = makeSimulationBuffer();
    makeSimulationUniforms();
}
function makeSimulationBuffer() {
    const __agents = [];
    for(let i = 0; i <= agentCount * 4; i += 4){
        __agents[i] = -1 + Math.random() * 2;
        __agents[i + 1] = -1 + Math.random() * 2;
        __agents[i + 2] = -2 + Math.random() * 10;
        __agents[i + 3] = -2 + Math.random() * 10;
    // use i+2 and i+3 to set initial velocities, default to 0
    }
    const agents = new Float32Array(__agents);
    // makeBuffers accepts initial data, number of buffers, and buffer usage
    // we'll make two buffers so we can complete the necessary swaps for
    // transform feedback
    return makeBuffers(agents, 2, gl.DYNAMIC_COPY);
}
function makeSimulationUniforms() {
    // this input variable will be fed by feedback
    const simulationPosition1 = gl.getAttribLocation(simulationProgram, 'agent_in');
    gl.enableVertexAttribArray(simulationPosition1);
    gl.vertexAttribPointer(simulationPosition1, 4, gl.FLOAT, false, 0, 0);
    // number of agents in our flock
    const count = gl.getUniformLocation(simulationProgram, 'agentCount');
    gl.uniform1f(count, agentCount);
    //Mouse position
    uMouse = gl.getUniformLocation(simulationProgram, 'mouse');
    gl.uniform2f(uMouse, 0, 0);
    //Parameters
    uCohesion = gl.getUniformLocation(simulationProgram, 'cohesionDist');
    gl.uniform1f(uCohesion, PARAMS.cohesionDist);
    uSeparation = gl.getUniformLocation(simulationProgram, 'separationDist');
    gl.uniform1f(uSeparation, PARAMS.separationDist);
    uAlign = gl.getUniformLocation(simulationProgram, 'alignDist');
    gl.uniform1f(uAlign, PARAMS.alignDist);
    uCohesionScale = gl.getUniformLocation(simulationProgram, 'cohesionScale');
    gl.uniform1f(uCohesionScale, PARAMS.cohesionScale);
    uSeparationScale = gl.getUniformLocation(simulationProgram, 'separationScale');
    gl.uniform1f(uSeparationScale, PARAMS.separationScale);
    uAlignScale = gl.getUniformLocation(simulationProgram, 'alignScale');
    gl.uniform1f(uAlignScale, PARAMS.alignScale);
    uCohesionAudio = gl.getUniformLocation(simulationProgram, 'cohesionAudio');
    gl.uniform1f(uCohesionAudio, AUDIO.cohesionAudio);
    uSeparationAudio = gl.getUniformLocation(simulationProgram, 'separationAudio');
    gl.uniform1f(uSeparationAudio, AUDIO.separationAudio);
    uAlignAudio = gl.getUniformLocation(simulationProgram, 'alignAudio');
    gl.uniform1f(uAlignAudio, AUDIO.alignAudio);
    uAudio = gl.getUniformLocation(simulationProgram, 'audio');
}
function makeRenderPhase() {
    renderProgram = makeProgram(_renderVertGlslDefault.default, _renderFragGlslDefault.default);
    uTime = gl.getUniformLocation(renderProgram, 'time');
    const renderPosition = gl.getAttribLocation(renderProgram, 'agent');
    gl.enableVertexAttribArray(renderPosition);
    gl.vertexAttribPointer(renderPosition, 4, gl.FLOAT, false, 0, 0);
    uAudioRender = gl.getUniformLocation(renderProgram, 'audio');
    gl.useProgram(renderProgram);
//gl.enable(gl.BLEND)
//gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA)
}
function makeTextures() {
    textures[0] = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, textures[0]);
    gl.getExtension('EXT_color_buffer_float');
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    // width = agentCount, height = 1
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, agentCount, 1, 0, gl.RGBA, gl.FLOAT, null);
    textures[1] = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, textures[1]);
    gl.getExtension('EXT_color_buffer_float');
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, agentCount, 1, 0, gl.RGBA, gl.FLOAT, null);
}
let time = 0;
function render() {
    var source = document.getElementById('audioSource');
    time++;
    window.requestAnimationFrame(render);
    gl.useProgram(simulationProgram);
    //Put in mouse uniform
    gl.uniform2f(uMouse, mouseX, mouseY);
    //Pass in parameter uniforms
    gl.uniform1f(uCohesion, PARAMS.cohesionDist);
    gl.uniform1f(uSeparation, PARAMS.separationDist);
    gl.uniform1f(uAlign, PARAMS.alignDist);
    gl.uniform1f(uCohesionScale, PARAMS.cohesionScale);
    gl.uniform1f(uAlignScale, PARAMS.alignScale);
    gl.uniform1f(uSeparationScale, PARAMS.separationScale);
    //Put in audio uniform
    if (ctxReady) {
        var freqArray = new Uint8Array(analyser.fftSize);
        analyser.getByteTimeDomainData(freqArray);
        console.log(freqArray[0]);
        audioValue = parseFloat(freqArray[0] - 100);
        if (audioValue >= 0) gl.uniform1f(uAudio, audioValue);
        else gl.uniform1f(uAudio, 0);
        gl.uniform1f(uCohesionAudio, AUDIO.cohesionAudio);
        gl.uniform1f(uSeparationAudio, AUDIO.separationAudio);
        gl.uniform1f(uAlignAudio, AUDIO.alignAudio);
    }
    gl.uniform1i(uDiffuse, PARAMS.diffuseBoids);
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    // specify rendering to a width equal to the number of agents,
    // but only one high for simplicity of lookup
    gl.viewport(0, 0, agentCount, 1);
    // render to textures[1], swap at end of render()
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, textures[1], 0);
    // read from textures[0], swap at end of render()
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, textures[0]);
    // feedback transform
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers[0]);
    gl.vertexAttribPointer(simulationPosition, 4, gl.FLOAT, false, 0, 0);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, buffers[1]);
    gl.beginTransformFeedback(gl.POINTS);
    // draw via POINTS
    gl.drawArrays(gl.POINTS, 0, agentCount);
    gl.endTransformFeedback();
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    // important!!! last render was specified as only one pixel in height,
    // that won't do for rendering our quad
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.useProgram(renderProgram);
    gl.uniform1f(uTime, time);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers[0]);
    gl.drawArrays(gl.POINTS, 0, agentCount);
    // swaps
    let tmp = buffers[0];
    buffers[0] = buffers[1];
    buffers[1] = tmp;
    tmp = textures[0];
    textures[0] = textures[1];
    textures[1] = tmp;
}

},{"./simulation.frag.glsl":"kH6ba","./simulation.vert.glsl":"ldFyr","./render.frag.glsl":"4lX5e","./render.vert.glsl":"eiMhW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kH6ba":[function(require,module,exports) {
module.exports = "#version 300 es\nprecision mediump float;\n#define GLSLIFY 1\n\nin  vec4 agent_out;\nout vec4 frag;\n\nvoid main() {\n  frag = agent_out;\n}";

},{}],"ldFyr":[function(require,module,exports) {
module.exports = "#version 300 es\nprecision mediump float;\n#define GLSLIFY 1\n\n// last reported agent (vertex) position/velocity\nin vec4 agent_in;\n\n// texture containing position/velocity of all agents\nuniform sampler2D flock;\n// total size of flock\nuniform float agentCount;\n//resolution\nuniform vec2 resolution;\n//mouse coords\nuniform vec2 mouse;\n\n//thresholds, passed from params\nuniform float cohesionDist;\nuniform float separationDist;\nuniform float alignDist;\n\n//scales for different forces\nuniform float cohesionScale;\nuniform float separationScale;\nuniform float alignScale;\n\n//boolean to diffuse boids\nuniform bool diffuseBoids;\n\n//Main audio level\nuniform float audio;\n\n//Audio scales for each force\nuniform float cohesionAudio;\nuniform float separationAudio;\nuniform float alignAudio;\n\n// newly calculated position / velocity of agent\nout vec4 agent_out;\n\nvec2 cohesion = vec2(0., 0.);\nvec2 separation = vec2(0., 0.);\nvec2 align = vec2(0., 0.);\n\nvec2 acceleration = vec2(0., 0.);\nfloat maxSpeed = .03;\nfloat maxForce = .001;\n\nfloat random(vec2 coeff) {\n  return fract(sin(dot(coeff, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main() {\n  // the position of this vertex needs to be reported\n  // in the range {-1,1}. We can use the gl_VertexID\n  // input variable to determine the current vertex's\n  // position in the array and convert it to the desired range.\n  float idx = -1. + (float( gl_VertexID ) / agentCount) * 2.;\n\n  // we'll use agent_out to send the agent position and velocity\n  // to the fragment shader, which will render it to our 1D texture.\n  // agent_out is also the target of our transform feedback.\n  agent_out = agent_in;\n\n  if (!diffuseBoids) {\n    // loop through all agents...\n    for( int i = 0; i < int( agentCount ); i++ ) {\n      // make sure the index isn't the index of our current agent\n      if( i == gl_VertexID ) continue;\n\n      // get our agent for comparison. texelFetch accepts an integer\n      // vector measured in pixels to determine the location of the\n      // texture lookup.\n      vec4 agent  = texelFetch( flock, ivec2(i,0), 0 );\n\n      float dist = distance(agent_out.xy, agent.xy);\n\n      if (dist < cohesionDist) {\n        cohesion += agent.xy;\n      }\n\n      if (dist < separationDist) {\n        vec2 diff = (agent_out.xy - agent.xy);\n        separation += diff;\n      }\n\n      if (dist < alignDist) {\n        align += agent.zw;\n      }\n    }\n\n    cohesion = cohesion;\n    cohesion -= agent_out.zw;\n    if (length(cohesion) > maxForce) {\n      cohesion = normalize(cohesion) * maxForce;\n    }\n    cohesion *= -1.;\n    cohesion *= cohesionScale;\n    float cohesionTotalAudio;\n    if (cohesionAudio > 0.) cohesionTotalAudio = audio * cohesionAudio;\n    else cohesionTotalAudio = audio;\n    cohesion *= cohesionTotalAudio;\n\n    separation = separation;\n    separation -= agent_out.zw;\n    if (length(separation) > maxForce) {\n      separation = normalize(separation) * maxForce;\n    }\n    separation *= separationScale;\n    float separationTotalAudio;\n    if (separationAudio > 0.) separationTotalAudio = audio * separationAudio;\n    else separationTotalAudio = audio;\n    separation *= separationTotalAudio;\n\n    align -= agent_out.zw;\n    if (length(align) > maxForce) {\n      align = normalize(align) * maxForce;\n    }\n    align *= alignScale;\n    float alignTotalAudio;\n    if (alignAudio > 0.) alignTotalAudio = audio * alignAudio;\n    else alignTotalAudio = audio;\n    align *= alignTotalAudio;\n\n    acceleration += cohesion + separation + align;\n    agent_out.zw += acceleration;\n  }\n\n  else {\n    agent_out.x = (-1. + (random(agent_out.xy)*2.));\n    agent_out.y = (-1. + (random(agent_out.xy)*2.));\n\n  }\n\n  if (length(agent_out.zw) > (maxSpeed)) {\n    agent_out.zw = normalize(agent_out.zw);\n    agent_out.zw *= (maxSpeed);\n  }\n\n  agent_out.x = agent_out.x + agent_out.z;\n  agent_out.y = agent_out.y + agent_out.w;\n\n  if (agent_out.x > 1.) agent_out.x = -1.;\n  if (agent_out.x < -1.) agent_out.x = 1.;\n  if (agent_out.y > 1.) agent_out.y = -1.;\n  if (agent_out.y < -1.) agent_out.y = 1.;\n\n  // each agent is one pixel. remember, this shader is not used for\n  // rendering to the screen, only to our 1D texture array.\n  gl_PointSize = 1.;\n\n  // report our index as the x member of gl_Position. y is always 0.\n  gl_Position = vec4( idx, .0, 0., 1. );\n}";

},{}],"4lX5e":[function(require,module,exports) {
module.exports = "#version 300 es\n#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\n\nin vec4 agent_out;\n\nuniform float time;\n\nout vec4 color;\nvoid main() {\n\n  color = vec4( abs(agent_out.z / 0.01), 0. , abs(agent_out.w / 0.1), 1. );\n}";

},{}],"eiMhW":[function(require,module,exports) {
module.exports = "#version 300 es\n#define GLSLIFY 1\nin vec4 agent;\n\nout vec4 agent_out;\n\nuniform float audio;\n\nvoid main() {\n  gl_PointSize = 2.;\n  gl_Position = vec4( agent.xy, 0., 1. );\n  agent_out = agent;\n}";

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["kQMTH","adjPd"], "adjPd", "parcelRequire94c2")

//# sourceMappingURL=index.63aff760.js.map
