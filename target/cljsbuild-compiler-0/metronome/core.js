// Compiled by ClojureScript 0.0-2030
goog.provide('metronome.core');
goog.require('cljs.core');
goog.require('createjs.Sound');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.forms');
metronome.core.assetsPath = "assets/";
metronome.core.manifest = cljs.core.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"src","src",1014018390),"Click1.ogg|Click1.mp3",new cljs.core.Keyword(null,"id","id",1013907597),1], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"src","src",1014018390),"Click2.ogg|Click2.mp3",new cljs.core.Keyword(null,"id","id",1013907597),2], true)], true));
createjs.Sound.registerManifest(metronome.core.manifest,metronome.core.assetsPath);
metronome.core.sounds = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
metronome.core.bpm_el = goog.dom.getElement("bpm");
metronome.core.not_interrupt = createjs.Sound.INTERRUPT_NONE;
metronome.core.play = (function play(id){console.log("Playing sound",id);
var s = createjs.Sound.play(id,metronome.core.not_interrupt);return cljs.core.swap_BANG_.call(null,metronome.core.sounds,(function (p1__4854_SHARP_){return cljs.core.assoc_in.call(null,p1__4854_SHARP_,cljs.core.PersistentVector.fromArray([id,new cljs.core.Keyword(null,"sound","sound",1123531905)], true),s);
}));
});
/**
* Stop sound, clear interval
*/
metronome.core.stop_sound = (function stop_sound(m,id){return cljs.core.update_in.call(null,m,cljs.core.PersistentVector.fromArray([[cljs.core.str(id)].join('')], true),(function (v){var temp__4092__auto___4855 = new cljs.core.Keyword(null,"interval","interval",1584322615).cljs$core$IFn$_invoke$arity$1(v);if(cljs.core.truth_(temp__4092__auto___4855))
{var i_4856 = temp__4092__auto___4855;clearInterval(i_4856);
} else
{}
var temp__4092__auto___4857 = new cljs.core.Keyword(null,"sound","sound",1123531905).cljs$core$IFn$_invoke$arity$1(v);if(cljs.core.truth_(temp__4092__auto___4857))
{var s_4858 = temp__4092__auto___4857;s_4858.stop();
} else
{}
return cljs.core.dissoc.call(null,v,new cljs.core.Keyword(null,"interval","interval",1584322615));
}));
});
metronome.core.stop = (function stop(id){return cljs.core.swap_BANG_.call(null,metronome.core.sounds,metronome.core.stop_sound,id);
});
goog.exportSymbol('metronome.core.stop', metronome.core.stop);
/**
* Stop all intervals and sounds
*/
metronome.core.stop_all = (function stop_all(){var seq__4863 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,metronome.core.sounds)));var chunk__4864 = null;var count__4865 = 0;var i__4866 = 0;while(true){
if((i__4866 < count__4865))
{var id = cljs.core._nth.call(null,chunk__4864,i__4866);metronome.core.stop.call(null,id);
{
var G__4867 = seq__4863;
var G__4868 = chunk__4864;
var G__4869 = count__4865;
var G__4870 = (i__4866 + 1);
seq__4863 = G__4867;
chunk__4864 = G__4868;
count__4865 = G__4869;
i__4866 = G__4870;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4863);if(temp__4092__auto__)
{var seq__4863__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4863__$1))
{var c__3850__auto__ = cljs.core.chunk_first.call(null,seq__4863__$1);{
var G__4871 = cljs.core.chunk_rest.call(null,seq__4863__$1);
var G__4872 = c__3850__auto__;
var G__4873 = cljs.core.count.call(null,c__3850__auto__);
var G__4874 = 0;
seq__4863 = G__4871;
chunk__4864 = G__4872;
count__4865 = G__4873;
i__4866 = G__4874;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__4863__$1);metronome.core.stop.call(null,id);
{
var G__4875 = cljs.core.next.call(null,seq__4863__$1);
var G__4876 = null;
var G__4877 = 0;
var G__4878 = 0;
seq__4863 = G__4875;
chunk__4864 = G__4876;
count__4865 = G__4877;
i__4866 = G__4878;
continue;
}
}
} else
{return null;
}
}
break;
}
});
metronome.core.soundLoop = (function soundLoop(btn){var bpm = parseInt(goog.dom.forms.getValue(metronome.core.bpm_el));var id = [cljs.core.str(btn.id)].join('');var bpm_interval = (60000 / bpm);return cljs.core.swap_BANG_.call(null,metronome.core.sounds,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([id,new cljs.core.Keyword(null,"interval","interval",1584322615)], true),setInterval((function (){return metronome.core.play.call(null,id);
}),bpm_interval));
});
goog.exportSymbol('metronome.core.soundLoop', metronome.core.soundLoop);
