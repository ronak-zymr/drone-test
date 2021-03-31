const pdfreader = require("pdfreader"); 

new pdfreader.PdfReader().parseFileItems("sample.pdf", function (err, item) {
    if (err) console.log("err:", err);
    else if (!item) console.log("No Item");
    else if (item.text){
        const itemAsString = [      item.text,      'x: ' + item.x,      'y: ' + item.y,      'w: ' + item.w,      'h: ' + item.h,    ].join('\n\t');
        console.log(itemAsString)
    }
    else if (item.page) console.log("You are on Page:", item.page);
    
  });