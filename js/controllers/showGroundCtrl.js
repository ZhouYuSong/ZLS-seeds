/**
 * Created by Administrator on 2015/9/25.
 */
define(['./module','oCanvas'], function (controllers) {
    'use strict';
    controllers.controller('showGroundCtrl', ['$scope','oCanvas',function ($scope,oCanvas) {
        var canvas = oCanvas.create({
            canvas: "#canvas_show",
            background: "#ccc",
            fps: 10
        });
        //±³¾°Í¼
        var bg = canvas.display.image({
            x: 0,
            y: 0,
            image: "../image/show1600.png"
        });
        canvas.addChild(bg);
    }]);
});
