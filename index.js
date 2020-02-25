$(function(){
    //get dom elem
    var $width = $("#width"),
        $height = $("#height"),
        $calBtn = $("#calculate"),
        $perimeter = $("#perimeter"),
        $area = $("#area");
        
    /*calculate button click event */
    $calBtn.click(function(){
        //get value 
        var w =Number($width.val()),
            h = Number($height.val());
        
        //calculate
        var p = 2*(w+h),
            a = (w*h);
        //output
        $perimeter.val(p);
        $area.val(a);
    })

})