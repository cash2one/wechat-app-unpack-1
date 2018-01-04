
var z=[];
var $gwxc=0;
//var should_pass_type_info=true;
	var root={"tag":"page"};
	root.children=[]
	function _(a,b){
		b&&a.children.push(b);
	}
	function _v(k){
		if(typeof(k)!='undefined')
			{return {tag:'virtual','wxKey':k,children:[]};}
		return {tag:'virtual',children:[]};
	}
	function _n(tag){
		$gwxc++;
		if($gwxc>=16000){
			throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'
		};
		return {tag:tag.substr(0,3)=='wx-'?tag:''+tag,attr:{},children:[],n:[]}
	}
    
	function $gwh(){
		function x(){}
		x.prototype = {
		hn: function( obj ){
			if( typeof(obj) == 'object' ){
				var cnt=0;
				var any=false;
				for(var x in obj){
					any|=x==='__value__';
					cnt++;
					if(cnt>2){break;}
				}
				return cnt == 2 && any && obj.hasOwnProperty('__wxspec__') ? "h" : "n";
			}
			return "n";
		},
		nh: function( obj, special ){
			return { __value__: obj, __wxspec__: special ? special : true }
		},
		rv: function( obj ){
			//console.log(this.hn(obj));
			return this.hn(obj)==='n'?obj:this.rv(obj.__value__);
		}}
		return new x;
	}
	wh=$gwh();
	function $gwrt( should_pass_type_info ){
		function ArithmeticEv( ops, e, s, g, o ){
			var rop = ops[0][1];
			var _a,_b,_c,_d, _aa, _bb;
			switch( rop ){
				case '?:':
					console.log(ops);
					_a = rev( ops[1], e, s, g, o );
					console.log(_a);
					_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
					_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o ) : rev( ops[3], e, s, g, o );
					_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
					console.log( rev( ops[2], e, s, g, o ));
					return _d;
					break;
				case '&&':
					_a = rev( ops[1], e, s, g, o );
					_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
					_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o ) : wh.rv( _a );
					_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
					return _d;
					break;
				case '||':
					_a = rev( ops[1], e, s, g, o );
					_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
					_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o );
					_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
					return _d;
					break;
				case '+':
				case '*':
				case '/':
				case '%':
				case '|':
				case '^':
				case '&':
				case '===':
				case '==':
				case '!=':
				case '!==':
				case '>=':
				case '<=':
				case '>':
				case '<':
				case '<<':
				case '>>':
					_a = rev( ops[1], e, s, g, o );
					_b = rev( ops[2], e, s, g, o );
					_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
					switch( rop ){
						case '+':
							_d = wh.rv( _a ) + wh.rv( _b );
							break;
						case '*':
							_d = wh.rv( _a ) * wh.rv( _b );
							break;
						case '/':
							_d = wh.rv( _a ) / wh.rv( _b );
							break;
						case '%':
							_d = wh.rv( _a ) % wh.rv( _b );
							break;
						case '|':
							_d = wh.rv( _a ) | wh.rv( _b );
							break;
						case '^':
							_d = wh.rv( _a ) ^ wh.rv( _b );
							break;
						case '&':
							_d = wh.rv( _a ) & wh.rv( _b );
							break;
						case '===':
							_d = wh.rv( _a ) === wh.rv( _b );
							break;
						case '==':
							_d = wh.rv( _a ) == wh.rv( _b );
							break;
						case '!=':
							_d = wh.rv( _a ) != wh.rv( _b );
							break;
						case '!==':
							_d = wh.rv( _a ) !== wh.rv( _b );
							break;
						case '>=':
							_d = wh.rv( _a ) >= wh.rv( _b );
							break;
						case '<=':
							_d = wh.rv( _a ) <= wh.rv( _b );
							break;
						case '>':
							_d = wh.rv( _a ) > wh.rv( _b );
							break;
						case '<':
							_d = wh.rv( _a ) < wh.rv( _b );
							break;
						case '<<':
							_d = wh.rv( _a ) << wh.rv( _b );
							break;
						case '>>':
							_d = wh.rv( _a ) >> wh.rv( _b );
							break;
						default:
							break;
					}
					return _c ? wh.nh( _d, "c" ) : _d;
					break;
				case '-':
					_a = ops.length === 3 ? rev( ops[1], e, s, g, o ) : 0;
					_b = ops.length === 3 ? rev( ops[2], e, s, g, o ) : rev( ops[1], e, s, g, o );
					_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
					_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
					return _c ? wh.nh( _d, "c" ) : _d;
					break;
				case '!':
					_a = rev( ops[1], e, s, g, o );
					_c = should_pass_type_info && (wh.hn( _a ) == 'h');
					_d = !wh.rv(_a);
					return _c ? wh.nh( _d, "c" ) : _d;
				case '~':
					_a = rev( ops[1], e, s, g, o );
					_c = should_pass_type_info && (wh.hn( _a ) == 'h');
					_d = ~wh.rv(_a);
					return _c ? wh.nh( _d, "c" ) : _d;
					default:
						$gwn('unrecognized op' + rop );
			}
		}
		function rev( ops, e, s, g, o ){
			//console.log(ops);
			var op = ops[0];
			if( typeof(op)==='object' ){
				var vop=op[0];
				var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
				switch(vop){
					case 2:
						console.log(ops);
						return ArithmeticEv(ops,e,s,g,o);
						break;
					case 4:
						return rev( ops[1], e, s, g, o );
						break;
					case 5:
						switch( ops.length ){
							case 2:
								return should_pass_type_info ? [rev(ops[1],e,s,g,o)] : [wh.rv(rev(ops[1],e,s,g,o))];
								break;
							case 1:
								return [];
								break;
							default:
								_a = rev( ops[1],e,s,g,o );
								_a.push(should_pass_type_info ? rev( ops[2],e,s,g,o ) : wh.rv( rev(ops[2],e,s,g,o) ));
								return _a;
								break;
						}
						break;
					case 6:
						_a = rev(ops[1],e,s,g,o);
						_ta = wh.hn(_a)==='h';
						_aa = _ta ? wh.rv(_a) : _a;
						o.is_affected |= _ta;
						if( should_pass_type_info ){
							if( _aa===null || typeof(_aa) === 'undefined' ){
								return _ta ? wh.nh(undefined, 'e') : undefined;
							}
							_b = rev(ops[2],e,s,g,o);
							_tb = wh.hn(_b) === 'h';
							_bb = _tb ? wh.rv(_b) : _b;
							o.is_affected |= _tb;
							if( _bb===null || typeof(_bb) === 'undefined' ){
								return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
							}
							_d = _aa[_bb];
							_td = wh.hn(_d)==='h';
							o.is_affected |= _td;
							return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
						}
						else{
							if( _aa===null || typeof(_aa) === 'undefined' ){
								return undefined;
							}
							_b = rev(ops[2],e,s,g,o);
							_tb = wh.hn(_b) === 'h';
							_bb = _tb ? wh.rv(_b) : _b;
							o.is_affected |= _tb;
							if( _bb===null || typeof(_bb) === 'undefined' ){
								return undefined;
							}
							_d = _aa[_bb];
							_td = wh.hn(_d)==='h';
							o.is_affected |= _td;
							return _td ? wh.rv(_d) : _d;
						}
					case 7:
						switch(ops[1][0]){
							case 11:
								o.is_affected |= wh.hn(g)==='h';
								return g;
							case 3:
								_s = wh.rv( s );
								console.log(_s);
								_e = wh.rv( e );
								console.log(_e);
								_b = ops[1][1];
								//_a = _s && _s.hasOwnProperty(_b) ? s : _e && ( _e.hasOwnProperty(_b) ? e : undefined );
								_a = _s;
								if( should_pass_type_info ){
									if( _a ){
										_ta = wh.hn(_a) === 'h';
										_aa = _ta ? wh.rv( _a ) : _a;
										_d = _aa[_b];
										_td = wh.hn(_d) === 'h';
										o.is_affected |= _ta || _td;
										_d = _ta && !_td ? wh.nh(_d,'e') : _d;
										console.log(_d);
										return _d;
									}
								}
								else{
									if( _a ){
										console.log(_a);
										_ta = wh.hn(_a) === 'h';
										_aa = _ta ? wh.rv( _a ) : _a;
										_d = _aa[_b];
										_td = wh.hn(_d) === 'h';
										o.is_affected |= _ta || _td;
										console.log(wh.rv(_d));
										return wh.rv(_d);
									}
								}
								console.log("{{"+ops[1][1]+"}}");
								return "{{"+ops[1][1]+"}}";
						}
						break;
					case 8:
						_a = {};
						_a[ops[1]] = rev(ops[2],e,s,g,o);
						return _a;
						break;
					case 9:
						_a = rev(ops[1],e,s,g,o);
						_b = rev(ops[2],e,s,g,o);
						function merge( _a, _b, _ow ){
							_ta = wh.hn(_a)==='h';
							_tb = wh.hn(_b)==='h';
							_aa = wh.rv(_a);
							_bb = wh.rv(_b);
							if( should_pass_type_info ){
								if( _tb ){
									for(var k in _bb){
										if ( _ow || !_aa.hasOwnProperty(k) )
											_aa[k]=wh.nh(_bb[k],'e');
										}
									}
								else{
									for(var k in _bb){
										if ( _ow || !_aa.hasOwnProperty(k) )
											{_aa[k]=_bb[k];}
									}
								}
							}
							else{
								for(var k in _bb){
									if ( _ow || _aa.hasOwnProperty(k) )
										{_aa[k]=wh.rv(_bb[k]);}
								}
							}
							return _a;
						}
						var _c = _a
						var _ow = true
						if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
							_a = _b
							_b = _c
							_ow = false
						}
						if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
							var _r = {}
							return merge( merge( _r, _a, _ow ), _b, _ow );
						}
						else
							return merge( _a, _b, _ow );
						break;
					case 10:
						return should_pass_type_info ? rev(ops[1],e,s,g,o) : wh.rv(rev(ops[1],e,s,g,o));
				}
			}
			else{
				if( op === 3 || op === 1 ) {return ops[1];}
				else if( op === 11 ){
					var _a='';
					for( var i = 1 ; i < ops.length ; i++ ){
						var xp = wh.rv(rev(ops[i],e,s,g,o));
						_a += typeof(xp) === 'undefined' ? '' : xp;
					}
					return _a;
				}
			}
		}
		return rev;
	}
	gra=$gwrt(true);
	grb=$gwrt(false);
	function _r( node, attrname, opindex, env, scope, global ){
		var o = {};
		console.log(z[opindex]);
		var a = grb( z[opindex], env, scope, global, o );
		node.attr[attrname] = a;
		if( o.is_affected ){node.n.push( attrname );}
	}
	function _m(tag,attrs,env,scope,global){
		var tmp=_n(tag);
		var base=0;
		for(var i = 0 ; i < attrs.length ; i+=2 ){
			if(attrs[i+1]<0){
				tmp.attr[attrs[i]]=true;
			}
			else{
				_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
				if(base===0)
					base=attrs[i+1];
			}
		}
		return tmp;
	}
	function _o( opindex, env, scope, global ){
		var nothing = {};
		return grb( z[opindex], env, scope, global, nothing );
	}
