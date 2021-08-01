{
    const arrowS = document.querySelectorAll(".clickingArrow");
    const anchorS = document.querySelectorAll(".anchor");
    
    arrowS.forEach(function(arrow) {
        arrow.addEventListener( "click", function(arrowFlip) {            
            //for anchor pop
            let container = arrowFlip.currentTarget.parentElement;
            container.classList.toggle("active");
            //for clickingArrow rotate
            this.classList.toggle("active");
            //for text expansion
            setTimeout ( () => {
                container.nextElementSibling.classList.toggle("active");
            }, 300);
            
            arrowS.forEach(function(activated) {
                if (activated!==arrow) {
                    //for anchor reset
                    activated.classList.remove("active");
                    //for clickingArrow reset
                    activated.parentElement.classList.remove("active");
                    //for text collapse                    
                    setTimeout ( () => {
                        activated.parentElement.nextElementSibling.classList.remove("active");
                    }, 300);
                }
            })
        });
    });
    
    anchorS.forEach(function(anchor) {
        setTimeout ( () => {
            anchor.addEventListener("mouseover", function (boxMove1) {
                let box1 = boxMove1.currentTarget.parentElement;
                let box2 = box1.parentElement.parentElement.parentElement;
                let box3 = box2.previousElementSibling.children[0];
                // console.log(box3);
                box3.style.right = '86.5%';           
                box3.style.transition = '1.5s';           
            });
            anchor.addEventListener("mouseout", function (boxMove2) {
                let box1 = boxMove2.currentTarget.parentElement;
                let box2 = box1.parentElement.parentElement.parentElement;
                let box3 = box2.previousElementSibling.children[0];
                box3.style.right = '79%';          
                box3.style.transition = '1.5s';           
            });
        }, 50);
    });
}