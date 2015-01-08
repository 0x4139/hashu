
var Hashu = function Hashu(arr){
	if(!arr) throw new Error('Invalid repository!');
	this.repository=arr;
	this.repositorySize=arr.length;
};
module.exports = Hashu;
Hashu.prototype._hash = function(str) {
	    var hash = 0;
	    for (i = 0; i < str.length; i++) {
	        char = str.charCodeAt(i);
	        hash += char;
	    }
	    return hash;
};

Hashu.prototype.Get = function(string) {
	var hash = this._hash(string);
	return this.repository[hash%this.repositorySize];
};
