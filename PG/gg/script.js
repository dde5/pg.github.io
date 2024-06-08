

    // 定義一個函數來更新結果的內容
    function updateResult() {
        // 清空結果的內容
        result.value = "";
        // 遍歷每個input元素
        for (let input of inputs) {
            // 如果input元素有值，則將它添加到結果的內容中，並換行
            if (input.value) {
                result.value += input.value + "\n";
            }
        }
    }
    // 為複製按鈕添加一個click事件監聽器
    copy.addEventListener("click", function() {
        // 將結果的內容複製到剪貼板中
        navigator.clipboard.writeText(result.value)
            .then(() => {
                // 如果成功，則彈出一個提示窗口
                alert("已複製到剪貼板");
            })
            .catch((error) => {
                // 如果失敗，則彈出一個錯誤窗口
                alert("複製失敗，請重試");
            });
    });
    // 為滑出按鈕添加一個click事件監聽器
    slide.addEventListener("click", function() {
        // 切換滑出頁面的active類別，從而改變它的bottom屬性
        slidePage.classList.toggle("active");
    });
    // 為關閉按鈕添加一個click事件監聽器
    close.addEventListener("click", function() {
        // 切換滑出頁面的active類別，從而改變它的bottom屬性
        slidePage.classList.toggle("active");
    });
	
	    // 為每個input元素添加一個dblclick事件監聽器
    for (let input of inputs) {
        input.addEventListener("dblclick", function() {
            // 移除input元素的readonly屬性，讓它可以編輯
            input.removeAttribute("readonly");
        });
    }
    // 為每個input元素添加一個blur事件監聽器
    for (let input of inputs) {
        input.addEventListener("blur", function() {
            // 添加input元素的readonly屬性，讓它不可以編輯
            input.setAttribute("readonly", "readonly");
            // 將input元素的值設為編輯的文字
            input.value = input.value;
            // 更新結果的內容，將編輯的文字添加到結果的textarea中，並且刪除原本的下拉選單的值
            updateResult();
            result.value = result.value.split("\n").map(line => line.replace(/(請選擇.*)/, input.value)).join("\n");
        });
    }
	
	    // 為每個input元素添加一個keydown事件監聽器
    for (let input of inputs) {
        input.addEventListener("keydown", function(event) {
            // 檢查是否是enter鍵，如果是，就觸發更新的函數
            if (event.keyCode === 13) {
                // 阻止默認的行為，例如換行
                event.preventDefault();
                // 添加input元素的readonly屬性，讓它不可以編輯
                input.setAttribute("readonly", "readonly");
                // 將input元素的值設為編輯的文字
                input.value = input.value;
                // 更新結果的內容，將編輯的文字添加到結果的textarea中，並且刪除原本的下拉選單的值
                updateResult();
                result.value = result.value.split("\n").map(line => line.replace(/(請選擇.*)/, input.value)).join("\n");
            }
        });
    }
	
