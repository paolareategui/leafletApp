<KeyboardAvoidingView keyboardVerticalOffset={100} behavior="position">
  <AppCoverImage source={require("./app/assets/welcome.png")} />

  <AppTextInput
    autoCapitalize="none"
    autoCorrect={false}
    clearButtonMode="while-editing"
    keyboardType="email-address"
    placeholder="Email"
    textContentType="emailAddress"
  />

  <AppTextInput
    autoCapitalize="none"
    autoCorrect={false}
    clearButtonMode="while-editing"
    keyboardType="name-phone-pad"
    placeholder="Password"
    secureTextEntry
    textContentType="password"
  />

  <AppButton title="SIGN UP" onPress={() => console.log("hi")} />
</KeyboardAvoidingView>;
