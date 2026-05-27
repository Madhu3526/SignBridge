export const SIGN_SLEEP = (ref) => {

    let animations = []

    // =========================================
    // LEFT HAND OPEN PALM
    // =========================================

    // INDEX
    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/10, "-"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/16, "-"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/20, "-"]);

    // MIDDLE
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/10, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/16, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/20, "-"]);

    // RING
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/10, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/16, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/20, "-"]);

    // PINKY
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/10, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/16, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/20, "-"]);



    // =========================================
    // THUMB
    // =========================================

    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "x",
        -Math.PI/12,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "y",
        -Math.PI/7,
        "-"
    ]);



    // =========================================
    // LEFT ARM POSITION
    // HAND NEAR CHEEK
    // =========================================

    animations.push([
        "mixamorigLeftArm",
        "rotation",
        "z",
        -Math.PI/7,
        "-"
    ]);

    animations.push([
        "mixamorigLeftArm",
        "rotation",
        "y",
        -Math.PI/5,
        "-"
    ]);

    animations.push([
        "mixamorigLeftArm",
        "rotation",
        "x",
        -Math.PI/18,
        "-"
    ]);



    // =========================================
    // ELBOW BEND
    // =========================================

    animations.push([
        "mixamorigLeftForeArm",
        "rotation",
        "z",
        -Math.PI/2.7,
        "-"
    ]);



    // =========================================
    // WRIST ALIGNMENT
    // =========================================

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "x",
        -Math.PI/14,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "y",
        -Math.PI/12,
        "-"
    ]);



    // =========================================
    // HEAD TILT
    // =========================================

    animations.push([
        "mixamorigHead",
        "rotation",
        "z",
        -Math.PI/12,
        "-"
    ]);

    animations.push([
        "mixamorigHead",
        "rotation",
        "x",
        Math.PI/50,
        "+"
    ]);



    // =========================================
    // MAIN POSE
    // =========================================

    ref.animations.push(animations);



    // =========================================
    // SMALL SLEEP MOTION
    // =========================================

    animations = []

    animations.push([
        "mixamorigHead",
        "rotation",
        "x",
        Math.PI/80,
        "+"
    ]);

    ref.animations.push(animations);



    // =========================================
    // RETURN
    // =========================================

    animations = []

    animations.push([
        "mixamorigHead",
        "rotation",
        "x",
        -Math.PI/80,
        "-"
    ]);

    ref.animations.push(animations);



    // =========================================
    // RESET
    // =========================================

    animations = []

    const fingers = [
        "Index",
        "Middle",
        "Ring",
        "Pinky"
    ];



    // RESET FINGERS

    fingers.forEach(finger => {

        for(let i = 1; i <= 3; i++){

            animations.push([
                `mixamorigLeftHand${finger}${i}`,
                "rotation",
                "z",
                0,
                "+"
            ]);
        }
    });



    // RESET THUMB

    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "x",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "y",
        0,
        "+"
    ]);



    // RESET ARM

    animations.push([
        "mixamorigLeftArm",
        "rotation",
        "z",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigLeftArm",
        "rotation",
        "y",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigLeftArm",
        "rotation",
        "x",
        0,
        "+"
    ]);



    // RESET FOREARM

    animations.push([
        "mixamorigLeftForeArm",
        "rotation",
        "z",
        0,
        "+"
    ]);



    // RESET WRIST

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "x",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "y",
        0,
        "+"
    ]);



    // RESET HEAD

    animations.push([
        "mixamorigHead",
        "rotation",
        "z",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigHead",
        "rotation",
        "x",
        0,
        "-"
    ]);



    ref.animations.push(animations);



    // =========================================
    // PLAY
    // =========================================

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}