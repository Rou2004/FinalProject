document.addEventListener("DOMContentLoaded",function() {
    //找到最外層div
 const starRatings = document.querySelectorAll(".star");
    //對每個的星星評分區域設定事件
 starRatings.forEach((starRating) => {
      //找到該評分區域內所有icon
     const starIcons = starRating.querySelectorAll(".star-icon");
    //將所有icon加上click事件
     starIcons.forEach((starIcon) => {
         starIcon.addEventListener("click", function() {
            //找到點擊的icon之data-index 並轉成文字
             const clickedIndex = parseInt(this.getAttribute("data-index"));
            //starsIcons是一個陣列，可直接用forEach來判斷
             starIcons.forEach((icon, index) => {
                //如果index小於點擊的index 加上selected的class 並改變icon
                 if (index < clickedIndex){
                     icon.setAttribute("icon", "material-symbols:star");
                 }
                 //如果index大於點擊的index 加上selected的class 並把icon變空心
                 else{
                     icon.setAttribute("icon", "material-symbols:star-outline");
                 }
             });
             //可將clickedIndex資料送到後端 並更新資料庫
             console.log("Selected Rating: " + clickedIndex);
         });
     });
 });
});

function new_comment(event){
    if (event) event.preventDefault();
    alert("已收到評論，歡迎再次光臨!");
    window.location.href = 'order.html';
}
