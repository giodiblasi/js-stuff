const getMan = name => ({
        manName: name,
        getName: function(){ return  this.manName; },
        getNameLambda: ()=> this.manName
});

module.exports = { getMan }
