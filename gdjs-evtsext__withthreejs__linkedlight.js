
gdjs.evtsExt__WithThreeJS__LinkedLight = gdjs.evtsExt__WithThreeJS__LinkedLight || {};

/**
 * Behavior generated from Linked 3D Light
 */
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight = class LinkedLight extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Id = "";
    this._behaviorData.FirstFrame = true;
    this._behaviorData.Hide = behaviorData.Hide !== undefined ? behaviorData.Hide : true;
    this._behaviorData.Type = behaviorData.Type !== undefined ? behaviorData.Type : "Directional Light";
    this._behaviorData.Color = behaviorData.Color !== undefined ? behaviorData.Color : "255;255;255";
    this._behaviorData.Intensity = behaviorData.Intensity !== undefined ? behaviorData.Intensity : Number("1") || 0;
    this._behaviorData.Distance = behaviorData.Distance !== undefined ? behaviorData.Distance : Number("0") || 0;
    this._behaviorData.SpotAngle = behaviorData.SpotAngle !== undefined ? behaviorData.SpotAngle : Number("45") || 0;
    this._behaviorData.SpotPenumbra = behaviorData.SpotPenumbra !== undefined ? behaviorData.SpotPenumbra : Number("0.5") || 0;
    this._behaviorData.Tilt = behaviorData.Tilt !== undefined ? behaviorData.Tilt : Number("0") || 0;
    this._behaviorData.CastShadow = behaviorData.CastShadow !== undefined ? behaviorData.CastShadow : false;
    this._behaviorData.ShadowMapSize = behaviorData.ShadowMapSize !== undefined ? behaviorData.ShadowMapSize : "512px";
    this._behaviorData.ShadowRange = behaviorData.ShadowRange !== undefined ? behaviorData.ShadowRange : Number("256") || 0;
    this._behaviorData.ShadowDepthBias = behaviorData.ShadowDepthBias !== undefined ? behaviorData.ShadowDepthBias : Number("0.002") || 0;
    this._behaviorData.ShadowNormalBias = behaviorData.ShadowNormalBias !== undefined ? behaviorData.ShadowNormalBias : Number("2") || 0;
    this._behaviorData.LightHelper = behaviorData.LightHelper !== undefined ? behaviorData.LightHelper : false;
    this._behaviorData.ShadowHelper = behaviorData.ShadowHelper !== undefined ? behaviorData.ShadowHelper : false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Id !== newBehaviorData.Id)
      this._behaviorData.Id = newBehaviorData.Id;
    if (oldBehaviorData.FirstFrame !== newBehaviorData.FirstFrame)
      this._behaviorData.FirstFrame = newBehaviorData.FirstFrame;
    if (oldBehaviorData.Hide !== newBehaviorData.Hide)
      this._behaviorData.Hide = newBehaviorData.Hide;
    if (oldBehaviorData.Type !== newBehaviorData.Type)
      this._behaviorData.Type = newBehaviorData.Type;
    if (oldBehaviorData.Color !== newBehaviorData.Color)
      this._behaviorData.Color = newBehaviorData.Color;
    if (oldBehaviorData.Intensity !== newBehaviorData.Intensity)
      this._behaviorData.Intensity = newBehaviorData.Intensity;
    if (oldBehaviorData.Distance !== newBehaviorData.Distance)
      this._behaviorData.Distance = newBehaviorData.Distance;
    if (oldBehaviorData.SpotAngle !== newBehaviorData.SpotAngle)
      this._behaviorData.SpotAngle = newBehaviorData.SpotAngle;
    if (oldBehaviorData.SpotPenumbra !== newBehaviorData.SpotPenumbra)
      this._behaviorData.SpotPenumbra = newBehaviorData.SpotPenumbra;
    if (oldBehaviorData.Tilt !== newBehaviorData.Tilt)
      this._behaviorData.Tilt = newBehaviorData.Tilt;
    if (oldBehaviorData.CastShadow !== newBehaviorData.CastShadow)
      this._behaviorData.CastShadow = newBehaviorData.CastShadow;
    if (oldBehaviorData.ShadowMapSize !== newBehaviorData.ShadowMapSize)
      this._behaviorData.ShadowMapSize = newBehaviorData.ShadowMapSize;
    if (oldBehaviorData.ShadowRange !== newBehaviorData.ShadowRange)
      this._behaviorData.ShadowRange = newBehaviorData.ShadowRange;
    if (oldBehaviorData.ShadowDepthBias !== newBehaviorData.ShadowDepthBias)
      this._behaviorData.ShadowDepthBias = newBehaviorData.ShadowDepthBias;
    if (oldBehaviorData.ShadowNormalBias !== newBehaviorData.ShadowNormalBias)
      this._behaviorData.ShadowNormalBias = newBehaviorData.ShadowNormalBias;
    if (oldBehaviorData.LightHelper !== newBehaviorData.LightHelper)
      this._behaviorData.LightHelper = newBehaviorData.LightHelper;
    if (oldBehaviorData.ShadowHelper !== newBehaviorData.ShadowHelper)
      this._behaviorData.ShadowHelper = newBehaviorData.ShadowHelper;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Id: this._behaviorData.Id,
    FirstFrame: this._behaviorData.FirstFrame,
    Hide: this._behaviorData.Hide,
    Type: this._behaviorData.Type,
    Color: this._behaviorData.Color,
    Intensity: this._behaviorData.Intensity,
    Distance: this._behaviorData.Distance,
    SpotAngle: this._behaviorData.SpotAngle,
    SpotPenumbra: this._behaviorData.SpotPenumbra,
    Tilt: this._behaviorData.Tilt,
    CastShadow: this._behaviorData.CastShadow,
    ShadowMapSize: this._behaviorData.ShadowMapSize,
    ShadowRange: this._behaviorData.ShadowRange,
    ShadowDepthBias: this._behaviorData.ShadowDepthBias,
    ShadowNormalBias: this._behaviorData.ShadowNormalBias,
    LightHelper: this._behaviorData.LightHelper,
    ShadowHelper: this._behaviorData.ShadowHelper,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Id !== undefined)
      this._behaviorData.Id = networkSyncData.props.Id;
    if (networkSyncData.props.FirstFrame !== undefined)
      this._behaviorData.FirstFrame = networkSyncData.props.FirstFrame;
    if (networkSyncData.props.Hide !== undefined)
      this._behaviorData.Hide = networkSyncData.props.Hide;
    if (networkSyncData.props.Type !== undefined)
      this._behaviorData.Type = networkSyncData.props.Type;
    if (networkSyncData.props.Color !== undefined)
      this._behaviorData.Color = networkSyncData.props.Color;
    if (networkSyncData.props.Intensity !== undefined)
      this._behaviorData.Intensity = networkSyncData.props.Intensity;
    if (networkSyncData.props.Distance !== undefined)
      this._behaviorData.Distance = networkSyncData.props.Distance;
    if (networkSyncData.props.SpotAngle !== undefined)
      this._behaviorData.SpotAngle = networkSyncData.props.SpotAngle;
    if (networkSyncData.props.SpotPenumbra !== undefined)
      this._behaviorData.SpotPenumbra = networkSyncData.props.SpotPenumbra;
    if (networkSyncData.props.Tilt !== undefined)
      this._behaviorData.Tilt = networkSyncData.props.Tilt;
    if (networkSyncData.props.CastShadow !== undefined)
      this._behaviorData.CastShadow = networkSyncData.props.CastShadow;
    if (networkSyncData.props.ShadowMapSize !== undefined)
      this._behaviorData.ShadowMapSize = networkSyncData.props.ShadowMapSize;
    if (networkSyncData.props.ShadowRange !== undefined)
      this._behaviorData.ShadowRange = networkSyncData.props.ShadowRange;
    if (networkSyncData.props.ShadowDepthBias !== undefined)
      this._behaviorData.ShadowDepthBias = networkSyncData.props.ShadowDepthBias;
    if (networkSyncData.props.ShadowNormalBias !== undefined)
      this._behaviorData.ShadowNormalBias = networkSyncData.props.ShadowNormalBias;
    if (networkSyncData.props.LightHelper !== undefined)
      this._behaviorData.LightHelper = networkSyncData.props.LightHelper;
    if (networkSyncData.props.ShadowHelper !== undefined)
      this._behaviorData.ShadowHelper = networkSyncData.props.ShadowHelper;
  }

  // Properties:
  
  _getId() {
    return this._behaviorData.Id !== undefined ? this._behaviorData.Id : "";
  }
  _setId(newValue) {
    this._behaviorData.Id = newValue;
  }
  _getFirstFrame() {
    return this._behaviorData.FirstFrame !== undefined ? this._behaviorData.FirstFrame : true;
  }
  _setFirstFrame(newValue) {
    this._behaviorData.FirstFrame = newValue;
  }
  _toggleFirstFrame() {
    this._setFirstFrame(!this._getFirstFrame());
  }
  _getHide() {
    return this._behaviorData.Hide !== undefined ? this._behaviorData.Hide : true;
  }
  _setHide(newValue) {
    this._behaviorData.Hide = newValue;
  }
  _toggleHide() {
    this._setHide(!this._getHide());
  }
  _getType() {
    return this._behaviorData.Type !== undefined ? this._behaviorData.Type : "Directional Light";
  }
  _setType(newValue) {
    this._behaviorData.Type = newValue;
  }
  _getColor() {
    return this._behaviorData.Color !== undefined ? this._behaviorData.Color : "255;255;255";
  }
  _setColor(newValue) {
    this._behaviorData.Color = newValue;
  }
  _getIntensity() {
    return this._behaviorData.Intensity !== undefined ? this._behaviorData.Intensity : Number("1") || 0;
  }
  _setIntensity(newValue) {
    this._behaviorData.Intensity = newValue;
  }
  _getDistance() {
    return this._behaviorData.Distance !== undefined ? this._behaviorData.Distance : Number("0") || 0;
  }
  _setDistance(newValue) {
    this._behaviorData.Distance = newValue;
  }
  _getSpotAngle() {
    return this._behaviorData.SpotAngle !== undefined ? this._behaviorData.SpotAngle : Number("45") || 0;
  }
  _setSpotAngle(newValue) {
    this._behaviorData.SpotAngle = newValue;
  }
  _getSpotPenumbra() {
    return this._behaviorData.SpotPenumbra !== undefined ? this._behaviorData.SpotPenumbra : Number("0.5") || 0;
  }
  _setSpotPenumbra(newValue) {
    this._behaviorData.SpotPenumbra = newValue;
  }
  _getTilt() {
    return this._behaviorData.Tilt !== undefined ? this._behaviorData.Tilt : Number("0") || 0;
  }
  _setTilt(newValue) {
    this._behaviorData.Tilt = newValue;
  }
  _getCastShadow() {
    return this._behaviorData.CastShadow !== undefined ? this._behaviorData.CastShadow : false;
  }
  _setCastShadow(newValue) {
    this._behaviorData.CastShadow = newValue;
  }
  _toggleCastShadow() {
    this._setCastShadow(!this._getCastShadow());
  }
  _getShadowMapSize() {
    return this._behaviorData.ShadowMapSize !== undefined ? this._behaviorData.ShadowMapSize : "512px";
  }
  _setShadowMapSize(newValue) {
    this._behaviorData.ShadowMapSize = newValue;
  }
  _getShadowRange() {
    return this._behaviorData.ShadowRange !== undefined ? this._behaviorData.ShadowRange : Number("256") || 0;
  }
  _setShadowRange(newValue) {
    this._behaviorData.ShadowRange = newValue;
  }
  _getShadowDepthBias() {
    return this._behaviorData.ShadowDepthBias !== undefined ? this._behaviorData.ShadowDepthBias : Number("0.002") || 0;
  }
  _setShadowDepthBias(newValue) {
    this._behaviorData.ShadowDepthBias = newValue;
  }
  _getShadowNormalBias() {
    return this._behaviorData.ShadowNormalBias !== undefined ? this._behaviorData.ShadowNormalBias : Number("2") || 0;
  }
  _setShadowNormalBias(newValue) {
    this._behaviorData.ShadowNormalBias = newValue;
  }
  _getLightHelper() {
    return this._behaviorData.LightHelper !== undefined ? this._behaviorData.LightHelper : false;
  }
  _setLightHelper(newValue) {
    this._behaviorData.LightHelper = newValue;
  }
  _toggleLightHelper() {
    this._setLightHelper(!this._getLightHelper());
  }
  _getShadowHelper() {
    return this._behaviorData.ShadowHelper !== undefined ? this._behaviorData.ShadowHelper : false;
  }
  _setShadowHelper(newValue) {
    this._behaviorData.ShadowHelper = newValue;
  }
  _toggleShadowHelper() {
    this._setShadowHelper(!this._getShadowHelper());
  }
}

/**
 * Shared data generated from Linked 3D Light
 */
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.SharedData = class LinkedLightSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WithThreeJS_LinkedLightSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WithThreeJS_LinkedLightSharedData = new gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.SharedData(
      initialData
    );
  }
  return instanceContainer._WithThreeJS_LinkedLightSharedData;
}

// Methods:
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.userFunc0xf093b0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Renderer = gdjs.__WithThreeJS.get("Renderer");
//
const Behavior = objects[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
const Id = objects[0].name + objects[0].id;
//
const LightType = Behavior._getType();
const Color = Behavior._getColor() || "255;255;255";
let Intensity = Behavior._getIntensity();
const Distance = Behavior._getDistance();
const Decay = 2;
const SpotAngle = Behavior._getSpotAngle();
const SpotPenumbra = Behavior._getSpotPenumbra();
const CastShadow = Behavior._getCastShadow();
const ShadowMapSize = gdjs.__WithThreeJS.get("ShadowMapSizeStringToValue")[Behavior._getShadowMapSize()];
const ShadowRange = Behavior._getShadowRange();
const ShadowBias = Behavior._getShadowDepthBias();
const ShadowNormalBias = Behavior._getShadowNormalBias();
const LightHelper = Behavior._getLightHelper();
const ShadowHelper = Behavior._getShadowHelper();
//
const RGB = Color.split(";");
let Light;
if (LightType == "Directional Light") {
    Intensity *= gdjs.__WithThreeJS.get("LightIntensityScale");// Three.js r160
    Light = new THREE.DirectionalLight(`rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`, Intensity);
    const Target = new THREE.Group();
    Target.translateZ(-128);
    Light.add(Target);
    Light.target = Target;
    //
    Light.shadow.camera.top = ShadowRange / 2;
    Light.shadow.camera.right = ShadowRange / 2;
    Light.shadow.camera.bottom = -ShadowRange / 2;
    Light.shadow.camera.left = -ShadowRange / 2;
    Light.shadow.camera.near = 0.5;// default
    Light.shadow.camera.far = ShadowRange;
    //
    if (LightHelper) {
        const DirectionalLightHelper = new THREE.DirectionalLightHelper(Light, 128);
        DirectionalLightHelper.name = Id + "_DirectionalLightHelper";
        Scene.add(DirectionalLightHelper);
    }
} else if (LightType == "Spot Light") {
    Intensity *= gdjs.__WithThreeJS.get("LightIntensityCandela");// Three.js r160
    Light = new THREE.SpotLight(`rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`, Intensity, Distance, gdjs.toRad(SpotAngle), SpotPenumbra, Decay);
    const Target = new THREE.Group();
    Target.translateZ(-1);
    Light.add(Target);
    Light.target = Target;
    //
    Light.shadow.camera.near = 0.5;// default
    Light.shadow.camera.far = ShadowRange;
    Light.shadow.focus = 1; // default
    //
    if (LightHelper) {
        const SpotLightHelper = new THREE.SpotLightHelper(Light);
        SpotLightHelper.name = Id + "_SpotLightHelper";
        Scene.add(SpotLightHelper);
    }
} else {
    // Point
    Intensity *= gdjs.__WithThreeJS.get("LightIntensityCandela");// Three.js r160
    Light = new THREE.PointLight(`rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`, Intensity, Distance, Decay);
    //
    Light.shadow.camera.near = 0.5;// default
    Light.shadow.camera.far = ShadowRange;
    //
    if (LightHelper) {
        const PointLightHelper = new THREE.PointLightHelper(Light, 16);
        PointLightHelper.name = Id + "_PointLightHelper";
        Scene.add(PointLightHelper);
    }
}
Renderer.shadowMap.enabled = Renderer.shadowMap.enabled ? true : CastShadow;
Light.castShadow = CastShadow;
Light.shadow.mapSize.width = ShadowMapSize;
Light.shadow.mapSize.height = ShadowMapSize;
Light.shadow.bias = ShadowBias;
Light.shadow.normalBias = ShadowNormalBias;
Light.shadow.updateMatrices(Light);// 必須
Light.shadow.camera.updateProjectionMatrix();
//
Light.name = Id;
Behavior._setId(Id);
Light.userData.Use3DProjectionBehavior = true;
Scene.add(Light);
//
if (ShadowHelper && CastShadow) {
    let CameraHelper;
    if (LightType != "Point Light") {
        CameraHelper = new THREE.CameraHelper(Light.shadow.camera);
        Scene.add(CameraHelper);
    } else {
        const Geometry = new THREE.IcosahedronGeometry(Light.shadow.camera.far, 2); 
        const Material = new THREE.MeshBasicMaterial( {color: 0xffaa00, wireframe: true} );
        CameraHelper = new THREE.Mesh(Geometry, Material);
        Light.add(CameraHelper);
    }
    CameraHelper.name = Id + "_CameraHelper";
}


};
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects2);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.userFunc0xf093b0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{

/* Reuse gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHide() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1[i].hide();
}
}}

}


};gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.userFunc0x1819178 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
//
const Behavior = objects[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
const Id = Behavior.Id();
const Tilt = Behavior.Tilt();
const X = objects[0].getCenterXInScene();
const Y = objects[0].getCenterYInScene();
const Z = objects[0].zOrder;
const ProjectionScale = gdjs.__WithThreeJS.get("ProjectionScale");
const ViewMode = gdjs.__WithThreeJS.get("ViewMode");
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
// Move & Rotate
const Angle = objects[0].angle;
if (ViewMode == "Top Down") {
    Obj.position.set(X * ProjectionScale, Z * ProjectionScale, Y * ProjectionScale);
    Obj.rotation.set(gdjs.toRad(0), gdjs.toRad((Angle + 90) * -1), gdjs.toRad(0));
    Obj.rotateX(gdjs.toRad(Tilt));
} else {
    // Side
    Obj.position.set(X * ProjectionScale, -Y * ProjectionScale, Z * ProjectionScale);
    Obj.rotation.set(0, gdjs.toRad(-90), gdjs.toRad(0));
    Obj.rotateY(gdjs.toRad(Tilt));
    Obj.rotateX(gdjs.toRad(Angle * -1));
}


};
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFirstFrame() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFirstFrame(false);
}
}
{ //Subevents
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.userFunc0x1819178(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.onDestroyContext = {};
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.onDestroyContext.userFunc0xf093b0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// 生成と同時に削除された場合、3D化されていないので回避
// FirstFrame == true のほうが理想的だが取得がめんどくさいので Id を利用。
const Behavior = objects[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
const Id = Behavior.Id();
if (Id === "") {
    return;
}
//
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
const CastShadow = Behavior._getCastShadow();
//
gdjs.__WithThreeJS.get("DisposeChildren")(Obj);
Obj.removeFromParent();


};
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.onDestroyContext.userFunc0xf093b0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.IdContext = {};
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.IdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.IdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.IdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.IdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.IdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.IdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.Id = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.IdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.IdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.IdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.IdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.IdContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TypeContext = {};
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TypeContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TypeContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TypeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TypeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TypeContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TypeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType()); }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.Type = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TypeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TypeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TypeContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TiltContext = {};
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TiltContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TiltContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TiltContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TiltContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TiltContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TiltContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTilt()); }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.Tilt = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TiltContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TiltContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TiltContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TiltContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.TiltContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.SetTiltContext = {};
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.SetTiltContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.SetTiltContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.SetTiltContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.SetTiltContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.SetTiltContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.SetTiltContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTilt((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.SetTilt = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.SetTiltContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.SetTiltContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.SetTiltContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.SetTiltContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.SetTiltContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("WithThreeJS::LinkedLight", gdjs.evtsExt__WithThreeJS__LinkedLight.LinkedLight);
