function debouncingprocess(fun , waititme  = 0){
     let timeid = null;
      return  function(...args){
         const context = this;
          clearTimeout(timeid);
           timeid = setTimeout(function(){
                   return fun.apply(context, args);
           }, waititme)
      }

}

