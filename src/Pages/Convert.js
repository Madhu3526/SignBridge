import '../App.css';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-input-slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import xbot from '../Models/xbot/xbot.glb';
import ybot from '../Models/ybot/ybot.glb';
import xbotPic from '../Models/xbot/xbot.png';
import ybotPic from '../Models/ybot/ybot.png';

import * as words from '../Animations/words';
import { normalizeSignText, playTamilText } from '../Animations/animationLookup';
import { defaultPose } from '../Animations/defaultPose';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Convert() {
  const [text, setText] = useState('');
  const [bot, setBot] = useState(ybot);
  const [speed, setSpeed] = useState(0.1);
  const [pause, setPause] = useState(800);

  const componentRef = useRef({});
  const { current: ref } = componentRef;

  const textFromInput = useRef();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  useEffect(() => {
    ref.flag = false;
    ref.pending = false;
    ref.animations = [];
    ref.characters = [];

    ref.scene = new THREE.Scene();
    ref.scene.background = new THREE.Color(0xdfe6e3);

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.position.set(0, 5, 5);
    ref.scene.add(spotLight);
    ref.renderer = new THREE.WebGLRenderer({ antialias: true });

    const canvas = document.getElementById('canvas');
    const canvasWidth = canvas.clientWidth || window.innerWidth * 0.57;
    const canvasHeight = Math.max(window.innerHeight - 190, 520);

    ref.camera = new THREE.PerspectiveCamera(
      30,
      canvasWidth / canvasHeight,
      0.1,
      1000
    );
    ref.renderer.setSize(canvasWidth, canvasHeight);

    canvas.innerHTML = '';
    canvas.appendChild(ref.renderer.domElement);

    ref.camera.position.z = 2.2;
    ref.camera.position.y = 1.25;
    ref.camera.lookAt(0, 1.15, 0);

    const resizeRenderer = () => {
      const width = canvas.clientWidth || window.innerWidth * 0.57;
      const height = Math.max(window.innerHeight - 190, 520);

      ref.camera.aspect = width / height;
      ref.camera.updateProjectionMatrix();
      ref.renderer.setSize(width, height);
      ref.renderer.render(ref.scene, ref.camera);
    };

    window.addEventListener('resize', resizeRenderer);

    const loader = new GLTFLoader();
    loader.load(
      bot,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.type === 'SkinnedMesh') {
            child.frustumCulled = false;
          }
        });
        ref.avatar = gltf.scene;
        ref.scene.add(ref.avatar);
        defaultPose(ref);
      },
      (xhr) => {
        console.log(xhr);
      }
    );

    return () => {
      window.removeEventListener('resize', resizeRenderer);
    };
  }, [ref, bot]);

  ref.animate = () => {
    if (ref.animations.length === 0) {
      ref.pending = false;
      return;
    }
    requestAnimationFrame(ref.animate);
    if (ref.animations[0].length) {
      if (!ref.flag) {
        if (ref.animations[0][0] === 'add-text') {
          setText(text + ref.animations[0][1]);
          ref.animations.shift();
        } else {
          for (let i = 0; i < ref.animations[0].length;) {
            const [boneName, action, axis, limit, sign] = ref.animations[0][i];
            const bone = ref.avatar.getObjectByName(boneName);

            if (sign === '+' && bone[action][axis] < limit) {
              bone[action][axis] += speed;
              bone[action][axis] = Math.min(bone[action][axis], limit);
              i++;
            } else if (sign === '-' && bone[action][axis] > limit) {
              bone[action][axis] -= speed;
              bone[action][axis] = Math.max(bone[action][axis], limit);
              i++;
            } else {
              ref.animations[0].splice(i, 1);
            }
          }
        }
      }
    } else {
      ref.flag = true;
      setTimeout(() => {
        ref.flag = false;
      }, pause);
      ref.animations.shift();
    }
    ref.renderer.render(ref.scene, ref.camera);
  };

  const signText = (value) => {
    setText('');
    const str = normalizeSignText(value);
    playTamilText(str, ref, { words });
  };

  const startListening = () => {
    resetTranscript();
    setText('');
    SpeechRecognition.startListening({
      continuous: true,
      language: 'ta-IN'
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const stopAndSign = () => {
    stopListening();
    signText(transcript);
  };

  return (
    <div className='app-shell'>
      <header className='app-header'>
        <div>
          <p className='eyebrow'>Assistive Tamil listening</p>
          <h1>SignBridge</h1>
          <p className='app-subtitle'>Turn spoken Tamil into readable text and avatar signs.</p>
        </div>
        <div className={`status-pill ${listening ? 'active' : ''}`}>
          <span />
          {listening ? 'Listening to the speaker' : 'Ready to listen'}
        </div>
      </header>

      <div className='workspace'>
        <aside className='control-panel'>
          <section className='panel-section listen-card'>
            <div className='section-title'>
              <span>Listen to someone speaking</span>
              <small>{browserSupportsSpeechRecognition ? 'ta-IN' : 'unsupported'}</small>
            </div>
            <button className={`listen-button ${listening ? 'listening' : ''}`} onClick={startListening} disabled={!browserSupportsSpeechRecognition}>
              <span className='listen-icon'>
                <i className='fa fa-microphone' />
              </span>
              <span>{listening ? 'Listening...' : 'Start listening'}</span>
            </button>
            <div className='toolbar'>
              <button className='icon-button' onClick={stopListening}>
                <i className='fa fa-microphone-slash' />
                <span>Stop</span>
              </button>
              <button className='icon-button' onClick={resetTranscript}>
                <i className='fa fa-eraser' />
                <span>Clear</span>
              </button>
              <button className='icon-button primary' onClick={stopAndSign} disabled={!transcript.trim()}>
                <i className='fa fa-sign-language' />
                <span>Sign</span>
              </button>
            </div>
            <p className='support-note'>
              {browserSupportsSpeechRecognition
                ? isMicrophoneAvailable === false
                  ? 'Microphone permission is blocked.'
                  : 'Tamil recognition is requested with ta-IN. Best supported in Chrome or Edge.'
                : 'This browser does not support Web Speech Recognition.'}
            </p>
            <textarea rows={6} value={transcript} placeholder='The Tamil transcript will appear here...' className='text-box transcript-box' readOnly />
          </section>

          <section className='panel-section'>
            <div className='section-title'>
              <span>Avatar output</span>
            </div>
            <textarea rows={3} value={text} className='text-box output-box' readOnly />
          </section>

          <section className='panel-section secondary-input'>
            <div className='section-title'>
              <span>Type instead</span>
            </div>
            <textarea rows={3} ref={textFromInput} placeholder='Type Tamil text, e.g. கி தோ கா' className='text-box' />
            <button onClick={() => { signText(textFromInput.current.value); }} className='command-button'>
              Show typed text as signs
            </button>
          </section>
        </aside>

        <main className='avatar-stage'>
          <div className='stage-topbar'>
            <div>
              <span className='stage-label'>Sign view</span>
              <strong>{listening ? 'Listening now' : 'Avatar ready'}</strong>
            </div>
            <button className='stage-action' onClick={() => { signText(transcript); }} disabled={!transcript.trim()}>
              Sign transcript
            </button>
          </div>
          <div id='canvas' />
        </main>

        <aside className='settings-panel'>
          <section className='panel-section'>
            <div className='section-title'>
              <span>Avatar</span>
            </div>
            <div className='avatar-options'>
              <button className={`avatar-option ${bot === xbot ? 'selected' : ''}`} onClick={() => { setBot(xbot); }}>
                <img src={xbotPic} alt='Avatar 1: XBOT' />
                <span>XBOT</span>
              </button>
              <button className={`avatar-option ${bot === ybot ? 'selected' : ''}`} onClick={() => { setBot(ybot); }}>
                <img src={ybotPic} alt='Avatar 2: YBOT' />
                <span>YBOT</span>
              </button>
            </div>
          </section>

          <section className='panel-section compact'>
            <div className='section-title'>
              <span>Speed</span>
              <small>{Math.round(speed * 100) / 100}</small>
            </div>
            <Slider
              axis='x'
              xmin={0.05}
              xmax={0.50}
              xstep={0.01}
              x={speed}
              onChange={({ x }) => setSpeed(x)}
              className='slider'
            />
          </section>

          <section className='panel-section compact'>
            <div className='section-title'>
              <span>Pause</span>
              <small>{pause} ms</small>
            </div>
            <Slider
              axis='x'
              xmin={0}
              xmax={2000}
              xstep={100}
              x={pause}
              onChange={({ x }) => setPause(x)}
              className='slider'
            />
          </section>
        </aside>
      </div>
    </div>
  );
}

export default Convert;
