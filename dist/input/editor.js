import {
  AudioPlayer
} from '../../index.js'

export const components = {
  AudioPlayer
}

export const config = {"displayName":"Audio Player","iosInstallScript":"scripts/install_ios.sh","androidInstallScript":"scripts/install_android.sh","name":"adalo-audio-player","version":"dev","components":[{"name":"AudioPlayer","displayName":"Audio Player","defaultWidth":200,"defaultHeight":300,"props":[{"name":"url","displayName":"URL of Song","type":"text"},{"name":"title","displayName":"Song Title","type":"text","default":""},{"name":"titleColor","displayName":"Title Color","type":"color","default":"@text"},{"name":"titleSize","displayName":"Title Font Size","type":"number","default":16},{"name":"subtitle","displayName":"Subtitle (Artist Name, etc.)","type":"text","default":""},{"name":"subtitleColor","displayName":"Subtitle Color","type":"color","default":"@text"},{"name":"subtitleSize","displayName":"Subtitle Font Size","type":"number","default":12}],"childComponents":[{"name":"artwork","displayName":"Artwork","props":[{"name":"enabled","type":"boolean","default":true},{"name":"showArtwork","displayName":"Show Artwork","type":"boolean","default":true},{"name":"artworkURL","displayName":"Artwork URL","type":"text"},{"name":"height","displayName":"Height","type":"number","default":100},{"name":"width","displayName":"Width","type":"number","default":100},{"name":"artworkRounding","displayName":"Rounding","type":"number","default":4,"control":{"type":"slider","max":18,"min":0}}]},{"name":"progressBar","displayName":"Progress Bar","props":[{"name":"position","displayName":"Position","type":"text","default":"aboveButtons","control":{"type":"menu","options":[{"label":"Above Title","value":"aboveTitle"},{"label":"Above Buttons","value":"aboveButtons"},{"label":"Below Buttons","value":"belowButtons"}]}},{"name":"filledColor","displayName":"Filled Color","type":"color","default":"@primary"},{"name":"unfilledColor","displayName":"Unfilled Color","type":"color","default":"#e0e0e0"},{"name":"progressRounding","displayName":"Rounding","type":"number","default":4,"control":{"type":"slider","max":18,"min":0}},{"name":"height","displayName":"Height","type":"number","default":2},{"name":"markerSize","displayName":"Marker Size","type":"number","default":10},{"name":"markerColor","displayName":"Marker Color","type":"color","default":"@primary"},{"name":"border","displayName":"Border","type":"boolean","default":true},{"name":"borderColor","displayName":"Border Color","type":"color","default":"@primary"},{"name":"borderSize","displayName":"Border Size","type":"number","default":1},{"name":"borderShadow","displayName":"Shadow","type":"boolean","default":true},{"name":"endTimeFormat","displayName":"Display End Time As","type":"number","default":0,"control":{"type":"menu","options":[{"label":"Time Remaining","value":0},{"label":"Total Time","value":1}]}}]},{"name":"playPauseButtons","displayName":"Play & Pause Buttons","props":[{"name":"enabled","type":"boolean","default":true},{"name":"enablePlay","displayName":"Enable Play Button","type":"boolean","default":true},{"name":"playIconName","displayName":"Play Button Icon","type":"icon","default":"play-arrow"},{"name":"playColor","displayName":"Icon Color","type":"color","default":"#757575"},{"name":"playAction","displayName":"Additional Actions when Play Button is Clicked","type":"action","arguments":[{"type":"number","displayName":"Argument","fieldId":"argument"}]},{"name":"enablePause","displayName":"Enable Pause Button","type":"boolean","default":true},{"name":"pauseIconName","displayName":"Pause Button Icon","type":"icon","default":"pause"},{"name":"pauseColor","displayName":"Icon Color","type":"color","default":"#757575"},{"name":"pauseAction","displayName":"Additional Actions when Pause Button is Clicked","type":"action"}]},{"name":"forwardBackButtons","displayName":"Forward & Back Buttons","props":[{"name":"enabled","type":"boolean","default":true},{"name":"enableForward","displayName":"Enable Forward Button","type":"boolean","default":true},{"name":"forwardAmount","displayName":"Forward Button Skips by...","type":"number","default":30,"control":{"type":"menu","options":[{"label":"5 Seconds","value":5},{"label":"10 Seconds","value":10},{"label":"30 Seconds","value":30}]}},{"name":"forwardIconName","displayName":"Forward Button Icon","type":"icon","default":"forward-30"},{"name":"forwardColor","displayName":"Icon Color","type":"color","default":"#757575"},{"name":"forwardAction","displayName":"Additional Actions when Forward Button is Clicked","type":"action"},{"name":"enableBack","displayName":"Enable Back Button","type":"boolean","default":true},{"name":"backAmount","displayName":"Back Button Rewinds...","type":"number","default":10,"control":{"type":"menu","options":[{"label":"5 Seconds","value":5},{"label":"10 Seconds","value":10},{"label":"30 Seconds","value":30},{"label":"To beginning of track","value":0}]}},{"name":"backIconName","displayName":"Back Button Icon","type":"icon","default":"replay-10"},{"name":"backColor","displayName":"Icon Color","type":"color","default":"#757575"},{"name":"backAction","displayName":"Additional Actions when Back Button is Clicked","type":"action"}]},{"name":"leftRightButtons","displayName":"Left & Right Buttons","props":[{"name":"enabled","type":"boolean","default":false},{"name":"enableLeft","displayName":"Enable Left Button","type":"boolean","default":false},{"name":"leftIconName","displayName":"Left Button Icon","type":"icon"},{"name":"leftColor","displayName":"Icon Color","type":"color","default":"#757575"},{"name":"leftAction","displayName":"Additional Actions when Left Button is Clicked","type":"action"},{"name":"enableRight","displayName":"Enable Right Button","type":"boolean","default":false},{"name":"rightIconName","displayName":"Right Button Icon","type":"icon"},{"name":"rightColor","displayName":"Icon Color","type":"color","default":"#757575"},{"name":"rightAction","displayName":"Additional Actions when Right Button is Clicked","type":"action"}]}],"resizeY":true}]}