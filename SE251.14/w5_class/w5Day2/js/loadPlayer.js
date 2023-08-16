function setUser(){

    var urlParams = new URLSearchParams(location.search)
    var load = urlParams.get(`load`)

    var p1;

    if(load === `true`)
    {
        if(localStorage.getItem(`p1`)!=null)
        {
            p1 = JSON.parse(localStorage.getItem(`p1`));
        }
        else
        {
            alert(`no saved players`)
            p1={};
        }
    }
    else
    {
            p1 = {};
    }

    return p1;
}

var player = [
    new User().setProps(p1),
    new User().setProps({h:150,  force:1, fill:`#ffff00`, keys:{u:`ArrowUp`, d:`ArrowDown`, s:`ArrowLeft`}})
]
