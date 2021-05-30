if (window.location.href.indexOf('/posts/') != -1) {
    var timer = setInterval(() => {
        var veditor = document.getElementById("veditor");
        if (veditor) {
            clearInterval(timer);
            fetch("https://v1.hitokoto.cn/?c=h").then(response => response.json()).then(data => {
                veditor.setAttribute("placeholder", data.hitokoto + "——《" + data.from + "》");
            }).catch(console.error);
        }
    }, 100);
}