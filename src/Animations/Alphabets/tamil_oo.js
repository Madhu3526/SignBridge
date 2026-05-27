export const TAMIL_OO = (ref) => {

    let animations = []

    // =========================================
    // RIGHT HAND (ALL FINGERS BENT)
    // =========================================

    // INDEX FOLD
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/1.45, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/1.45, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/1.45, "+"]);


    // MIDDLE FOLD
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.4, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.4, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.4, "+"]);


    // RING FOLD
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.35, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.35, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.35, "+"]);


    // PINKY FOLD
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.3, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.3, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.3, "+"]);



    // =========================================
    // RIGHT THUMB LOCK
    // =========================================

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "x",
        Math.PI/2.2,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "y",
        Math.PI/1.9,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandThumb2",
        "rotation",
        "y",
        -Math.PI/1.45,
        "-"
    ]);

    animations.push([
        "mixamorigRightHandThumb3",
        "rotation",
        "y",
        -Math.PI/1.35,
        "-"
    ]);



    // =========================================
    // RIGHT WRIST + ARM
    // =========================================

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "z",
        -Math.PI/8,
        "-"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "y",
        Math.PI/10,
        "+"
    ]);

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "z",
        Math.PI/6,
        "+"
    ]);

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "x",
        Math.PI/14,
        "+"
    ]);

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "x",
        -Math.PI/6,
        "-"
    ]);



    // =========================================
    // LEFT HAND
    // Thumb Straight
    // Index Bent
    // Middle Bent
    // Ring Bent
    // Pinky Straight
    // =========================================



    // =========================================
    // INDEX BENT
    // =========================================

    animations.push([
        "mixamorigLeftHandIndex1",
        "rotation",
        "z",
        -Math.PI/1.5,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandIndex2",
        "rotation",
        "z",
        -Math.PI/1.5,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandIndex3",
        "rotation",
        "z",
        -Math.PI/1.5,
        "-"
    ]);



    // =========================================
    // MIDDLE BENT
    // =========================================

    animations.push([
        "mixamorigLeftHandMiddle1",
        "rotation",
        "z",
        -Math.PI/1.45,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandMiddle2",
        "rotation",
        "z",
        -Math.PI/1.45,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandMiddle3",
        "rotation",
        "z",
        -Math.PI/1.45,
        "-"
    ]);



    // =========================================
    // RING BENT
    // =========================================

    animations.push([
        "mixamorigLeftHandRing1",
        "rotation",
        "z",
        -Math.PI/1.4,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandRing2",
        "rotation",
        "z",
        -Math.PI/1.4,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandRing3",
        "rotation",
        "z",
        -Math.PI/1.4,
        "-"
    ]);



    // =========================================
    // PINKY STRAIGHT
    // =========================================

    animations.push([
        "mixamorigLeftHandPinky1",
        "rotation",
        "z",
        -Math.PI/22,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandPinky2",
        "rotation",
        "z",
        -Math.PI/26,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandPinky3",
        "rotation",
        "z",
        -Math.PI/30,
        "-"
    ]);



    // =========================================
    // THUMB STRAIGHT
    // =========================================

    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "x",
        Math.PI/12,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "y",
        -Math.PI/1.85,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandThumb2",
        "rotation",
        "y",
        Math.PI/24,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHandThumb3",
        "rotation",
        "y",
        Math.PI/28,
        "+"
    ]);



    // =========================================
    // PINKY OUTWARD SPREAD
    // =========================================

    animations.push([
        "mixamorigLeftHandPinky1",
        "rotation",
        "y",
        Math.PI/14,
        "+"
    ]);



    // =========================================
    // LEFT WRIST
    // =========================================

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "z",
        Math.PI/12,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "y",
        -Math.PI/22,
        "-"
    ]);



    // =========================================
    // LEFT FOREARM
    // =========================================

    animations.push([
        "mixamorigLeftForeArm",
        "rotation",
        "z",
        -Math.PI/16,
        "-"
    ]);

    animations.push([
        "mixamorigLeftForeArm",
        "rotation",
        "x",
        Math.PI/26,
        "+"
    ]);



    // =========================================
    // LEFT ARM
    // =========================================

    animations.push([
        "mixamorigLeftArm",
        "rotation",
        "x",
        -Math.PI/11,
        "-"
    ]);



    // =========================================
    // PUSH MAIN POSE
    // =========================================

    ref.animations.push(animations)



    // =========================================
    // RESET
    // =========================================

    animations = []



    const rightFingers = [
        "Index",
        "Middle",
        "Ring",
        "Pinky"
    ]

    rightFingers.forEach(finger => {

        animations.push([
            `mixamorigRightHand${finger}1`,
            "rotation",
            "z",
            0,
            "-"
        ])

        animations.push([
            `mixamorigRightHand${finger}2`,
            "rotation",
            "z",
            0,
            "-"
        ])

        animations.push([
            `mixamorigRightHand${finger}3`,
            "rotation",
            "z",
            0,
            "-"
        ])
    })



    const leftFingers = [
        "Index",
        "Middle",
        "Ring",
        "Pinky"
    ]

    leftFingers.forEach(finger => {

        animations.push([
            `mixamorigLeftHand${finger}1`,
            "rotation",
            "z",
            0,
            "+"
        ])

        animations.push([
            `mixamorigLeftHand${finger}2`,
            "rotation",
            "z",
            0,
            "+"
        ])

        animations.push([
            `mixamorigLeftHand${finger}3`,
            "rotation",
            "z",
            0,
            "+"
        ])
    })



    // RESET PINKY SPREAD
    animations.push([
        "mixamorigLeftHandPinky1",
        "rotation",
        "y",
        0,
        "-"
    ]);



    // RESET THUMBS
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

    animations.push([
        "mixamorigRightHandThumb2",
        "rotation",
        "y",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandThumb3",
        "rotation",
        "y",
        0,
        "+"
    ]);



    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "x",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "y",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHandThumb2",
        "rotation",
        "y",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandThumb3",
        "rotation",
        "y",
        0,
        "-"
    ]);



    // RESET WRISTS
    animations.push([
        "mixamorigRightHand",
        "rotation",
        "z",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "y",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "z",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "y",
        0,
        "+"
    ]);



    // RESET FOREARMS
    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "z",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "x",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigLeftForeArm",
        "rotation",
        "z",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigLeftForeArm",
        "rotation",
        "x",
        0,
        "-"
    ]);



    // RESET ARMS
    animations.push([
        "mixamorigRightArm",
        "rotation",
        "x",
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



    // =========================================
    // PUSH RESET
    // =========================================

    ref.animations.push(animations)



    // =========================================
    // PLAY
    // =========================================

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}