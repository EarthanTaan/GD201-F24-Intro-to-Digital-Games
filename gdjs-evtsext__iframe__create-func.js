
if (typeof gdjs.evtsExt__Iframe__Create !== "undefined") {
  gdjs.evtsExt__Iframe__Create.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Iframe__Create = {};


gdjs.evtsExt__Iframe__Create.userFunc0xf784d0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const iframe = document.createElement("iframe");

iframe.src = eventsFunctionContext.getArgument("WebsiteURL");
iframe.id = eventsFunctionContext.getArgument("Name");
iframe.setAttribute("width", eventsFunctionContext.getArgument("Width"));
iframe.setAttribute("height", eventsFunctionContext.getArgument("Height"));
iframe.style.top = eventsFunctionContext.getArgument("PositionY") + "px";
iframe.style.left = eventsFunctionContext.getArgument("PositionX") + "px";
iframe.frameBorder = eventsFunctionContext.getArgument("Border");
iframe.frameBorder == "true" ? iframe.frameBorder = "yes" : iframe.frameBorder = "no";
iframe.scrolling = eventsFunctionContext.getArgument("Scrolling");
iframe.scrolling == "true" ? iframe.scrolling = "yes" : iframe.scrolling = "no";
iframe.style.position = "absolute";

iframe.style.cssText += eventsFunctionContext.getArgument("ExtraCSS");


document.body.appendChild(iframe);

};
gdjs.evtsExt__Iframe__Create.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Iframe__Create.userFunc0xf784d0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Iframe__Create.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13839452);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Iframe__Create.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Iframe__Create.func = function(runtimeScene, Name, WebsiteURL, Width, Height, PositionX, PositionY, Scrolling, Border, ExtraCSS, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Iframe"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Iframe"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Name") return Name;
if (argName === "WebsiteURL") return WebsiteURL;
if (argName === "Width") return Width;
if (argName === "Height") return Height;
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
if (argName === "Scrolling") return Scrolling;
if (argName === "Border") return Border;
if (argName === "ExtraCSS") return ExtraCSS;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Iframe__Create.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Iframe__Create.registeredGdjsCallbacks = [];