// react-with-styles의 테마관리자를 임포트한다.
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
// 서버 출력을 도와주는 아프로디테 라이브러리의 react-with-styles 버전을 임포트한다.
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import Theme from './Theme';

// 테마파일 등록
ThemedStyleSheet.registerTheme(Theme);
// 아프로디테를 react-with-styles의 테마관리자에 적용한다.
ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
export default withStyles;