eval(function (p, a, c, k, e, r) {
    e = String;
    if ('0'.replace(0, e) == 0) {
        while (c--) r[e(c)] = k[c];
        k = [function (e) {
            return r[e] || e
        }];
        e = function () {
            return '[0]'
        };
        c = 1
    }
    ;
    while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('function Homepage(){var 0=\'test\';window.open(0)}', [], 1, 'url'.split('|'), 0, {}))