var flow = function () {
    var flowid = document.getElementById('flowid');
    var flowtype = document.getElementById('flowtype');

    var target = flowid.options[flowid.selectedIndex].text;
    target = 'box' + target;
    var mode = flowtype.options[flowtype.selectedIndex].value;

    // target will be the div id
    // Simply invoke fscroll by calling the public API methods:
    // fscroll.flow
    // fscroll.focus
    // fscroll.crisp
    fscroll[mode](target);
}
