// A function to generate a prompt based on the selected or inputted items
function generatePrompt() {
  // Get the selected or inputted items
  var role = document.getElementById("role").value;
  var need = document.getElementById("need").value;
  var task = document.getElementById("task").value;
  var detail = document.getElementById("detail").value;
  var detailInput = document.getElementById("detail-input").value;
  var tone = document.getElementById("tone").value;
  var dont = document.getElementById("dont").value;
  var country = document.getElementById("country").value;
  var format = document.getElementById("format").value;
  var reply = document.getElementById("reply").value;
  var needInput = document.getElementById("need-input").value;
  var detailInput = document.getElementById("detail-input").value;
  var example1 = document.getElementById("example1").value
  var example = document.getElementById("example").value
  

  if (needInput !== "") {
    need = needInput;
  }
/*   if (detail !== "{執行細節 detail}") {
    detailInput= "";
  } */
  if (detailInput !== "") {
    detail = detailInput;
  }
  if (Iteration == "[object HTMLInputElement]") {
    Iteration = "";
  }
  if (COT == "[object HTMLInputElement]") {
    COT = "";
  }
  if (TOT == "[object HTMLInputElement]") {
    TOT = "";
  }
  if (StepBack == "[object HTMLInputElement]") {
    StepBack = "";
  }
  if (leso == "[object HTMLInputElement]") {
    leso = "";
  }
  if (cutbulls == "[object HTMLInputElement]") {
    cutbulls = "";
  }


  // Generate the prompt
  var prompt = "Act as " + role + ", \n";
  prompt += "I need " + need + ", \n";
  prompt += "you will " + task + ", in the process, \n";
  prompt += "you should " + detail + "\n";
  prompt += tone + "\n";
  prompt += dont + "\n";
  prompt += format + "\n \n";
  prompt += Iteration + "\n";
  prompt += COT + "\n";
  prompt += decodeURIComponent(TOT) + "\n";
  prompt += decodeURIComponent(StepBack) + "\n";
  prompt += country + "\n \n";
    //prompt += example2 + "\n";
  if (document.getElementById("example").checked) {
    //NO example checkbox 有勾的話就不要顯示任何字
  }else{
    prompt += "here is an example:\n \n" + example1 + " \n \n";
  }
  //prompt += "here is an example:\n \n" + example1 + " \n \n";
  prompt += cutbulls + "\n";
  prompt += leso + "\n";
  prompt += reply + "\n";
  return prompt;

}

// A function to update the prompt based on the selected or inputted items
function updatePromptAndExample() {
  // Get the prompt elements
  var prompt = document.getElementById("prompt");
  // Update the prompt elements with the generated prompt 
  var spowercall = document.getElementById("spower").value;
  if (spowercall !== "" && role.value !== "You are Dr.Know everything") {
    document.getElementById("spower").value = "";
    updatePrompt2();

  } else {
    prompt.value = generatePrompt();
  }


}

// A function to copy the prompt to the clipboard
function copyToClipboard(id) {
  // Get the element with the given id
  var element = document.getElementById(id);
  // Remove multiple consecutive empty lines from the content
  var content = element.value.replace(/[\r\n]{2,}/g, "\n");
  // Set the updated content back to the element
  element.value = content;
  // Select the element
  element.select();
  // Copy the element to the clipboard
  document.execCommand("copy");
  // Alert the user
  alert("Copied to clipboard!");
}

// 定義一個函數，用來處理 checkbox 的變化
function handleCheckboxChange(e) {
  // 獲取觸發事件的元素
  var checkbox = e.target;
  // 獲取元素的 id 和 value
  var id = checkbox.id;
  var value = checkbox.value;
  // 判斷元素是否被選中
  if (checkbox.checked) {
    // 如果被選中，就將 value 存入對應的變數中
    window[id] = value;
    console.log(window[id]);
  } else {
    // 如果沒有被選中，就將對應的變數清空
    window[id] = "";
  }
  // 顯示目前的變數值
  console.log(COT, TOT, StepBack, leso, Iteration, cutbulls, example2);
  var spowercall = document.getElementById("spower").value;
  if (spowercall !== "" && role.value !== "You are Dr.Know everything") {
    updatePrompt2(); //有直接挑選 也有 選擇角色 時執行
  } else {
    updatePromptAndExample();
  }
}
// checkbox 處理是否使用 example
function updateTextArea() {
  if (document.getElementById("example").checked) {
    //document.getElementById("example1").value = "";
    updatePromptAndExample();
  } else {
    if (document.getElementById("example1").value == "") {
      //document.getElementById("example1").value = "Act as an SEO professional writer, I need an optimized blog post, you will research keywords and incorporate them naturally into the content, in the process, you should focus on readability, relevance, and proper keyword placement, please avoid keyword stuffing or over-optimization, input the final result in a well-struetured format, here is an the title:&quot;Top 10 Tips for Effective SEO Writing: Boost Your Content's Visibility&quot;.";
      updatePromptAndExample();
    } else {
      updatePromptAndExample();
    }
  }
}

function updatePrompt2() {
/*   if (document.getElementById("spower").value !== "") {
    //訂製功能使用時 Detail 下拉沒選項會顯示 {執行細節 detail} 所以要清空
    //document.getElementById("detail").value = "";
  } */
  // Get the prompt elements
  
  var prompt = document.getElementById("prompt");
  // Update the prompt elements with the generated prompt 
  prompt.value = generatePrompt2();
}

function generatePrompt2() {
  // Get the selected or inputted items
  //var spower = document.getElementById("spower").value;
  //var spowercall = document.getElementById("spower").value;
  //var detail = document.getElementById("detail").value;
  var tone = document.getElementById("tone").value;
  var dont = document.getElementById("dont").value;
  var country = document.getElementById("country").value;
  var format = document.getElementById("format").value;
  var reply = document.getElementById("reply").value;
  var needInput = document.getElementById("need-input").value;
  var detailInput = document.getElementById("detail-input").value;
  //var example1 = document.getElementById("example1").value
  var selectedOption = document.getElementById("spower").value;
  var decodedValue = decodeURIComponent(selectedOption);
  console.log("解碼後的值：", decodedValue);

  if (needInput !== "") {
    need = needInput;
  }
/*   if (detailInput !== "") {
    detail = detailInput;
  } */
/*   if (document.getElementById("spower").value !== "") {
    document.getElementById("detail").value = "";
  } */

  if (Iteration == "[object HTMLInputElement]") {
    Iteration = "";
  }
  if (COT == "[object HTMLInputElement]") {
    COT = "";
  }
  if (TOT == "[object HTMLInputElement]") {
    TOT = "";
  }
  if (StepBack == "[object HTMLInputElement]") {
    StepBack = "";
  }
  if (leso == "[object HTMLInputElement]") {
    leso = "";
  }
  if (cutbulls == "[object HTMLInputElement]") {
    cutbulls = "";
  }

  // Generate the prompt
  //var prompt = spowercall + "\n \n";
  var prompt = decodedValue + "\n \n";
  prompt += detailInput + "\n";
  prompt += tone + "\n";
  prompt += dont + "\n";
  prompt += format + "\n \n";
  prompt += Iteration + "\n";
  prompt += COT + "\n";
  prompt += decodeURIComponent(TOT) + "\n";
  prompt += decodeURIComponent(StepBack) + "\n";
  prompt += country + "\n";
  prompt += cutbulls + "\n";
  prompt += leso + "\n";
  prompt += reply + "\n";
  return prompt;
}
