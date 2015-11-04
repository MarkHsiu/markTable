/**
 * Created by MarkHsiu on 2015/10/20.
 */

/*
 *
 *  �ӳٶ��壬�÷������Է��͵ķ�ʽ��ʵ��--��������һ�α�����ʱ�����Ȼ��������֧�ֵĹ���
 *  ��Ȼ��Ϊ�Լ�ѡ����ʵ�ʵ�֣�����������������������¼���ӡ����´��ٵ��ø÷���ʱ����
 *  ��ֱ�ӵ�����ѡ����·�����������Ҫ����֧�ж�
 */
var MYAPP = {};
MYAPP.myevent = {
    addListener : function(el, type, fn){
        if(typeof el.addEventListener === 'function'){ //FF
            MYAPP.myevent.addListener = function(el, type, fn){
                el.addEventListener(type, fn, false);
            }
        } else if(typeof el.attachEvent === 'function'){ //IE
            MYAPP.myevent.addListener = function(el, type, fn){
                el.attachEvent('on' + type, fn);
            }
        } else {// older browers
            MYAPP.myevent.addListener = function(el, type, fn){
                el['on' + type] = fn;
            }
        }

        MYAPP.myevent.addListener(el, type, fn);
    }

}

