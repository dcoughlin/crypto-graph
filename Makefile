BUILD_SHA1=${shell git rev-parse HEAD}

update_sha:
	sed -i -e "s/BUILD_SHA1/$(echo $BUILD_SHA1)/g" .env
  
run_ios:
	# react-native run-ios
	# react-native run-ios --simulator="iPhone 6s"
	react-native run-ios --simulator="iPhone X"
	# react-native run-ios --simulatro="iPad Pro (12.9-inch) (3rd generation)"
	# react-native run-ios --simulator="iPad Pro (9.7-inch)"

build_ios_release:
	react-native bundle --dev false --entry-file index.js --bundle-output ios/main.jsbundle --platform ios --assets-dest ios/

list_ios_simulators:
	xcrun simctl list devices

run_android:
	react-native run-android
	
list_android_simulators:
	emulator -list-avds

run_android_release:
	react-native run-android --variant release

build_android_release:
	react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
	rm -rf android/app/src/main/res/drawable-mdpi
	cd android && ./gradlew assembleRelease
	cd ..
	adb install -r ./android/app/build/outputs/apk/release/app-release.apk 