export const SIGN_COME = (ref) => {

    let animations = []

    // =========================================
    // RIGHT HAND OPEN PALM
    // =========================================

    // INDEX
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/10, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/14, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/18, "+"]);

    // MIDDLE
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/10, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/14, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/18, "+"]);

    // RING
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/10, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/14, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/18, "+"]);

    // PINKY
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/10, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/14, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/18, "+"]);



    // =========================================
    // THUMB OPEN
    // =========================================

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "x",
        Math.PI/18,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "y",
        Math.PI/8,
        "+"
    ]);



    // =========================================
    // ARM POSITION
    // HAND FORWARD
    // =========================================

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "z",
        Math.PI/10,
        "+"
    ]);

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "y",
        Math.PI/5,
        "+"
    ]);

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "x",
        -Math.PI/22,
        "-"
    ]);



    // =========================================
    // FOREARM
    // =========================================

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "z",
        Math.PI/3.2,
        "+"
    ]);



    // =========================================
    // WRIST
    // PALM FACING USER
    // =========================================

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "x",
        Math.PI/14,
        "+"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "y",
        Math.PI/7,
        "+"
    ]);



    // =========================================
    // MAIN POSE
    // =========================================

    ref.animations.push(animations);



    // =========================================
    // COME MOTION
    // HAND PULLING INWARD
    // =========================================

    animations = []

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "z",
        -Math.PI/10,
        "-"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "x",
        -Math.PI/18,
        "-"
    ]);

    ref.animations.push(animations);



    // =========================================
    // RETURN
    // =========================================

    animations = []

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "z",
        Math.PI/10,
        "+"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "x",
        Math.PI/18,
        "+"
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
                `mixamorigRightHand${finger}${i}`,
                "rotation",
                "z",
                0,
                "-"
            ]);
        }
    });



    // RESET THUMB

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "x",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "y",
        0,
        "-"
    ]);



    // RESET ARM

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "z",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "y",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "x",
        0,
        "+"
    ]);



    // RESET FOREARM

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "z",
        0,
        "-"
    ]);



    // RESET WRIST

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "x",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "y",
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