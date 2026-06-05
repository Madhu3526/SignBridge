import '../App.css';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-input-slider';
import 'font-awesome/css/font-awesome.min.css';

import xbot from '../Models/xbot/xbot.glb';
import ybot from '../Models/ybot/ybot.glb';
import xbotPic from '../Models/xbot/xbot.png';
import ybotPic from '../Models/ybot/ybot.png';

import * as words from '../Animations/words';
import { normalizeSignText, playTamilText } from '../Animations/animationLookup';
import { defaultPose } from '../Animations/defaultPose';
import { classifyTranscript, filterTamilOnly } from '../parser/validateTamil';
import { getGranthaLabel } from '../parser/granthaMap';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Convert() {
  const [text, setText] = useState('');
  const [bot, setBot] = useState(ybot);
  const [speed, setSpeed] = useState(0.1);
  const [pause, setPause] = useState(800);
  const [inputMode, setInputMode] = useState('voice');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [langWarning, setLangWarning] = useState(null); // { type, removed }
  const [glossInfo, setGlossInfo] = useState({ skipped: [], granthaChars: [] });

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
    ref.scene.background = new THREE.Color(0xd8e5f0);

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.position.set(0, 5, 5);
    ref.scene.add(spotLight);

    ref.renderer = new THREE.WebGLRenderer({ antialias: true });

    const canvas = document.getElementById('canvas');
    const canvasWidth = canvas.clientWidth || window.innerWidth - 370;
    const navH = 60;
    const barH = 53;
    const canvasHeight = Math.max(window.innerHeight - navH - barH, 420);

    ref.camera = new THREE.PerspectiveCamera(30, canvasWidth / canvasHeight, 0.1, 1000);
    ref.renderer.setSize(canvasWidth, canvasHeight);

    canvas.innerHTML = '';
    canvas.appendChild(ref.renderer.domElement);

    ref.camera.position.z = 2.2;
    ref.camera.position.y = 1.25;
    ref.camera.lookAt(0, 1.15, 0);

    const resizeRenderer = () => {
      const w = canvas.clientWidth || window.innerWidth - 370;
      const h = Math.max(canvas.clientHeight || window.innerHeight - navH - barH, 420);
      ref.camera.aspect = w / h;
      ref.camera.updateProjectionMatrix();
      ref.renderer.setSize(w, h);
      ref.renderer.render(ref.scene, ref.camera);
    };

    window.addEventListener('resize', resizeRenderer);

    const loader = new GLTFLoader();
    loader.load(bot, (gltf) => {
      gltf.scene.traverse((child) => {
        if (child.type === 'SkinnedMesh') child.frustumCulled = false;
      });
      ref.avatar = gltf.scene;
      ref.scene.add(ref.avatar);
      defaultPose(ref);
    });

    return () => window.removeEventListener('resize', resizeRenderer);
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
      setTimeout(() => { ref.flag = false; }, pause);
      ref.animations.shift();
    }
    ref.renderer.render(ref.scene, ref.camera);
  };

  const signText = (value) => {
    setText('');
    setGlossInfo({ skipped: [], granthaChars: [] });

    const classification = classifyTranscript(value);

    if (classification.type === 'empty') {
      return;
    }

    if (classification.type === 'english') {
      setLangWarning({ type: 'english', removed: [] });
      return;
    }

    let textToSign = value;
    if (classification.type === 'mixed') {
      textToSign = filterTamilOnly(value);
      setLangWarning({ type: 'mixed', removed: classification.englishWords });
    } else {
      setLangWarning(null);
    }

    const str = normalizeSignText(textToSign);
    playTamilText(str, ref, {
      words,
      onGloss: ({ skipped, granthaChars }) => {
        setGlossInfo({ skipped, granthaChars });
      },
    });
  };

  const startListening = () => {
    resetTranscript();
    setText('');
    setLangWarning(null);
    setGlossInfo({ skipped: [], granthaChars: [] });
    SpeechRecognition.startListening({ continuous: true, language: 'ta-IN' });
  };

  const stopListening = () => SpeechRecognition.stopListening();

  const stopAndSign = () => {
    stopListening();
    signText(transcript);
  };

  const uniqueGrantha = [...new Set(glossInfo.granthaChars)];

  return (
    <div className='app-shell'>

      {/* ── Navbar ── */}
      <nav className='app-nav'>
        <div className='nav-brand'>
          <i className='fa fa-sign-language nav-logo' />
          <div>
            <span className='brand-name'>SignBridge</span>
            <span className='brand-sub'>Tamil Sign Language</span>
          </div>
        </div>
        
      </nav>

      {/* ── Workspace ── */}
      <div className='workspace'>

        {/* ── Input panel ── */}
        <aside className='input-panel'>

          {/* Mode tabs */}
          <div className='mode-tabs'>
            <button
              className={`tab-btn${inputMode === 'voice' ? ' active' : ''}`}
              onClick={() => setInputMode('voice')}
            >
              <i className='fa fa-microphone' />
              Voice
            </button>
            <button
              className={`tab-btn${inputMode === 'text' ? ' active' : ''}`}
              onClick={() => setInputMode('text')}
            >
              <i className='fa fa-keyboard-o' />
              Type
            </button>
          </div>

          {/* Voice mode */}
          {inputMode === 'voice' && (
            <div className='voice-section'>
              <div className='mic-stage'>
                <button
                  className={`mic-btn${listening ? ' listening' : ''}`}
                  onClick={listening ? stopListening : startListening}
                  disabled={!browserSupportsSpeechRecognition}
                  aria-label={listening ? 'Stop listening' : 'Start listening'}
                >
                  <i className={`fa fa-microphone${listening ? '-slash' : ''}`} />
                </button>
                <p className='mic-label'>{listening ? 'Tap to stop' : 'Tap to listen'}</p>
                {!browserSupportsSpeechRecognition && (
                  <p className='mic-error'>Use Chrome or Edge for speech support.</p>
                )}
                {browserSupportsSpeechRecognition && !listening && (
                  <p className='mic-note'>Recognises Tamil (ta-IN)</p>
                )}
              </div>

              <div className='section-label'>
                <span>Transcript</span>
                <span className='lang-badge'>ta-IN</span>
              </div>
              <textarea
                className='text-area transcript-area'
                value={transcript}
                placeholder='Speech will appear here...'
                readOnly
                rows={5}
              />

              {/* Language warning */}
              {langWarning?.type === 'english' && (
                <div className='lang-warning'>
                  <i className='fa fa-exclamation-triangle' />
                  No Tamil text detected — please speak in Tamil.
                </div>
              )}
              {langWarning?.type === 'mixed' && (
                <div className='lang-warning lang-warning--mild'>
                  <i className='fa fa-info-circle' />
                  Removed {langWarning.removed.length} non-Tamil word
                  {langWarning.removed.length !== 1 ? 's' : ''}:{' '}
                  {langWarning.removed.map((w, i) => (
                    <span key={i} className='chip chip-removed'>{w}</span>
                  ))}
                </div>
              )}

              <div className='action-row'>
                <button className='btn btn-secondary' onClick={resetTranscript}>
                  <i className='fa fa-eraser' /> Clear
                </button>
                <button
                  className='btn btn-primary'
                  onClick={stopAndSign}
                  disabled={!transcript.trim()}
                >
                  <i className='fa fa-sign-language' /> Sign it
                </button>
              </div>

              {isMicrophoneAvailable === false && (
                <p className='alert-note'>Microphone permission is blocked in your browser.</p>
              )}
            </div>
          )}

          {/* Text mode */}
          {inputMode === 'text' && (
            <div className='text-section'>
              <div className='section-label'>
                <span>Tamil text</span>
              </div>
              <textarea
                className='text-area'
                ref={textFromInput}
                placeholder='Type Tamil text here, e.g. கி தோ கா'
                rows={7}
              />
              <button
                className='btn btn-primary btn-full'
                onClick={() => signText(textFromInput.current.value)}
              >
                <i className='fa fa-sign-language' /> Show as signs
              </button>
            </div>
          )}

          {/* Being signed */}
          <div className='output-section'>
            <div className='section-label'>Being signed</div>
            <textarea className='text-area output-area' value={text} readOnly rows={2} />
          </div>

          {/* Gloss info panel */}
          {(glossInfo.skipped.length > 0 || uniqueGrantha.length > 0) && (
            <div className='gloss-panel'>
              {glossInfo.skipped.length > 0 && (
                <div className='gloss-row'>
                  <span className='gloss-row-label'>
                    <i className='fa fa-minus-circle' /> Skipped
                  </span>
                  <span className='chip-group'>
                    {glossInfo.skipped.map((w, i) => (
                      <span key={i} className='chip chip-skip'>{w}</span>
                    ))}
                  </span>
                </div>
              )}
              {uniqueGrantha.length > 0 && (
                <div className='gloss-row'>
                  <span className='gloss-row-label'>
                    <i className='fa fa-question-circle' /> No sign (Grantha)
                  </span>
                  <span className='chip-group'>
                    {uniqueGrantha.map((c, i) => (
                      <span key={i} className='chip chip-grantha' title={`${getGranthaLabel(c)} — no TSL sign mapped yet`}>
                        {c}
                      </span>
                    ))}
                  </span>
                </div>
              )}
            </div>
          )}

        </aside>

        {/* ── Avatar stage ── */}
        <main className='avatar-stage'>

          <div className='stage-bar'>
            <div className='stage-info'>
              <span className='stage-label'>Sign view</span>
              <strong className='stage-status'>
                {listening ? 'Live — listening now' : 'Avatar ready'}
              </strong>
            </div>
            <div className='stage-actions'>
              <button
                className='btn btn-outline'
                onClick={() => signText(transcript)}
                disabled={!transcript.trim()}
              >
                Sign transcript
              </button>
              <button
                className='btn btn-icon'
                onClick={() => setSettingsOpen((o) => !o)}
                aria-label='Toggle settings'
                title='Settings'
              >
                <i className='fa fa-cog' />
              </button>
            </div>
          </div>

          <div id='canvas' />

          <div className={`stage-settings${settingsOpen ? ' open' : ''}`}>
            <div className='avatar-picker'>
              <span className='picker-label'>Avatar</span>
              <button
                className={`avatar-chip${bot === xbot ? ' selected' : ''}`}
                onClick={() => setBot(xbot)}
              >
                <img src={xbotPic} alt='XBOT' />
                XBOT
              </button>
              <button
                className={`avatar-chip${bot === ybot ? ' selected' : ''}`}
                onClick={() => setBot(ybot)}
              >
                <img src={ybotPic} alt='YBOT' />
                YBOT
              </button>
            </div>

            <div className='slider-control'>
              <span>Speed <small>{Math.round(speed * 100) / 100}</small></span>
              <Slider
                axis='x' xmin={0.05} xmax={0.50} xstep={0.01}
                x={speed} onChange={({ x }) => setSpeed(x)}
                className='slider'
              />
            </div>

            <div className='slider-control'>
              <span>Pause <small>{pause} ms</small></span>
              <Slider
                axis='x' xmin={0} xmax={2000} xstep={100}
                x={pause} onChange={({ x }) => setPause(x)}
                className='slider'
              />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Convert;
