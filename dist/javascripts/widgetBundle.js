!function(t){"use strict";var e=-1,i={onVisible:function(t){var e=i.isSupported();if(!e||!i.hidden())return t(),e;var s=i.change(function(){i.hidden()||(i.unbind(s),t())});return s},change:function(t){if(!i.isSupported())return!1;e+=1;var s=e;return i._callbacks[s]=t,i._listen(),s},unbind:function(t){delete i._callbacks[t]},afterPrerendering:function(t){var e=i.isSupported(),s="prerender";if(!e||s!=i.state())return t(),e;var n=i.change(function(e,o){s!=o&&(i.unbind(n),t())});return n},hidden:function(){return!(!i._doc.hidden&&!i._doc.webkitHidden)},state:function(){return i._doc.visibilityState||i._doc.webkitVisibilityState||"visible"},isSupported:function(){return!(!i._doc.visibilityState&&!i._doc.webkitVisibilityState)},_doc:document||{},_callbacks:{},_change:function(t){var e=i.state();for(var s in i._callbacks)i._callbacks[s].call(i._doc,t,e)},_listen:function(){if(!i._init){var t="visibilitychange";i._doc.webkitVisibilityState&&(t="webkit"+t);var e=function(){i._change.apply(i,arguments)};i._doc.addEventListener?i._doc.addEventListener(t,e):i._doc.attachEvent(t,e),i._init=!0}}};"undefined"!=typeof module&&module.exports?module.exports=i:t.Visibility=i}(this);var ReactCSSTransitionGroup=React.addons.CSSTransitionGroup,playNotesInterval,hoverTimeout,PLAY="play",PAUSE="pause",CLEARNOTE="clearnote",DEFAULT_NOTE_TEXT="This is a note. Click to edit.",WidgetApp=React.createClass({displayName:"WidgetApp",getInitialState:function(){return{settings:this.props.settings,mode:PAUSE,slideIndex:0}},addEventListeners:function(){var t=this;Wix.addEventListener(Wix.Events.SETTINGS_UPDATED,function(e){t.setState({settings:e}),t.setState({slideIndex:t.getFirstVisibleNoteIndex()}),t.state.settings.transition.preview===!0&&t.previewRollingNotes()}),Wix.addEventListener(Wix.Events.EDIT_MODE_CHANGE,function(e){"preview"===e.editMode&&t.playNotes(),"editor"===e.editMode&&t.refreshWidget()})},componentDidMount:function(){var t=this,e=Wix.Worker.Utils.getViewMode();"editor"===e&&this.addEventListeners(),Visibility.change(function(i,s){"edit"!==e&&("hidden"===s||"visible"===s&&t.refreshWidget())}),t.setState({slideIndex:t.getFirstVisibleNoteIndex()}),("site"===e||"preview"===e)&&this.playNotes(),console.log(e)},updateStyles:function(){var t={},e=this.state.settings.design;return t.color=e.text.color,t.textAlign=e.text.alignment,t.backgroundColor=e.background.color,t.borderColor=e.border.color,t.borderWidth=e.border.width,t.borderRadius=e.border.radius,t},updateAnchorStyle:function(){var t={};return t.cursor=this.getNote().link.url?"pointer":"default",t},updateHeaderStyle:function(){var t={},e=this.state.settings.design;return"postitNote"===this.state.settings.design.template&&(t.backgroundColor=darkerShadeFromRGBA(e.background.color)),t},handleMouseEnter:function(t){var e=this.state.settings.design;e.hover.selected&&$(t.target).closest(".note-widget").css({"background-color":e.hover.color}),this.pauseNotes()},handleMouseLeave:function(t){$(t.target).closest(".note-widget").css({"background-color":this.state.settings.design.background.color}),this.resumePlayNotes()},getSlideDuration:function(){return 1e3*this.state.settings.transition.duration+2e3},refreshWidget:function(){window.location.reload()},clearNote:function(){this.setState({mode:CLEARNOTE,slideIndex:-1})},resumePlayNotes:function(){var t=this;this.state.mode!==PLAY&&(this.setState({mode:PLAY}),hoverTimeout=setTimeout(function(){t.nextNote(),t.playNotes()},2e3))},playNotes:function(){var t=this;this.state.mode===PLAY&&this.pauseNotes(),playNotesInterval=setInterval(function(){t.nextNote()},this.getSlideDuration())},pauseNotes:function(){this.state.mode!==PAUSE&&(this.setState({mode:PAUSE}),clearInterval(playNotesInterval),clearTimeout(hoverTimeout))},previewRollingNotes:function(){this.clearNote(),this.nextNote(),this.pauseNotes()},getNumOfVisibleNotes:function(){var t=0;return this.state.settings.notes.forEach(function(e){e.visibility===!0&&t++}),t},getFirstVisibleNoteIndex:function(){for(var t=0;t<this.state.settings.notes.length;t++)if(this.state.settings.notes[t].visibility===!0)return t;return 0},getNextVisibleNote:function(){for(var t=this.state.settings.notes,e=(this.state.slideIndex+1)%t.length;t[e].visibility===!1;)e=(e+1)%t.length;return e},nextNote:function(){return this.state.mode!==PLAY&&this.setState({mode:PLAY}),this.getNumOfVisibleNotes()<2?void this.setState({slideIndex:0}):void this.setState({slideIndex:this.getNextVisibleNote()})},getNoteLinkURL:function(){return note=this.getNote(),note.link.url?note.link.url:"javascript:;"},getNote:function(){var t;return t=-1===this.state.slideIndex?{msg:"",key:"thisisthetestkey",link:{url:"",target:""}}:0===this.state.settings.notes.length||0===this.getNumOfVisibleNotes()?{msg:DEFAULT_NOTE_TEXT,key:"defaultNote",link:{url:"",target:""}}:this.state.settings.notes[this.state.slideIndex]},getNoteWrapper:function(){return this.state.mode!==CLEARNOTE?ReactCSSTransitionGroup({transitionName:this.state.mode},React.DOM.div({className:"rSlides "+this.state.settings.transition.effect,key:this.getNote().key},React.DOM.p(null,this.getNote().msg))):void 0},render:function(){return React.DOM.a({href:this.getNoteLinkURL(),target:this.getNote().link.target||"",style:this.updateAnchorStyle()},React.DOM.div({className:"note-widget "+this.state.settings.design.template,style:this.updateStyles(),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},React.DOM.div({className:"note-header",style:this.updateHeaderStyle()}),React.DOM.div({className:"note-content"},this.getNoteWrapper())))}}),parseRBGA=function(t){return t?t.substring(5,t.length-1).replace(/ /g,"").split(","):[255,255,255,1]},darkerShadeFromRGBA=function(t){var e=parseRBGA(t);return"rgba("+Math.abs((e[0]-26)%255)+","+Math.abs((e[1]-26)%255)+","+Math.abs((e[2]-26)%255)+","+e[3]+")"};React.renderComponent(WidgetApp({settings:window.settings}),document.getElementById("content"));