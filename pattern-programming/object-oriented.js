/**
 * Created by MarkHsiu on 2015/10/20.
 */
var MYAPP = MYAPP || {};
MYAPP.dom = {};
MYAPP.dom.Button = function(text, config){
    //˽������
    var styles = {
        font : 'Verdana',
        bordor : '1px solid black',
        color : 'black',
        background : 'grey'
    };

    //˽�з���
    function setStyles(){
        for(var i in styles){
            b[i] = config[i] || styles[i];
        }
    };

    //��Ȩ����
    this.getDefault = function(){
        return styles;
    };

    config = config || {};
    var b = document.createElement('input');
    b.style = config['type'] || 'submit';
    b.value = text;
    setStyles();
    return b;
};

