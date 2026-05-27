import { resetPose } from '../Animations/resetPose';
import { meiMap } from '../parser/meiMap';
import { uyirMap } from '../parser/uyirMap';

const startQueue = (ref) => {
  if (ref.pending === false) {
    ref.pending = true;
    ref.animate();
  }
};

export function playUyirmei(uyir, mei, ref) {
  const animations = [];
  const uyirAnimation = uyir && uyirMap[uyir];
  const meiAnimation = mei && meiMap[mei];

  if (uyirAnimation) {
    uyirAnimation(animations);
  }

  if (meiAnimation) {
    meiAnimation(animations);
  }

  if (animations.length === 0) {
    return false;
  }

  ref.animations.push(animations);

  const resetAnimations = [];
  resetPose(resetAnimations);
  ref.animations.push(resetAnimations);

  startQueue(ref);
  return true;
}

