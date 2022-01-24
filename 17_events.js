console.log("Heyyy!");

document.getElementById("head").addEventListener("click", function (e) {  // click means function gets fired (executed) as soon as we click on element with id head.
    console.log("You have clicked the heading");
    let var1 = e;
    console.log(var1);
    
    let var2 = e.button;  // gives our targeted element.
    console.log(var2);
    
    let var3 = e.target.className;  // gives class name of targeted element.
    console.log(var3);
    
    let var4 = e.target.classList;  // gives list of classes.
    console.log(var4);
    
    let var5 = e.offsetX;  // offset is acc. to the element.
    console.log(var5);
    
    let var6 = e.offsetY;
    console.log(var6);
    
    let var7 = e.clientX;  // client is acc. to the window screen.
    console.log(var7);
    
    let var8 = e.clientY;
    console.log(var8);

    let var9 = e.target.id  // gives id of targeted element.
    console.log(var9);
})