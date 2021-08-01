{
    const arrowS = document.querySelectorAll(".clickingArrow");
    const anchorS = document.querySelectorAll(".anchor");
    
    var clickingArrowStatus = false;
    
    arrowS.forEach(function(arrow) {
        arrow.addEventListener( 'click', function(titlePop) {
            const qS = titlePop.currentTarget.parentElement.parentElement.parentElement.parentElement;
            qS.style.overflowX = 'hidden';
            qS.style.overflowY = 'scroll';
            
            if (clickingArrowStatus==false) {
                //for anchor pop
                const container = titlePop.currentTarget.parentElement;
                container.classList.toggle("active");
                //for clickingArrow rotate
                this.classList.toggle("active");
                //for text expansion
                setTimeout ( () => {
                    container.nextElementSibling.classList.toggle("active");
                }, 500);
                //reset the condition
                clickingArrowStatus = true; 
            }
            else {
                //for anchor reset
                const container = titlePop.currentTarget.parentElement;
                container.classList.toggle("active");
                //for clickingArrow reset
                this.classList.toggle("active");
                //for text collapse
                setTimeout ( () => {
                    container.nextElementSibling.classList.toggle("active");
                }, 500);
                //revert the condition
                clickingArrowStatus = false; 
            }
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
    });
}
