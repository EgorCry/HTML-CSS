function main() {
    for (let i=1; i<6; i++){
        console.log("./Elements/PS VR X/".length)
        let name = "./Elements/PS VR X/" + i + ".jpg";
        var a = new Image();
        a.src = name;
        a.alt = i+".jpg";
        clss = "img_vr";
        a.classList.add(clss);
        document.body.appendChild(a);
        console.log(name);
        var t = new Text();
        msg = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.";
        t.appendData("msg");
        document.body.appendChild(t);
    }
}