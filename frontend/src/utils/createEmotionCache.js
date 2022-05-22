import createCache from "@emotion/cache";

// 앱이 css 스타일을 어떻게 적용해야 할지 빠르게 인식할 수 있도록 도와주는 역할
// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export default function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}
