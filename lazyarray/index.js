const inc = (x)=>{
        console.log('inc', x);    
        return x+1;
}

const getInt = (url)=>{
    console.log("download", url);
    return parseInt(url);
}

class LazyArray {
    static from(iterable){
        var functions = iterable.map(x=> new LazyElement([typeof(x) === 'function' ? x : ()=>x]));
        return new LazyArray(functions);
    }
    
    constructor(lazyElements){
        this.items = lazyElements;
    }

    filter(predicate){
        return new LazyArray(this.items.map(x=>x.appendFilter(predicate)));
    }

    map(mapFunction){
        return new LazyArray(this.items.map(item=>item.append(mapFunction)));
    }
    
    some(condition){
        return this.items.some(item=>condition(item.solve()));
    }

    every(condition){
        return this.items.every(item=>condition(item.solve()));
    }

    find(predicate){
      for(let i=0;i<this.items.length; i++){
          const value = this.items[i].solve();
          if(predicate(value)) return value;
      }
    }

    solve(){
        return this.items.map(i=>i.solve()).filter(i=> !(i instanceof SkipResult));
    }
}
class LazyElement{
    constructor(functions=[_=>_]){
        this.functions = functions;
    }

    solve(){
        let result = undefined;
        let index =0;
        while(index<this.functions.length && !(result instanceof SkipResult)){
            result = this.functions[index++](result);
        }
        return result;
    }

    append(mapFn){
        return new LazyElement(this.functions.concat(mapFn));
    }

    appendFilter(predicate) {
        return this.append((value)=>predicate(value) ? value: new SkipResult());
    }
}

class SkipResult{

}

const array = LazyArray
    .from(["1", "2", "10"])
    .map(getInt)
    //.filter(x=>{console.log("filter...",x); return x<10;})
    .map(inc);
    
    //console.log(array.solve());
    console.log(array.find(x=>{ return x==2;}));
    


