import _ from 'lodash';
import './style.css';
import './style.scss';
import './less_style.less';
import goodlist from './0.jpg';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //将图像添加到创建的div
    var img = new Image();
    img.src = goodlist;

    element.appendChild(img);

    return element;
}

document.body.appendChild(component());