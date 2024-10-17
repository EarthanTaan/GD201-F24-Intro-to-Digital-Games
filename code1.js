gdjs.Start_32ScreenCode = {};
gdjs.Start_32ScreenCode.localVariables = [];
gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1= [];
gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects2= [];
gdjs.Start_32ScreenCode.GDLargeSignObjects1= [];
gdjs.Start_32ScreenCode.GDLargeSignObjects2= [];
gdjs.Start_32ScreenCode.GDGame_9595ExplanationObjects1= [];
gdjs.Start_32ScreenCode.GDGame_9595ExplanationObjects2= [];
gdjs.Start_32ScreenCode.GDSide_9595NoteObjects1= [];
gdjs.Start_32ScreenCode.GDSide_9595NoteObjects2= [];
gdjs.Start_32ScreenCode.GDSide_9595Note2Objects1= [];
gdjs.Start_32ScreenCode.GDSide_9595Note2Objects2= [];
gdjs.Start_32ScreenCode.GDGrass8Objects1= [];
gdjs.Start_32ScreenCode.GDGrass8Objects2= [];
gdjs.Start_32ScreenCode.GDAlpacaObjects1= [];
gdjs.Start_32ScreenCode.GDAlpacaObjects2= [];
gdjs.Start_32ScreenCode.GDTrexObjects1= [];
gdjs.Start_32ScreenCode.GDTrexObjects2= [];
gdjs.Start_32ScreenCode.GDTofuObjects1= [];
gdjs.Start_32ScreenCode.GDTofuObjects2= [];
gdjs.Start_32ScreenCode.GDTofu2Objects1= [];
gdjs.Start_32ScreenCode.GDTofu2Objects2= [];


gdjs.Start_32ScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, 640, 640, false);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "a4ebd0f063bbb6f3107e2b0c11782d489bd77db960a8ebaffd08f68e52c4e1d8_Cornfield Chase.aac", false, 100, 1);
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Alpaca"), gdjs.Start_32ScreenCode.GDAlpacaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trex"), gdjs.Start_32ScreenCode.GDTrexObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDTrexObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDTrexObjects1[i].getBehavior("Object3D").setRotationY(gdjs.Start_32ScreenCode.GDTrexObjects1[i].getBehavior("Object3D").getRotationY() + (2));
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDAlpacaObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDAlpacaObjects1[i].getBehavior("Object3D").turnAroundY(-(2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1[k] = gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tofu Goes to Hollywood", true);
}}

}


};

gdjs.Start_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1.length = 0;
gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects2.length = 0;
gdjs.Start_32ScreenCode.GDLargeSignObjects1.length = 0;
gdjs.Start_32ScreenCode.GDLargeSignObjects2.length = 0;
gdjs.Start_32ScreenCode.GDGame_9595ExplanationObjects1.length = 0;
gdjs.Start_32ScreenCode.GDGame_9595ExplanationObjects2.length = 0;
gdjs.Start_32ScreenCode.GDSide_9595NoteObjects1.length = 0;
gdjs.Start_32ScreenCode.GDSide_9595NoteObjects2.length = 0;
gdjs.Start_32ScreenCode.GDSide_9595Note2Objects1.length = 0;
gdjs.Start_32ScreenCode.GDSide_9595Note2Objects2.length = 0;
gdjs.Start_32ScreenCode.GDGrass8Objects1.length = 0;
gdjs.Start_32ScreenCode.GDGrass8Objects2.length = 0;
gdjs.Start_32ScreenCode.GDAlpacaObjects1.length = 0;
gdjs.Start_32ScreenCode.GDAlpacaObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTrexObjects1.length = 0;
gdjs.Start_32ScreenCode.GDTrexObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTofuObjects1.length = 0;
gdjs.Start_32ScreenCode.GDTofuObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTofu2Objects1.length = 0;
gdjs.Start_32ScreenCode.GDTofu2Objects2.length = 0;

gdjs.Start_32ScreenCode.eventsList0(runtimeScene);
gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1.length = 0;
gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects2.length = 0;
gdjs.Start_32ScreenCode.GDLargeSignObjects1.length = 0;
gdjs.Start_32ScreenCode.GDLargeSignObjects2.length = 0;
gdjs.Start_32ScreenCode.GDGame_9595ExplanationObjects1.length = 0;
gdjs.Start_32ScreenCode.GDGame_9595ExplanationObjects2.length = 0;
gdjs.Start_32ScreenCode.GDSide_9595NoteObjects1.length = 0;
gdjs.Start_32ScreenCode.GDSide_9595NoteObjects2.length = 0;
gdjs.Start_32ScreenCode.GDSide_9595Note2Objects1.length = 0;
gdjs.Start_32ScreenCode.GDSide_9595Note2Objects2.length = 0;
gdjs.Start_32ScreenCode.GDGrass8Objects1.length = 0;
gdjs.Start_32ScreenCode.GDGrass8Objects2.length = 0;
gdjs.Start_32ScreenCode.GDAlpacaObjects1.length = 0;
gdjs.Start_32ScreenCode.GDAlpacaObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTrexObjects1.length = 0;
gdjs.Start_32ScreenCode.GDTrexObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTofuObjects1.length = 0;
gdjs.Start_32ScreenCode.GDTofuObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTofu2Objects1.length = 0;
gdjs.Start_32ScreenCode.GDTofu2Objects2.length = 0;


return;

}

gdjs['Start_32ScreenCode'] = gdjs.Start_32ScreenCode;
