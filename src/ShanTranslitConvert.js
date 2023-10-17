export function engToTai(input) {
    let output = input

    // let checkIsToneMarkIncludingOrNot = "(?!.*(?:\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8))[\s\S]*";
    // if (Pattern.matches(checkIsToneMarkIncludingOrNot, output)) {
    //     output = output.replaceAll("(\u006b|\u006b\u0068|\u006e\u0067|\u006a|z|\u006a|\u0073|\u006e\u0079|\u0074|\u0074\u0068|\u006e|\u0070|\u0070\u0068|\u0066|\u006d|\u0079|\u0072|\u006c|\u0077|\u0068|ʼ)([ae\u0069ou])", "$1$2\u030c");
    // }

    // const checkIsToneMarkIncludingOrNot = /(?!.*(?:\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8))[\s\S]*/;
    // const checkIsToneMarkIncludingOrNot = /(?!.*(?:\\u030c|\\u0300|\\u0304|\\u0301|\\u0302\\u0330|\\u1dc8)).*/;
    const checkIsToneMarkIncludingOrNot = /(?<=^(\u006b|\u006b\u0068|\u006e\u0067|\u006a|\u0073|\u006e\u0079|\u0074|\u0074\u0068|\u006e|\u0070|\u0070\u0068|\u0066|\u006d|\u0079|\u0072|\u006c|\u0077|\u0068|ʼ)*)(?!.*(?:\\u030c|\\u0300|\\u0304|\\u0301|\\u0302\\u0330|\\u1dc8)).*/;

    if (!checkIsToneMarkIncludingOrNot.test(output)) {
        output = output.replaceAll(/(\u006b|\u006b\u0068|\u006e\u0067|\u006a|\u007a|\u006a|\u0073|\u006e\u0079|\u0074|\u0074\u0068|\u006e|\u0070|\u0070\u0068|\u0066|\u006d|\u0079|\u0072|\u006c|\u0077|\u0068|ʼ)([\u0061\u0065\u0069\u006f\u0075])/g, "$1$2\u030c");
    }
  
    // y - ပျ
    output = output.replaceAll(/^(\u006b|\u006b\u0068|\u006e\u0067|\u006a|\u0073|\u006e\u0079|\u0074|\u0074\u0068|\u006e|\u0070|\u0070\u0068|\u0066|\u006d|\u0079|\u0072|\u006c|\u0077|\u0068|ʼ)\u0079(\u0061)$/g, "$1\u103b");
    // r - တြ
    output = output.replaceAll(/^(\u006b|\u006b\u0068|\u006e\u0067|\u006a|\u0073|\u006e\u0079|\u0074|\u0074\u0068|\u006e|\u0070|\u0070\u0068|\u0066|\u006d|\u0079|\u0072|\u006c|\u0077|\u0068|ʼ)\u0072(\u0061)$/g, "$1\u103c");
    // a - ဢ
    output = output.replaceAll(/^\u0061$/g, "ʼ");
    output = output.replaceAll(/^(\u006b|\u006b\u0068|\u006e\u0067|\u006a|\u0073|\u006e\u0079|\u0074|\u0074\u0068|\u006e|\u0070|\u0070\u0068|\u0066|\u006d|\u0079|\u0072|\u006c|\u0077|\u0068|ʼ)?\u0061$/g, "$1");

    // r - တြ
    output = output.replaceAll(/(\u006b|\u006b\u0068|\u006e\u0067|\u006a|\u0073|\u0074|\u0074\u0068|\u0070|\u0070\u0068|\u0066|\u006d|\u0079|\u0072|\u006c|\u0077|\u0068)\u0072/g, "$1\u103c");
    // y - ပျ
    output = output.replaceAll(/(\u006b|\u006b\u0068|\u006e\u0067|\u006a|\u0073|\u0074|\u0074\u0068|\u0070|\u0070\u0068|\u0066|\u006d|\u0079|\u0072|\u006c|\u0077|\u0068)\u0079/g, "$1\u103b");

    // \u030c , \u0300 , \u0304 , \u0301 , \u0302\u0330 , \u1dc8
    // ဢႃ
    output = output.replaceAll(/\u0061(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)\u0061/g, "$1\u1083");
    // ဢီ
    output = output.replaceAll(/\u0069(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)\u0069/g, "$1\u102e");
    output = output.replaceAll(/\u0069(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)/g, "$1\u102d");
    // ဢႅဝ်
    output = output.replaceAll(/\u0065(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)\u0061/g, "$1\u1085");
    // ဢႄ
    output = output.replaceAll(/\u0065(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)/g, "$1\u1084");
    // ဢေ
    output = output.replaceAll(/\u0061(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)\u0065/g, "$1\u1031");
    // ဢိုၼ်
    output = output.replaceAll(/\u0075(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)\u0065(\u006b|\u006b\u0068|\u006e\u0067|\u006a|\u0073|\u006e\u0079|\u0074|\u0074\u0068|\u006e|\u0070|\u0070\u0068|\u0066|\u006d|\u0079|\u0072|\u006c|\u0077|\u0068|\u0069|ʼ)/g, "$1ို$2");

    // ဢိုဝ်
    output = output.replaceAll(/\u0075(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)\u0065/g, "$1ိုဝ");

    // ဢုၼ်
    output = output.replaceAll(/\u0075(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)(\u006b|\u006b\u0068|\u006e\u0067|\u006a|\u0073|\u006e\u0079|\u0074|\u0074\u0068|\u006e|\u0070|\u0070\u0068|\u0066|\u006d|\u0079|\u0072|\u006c|\u0077|\u0068|\u0069|ʼ)/g, "$1ု$2");
    // ဢူ
    output = output.replaceAll(/\u0075(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)/g, "$1\u1030");
    // ဢိူၼ်
    output = output.replaceAll(/\u006f(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)\u0065(\u006b|\u006b\u0068|\u006e\u0067|\u006a|\u0073|\u006e\u0079|\u0074|\u0074\u0068|\u006e|\u0070|\u0070\u0068|\u0066|\u006d|\u0079|\u0072|\u006c|\u0077|\u0068|\u0069|ʼ)/g, "$1ိူ$2");

    // ဢိူဝ်
    output = output.replaceAll(/\u006f(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)\u0065/g, "$1ိူဝ");
    // ဢူၼ်
    output = output.replaceAll(/\u006f(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)(\u006b|\u006b\u0068|\u006e\u0067|\u006a|\u0073|\u006e\u0079|\u0074|\u0074\u0068|\u006e|\u0070|\u0070\u0068|\u0066|\u006d|\u0079|\u0072|\u006c|\u0077|\u0068|\u0069|ʼ)/g, "$1ူ$2");
    // ဢူဝ်
    output = output.replaceAll(/\u006f(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)/g, "$1ူဝ");
    // ဢွမ်
    output = output.replaceAll(/\u0061(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)\u0075(\u006b|\u006b\u0068|\u006e\u0067|\u006a|\u0073|\u006e\u0079|\u0074|\u0074\u0068|\u006e|\u0070|\u0070\u0068|\u0066|\u006d|\u0079|\u0072|\u006c|\u0077|\u0068|\u0069|ʼ)/g, "$1\u103d$2");

    // ဢႂ်
    output = output.replaceAll(/\u0061(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)\u0075\u0065/g, "$1ႂ်");

    // ဢေႃ
    output = output.replaceAll(/\u0061(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)\u0075/g, "$1ေႃ");


    // kh - ၶ
    output = output.replaceAll(/\u006b\u0068/g, "ၶ");
    // ng - င
    output = output.replaceAll(/\u006e\u0067/g, "င");
    // th - ထ
    output = output.replaceAll(/\u0074\u0068/g, "ထ");
    // ny - ၺ
    output = output.replaceAll(/\u006e\u0079|\u0069/g, "ၺ");
    // ts - ၸ
    output = output.replaceAll(/\u0074\u0073|\u006a|\u007a/g, "ၸ");
    // ph - ၽ
    output = output.replaceAll(/\u0070\u0068/g, "ၽ");
    // k - ၵ
    output = output.replaceAll(/\u006b/g, "ၵ");
    // s - သ
    output = output.replaceAll(/\u0073/g, "သ");
    // i - ၵႆ ၊ ၵၺ်
    // output = output.replaceAll("\u1086|\u107a\u103a", "i");
    // t - တ
    output = output.replaceAll(/\u0074/g, "တ");
    // n - ၼ
    output = output.replaceAll(/\u006e/g, "ၼ");
    // p - ပ
    output = output.replaceAll(/\u0070/g, "ပ");
    // f - ၾ
    output = output.replaceAll(/\u0066/g, "ၾ");
    // m - မ
    output = output.replaceAll(/\u006d/g, "မ");
    // y - ယ
    output = output.replaceAll(/\u0079/g, "ယ");
    // r - ရ
    output = output.replaceAll(/\u0072/g, "ရ");
    // l - လ
    output = output.replaceAll(/\u006c/g, "လ");
    // eao - ဢႅဝ်
    // output = output.replaceAll("\u1085\u101d\u103a", "e\u030cao");
    // ဝ - ဝ်
    // output = output.replaceAll("\u101d\u103a", "o");
    // h - ႁ
    output = output.replaceAll(/\u0068/g, "ႁ");

    // aa -> ဢႃ
    // ‘ - ဢ
    output = output.replaceAll(/ʼ/g, "ဢ");

    // kwam -> ၵႂမ်
    output = output.replaceAll(/([က-အၵ-ႁဢ])\u0077/g, "$1\u1082");
    // wam -> ဝမ်
    output = output.replaceAll(/\u0077|\u006f/g, "ဝ");

    //
    // \u030c , \u0300 , \u0304 , \u0301 , \u0302\u0330 , \u1dc8
    output = output.replaceAll(/(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢ])/g, "$1$2$3\u103a");

    // FINAL : Replace a with blank
    output = output.replaceAll(/\u0061/g, "");
    // ပဝ်ႇ
    output = output.replaceAll(/(\u030c)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢႂ]\u103a)?/g, "$2$3");
    // ယၵ်း
    output = output.replaceAll(/(\u0300)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢႂ]\u103a)?/g, "$2$3\u1087");
    // ယၵ်းၸမ်ႈ
    output = output.replaceAll(/(\u0304)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢႂ]\u103a)?/g, "$2$3\u1088");
    // ၸမ်ႈၼႃႈ
    output = output.replaceAll(/(\u0301)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢႂ]\u103a)?/g, "$2$3\u1038");
    // ၸမ်ႈတႂ်ႈ
    output = output.replaceAll(/(\u0302\u0330)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢႂ]\u103a)?/g, "$2$3\u1089");
    // ယၵ်းၶိုၼ်ႈ
    output = output.replaceAll(/(\u1dc8)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢႂ]\u103a)?/g, "$2$3\u108a");

    output = output.replaceAll(/ႃ([က-အၵ-ႁဢ])်/g, "ၢ$1်");
    output = output.replaceAll(/ေ([က-အၵ-ႁဢ])်/g, "ဵ$1်");
    output = output.replaceAll(/ႄ([က-အၵ-ႁဢ])်/g, "ႅ$1်");
    // ၶၺ် ၊ ၶၢၺ် ၊ ၵႂၢၺ် -> ၶႆ ၊ ၶၢႆ ၊ ၵႂၢႆ
    output = output.replaceAll(/([က-အၵ-ႁဢ])(\u1082)?([\u1062\u103d])?ၺ်/g, "$1$2$3\u1086");

    // full stop, comma, question mark

    // ။ -> .
    output = output.replaceAll(/\u002e/g, "\u104b");
    // // ၊ -> ,
    output = output.replaceAll(/\u002c/g, "\u104a");

    return output;
}