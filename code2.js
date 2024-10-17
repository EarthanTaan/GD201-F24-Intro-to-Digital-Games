gdjs.VictoryCode = {};
gdjs.VictoryCode.localVariables = [];
gdjs.VictoryCode.GDForestBackgroundObjects1= [];
gdjs.VictoryCode.GDForestBackgroundObjects2= [];
gdjs.VictoryCode.GDForestBackgroundObjects3= [];
gdjs.VictoryCode.GDYou_9595Win_9595textObjects1= [];
gdjs.VictoryCode.GDYou_9595Win_9595textObjects2= [];
gdjs.VictoryCode.GDYou_9595Win_9595textObjects3= [];
gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects1= [];
gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects2= [];
gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects3= [];
gdjs.VictoryCode.GDInvisible_9595Element_9595Placement_9595VisualizerObjects1= [];
gdjs.VictoryCode.GDInvisible_9595Element_9595Placement_9595VisualizerObjects2= [];
gdjs.VictoryCode.GDInvisible_9595Element_9595Placement_9595VisualizerObjects3= [];
gdjs.VictoryCode.GDReset_9595ButtonObjects1= [];
gdjs.VictoryCode.GDReset_9595ButtonObjects2= [];
gdjs.VictoryCode.GDReset_9595ButtonObjects3= [];
gdjs.VictoryCode.GDGrass8Objects1= [];
gdjs.VictoryCode.GDGrass8Objects2= [];
gdjs.VictoryCode.GDGrass8Objects3= [];
gdjs.VictoryCode.GDAlpacaObjects1= [];
gdjs.VictoryCode.GDAlpacaObjects2= [];
gdjs.VictoryCode.GDAlpacaObjects3= [];
gdjs.VictoryCode.GDTrexObjects1= [];
gdjs.VictoryCode.GDTrexObjects2= [];
gdjs.VictoryCode.GDTrexObjects3= [];
gdjs.VictoryCode.GDTofuObjects1= [];
gdjs.VictoryCode.GDTofuObjects2= [];
gdjs.VictoryCode.GDTofuObjects3= [];
gdjs.VictoryCode.GDTofu2Objects1= [];
gdjs.VictoryCode.GDTofu2Objects2= [];
gdjs.VictoryCode.GDTofu2Objects3= [];


gdjs.VictoryCode.asyncCallback29248020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.VictoryCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Reset_Button"), gdjs.VictoryCode.GDReset_9595ButtonObjects3);

{for(var i = 0, len = gdjs.VictoryCode.GDReset_9595ButtonObjects3.length ;i < len;++i) {
    gdjs.VictoryCode.GDReset_9595ButtonObjects3[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.5);
}
}{for(var i = 0, len = gdjs.VictoryCode.GDReset_9595ButtonObjects3.length ;i < len;++i) {
    gdjs.VictoryCode.GDReset_9595ButtonObjects3[i].getBehavior("Tween").addObjectPositionYTween2("RaiseButton", gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 0.9, "bouncePast", 2, false);
}
}gdjs.VictoryCode.localVariables.length = 0;
}
gdjs.VictoryCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.VictoryCode.localVariables);
for (const obj of gdjs.VictoryCode.GDReset_9595ButtonObjects2) asyncObjectsList.addObject("Reset_Button", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(14.5), (runtimeScene) => (gdjs.VictoryCode.asyncCallback29248020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.VictoryCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.VictoryCode.GDReset_9595ButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.VictoryCode.GDReset_9595ButtonObjects2.length;i<l;++i) {
    if ( gdjs.VictoryCode.GDReset_9595ButtonObjects2[i].getCenterYInScene() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 0.9 ) {
        isConditionTrue_0 = true;
        gdjs.VictoryCode.GDReset_9595ButtonObjects2[k] = gdjs.VictoryCode.GDReset_9595ButtonObjects2[i];
        ++k;
    }
}
gdjs.VictoryCode.GDReset_9595ButtonObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.VictoryCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.VictoryCode.asyncCallback29251380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.VictoryCode.localVariables);
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "Win Video", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Screen", false);
}gdjs.VictoryCode.localVariables.length = 0;
}
gdjs.VictoryCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.VictoryCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.VictoryCode.asyncCallback29251380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.VictoryCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start_Again_button"), gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects2.length;i<l;++i) {
    if ( gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects2[k] = gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadMusic(runtimeScene, "850a0341e42f8929a4e5d324eed0e44f2dfdfb059add0d40335663aac2f5bde7_New Hero In Town.aac");
}{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "Win Video", "https://www.youtube.com/embed/G87p148EOjo?si=al65LttpOI8rD3Yq&amp;start=39&autoplay=1", 512, 512, 64, 40, true, true, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.VictoryCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.VictoryCode.GDReset_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.VictoryCode.GDReset_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.VictoryCode.GDReset_9595ButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.VictoryCode.GDReset_9595ButtonObjects1[k] = gdjs.VictoryCode.GDReset_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.VictoryCode.GDReset_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "751052bbd3de6938713ebbe8782cc3f6feba91f9e3caf27272335ac4e549c0cd_Complete_02.aac", false, 100, 1);
}
{ //Subevents
gdjs.VictoryCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.VictoryCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Alpaca"), gdjs.VictoryCode.GDAlpacaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tofu2"), gdjs.VictoryCode.GDTofu2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trex"), gdjs.VictoryCode.GDTrexObjects1);
{gdjs.evtTools.window.setWindowSize(runtimeScene, 640, 640, false);
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.VictoryCode.GDTrexObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDTrexObjects1[i].getBehavior("Animation").setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs.VictoryCode.GDAlpacaObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDAlpacaObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.VictoryCode.GDTrexObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDTrexObjects1[i].getBehavior("Pathfinding").setMaxSpeed(200);
}
}{for(var i = 0, len = gdjs.VictoryCode.GDTofu2Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDTofu2Objects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 1.5, (gdjs.VictoryCode.GDTofu2Objects1[i].getY()));
}
}{for(var i = 0, len = gdjs.VictoryCode.GDTrexObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDTrexObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 1.5, (gdjs.VictoryCode.GDTrexObjects1[i].getY()));
}
}{for(var i = 0, len = gdjs.VictoryCode.GDAlpacaObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDAlpacaObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 1.5, (gdjs.VictoryCode.GDAlpacaObjects1[i].getY()));
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "850a0341e42f8929a4e5d324eed0e44f2dfdfb059add0d40335663aac2f5bde7_New Hero In Town.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Alpaca"), gdjs.VictoryCode.GDAlpacaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.VictoryCode.GDAlpacaObjects1.length;i<l;++i) {
    if ( gdjs.VictoryCode.GDAlpacaObjects1[i].getX() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.25 ) {
        isConditionTrue_0 = true;
        gdjs.VictoryCode.GDAlpacaObjects1[k] = gdjs.VictoryCode.GDAlpacaObjects1[i];
        ++k;
    }
}
gdjs.VictoryCode.GDAlpacaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Message Layer 1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Alpaca"), gdjs.VictoryCode.GDAlpacaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.VictoryCode.GDAlpacaObjects1.length;i<l;++i) {
    if ( gdjs.VictoryCode.GDAlpacaObjects1[i].getX() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.6 ) {
        isConditionTrue_0 = true;
        gdjs.VictoryCode.GDAlpacaObjects1[k] = gdjs.VictoryCode.GDAlpacaObjects1[i];
        ++k;
    }
}
gdjs.VictoryCode.GDAlpacaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Button Layer");
}}

}


{



}


{


gdjs.VictoryCode.eventsList3(runtimeScene);
}


};

gdjs.VictoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VictoryCode.GDForestBackgroundObjects1.length = 0;
gdjs.VictoryCode.GDForestBackgroundObjects2.length = 0;
gdjs.VictoryCode.GDForestBackgroundObjects3.length = 0;
gdjs.VictoryCode.GDYou_9595Win_9595textObjects1.length = 0;
gdjs.VictoryCode.GDYou_9595Win_9595textObjects2.length = 0;
gdjs.VictoryCode.GDYou_9595Win_9595textObjects3.length = 0;
gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects1.length = 0;
gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects2.length = 0;
gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects3.length = 0;
gdjs.VictoryCode.GDInvisible_9595Element_9595Placement_9595VisualizerObjects1.length = 0;
gdjs.VictoryCode.GDInvisible_9595Element_9595Placement_9595VisualizerObjects2.length = 0;
gdjs.VictoryCode.GDInvisible_9595Element_9595Placement_9595VisualizerObjects3.length = 0;
gdjs.VictoryCode.GDReset_9595ButtonObjects1.length = 0;
gdjs.VictoryCode.GDReset_9595ButtonObjects2.length = 0;
gdjs.VictoryCode.GDReset_9595ButtonObjects3.length = 0;
gdjs.VictoryCode.GDGrass8Objects1.length = 0;
gdjs.VictoryCode.GDGrass8Objects2.length = 0;
gdjs.VictoryCode.GDGrass8Objects3.length = 0;
gdjs.VictoryCode.GDAlpacaObjects1.length = 0;
gdjs.VictoryCode.GDAlpacaObjects2.length = 0;
gdjs.VictoryCode.GDAlpacaObjects3.length = 0;
gdjs.VictoryCode.GDTrexObjects1.length = 0;
gdjs.VictoryCode.GDTrexObjects2.length = 0;
gdjs.VictoryCode.GDTrexObjects3.length = 0;
gdjs.VictoryCode.GDTofuObjects1.length = 0;
gdjs.VictoryCode.GDTofuObjects2.length = 0;
gdjs.VictoryCode.GDTofuObjects3.length = 0;
gdjs.VictoryCode.GDTofu2Objects1.length = 0;
gdjs.VictoryCode.GDTofu2Objects2.length = 0;
gdjs.VictoryCode.GDTofu2Objects3.length = 0;

gdjs.VictoryCode.eventsList4(runtimeScene);
gdjs.VictoryCode.GDForestBackgroundObjects1.length = 0;
gdjs.VictoryCode.GDForestBackgroundObjects2.length = 0;
gdjs.VictoryCode.GDForestBackgroundObjects3.length = 0;
gdjs.VictoryCode.GDYou_9595Win_9595textObjects1.length = 0;
gdjs.VictoryCode.GDYou_9595Win_9595textObjects2.length = 0;
gdjs.VictoryCode.GDYou_9595Win_9595textObjects3.length = 0;
gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects1.length = 0;
gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects2.length = 0;
gdjs.VictoryCode.GDStart_9595Again_9595buttonObjects3.length = 0;
gdjs.VictoryCode.GDInvisible_9595Element_9595Placement_9595VisualizerObjects1.length = 0;
gdjs.VictoryCode.GDInvisible_9595Element_9595Placement_9595VisualizerObjects2.length = 0;
gdjs.VictoryCode.GDInvisible_9595Element_9595Placement_9595VisualizerObjects3.length = 0;
gdjs.VictoryCode.GDReset_9595ButtonObjects1.length = 0;
gdjs.VictoryCode.GDReset_9595ButtonObjects2.length = 0;
gdjs.VictoryCode.GDReset_9595ButtonObjects3.length = 0;
gdjs.VictoryCode.GDGrass8Objects1.length = 0;
gdjs.VictoryCode.GDGrass8Objects2.length = 0;
gdjs.VictoryCode.GDGrass8Objects3.length = 0;
gdjs.VictoryCode.GDAlpacaObjects1.length = 0;
gdjs.VictoryCode.GDAlpacaObjects2.length = 0;
gdjs.VictoryCode.GDAlpacaObjects3.length = 0;
gdjs.VictoryCode.GDTrexObjects1.length = 0;
gdjs.VictoryCode.GDTrexObjects2.length = 0;
gdjs.VictoryCode.GDTrexObjects3.length = 0;
gdjs.VictoryCode.GDTofuObjects1.length = 0;
gdjs.VictoryCode.GDTofuObjects2.length = 0;
gdjs.VictoryCode.GDTofuObjects3.length = 0;
gdjs.VictoryCode.GDTofu2Objects1.length = 0;
gdjs.VictoryCode.GDTofu2Objects2.length = 0;
gdjs.VictoryCode.GDTofu2Objects3.length = 0;


return;

}

gdjs['VictoryCode'] = gdjs.VictoryCode;
