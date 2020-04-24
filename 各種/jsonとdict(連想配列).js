 // 連想配列(dictionary)
    var dict={
        apple:"りんご",
        banana:"ばなな",
        cherry:"チェリー",
    };

    console.log("連想配列:"+dict["apple"]);

    // json
    var obj = {
      "apple": "リンゴ",
      "banana": "バナナ",
      "cherry": "チェリー"
    };
     
    console.log("json:"+obj.apple);

    /** データをJSON文字列に変換 */
    var json = JSON.stringify(dict);
    console.log("json stringify:"+json);

    // jsonからdictionaryへ変換
    var dict=JSON.parse(json);
    console.log("dict:"+dict);

    // object objectはdictionary,その要素を調べるには
    for(key in dict){
      console.log(key+":"+dict[key]);
    }
    