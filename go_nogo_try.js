/**************** 
 * Go_Nogo *
 ****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'go_nogo';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(wel1RoutineBegin());
flowScheduler.add(wel1RoutineEachFrame());
flowScheduler.add(wel1RoutineEnd());
flowScheduler.add(wel2RoutineBegin());
flowScheduler.add(wel2RoutineEachFrame());
flowScheduler.add(wel2RoutineEnd());
flowScheduler.add(preparationRoutineBegin());
flowScheduler.add(preparationRoutineEachFrame());
flowScheduler.add(preparationRoutineEnd());
flowScheduler.add(waitRoutineBegin());
flowScheduler.add(waitRoutineEachFrame());
flowScheduler.add(waitRoutineEnd());
const pra1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(pra1LoopBegin(pra1LoopScheduler));
flowScheduler.add(pra1LoopScheduler);
flowScheduler.add(pra1LoopEnd);




flowScheduler.add(endpra1RoutineBegin());
flowScheduler.add(endpra1RoutineEachFrame());
flowScheduler.add(endpra1RoutineEnd());
flowScheduler.add(preparationRoutineBegin());
flowScheduler.add(preparationRoutineEachFrame());
flowScheduler.add(preparationRoutineEnd());
flowScheduler.add(waitRoutineBegin());
flowScheduler.add(waitRoutineEachFrame());
flowScheduler.add(waitRoutineEnd());
const pra2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(pra2LoopBegin(pra2LoopScheduler));
flowScheduler.add(pra2LoopScheduler);
flowScheduler.add(pra2LoopEnd);



flowScheduler.add(endpra2RoutineBegin());
flowScheduler.add(endpra2RoutineEachFrame());
flowScheduler.add(endpra2RoutineEnd());
flowScheduler.add(starttrialRoutineBegin());
flowScheduler.add(starttrialRoutineEachFrame());
flowScheduler.add(starttrialRoutineEnd());
flowScheduler.add(preparationRoutineBegin());
flowScheduler.add(preparationRoutineEachFrame());
flowScheduler.add(preparationRoutineEnd());
flowScheduler.add(waitRoutineBegin());
flowScheduler.add(waitRoutineEachFrame());
flowScheduler.add(waitRoutineEnd());
const trialsblock1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsblock1LoopBegin(trialsblock1LoopScheduler));
flowScheduler.add(trialsblock1LoopScheduler);
flowScheduler.add(trialsblock1LoopEnd);



flowScheduler.add(endblockRoutineBegin());
flowScheduler.add(endblockRoutineEachFrame());
flowScheduler.add(endblockRoutineEnd());
flowScheduler.add(preparationRoutineBegin());
flowScheduler.add(preparationRoutineEachFrame());
flowScheduler.add(preparationRoutineEnd());
flowScheduler.add(waitRoutineBegin());
flowScheduler.add(waitRoutineEachFrame());
flowScheduler.add(waitRoutineEnd());
const trialsblock2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsblock2LoopBegin(trialsblock2LoopScheduler));
flowScheduler.add(trialsblock2LoopScheduler);
flowScheduler.add(trialsblock2LoopEnd);



flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

function startExperiment() {
    psychoJS.start({
        expName: expName,
        expInfo: expInfo,
        resources: [
            {'name': 'gonogopractice1.csv', 'path': 'gonogopractice1.csv'},
            {'name': 'gonogopractice2.csv', 'path': 'gonogopractice2.csv'},
            {'name': 'gonogotriallist.csv', 'path': 'gonogotriallist.csv'}
        ]
    });
}

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var wel1Clock;
var textwel1;
var key_wel1;
var wel2Clock;
var textwel2;
var key_wel2;
var preparationClock;
var textprepration;
var waitClock;
var textwait;
var fixationpra1Clock;
var textfixationpra1;
var stimuluspra1Clock;
var textstimuluspra1;
var key_pra1;
var feedbackClock;
var textfeedback;
var endpra1Clock;
var textendpra1;
var key_endpra1;
var fixationClock;
var textfixation;
var stimulusClock;
var textstimulus;
var key_stimulus;
var endpra2Clock;
var textendpra2;
var key_endpra2;
var starttrialClock;
var textstarttrial;
var key_starttrial;
var endblockClock;
var textendblock;
var key_endblock;
var endClock;
var textend;
var key_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "wel1"
  wel1Clock = new util.Clock();
  textwel1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textwel1',
    text: 'このテストは「Go/No-Goテスト」と呼ばれます。\n\nあなたの課題は、数字が表示されるたびに「１」を押すことです。ただし、数字の「３」が表示された場合は、ボタンを押さないでください。\n\n１を押して次へ。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_wel1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "wel2"
  wel2Clock = new util.Clock();
  textwel2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textwel2',
    text: '初めに練習パートです。\n\n準備ができたら１を押してください。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_wel2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "preparation"
  preparationClock = new util.Clock();
  textprepration = new visual.TextStim({
    win: psychoJS.window,
    name: 'textprepration',
    text: 'スタート',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "wait"
  waitClock = new util.Clock();
  textwait = new visual.TextStim({
    win: psychoJS.window,
    name: 'textwait',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "fixationpra1"
  fixationpra1Clock = new util.Clock();
  textfixationpra1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textfixationpra1',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "stimuluspra1"
  stimuluspra1Clock = new util.Clock();
  textstimuluspra1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textstimuluspra1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_pra1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  textfeedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'textfeedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "endpra1"
  endpra1Clock = new util.Clock();
  textendpra1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textendpra1',
    text: '1回目の練習は終了です。\n\n1を押して、次の練習へ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_endpra1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  textfixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'textfixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "stimulus"
  stimulusClock = new util.Clock();
  textstimulus = new visual.TextStim({
    win: psychoJS.window,
    name: 'textstimulus',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_stimulus = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "endpra2"
  endpra2Clock = new util.Clock();
  textendpra2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textendpra2',
    text: '2回目の練習は終了です。\n\n次からは本番です。\n必要であれば、小休憩を取ってください。\n\n準備ができたら1を押して本番へ。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_endpra2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "starttrial"
  starttrialClock = new util.Clock();
  textstarttrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'textstarttrial',
    text: 'ここからは本番です。\n\n本番は２ブロックあります。\n\n準備ができたら１を押してスタート。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_starttrial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "endblock"
  endblockClock = new util.Clock();
  textendblock = new visual.TextStim({
    win: psychoJS.window,
    name: 'textendblock',
    text: 'その調子です。これでブロック１は終わりです。\n\n必要であれば小休憩を取り、\n準備ができたら、１を押して次へ。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_endblock = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  textend = new visual.TextStim({
    win: psychoJS.window,
    name: 'textend',
    text: 'この実験は終了です。\n\nお疲れさまでした。\n\n１を押して終了。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var wel1MaxDurationReached;
var _key_wel1_allKeys;
var wel1MaxDuration;
var wel1Components;
function wel1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wel1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    wel1Clock.reset();
    routineTimer.reset();
    wel1MaxDurationReached = false;
    // update component parameters for each repeat
    key_wel1.keys = undefined;
    key_wel1.rt = undefined;
    _key_wel1_allKeys = [];
    psychoJS.experiment.addData('wel1.started', globalClock.getTime());
    wel1MaxDuration = null
    // keep track of which components have finished
    wel1Components = [];
    wel1Components.push(textwel1);
    wel1Components.push(key_wel1);
    
    for (const thisComponent of wel1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function wel1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wel1' ---
    // get current time
    t = wel1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textwel1* updates
    if (t >= 0.0 && textwel1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textwel1.tStart = t;  // (not accounting for frame time here)
      textwel1.frameNStart = frameN;  // exact frame index
      
      textwel1.setAutoDraw(true);
    }
    
    
    // *key_wel1* updates
    if (t >= 0.0 && key_wel1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_wel1.tStart = t;  // (not accounting for frame time here)
      key_wel1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_wel1.clock.reset();
      key_wel1.start();
    }
    
    if (key_wel1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_wel1.getKeys({keyList: ['1', '2', 'space'], waitRelease: false});
      _key_wel1_allKeys = _key_wel1_allKeys.concat(theseKeys);
      if (_key_wel1_allKeys.length > 0) {
        key_wel1.keys = _key_wel1_allKeys[_key_wel1_allKeys.length - 1].name;  // just the last key pressed
        key_wel1.rt = _key_wel1_allKeys[_key_wel1_allKeys.length - 1].rt;
        key_wel1.duration = _key_wel1_allKeys[_key_wel1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of wel1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function wel1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wel1' ---
    for (const thisComponent of wel1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('wel1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_wel1.corr, level);
    }
    psychoJS.experiment.addData('key_wel1.keys', key_wel1.keys);
    if (typeof key_wel1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_wel1.rt', key_wel1.rt);
        psychoJS.experiment.addData('key_wel1.duration', key_wel1.duration);
        routineTimer.reset();
        }
    
    key_wel1.stop();
    // the Routine "wel1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var wel2MaxDurationReached;
var _key_wel2_allKeys;
var wel2MaxDuration;
var wel2Components;
function wel2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wel2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    wel2Clock.reset();
    routineTimer.reset();
    wel2MaxDurationReached = false;
    // update component parameters for each repeat
    key_wel2.keys = undefined;
    key_wel2.rt = undefined;
    _key_wel2_allKeys = [];
    psychoJS.experiment.addData('wel2.started', globalClock.getTime());
    wel2MaxDuration = null
    // keep track of which components have finished
    wel2Components = [];
    wel2Components.push(textwel2);
    wel2Components.push(key_wel2);
    
    for (const thisComponent of wel2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function wel2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wel2' ---
    // get current time
    t = wel2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textwel2* updates
    if (t >= 0.0 && textwel2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textwel2.tStart = t;  // (not accounting for frame time here)
      textwel2.frameNStart = frameN;  // exact frame index
      
      textwel2.setAutoDraw(true);
    }
    
    
    // *key_wel2* updates
    if (t >= 0.0 && key_wel2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_wel2.tStart = t;  // (not accounting for frame time here)
      key_wel2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_wel2.clock.reset();
      key_wel2.start();
    }
    
    if (key_wel2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_wel2.getKeys({keyList: ['1', '2', 'space'], waitRelease: false});
      _key_wel2_allKeys = _key_wel2_allKeys.concat(theseKeys);
      if (_key_wel2_allKeys.length > 0) {
        key_wel2.keys = _key_wel2_allKeys[_key_wel2_allKeys.length - 1].name;  // just the last key pressed
        key_wel2.rt = _key_wel2_allKeys[_key_wel2_allKeys.length - 1].rt;
        key_wel2.duration = _key_wel2_allKeys[_key_wel2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of wel2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function wel2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wel2' ---
    for (const thisComponent of wel2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('wel2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_wel2.corr, level);
    }
    psychoJS.experiment.addData('key_wel2.keys', key_wel2.keys);
    if (typeof key_wel2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_wel2.rt', key_wel2.rt);
        psychoJS.experiment.addData('key_wel2.duration', key_wel2.duration);
        routineTimer.reset();
        }
    
    key_wel2.stop();
    // the Routine "wel2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var preparationMaxDurationReached;
var preparationMaxDuration;
var preparationComponents;
function preparationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'preparation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    preparationClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    preparationMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('preparation.started', globalClock.getTime());
    preparationMaxDuration = null
    // keep track of which components have finished
    preparationComponents = [];
    preparationComponents.push(textprepration);
    
    for (const thisComponent of preparationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function preparationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'preparation' ---
    // get current time
    t = preparationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textprepration* updates
    if (t >= 0.0 && textprepration.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textprepration.tStart = t;  // (not accounting for frame time here)
      textprepration.frameNStart = frameN;  // exact frame index
      
      textprepration.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textprepration.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textprepration.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of preparationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function preparationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'preparation' ---
    for (const thisComponent of preparationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('preparation.stopped', globalClock.getTime());
    if (preparationMaxDurationReached) {
        preparationClock.add(preparationMaxDuration);
    } else {
        preparationClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var waitMaxDurationReached;
var waitMaxDuration;
var waitComponents;
function waitRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wait' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    waitClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    waitMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('wait.started', globalClock.getTime());
    waitMaxDuration = null
    // keep track of which components have finished
    waitComponents = [];
    waitComponents.push(textwait);
    
    for (const thisComponent of waitComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function waitRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wait' ---
    // get current time
    t = waitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textwait* updates
    if (t >= 0.0 && textwait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textwait.tStart = t;  // (not accounting for frame time here)
      textwait.frameNStart = frameN;  // exact frame index
      
      textwait.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textwait.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textwait.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of waitComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function waitRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wait' ---
    for (const thisComponent of waitComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('wait.stopped', globalClock.getTime());
    if (waitMaxDurationReached) {
        waitClock.add(waitMaxDuration);
    } else {
        waitClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pra1;
function pra1LoopBegin(pra1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pra1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'gonogopractice1.csv', '0:7'),
      seed: undefined, name: 'pra1'
    });
    psychoJS.experiment.addLoop(pra1); // add the loop to the experiment
    currentLoop = pra1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPra1 of pra1) {
      snapshot = pra1.getSnapshot();
      pra1LoopScheduler.add(importConditions(snapshot));
      pra1LoopScheduler.add(fixationpra1RoutineBegin(snapshot));
      pra1LoopScheduler.add(fixationpra1RoutineEachFrame());
      pra1LoopScheduler.add(fixationpra1RoutineEnd(snapshot));
      pra1LoopScheduler.add(stimuluspra1RoutineBegin(snapshot));
      pra1LoopScheduler.add(stimuluspra1RoutineEachFrame());
      pra1LoopScheduler.add(stimuluspra1RoutineEnd(snapshot));
      pra1LoopScheduler.add(feedbackRoutineBegin(snapshot));
      pra1LoopScheduler.add(feedbackRoutineEachFrame());
      pra1LoopScheduler.add(feedbackRoutineEnd(snapshot));
      pra1LoopScheduler.add(pra1LoopEndIteration(pra1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function pra1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(pra1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function pra1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var pra2;
function pra2LoopBegin(pra2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pra2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'gonogopractice2.csv', '0:5'),
      seed: undefined, name: 'pra2'
    });
    psychoJS.experiment.addLoop(pra2); // add the loop to the experiment
    currentLoop = pra2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPra2 of pra2) {
      snapshot = pra2.getSnapshot();
      pra2LoopScheduler.add(importConditions(snapshot));
      pra2LoopScheduler.add(fixationRoutineBegin(snapshot));
      pra2LoopScheduler.add(fixationRoutineEachFrame());
      pra2LoopScheduler.add(fixationRoutineEnd(snapshot));
      pra2LoopScheduler.add(stimulusRoutineBegin(snapshot));
      pra2LoopScheduler.add(stimulusRoutineEachFrame());
      pra2LoopScheduler.add(stimulusRoutineEnd(snapshot));
      pra2LoopScheduler.add(pra2LoopEndIteration(pra2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function pra2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(pra2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function pra2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialsblock1;
function trialsblock1LoopBegin(trialsblock1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsblock1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'gonogotriallist.csv', '0:10'),
      seed: undefined, name: 'trialsblock1'
    });
    psychoJS.experiment.addLoop(trialsblock1); // add the loop to the experiment
    currentLoop = trialsblock1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialsblock1 of trialsblock1) {
      snapshot = trialsblock1.getSnapshot();
      trialsblock1LoopScheduler.add(importConditions(snapshot));
      trialsblock1LoopScheduler.add(fixationRoutineBegin(snapshot));
      trialsblock1LoopScheduler.add(fixationRoutineEachFrame());
      trialsblock1LoopScheduler.add(fixationRoutineEnd(snapshot));
      trialsblock1LoopScheduler.add(stimulusRoutineBegin(snapshot));
      trialsblock1LoopScheduler.add(stimulusRoutineEachFrame());
      trialsblock1LoopScheduler.add(stimulusRoutineEnd(snapshot));
      trialsblock1LoopScheduler.add(trialsblock1LoopEndIteration(trialsblock1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsblock1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialsblock1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsblock1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialsblock2;
function trialsblock2LoopBegin(trialsblock2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsblock2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'gonogotriallist.csv', '0:10'),
      seed: undefined, name: 'trialsblock2'
    });
    psychoJS.experiment.addLoop(trialsblock2); // add the loop to the experiment
    currentLoop = trialsblock2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialsblock2 of trialsblock2) {
      snapshot = trialsblock2.getSnapshot();
      trialsblock2LoopScheduler.add(importConditions(snapshot));
      trialsblock2LoopScheduler.add(fixationRoutineBegin(snapshot));
      trialsblock2LoopScheduler.add(fixationRoutineEachFrame());
      trialsblock2LoopScheduler.add(fixationRoutineEnd(snapshot));
      trialsblock2LoopScheduler.add(stimulusRoutineBegin(snapshot));
      trialsblock2LoopScheduler.add(stimulusRoutineEachFrame());
      trialsblock2LoopScheduler.add(stimulusRoutineEnd(snapshot));
      trialsblock2LoopScheduler.add(trialsblock2LoopEndIteration(trialsblock2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsblock2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialsblock2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsblock2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var fixationpra1MaxDurationReached;
var fixationpra1MaxDuration;
var fixationpra1Components;
function fixationpra1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixationpra1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fixationpra1Clock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    fixationpra1MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixationpra1.started', globalClock.getTime());
    fixationpra1MaxDuration = null
    // keep track of which components have finished
    fixationpra1Components = [];
    fixationpra1Components.push(textfixationpra1);
    
    for (const thisComponent of fixationpra1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixationpra1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixationpra1' ---
    // get current time
    t = fixationpra1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textfixationpra1* updates
    if (t >= 0.0 && textfixationpra1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textfixationpra1.tStart = t;  // (not accounting for frame time here)
      textfixationpra1.frameNStart = frameN;  // exact frame index
      
      textfixationpra1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textfixationpra1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textfixationpra1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixationpra1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationpra1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixationpra1' ---
    for (const thisComponent of fixationpra1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fixationpra1.stopped', globalClock.getTime());
    if (fixationpra1MaxDurationReached) {
        fixationpra1Clock.add(fixationpra1MaxDuration);
    } else {
        fixationpra1Clock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stimuluspra1MaxDurationReached;
var _key_pra1_allKeys;
var stimuluspra1MaxDuration;
var stimuluspra1Components;
function stimuluspra1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stimuluspra1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    stimuluspra1Clock.reset(routineTimer.getTime());
    routineTimer.add(1.250000);
    stimuluspra1MaxDurationReached = false;
    // update component parameters for each repeat
    textstimuluspra1.setText(stimulusnumbers);
    key_pra1.keys = undefined;
    key_pra1.rt = undefined;
    _key_pra1_allKeys = [];
    psychoJS.experiment.addData('stimuluspra1.started', globalClock.getTime());
    stimuluspra1MaxDuration = null
    // keep track of which components have finished
    stimuluspra1Components = [];
    stimuluspra1Components.push(textstimuluspra1);
    stimuluspra1Components.push(key_pra1);
    
    for (const thisComponent of stimuluspra1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stimuluspra1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stimuluspra1' ---
    // get current time
    t = stimuluspra1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textstimuluspra1* updates
    if (t >= 0.0 && textstimuluspra1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textstimuluspra1.tStart = t;  // (not accounting for frame time here)
      textstimuluspra1.frameNStart = frameN;  // exact frame index
      
      textstimuluspra1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textstimuluspra1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textstimuluspra1.setAutoDraw(false);
    }
    
    
    // *key_pra1* updates
    if (t >= 0.0 && key_pra1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_pra1.tStart = t;  // (not accounting for frame time here)
      key_pra1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_pra1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_pra1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_pra1.clearEvents(); });
    }
    
    frameRemains = 0.0 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_pra1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_pra1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_pra1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_pra1.getKeys({keyList: ['1', 'space'], waitRelease: false});
      _key_pra1_allKeys = _key_pra1_allKeys.concat(theseKeys);
      if (_key_pra1_allKeys.length > 0) {
        key_pra1.keys = _key_pra1_allKeys[0].name;  // just the first key pressed
        key_pra1.rt = _key_pra1_allKeys[0].rt;
        key_pra1.duration = _key_pra1_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stimuluspra1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimuluspra1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stimuluspra1' ---
    for (const thisComponent of stimuluspra1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stimuluspra1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_pra1.corr, level);
    }
    psychoJS.experiment.addData('key_pra1.keys', key_pra1.keys);
    if (typeof key_pra1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_pra1.rt', key_pra1.rt);
        psychoJS.experiment.addData('key_pra1.duration', key_pra1.duration);
        routineTimer.reset();
        }
    
    key_pra1.stop();
    if (stimuluspra1MaxDurationReached) {
        stimuluspra1Clock.add(stimuluspra1MaxDuration);
    } else {
        stimuluspra1Clock.add(1.250000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var _pj;
var feedback_text;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(1.500000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from codefeedback
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (((((stimulusnumbers !== 3) && key_pra1.keys) && _pj.in_es6("1", key_pra1.keys)) || ((stimulusnumbers === 3) && (! key_pra1.keys)))) {
        feedback_text = "";
    } else {
        feedback_text = "X";
    }
    
    textfeedback.setText(feedback_text);
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(textfeedback);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textfeedback* updates
    if (t >= 0.0 && textfeedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textfeedback.tStart = t;  // (not accounting for frame time here)
      textfeedback.frameNStart = frameN;  // exact frame index
      
      textfeedback.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textfeedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textfeedback.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endpra1MaxDurationReached;
var _key_endpra1_allKeys;
var endpra1MaxDuration;
var endpra1Components;
function endpra1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'endpra1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endpra1Clock.reset();
    routineTimer.reset();
    endpra1MaxDurationReached = false;
    // update component parameters for each repeat
    key_endpra1.keys = undefined;
    key_endpra1.rt = undefined;
    _key_endpra1_allKeys = [];
    psychoJS.experiment.addData('endpra1.started', globalClock.getTime());
    endpra1MaxDuration = null
    // keep track of which components have finished
    endpra1Components = [];
    endpra1Components.push(textendpra1);
    endpra1Components.push(key_endpra1);
    
    for (const thisComponent of endpra1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endpra1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'endpra1' ---
    // get current time
    t = endpra1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textendpra1* updates
    if (t >= 0.0 && textendpra1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textendpra1.tStart = t;  // (not accounting for frame time here)
      textendpra1.frameNStart = frameN;  // exact frame index
      
      textendpra1.setAutoDraw(true);
    }
    
    
    // *key_endpra1* updates
    if (t >= 0.0 && key_endpra1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_endpra1.tStart = t;  // (not accounting for frame time here)
      key_endpra1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_endpra1.clock.reset();
      key_endpra1.start();
    }
    
    if (key_endpra1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_endpra1.getKeys({keyList: ['1', 'space'], waitRelease: false});
      _key_endpra1_allKeys = _key_endpra1_allKeys.concat(theseKeys);
      if (_key_endpra1_allKeys.length > 0) {
        key_endpra1.keys = _key_endpra1_allKeys[_key_endpra1_allKeys.length - 1].name;  // just the last key pressed
        key_endpra1.rt = _key_endpra1_allKeys[_key_endpra1_allKeys.length - 1].rt;
        key_endpra1.duration = _key_endpra1_allKeys[_key_endpra1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endpra1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endpra1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'endpra1' ---
    for (const thisComponent of endpra1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('endpra1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_endpra1.corr, level);
    }
    psychoJS.experiment.addData('key_endpra1.keys', key_endpra1.keys);
    if (typeof key_endpra1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_endpra1.rt', key_endpra1.rt);
        psychoJS.experiment.addData('key_endpra1.duration', key_endpra1.duration);
        routineTimer.reset();
        }
    
    key_endpra1.stop();
    // the Routine "endpra1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixationMaxDurationReached;
var fixationMaxDuration;
var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fixationClock.reset(routineTimer.getTime());
    routineTimer.add(0.750000);
    fixationMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixation.started', globalClock.getTime());
    fixationMaxDuration = null
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(textfixation);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation' ---
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textfixation* updates
    if (t >= 0.0 && textfixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textfixation.tStart = t;  // (not accounting for frame time here)
      textfixation.frameNStart = frameN;  // exact frame index
      
      textfixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textfixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textfixation.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation' ---
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fixation.stopped', globalClock.getTime());
    if (fixationMaxDurationReached) {
        fixationClock.add(fixationMaxDuration);
    } else {
        fixationClock.add(0.750000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stimulusMaxDurationReached;
var _key_stimulus_allKeys;
var stimulusMaxDuration;
var stimulusComponents;
function stimulusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stimulus' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    stimulusClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    stimulusMaxDurationReached = false;
    // update component parameters for each repeat
    textstimulus.setText(stimulusnumbers);
    key_stimulus.keys = undefined;
    key_stimulus.rt = undefined;
    _key_stimulus_allKeys = [];
    psychoJS.experiment.addData('stimulus.started', globalClock.getTime());
    stimulusMaxDuration = null
    // keep track of which components have finished
    stimulusComponents = [];
    stimulusComponents.push(textstimulus);
    stimulusComponents.push(key_stimulus);
    
    for (const thisComponent of stimulusComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stimulusRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stimulus' ---
    // get current time
    t = stimulusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textstimulus* updates
    if (t >= 0.0 && textstimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textstimulus.tStart = t;  // (not accounting for frame time here)
      textstimulus.frameNStart = frameN;  // exact frame index
      
      textstimulus.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textstimulus.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textstimulus.setAutoDraw(false);
    }
    
    
    // *key_stimulus* updates
    if (t >= 0.0 && key_stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_stimulus.tStart = t;  // (not accounting for frame time here)
      key_stimulus.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_stimulus.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_stimulus.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_stimulus.clearEvents(); });
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_stimulus.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_stimulus.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_stimulus.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_stimulus.getKeys({keyList: ['1'], waitRelease: false});
      _key_stimulus_allKeys = _key_stimulus_allKeys.concat(theseKeys);
      if (_key_stimulus_allKeys.length > 0) {
        key_stimulus.keys = _key_stimulus_allKeys[0].name;  // just the first key pressed
        key_stimulus.rt = _key_stimulus_allKeys[0].rt;
        key_stimulus.duration = _key_stimulus_allKeys[0].duration;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stimulusComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimulusRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stimulus' ---
    for (const thisComponent of stimulusComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stimulus.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_stimulus.corr, level);
    }
    psychoJS.experiment.addData('key_stimulus.keys', key_stimulus.keys);
    if (typeof key_stimulus.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_stimulus.rt', key_stimulus.rt);
        psychoJS.experiment.addData('key_stimulus.duration', key_stimulus.duration);
        }
    
    key_stimulus.stop();
    // Run 'End Routine' code from codenull
    if ((! key_stimulus.keys)) {
        key_stimulus.keys = null;
    }
    
    if (stimulusMaxDurationReached) {
        stimulusClock.add(stimulusMaxDuration);
    } else {
        stimulusClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endpra2MaxDurationReached;
var _key_endpra2_allKeys;
var endpra2MaxDuration;
var endpra2Components;
function endpra2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'endpra2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endpra2Clock.reset();
    routineTimer.reset();
    endpra2MaxDurationReached = false;
    // update component parameters for each repeat
    key_endpra2.keys = undefined;
    key_endpra2.rt = undefined;
    _key_endpra2_allKeys = [];
    psychoJS.experiment.addData('endpra2.started', globalClock.getTime());
    endpra2MaxDuration = null
    // keep track of which components have finished
    endpra2Components = [];
    endpra2Components.push(textendpra2);
    endpra2Components.push(key_endpra2);
    
    for (const thisComponent of endpra2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endpra2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'endpra2' ---
    // get current time
    t = endpra2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textendpra2* updates
    if (t >= 0.0 && textendpra2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textendpra2.tStart = t;  // (not accounting for frame time here)
      textendpra2.frameNStart = frameN;  // exact frame index
      
      textendpra2.setAutoDraw(true);
    }
    
    
    // *key_endpra2* updates
    if (t >= 0.0 && key_endpra2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_endpra2.tStart = t;  // (not accounting for frame time here)
      key_endpra2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_endpra2.clock.reset();
      key_endpra2.start();
    }
    
    if (key_endpra2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_endpra2.getKeys({keyList: ['1'], waitRelease: false});
      _key_endpra2_allKeys = _key_endpra2_allKeys.concat(theseKeys);
      if (_key_endpra2_allKeys.length > 0) {
        key_endpra2.keys = _key_endpra2_allKeys[_key_endpra2_allKeys.length - 1].name;  // just the last key pressed
        key_endpra2.rt = _key_endpra2_allKeys[_key_endpra2_allKeys.length - 1].rt;
        key_endpra2.duration = _key_endpra2_allKeys[_key_endpra2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endpra2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endpra2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'endpra2' ---
    for (const thisComponent of endpra2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('endpra2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_endpra2.corr, level);
    }
    psychoJS.experiment.addData('key_endpra2.keys', key_endpra2.keys);
    if (typeof key_endpra2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_endpra2.rt', key_endpra2.rt);
        psychoJS.experiment.addData('key_endpra2.duration', key_endpra2.duration);
        routineTimer.reset();
        }
    
    key_endpra2.stop();
    // the Routine "endpra2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var starttrialMaxDurationReached;
var _key_starttrial_allKeys;
var starttrialMaxDuration;
var starttrialComponents;
function starttrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'starttrial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    starttrialClock.reset();
    routineTimer.reset();
    starttrialMaxDurationReached = false;
    // update component parameters for each repeat
    key_starttrial.keys = undefined;
    key_starttrial.rt = undefined;
    _key_starttrial_allKeys = [];
    psychoJS.experiment.addData('starttrial.started', globalClock.getTime());
    starttrialMaxDuration = null
    // keep track of which components have finished
    starttrialComponents = [];
    starttrialComponents.push(textstarttrial);
    starttrialComponents.push(key_starttrial);
    
    for (const thisComponent of starttrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function starttrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'starttrial' ---
    // get current time
    t = starttrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textstarttrial* updates
    if (t >= 0.0 && textstarttrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textstarttrial.tStart = t;  // (not accounting for frame time here)
      textstarttrial.frameNStart = frameN;  // exact frame index
      
      textstarttrial.setAutoDraw(true);
    }
    
    
    // *key_starttrial* updates
    if (t >= 0.0 && key_starttrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_starttrial.tStart = t;  // (not accounting for frame time here)
      key_starttrial.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_starttrial.clock.reset();
      key_starttrial.start();
    }
    
    if (key_starttrial.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_starttrial.getKeys({keyList: ['1'], waitRelease: false});
      _key_starttrial_allKeys = _key_starttrial_allKeys.concat(theseKeys);
      if (_key_starttrial_allKeys.length > 0) {
        key_starttrial.keys = _key_starttrial_allKeys[_key_starttrial_allKeys.length - 1].name;  // just the last key pressed
        key_starttrial.rt = _key_starttrial_allKeys[_key_starttrial_allKeys.length - 1].rt;
        key_starttrial.duration = _key_starttrial_allKeys[_key_starttrial_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of starttrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function starttrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'starttrial' ---
    for (const thisComponent of starttrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('starttrial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_starttrial.corr, level);
    }
    psychoJS.experiment.addData('key_starttrial.keys', key_starttrial.keys);
    if (typeof key_starttrial.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_starttrial.rt', key_starttrial.rt);
        psychoJS.experiment.addData('key_starttrial.duration', key_starttrial.duration);
        routineTimer.reset();
        }
    
    key_starttrial.stop();
    // the Routine "starttrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endblockMaxDurationReached;
var _key_endblock_allKeys;
var endblockMaxDuration;
var endblockComponents;
function endblockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'endblock' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endblockClock.reset();
    routineTimer.reset();
    endblockMaxDurationReached = false;
    // update component parameters for each repeat
    key_endblock.keys = undefined;
    key_endblock.rt = undefined;
    _key_endblock_allKeys = [];
    psychoJS.experiment.addData('endblock.started', globalClock.getTime());
    endblockMaxDuration = null
    // keep track of which components have finished
    endblockComponents = [];
    endblockComponents.push(textendblock);
    endblockComponents.push(key_endblock);
    
    for (const thisComponent of endblockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endblockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'endblock' ---
    // get current time
    t = endblockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textendblock* updates
    if (t >= 0.0 && textendblock.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textendblock.tStart = t;  // (not accounting for frame time here)
      textendblock.frameNStart = frameN;  // exact frame index
      
      textendblock.setAutoDraw(true);
    }
    
    
    // *key_endblock* updates
    if (t >= 0.0 && key_endblock.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_endblock.tStart = t;  // (not accounting for frame time here)
      key_endblock.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_endblock.clock.reset();
      key_endblock.start();
    }
    
    if (key_endblock.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_endblock.getKeys({keyList: ['1'], waitRelease: false});
      _key_endblock_allKeys = _key_endblock_allKeys.concat(theseKeys);
      if (_key_endblock_allKeys.length > 0) {
        key_endblock.keys = _key_endblock_allKeys[_key_endblock_allKeys.length - 1].name;  // just the last key pressed
        key_endblock.rt = _key_endblock_allKeys[_key_endblock_allKeys.length - 1].rt;
        key_endblock.duration = _key_endblock_allKeys[_key_endblock_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endblockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endblockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'endblock' ---
    for (const thisComponent of endblockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('endblock.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_endblock.corr, level);
    }
    psychoJS.experiment.addData('key_endblock.keys', key_endblock.keys);
    if (typeof key_endblock.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_endblock.rt', key_endblock.rt);
        psychoJS.experiment.addData('key_endblock.duration', key_endblock.duration);
        routineTimer.reset();
        }
    
    key_endblock.stop();
    // the Routine "endblock" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var _key_end_allKeys;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endClock.reset(routineTimer.getTime());
    routineTimer.add(10.000000);
    endMaxDurationReached = false;
    // update component parameters for each repeat
    key_end.keys = undefined;
    key_end.rt = undefined;
    _key_end_allKeys = [];
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(textend);
    endComponents.push(key_end);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textend* updates
    if (t >= 0.0 && textend.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textend.tStart = t;  // (not accounting for frame time here)
      textend.frameNStart = frameN;  // exact frame index
      
      textend.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textend.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textend.setAutoDraw(false);
    }
    
    
    // *key_end* updates
    if (t >= 0.0 && key_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_end.tStart = t;  // (not accounting for frame time here)
      key_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_end.clock.reset();
      key_end.start();
    }
    
    frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_end.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_end.getKeys({keyList: ['1', '2', '3', '4', 'enter', 'space'], waitRelease: false});
      _key_end_allKeys = _key_end_allKeys.concat(theseKeys);
      if (_key_end_allKeys.length > 0) {
        key_end.keys = _key_end_allKeys[_key_end_allKeys.length - 1].name;  // just the last key pressed
        key_end.rt = _key_end_allKeys[_key_end_allKeys.length - 1].rt;
        key_end.duration = _key_end_allKeys[_key_end_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_end.corr, level);
    }
    psychoJS.experiment.addData('key_end.keys', key_end.keys);
    if (typeof key_end.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_end.rt', key_end.rt);
        psychoJS.experiment.addData('key_end.duration', key_end.duration);
        routineTimer.reset();
        }
    
    key_end.stop();
    if (endMaxDurationReached) {
        endClock.add(endMaxDuration);
    } else {
        endClock.add(10.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }

  // データを送信する部分を追加
  const csvData = psychoJS.experiment.getDataFile();  // PsychoPyで出力されたCSVデータを取得
  const participantId = psychoJS.experiment.data["participant_id"] || "no_id";
  const timing = psychoJS.experiment.data["selected_timing_value"] || "no_timing";
  
  const now = new Date();
  const timestamp = `${now.getFullYear()}_${(now.getMonth() + 1).toString().padStart(2, '0')}_${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}_${now.getMinutes().toString().padStart(2, '0')}_${now.getSeconds().toString().padStart(2, '0')}`;
  const filename = `flanker1_${participantId}_${timing}_${timestamp}.csv`;

  // データをOSFに送信
  fetch("https://pipe.jspsych.org/api/data/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify({
      experimentID: "nTfNs3BeCPOK", // 実験ID
      filename: filename,
      data: csvData
    }),
  })
  .then(response => {
    if (response.ok) {
      console.log(`データが正常に保存されました。ファイル名: ${filename}`);
    } else {
      console.error('データの保存中にエラーが発生しました');
    }
  })
  .catch(error => {
    console.error('通信エラーが発生しました:', error);
  });

  // 実験終了処理
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

