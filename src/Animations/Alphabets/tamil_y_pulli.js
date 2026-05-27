export const TAMIL_Y_PULLI = (ref) => {

    let animations = []

    // =========================================
    // RIGHT HAND
    // THUMB BENT ONLY
    // =========================================



    // =========================================
    // RIGHT INDEX STRAIGHT
    // =========================================

    animations.push([
        "mixamorigRightHandIndex1",
        "rotation",
        "z",
        Math.PI/24,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandIndex2",
        "rotation",
        "z",
        Math.PI/28,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandIndex3",
        "rotation",
        "z",
        Math.PI/32,
        "+"
    ]);



    // =========================================
    // RIGHT MIDDLE STRAIGHT
    // =========================================

    animations.push([
        "mixamorigRightHandMiddle1",
        "rotation",
        "z",
        Math.PI/24,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandMiddle2",
        "rotation",
        "z",
        Math.PI/28,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandMiddle3",
        "rotation",
        "z",
        Math.PI/32,
        "+"
    ]);



    // =========================================
    // RIGHT RING STRAIGHT
    // =========================================

    animations.push([
        "mixamorigRightHandRing1",
        "rotation",
        "z",
        Math.PI/22,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandRing2",
        "rotation",
        "z",
        Math.PI/26,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandRing3",
        "rotation",
        "z",
        Math.PI/30,
        "+"
    ]);



    // =========================================
    // RIGHT PINKY STRAIGHT
    // =========================================

    animations.push([
        "mixamorigRightHandPinky1",
        "rotation",
        "z",
        Math.PI/20,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandPinky2",
        "rotation",
        "z",
        Math.PI/24,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandPinky3",
        "rotation",
        "z",
        Math.PI/28,
        "+"
    ]);



    // =========================================
    // RIGHT THUMB BENT
    // =========================================

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "x",
        Math.PI/2.4,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "y",
        Math.PI/2,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandThumb2",
        "rotation",
        "y",
        -Math.PI/1.5,
        "-"
    ]);

    animations.push([
        "mixamorigRightHandThumb3",
        "rotation",
        "y",
        -Math.PI/1.4,
        "-"
    ]);



    // =========================================
    // RIGHT WRIST
    // =========================================

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "z",
        -Math.PI/10,
        "-"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "y",
        Math.PI/10,
        "+"
    ]);



    // =========================================
    // RIGHT FOREARM
    // =========================================

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "z",
        Math.PI/8,
        "+"
    ]);

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "x",
        Math.PI/18,
        "+"
    ]);



    // =========================================
    // RIGHT ARM
    // =========================================

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "x",
        -Math.PI/7,
        "-"
    ]);



    // =========================================
    // LEFT HAND
    // ALL FINGERS BENT
    // =========================================

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
            -Math.PI/1.4,
            "-"
        ])

        animations.push([
            `mixamorigLeftHand${finger}2`,
            "rotation",
            "z",
            -Math.PI/1.4,
            "-"
        ])

        animations.push([
            `mixamorigLeftHand${finger}3`,
            "rotation",
            "z",
            -Math.PI/1.4,
            "-"
        ])
    })



    // LEFT THUMB FOLDED
    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "x",
        Math.PI/2.3,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "y",
        -Math.PI/2,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandThumb2",
        "rotation",
        "y",
        Math.PI/1.5,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHandThumb3",
        "rotation",
        "y",
        Math.PI/1.4,
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
        -Math.PI/20,
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
        Math.PI/24,
        "+"
    ]);



    // =========================================
    // LEFT ARM
    // =========================================

    animations.push([
        "mixamorigLeftArm",
        "rotation",
        "x",
        -Math.PI/10,
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



    // RESET RIGHT THUMB
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



    // RESET LEFT THUMB
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



    ref.animations.push(animations)



    // =========================================
    // PLAY
    // =========================================

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}