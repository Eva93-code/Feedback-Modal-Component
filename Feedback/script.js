document.addEventListener("DOMContentLoaded", function(){
    
    document.getElementById("triggerBtn").addEventListener("click", function(){
        document.getElementById("inner").style.display = "flex";
        document.getElementById("triggerBtn").style.display = "none";
        const littleBtns = document.querySelectorAll(".ratingBtn");
        littleBtns.forEach(button => {
            button.classList.remove("selected");
        })
    })

    document.getElementById("cancelBtn").addEventListener("click", function(){
        document.getElementById("inner").style.display = "none";
        document.getElementById("triggerBtn").style.display = "block";
    })

    document.getElementById("submitBtn").addEventListener("click", function(){
        if(document.querySelector(".selected")===null){
            alert("Please select a rating");
            document.getElementById("inner").style.display = "flex";
            document.getElementById("modal").style.display = "flex";
        }else{
            alert("Successfully submitted your review");
            document.getElementById("inner").style.display = "none";
            document.getElementById("modal").style.display = "none";
        }
    })
    
    const ratingBtns = document.querySelectorAll(".ratingBtn");
    ratingBtns.forEach(button => {
        button.addEventListener("click", () => {
            ratingBtns.forEach(btn => {
                btn.classList.remove("selected");
            });
            button.classList.add("selected");
        })
    })

    const closeBtn = document.querySelector(".fa-solid.fa-xmark");
    closeBtn.addEventListener("click", function() {
        document.getElementById("modal").style.display = "none";
    })

})



