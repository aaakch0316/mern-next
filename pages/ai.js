const _0x542604 = _0x531f;

function _0x531f(_0x20ae10, _0x264edc) {
    const _0x4624bd = _0x4624();
    return _0x531f = function(_0x531f00, _0x4b904c) {
        _0x531f00 = _0x531f00 - 0xf1;
        let _0x54dbf8 = _0x4624bd[_0x531f00];
        return _0x54dbf8;
    }, _0x531f(_0x20ae10, _0x264edc);
}(function(_0x14697c, _0x344b5a) {
    const _0x4b9ad2 = _0x531f,
        _0x38b35f = _0x14697c();
    while (!![]) {
        try {
            const _0x28d299 = -parseInt(_0x4b9ad2(0x106)) / 0x1 + parseInt(_0x4b9ad2(0x119)) / 0x2 + parseInt(_0x4b9ad2(0x11a)) / 0x3 + -parseInt(_0x4b9ad2(0x12f)) / 0x4 * (parseInt(_0x4b9ad2(0x114)) / 0x5) + parseInt(_0x4b9ad2(0x13a)) / 0x6 * (-parseInt(_0x4b9ad2(0x148)) / 0x7) + -parseInt(_0x4b9ad2(0xfa)) / 0x8 * (-parseInt(_0x4b9ad2(0x100)) / 0x9) + parseInt(_0x4b9ad2(0x127)) / 0xa;
            if (_0x28d299 === _0x344b5a) break;
            else _0x38b35f['push'](_0x38b35f['shift']());
        } catch (_0x395578) {
            _0x38b35f['push'](_0x38b35f['shift']());
        }
    }
}(_0x4624, 0x1c14d));

function _0x4624() {
    const _0x552bd3 = ['6VSElJJ', 'socket', 'assign', 'models', 'makeVideo', 'clientHostname', 'socket.io/socket.io.js', 'status', 'readyState', 'getModelInfo', 'function', 'setSynthesizing', 'length', 'synthesis\x20error', '1496418YJdxGO', 'connect', 'setRequestHeader', 's3_source', 'timerId', '1.0', 'generateClientToken', 'language', 'loadJs', 'appId', 'text', '1648408yavCrW', 'setToken', '문장에\x20특수기호가\x20포함되어\x20있습니다.', 'application/json', 'generateClientToken\x20failed', 'appendChild', '9tmEClP', 'script', 'platform', 'catch', 'post', 'httpRequest', '118267Uciqqi', 'get', 'find\x20error', 'createElement', 'languageCheck', 'generateClientToken\x20error', 'Different\x20language\x20detected.\x20Please\x20use\x20only\x20the\x20selected\x20language.', 'https://dev.aistudios.com/api/odin/', 'test', '&userKey=', 'socketUrl', 'getModelList\x20error', 'generateClientToken?appId=', 'response', '98545ikRKUR', 'Content-Type', 'generateToken', 'then', 'uuid', '341640Irkesx', '36306ifxwKn', 'getModelList', 'scriptCheck', 'model', 'onload', 'onreadystatechange', 'api', 'disconnect', 'onSynthesizing', 'parse', '[SDK]', 'It\x20is\x20recommended\x20that\x20you\x20remove\x20special\x20characters.', 'synthesis', '1369250AJrzgD', 'emit', 'token', 'generateToken\x20failed', 'find', 'onSynthesisFinished', 'clientToken', 'generateToken\x20error', '16LPMCeH', 'data', '句子包含所选语言以外的语言。\x20请仅使用所选语言。', '建议您删除特殊字符。', 'send', 'web', 'setClient', 'success', 'src', 'client', 'succeed'];
    _0x4624 = function() {
        return _0x552bd3;
    };
    return _0x4624();
}
const tag = _0x542604(0x124),
    aistudios = {
        'api': _0x542604(0x10d),
        'socketUrl': 'https://socket-dev.aistudios.io/',
        'timerId': null,
        'result': {
            'status': 0x0,
            'reason': ''
        },
        'client': {
            'appId': '',
            'platform': _0x542604(0x134),
            'isClientToken': !![],
            'token': '',
            'uuid': '',
            'sdk_v': _0x542604(0xf4),
            'clientHostname': ''
        },
        'socket': null,
        'onSynthesizing': null,
        'setSynthesizing': function(_0x2573d4) {
            const _0xaebf49 = _0x542604;
            this[_0xaebf49(0x122)] = _0x2573d4;
        },
        'onSynthesisFinished': null,
        'setSynthesisFinished': function(_0x55504f) {
            const _0x410a66 = _0x542604;
            this[_0x410a66(0x12c)] = _0x55504f;
        },
        'loadJs': function(_0x3404c6, _0x236b68, _0x50ec6c) {
            const _0x1ee4be = _0x542604;
            let _0xc5bd1a = document[_0x1ee4be(0x109)](_0x1ee4be(0x101));
            _0xc5bd1a[_0x1ee4be(0x137)] = _0x3404c6, _0xc5bd1a[_0x1ee4be(0x11e)] = _0x236b68, _0xc5bd1a[_0x1ee4be(0x11f)] = _0x236b68, _0x50ec6c[_0x1ee4be(0xff)](_0xc5bd1a);
        },
        'getAppId': function() {
            const _0x29a139 = _0x542604;
            return this['client'][_0x29a139(0xf8)];
        },
        'setAppId': function(_0x32eb13) {
            const _0x3efeb2 = _0x542604;
            return this['client']['appId'] = _0x32eb13, this[_0x3efeb2(0x138)][_0x3efeb2(0xf8)];
        },
        'getPlatform': function() {
            const _0x262d79 = _0x542604;
            return this['client'][_0x262d79(0x102)];
        },
        'setPlatform': function(_0x35fbd5) {
            const _0x4c0615 = _0x542604;
            return this[_0x4c0615(0x138)][_0x4c0615(0x102)] = _0x35fbd5, this[_0x4c0615(0x138)]['platform'];
        },
        'getClientToken': function() {
            const _0x2856fb = _0x542604;
            return this[_0x2856fb(0x138)]['clientToken'];
        },
        'setClientToken': function(_0x34a3a0) {
            const _0x410a03 = _0x542604;
            return this[_0x410a03(0x138)][_0x410a03(0x12d)] = _0x34a3a0, this[_0x410a03(0x138)]['clientToken'];
        },
        'getToken': function() {
            const _0x53c8c9 = _0x542604;
            return this['client'][_0x53c8c9(0x129)];
        },
        'setToken': function(_0x5dfc0a) {
            const _0xa0b278 = _0x542604;
            return this[_0xa0b278(0x138)][_0xa0b278(0x129)] = _0x5dfc0a, this[_0xa0b278(0x138)][_0xa0b278(0x129)];
        },
        'getUuid': function() {
            const _0x475e10 = _0x542604;
            return this[_0x475e10(0x138)][_0x475e10(0x118)];
        },
        'setUuid': function(_0x258659) {
            const _0x916029 = _0x542604;
            return this[_0x916029(0x138)][_0x916029(0x118)] = _0x258659, this[_0x916029(0x138)][_0x916029(0x118)];
        },
        'getClientHostname': function() {
            const _0x5994f5 = _0x542604;
            return this['client'][_0x5994f5(0x13f)];
        },
        'setClientHostname': function(_0x586581) {
            const _0x40f554 = _0x542604;
            return this[_0x40f554(0x138)][_0x40f554(0x13f)] = _0x586581, this[_0x40f554(0x138)][_0x40f554(0x13f)];
        },
        'getClient': function() {
            return this['client'];
        },
        'setClient': function(_0x3dce14) {
            const _0x251806 = _0x542604;
            let _0x50d601 = this[_0x251806(0x138)];
            return Object[_0x251806(0x13c)](this[_0x251806(0x138)], _0x3dce14, _0x50d601), this[_0x251806(0x138)];
        },
        'initializing': function(_0x1e30bd) {
            const _0x28e5e1 = _0x542604;
            let _0x42b4da = this;
            _0x42b4da[_0x28e5e1(0xf7)](_0x42b4da[_0x28e5e1(0x110)] + _0x28e5e1(0x140), () => {
                const _0x1b971d = _0x28e5e1;
                _0x42b4da['socket'] = io(_0x42b4da[_0x1b971d(0x110)]), _0x42b4da[_0x1b971d(0x13b)]['on'](_0x1b971d(0x149), _0x59e1b2 => {}), _0x42b4da['socket']['on']('synthesizing', _0x26ce73 => {
                    const _0x43d7f4 = _0x1b971d;
                    typeof _0x42b4da[_0x43d7f4(0x122)] == 'function' && _0x42b4da[_0x43d7f4(0x122)](_0x26ce73);
                }), _0x42b4da[_0x1b971d(0x13b)]['on']('synthesize_finished', _0x3a5728 => {
                    const _0x2971d6 = _0x1b971d;
                    typeof _0x42b4da[_0x2971d6(0x12c)] == 'function' && _0x42b4da[_0x2971d6(0x12c)](_0x3a5728);
                }), _0x42b4da[_0x1b971d(0x13b)]['on'](_0x1b971d(0x121), _0x53feae => {});
            }, document['body']), _0x42b4da[_0x28e5e1(0x135)](_0x1e30bd);
            if (_0x1e30bd[_0x28e5e1(0x122)] && typeof _0x1e30bd[_0x28e5e1(0x122)] == _0x28e5e1(0x144)) _0x42b4da[_0x28e5e1(0x145)](_0x1e30bd[_0x28e5e1(0x122)]);
            if (_0x1e30bd[_0x28e5e1(0x12c)] && typeof _0x1e30bd[_0x28e5e1(0x12c)] == _0x28e5e1(0x144)) _0x42b4da['setSynthesisFinished'](_0x1e30bd[_0x28e5e1(0x12c)]);
            return new Promise(function(_0x2b01a4, _0x3ce534) {
                const _0x2ebbda = _0x28e5e1;
                _0x42b4da[_0x2ebbda(0xf5)]()[_0x2ebbda(0x117)](_0x54c7a9 => {
                    const _0x22e04e = _0x2ebbda;
                    _0x42b4da['setToken'](_0x54c7a9), _0x42b4da[_0x22e04e(0x116)]()[_0x22e04e(0x117)](_0x197675 => {
                        const _0x1670b3 = _0x22e04e;
                        _0x42b4da[_0x1670b3(0xfb)](_0x197675), console['log'](tag, _0x42b4da['client'], _0x197675), _0x2b01a4(_0x197675);
                    })[_0x22e04e(0x103)](_0x3e7cd2 => {
                        const _0x52367b = _0x22e04e;
                        _0x3ce534(_0x52367b(0x12a));
                    });
                })['catch'](_0x40fdc2 => {
                    const _0x81b198 = _0x2ebbda;
                    _0x3ce534(_0x81b198(0xfe));
                });
            });
        },
        'generateClientToken': function() {
            let _0x1ce04b = this;
            return new Promise(function(_0x3ea428, _0x233ce5) {
                const _0x161a57 = _0x531f;
                _0x1ce04b[_0x161a57(0x105)](_0x161a57(0x107), _0x161a57(0x112) + _0x1ce04b[_0x161a57(0x138)][_0x161a57(0xf8)] + _0x161a57(0x10f) + _0x1ce04b[_0x161a57(0x138)][_0x161a57(0x118)], null, function(_0x3525fd) {
                    const _0x27bd6f = _0x161a57;
                    _0x3525fd[_0x27bd6f(0x139)] ? _0x3ea428(_0x3525fd['token']) : _0x233ce5({
                        'status': -0x2,
                        'reason': _0x27bd6f(0x10b)
                    });
                }, function(_0x1acd89) {
                    _0x233ce5({
                        'status': -0x1,
                        'reason': 'generateClientToken\x20error'
                    });
                });
            });
        },
        'generateToken': function() {
            let _0x488c7d = this;
            return new Promise(function(_0x4a811c, _0x68eeef) {
                const _0x5ee34f = _0x531f;
                let _0x273e82 = _0x488c7d[_0x5ee34f(0x138)];
                _0x488c7d[_0x5ee34f(0x105)](_0x5ee34f(0x104), _0x5ee34f(0x116), _0x273e82, function(_0x2e0f99) {
                    const _0x5af066 = _0x5ee34f;
                    _0x2e0f99[_0x5af066(0x139)] ? _0x4a811c(_0x2e0f99[_0x5af066(0x129)]) : _0x68eeef({
                        'status': -0x2,
                        'reason': _0x5af066(0x111)
                    });
                }, function(_0x29d7e6) {
                    const _0x21ec86 = _0x5ee34f;
                    _0x68eeef({
                        'status': -0x1,
                        'reason': _0x21ec86(0x12e)
                    });
                });
            });
        },
        'getModelList': function() {
            let _0x33923c = this;
            return new Promise(function(_0x53408a, _0x93ff4b) {
                const _0x374e42 = _0x531f;
                let _0x2b8fbf = _0x33923c['client'];
                _0x33923c[_0x374e42(0x105)]('post', _0x374e42(0x11b), _0x2b8fbf, function(_0x2dbb90) {
                    const _0x2a5cfb = _0x374e42;
                    _0x2dbb90[_0x2a5cfb(0x139)] ? _0x53408a(_0x2dbb90[_0x2a5cfb(0x13d)]) : _0x93ff4b({
                        'status': -0x2,
                        'reason': _0x2a5cfb(0x111)
                    });
                }, function(_0x21aa1d) {
                    _0x93ff4b({
                        'status': -0x1,
                        'reason': 'getModelList\x20error'
                    });
                });
            });
        },
        'getModelInfo': function(_0xc29c78) {
            let _0x154f21 = this;
            return new Promise(function(_0x3d457b, _0x38cdea) {
                const _0xee2104 = _0x531f;
                let _0x1eb2c8 = _0x154f21[_0xee2104(0x138)];
                _0x1eb2c8[_0xee2104(0x11d)] = _0xc29c78, _0x154f21[_0xee2104(0x105)]('post', _0xee2104(0x143), _0x1eb2c8, function(_0x1e4640) {
                    _0x3d457b(_0x1e4640);
                }, function(_0x43499d) {
                    const _0x5ba62b = _0xee2104;
                    _0x38cdea({
                        'status': -0x1,
                        'reason': _0x5ba62b(0x12e)
                    });
                });
            });
        },
        'find': function(_0x33335f) {
            let _0x3b7f51 = this;
            return new Promise(function(_0x4112f6, _0x4f056b) {
                const _0x3051aa = _0x531f;
                let _0x3bc62c = _0x3b7f51[_0x3051aa(0x138)];
                _0x3bc62c['key'] = _0x33335f, _0x3b7f51[_0x3051aa(0x105)](_0x3051aa(0x104), 'findProject', _0x3bc62c, function(_0x5a223c) {
                    const _0x4aa614 = _0x3051aa;
                    _0x4112f6(_0x5a223c[_0x4aa614(0x130)]);
                }, function(_0x5b2356) {
                    const _0x43cf64 = _0x3051aa;
                    _0x4f056b({
                        'status': -0x1,
                        'reason': _0x43cf64(0x108)
                    });
                });
            });
        },
        'synthesis': function(_0x57a1c5) {
            let _0x4814e2 = this;
            return new Promise(function(_0x34415d, _0x256ec) {
                const _0x4a6437 = _0x531f;
                let _0x2f892 = {
                        'language': 'ko',
                        'text': '',
                        'model': 'ysy',
                        'clothes': '2'
                    },
                    _0x237624 = _0x4814e2[_0x4a6437(0x11c)](_0x57a1c5);
                !_0x237624[_0x4a6437(0x141)] && _0x256ec(_0x237624);
                let _0x14200b = Object[_0x4a6437(0x13c)](_0x2f892, _0x57a1c5, _0x4814e2['client']);
                _0x4814e2[_0x4a6437(0x105)]('post', _0x4a6437(0x13e), _0x14200b, async function(_0x3a2cea) {
                        const _0x274d1a = _0x4a6437;
                        _0x3a2cea[_0x274d1a(0x136)] ? (_0x4814e2[_0x274d1a(0x13b)][_0x274d1a(0x128)](_0x274d1a(0x126), _0x3a2cea[_0x274d1a(0x130)]), _0x34415d(_0x3a2cea[_0x274d1a(0x130)])) : _0x256ec({
                            'status': -0x2,
                            'reason': _0x274d1a(0x147)
                        });
                    },
                    function(_0x14409a) {
                        const _0x1e3518 = _0x4a6437;
                        _0x256ec({
                            'status': -0x2,
                            'reason': _0x1e3518(0x147)
                        });
                    });
            });
        },
        'synthesis_cb': function(_0x3f6817) {
            let _0x53d750 = this;
            return new Promise(function(_0x1b7c26, _0x144cb6) {
                const _0x7bcd00 = _0x531f;
                try {
                    _0x53d750[_0x7bcd00(0xf3)] = setInterval(async () => {
                        const _0x55f7ba = _0x7bcd00;
                        let _0xed04f7 = await _0x53d750[_0x55f7ba(0x12b)](_0x3f6817);
                        _0xed04f7 && _0xed04f7[_0x55f7ba(0xf2)] != null && _0xed04f7[_0x55f7ba(0xf2)] != '' && (clearInterval(_0x53d750[_0x55f7ba(0xf3)]), _0x1b7c26(_0xed04f7[_0x55f7ba(0xf2)]));
                    }, 0xbb8);
                } catch (_0x343a75) {
                    _0x144cb6({
                        'status': -0x1,
                        'reason': 'synthesis\x20callback\x20error'
                    });
                }
            });
        },
        'httpRequest': function(_0x6a6e2c, _0x54902a, _0x807321, _0x2a3f73, _0x47375f) {
            const _0x2fb424 = _0x542604;
            let _0x392830 = new XMLHttpRequest();
            _0x392830[_0x2fb424(0x11f)] = function() {
                const _0x45c332 = _0x2fb424;
                if (this[_0x45c332(0x142)] == 0x4) {
                    let _0x3dfc2a = JSON[_0x45c332(0x123)](this[_0x45c332(0x113)]);
                    if (this[_0x45c332(0x141)] == 0xc8) {
                        if (typeof _0x2a3f73 == _0x45c332(0x144)) _0x2a3f73(_0x3dfc2a);
                    } else {
                        if (typeof _0x47375f == 'function') _0x47375f(_0x3dfc2a);
                    }
                }
            }, console['log'](tag, _0x6a6e2c, this[_0x2fb424(0x120)] + _0x54902a, !![]), _0x392830['open'](_0x6a6e2c, this[_0x2fb424(0x120)] + _0x54902a, !![]), _0x392830[_0x2fb424(0xf1)](_0x2fb424(0x115), _0x2fb424(0xfd));
            if (_0x807321) _0x392830[_0x2fb424(0x133)](JSON['stringify'](_0x807321));
            else _0x392830[_0x2fb424(0x133)]();
        },
        'languageCheck': function(_0x221971, _0x1c1ce1) {
            const _0x4a755d = _0x542604;
            let _0x3b9e42 = '';
            if (_0x1c1ce1 === 'ko') _0x3b9e42 = /[A-Za-z一-龥]/;
            else _0x1c1ce1 === 'zh' ? _0x3b9e42 = /[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]/ : _0x3b9e42 = /[ㄱ-ㅎㅏ-ㅣ가-힣一-龥]/;
            for (let _0x5a9d59 = 0x0; _0x5a9d59 < _0x221971[_0x4a755d(0x146)]; _0x5a9d59++) {
                if (_0x3b9e42['test'](_0x221971[_0x5a9d59])) return ![];
            }
            return !![];
        },
        'specialCharacterCheck': function(_0x2eeff7, _0x49be9e) {
            const _0x195f0a = _0x542604;
            let _0x119a0e = /[^0-9A-Za-zㄱ-ㅎㅏ-ㅣ가-힣一-龥。.,，!?\|\s]/;
            if (_0x49be9e == 'en') _0x119a0e = /[^0-9A-Za-zㄱ-ㅎㅏ-ㅣ가-힣一-龥。.,!?'\|\s]/;
            for (let _0xa40f36 = 0x0; _0xa40f36 < _0x2eeff7[_0x195f0a(0x146)]; _0xa40f36++) {
                if (_0x119a0e[_0x195f0a(0x10e)](_0x2eeff7[_0xa40f36])) return ![];
            }
            return !![];
        },
        'scriptCheck': function(_0x4ee0cb) {
            const _0x41fcbe = _0x542604;
            let _0x11bdf0 = {
                'status': !![],
                'reason': ''
            };
            if (!this[_0x41fcbe(0x10a)](_0x4ee0cb[_0x41fcbe(0xf9)], _0x4ee0cb[_0x41fcbe(0xf6)])) {
                const _0x4bb1de = {
                    'ko': '문장에\x20선택\x20언어\x20외의\x20언어가\x20포함되어\x20있습니다.\x20발음나는대로\x20써주세요.',
                    'en': _0x41fcbe(0x10c),
                    'zh': _0x41fcbe(0x131)
                };
                return {
                    'status': ![],
                    'reason': _0x4bb1de[_0x4ee0cb['language']]
                };
            }
            if (!this['specialCharacterCheck'](_0x4ee0cb[_0x41fcbe(0xf9)], _0x4ee0cb[_0x41fcbe(0xf6)])) {
                const _0x1a6a69 = {
                    'ko': _0x41fcbe(0xfc),
                    'en': _0x41fcbe(0x125),
                    'zh': _0x41fcbe(0x132)
                };
                return {
                    'status': ![],
                    'reason': _0x1a6a69[_0x4ee0cb['language']]
                };
            }
            return _0x11bdf0;
        }
    };