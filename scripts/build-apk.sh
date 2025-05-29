#!/bin/bash

set -eux;

npx expo prebuild;
cd android;
./gradlew assembleRelease;
cd ..;

RELEASE_APK=./android/app/build/outputs/apk/release/app-release.apk

if [ -f "$RELEASE_APK" ]; then
    echo "APK built successfully at $RELEASE_APK"
    mkdir -p dist;
    cp $RELEASE_APK ./dist/app-release.apk;
    echo "APK copied to ./dist/app-release.apk";
else
    echo "APK build failed"
    exit 1;
fi

