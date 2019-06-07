webpackJsonp([0],{144:function(n,r){n.exports="## Typography \r\n\r\nMaterial Design\u7684\u6587\u5b57\u5927\u5c0f\u548c\u6837\u5f0f\u662f\u4e3a\u4e86\u5728\u5178\u578b\u7684\u4f7f\u7528\u6761\u4ef6\u4e0b\u5e73\u8861\u5185\u5bb9\u5bc6\u5ea6\u548c\u9605\u8bfb\u8212\u9002\u5ea6\u800c\u5f00\u53d1\u7684\u3002\r\n\r\nMDC Typography\u662f\u4e00\u4e2a\u57fa\u7840\u6a21\u5757\uff0c\u5b83\u5c06\u8fd9\u4e9b\u6837\u5f0f\u5e94\u7528\u4e8eMDC Web\u7ec4\u4ef6\u3002 \u6b64\u6a21\u5757\u4e2d\u7684\u6392\u7248\u6837\u5f0f\u6e90\u81ea\u5341\u4e09\u79cd\u6837\u5f0f\uff1a\r\n\r\n* Headline 1\r\n* Headline 2\r\n* Headline 3\r\n* Headline 4\r\n* Headline 5\r\n* Headline 6\r\n* Subtitle 1\r\n* Subtitle 2\r\n* Body 1\r\n* Body 2\r\n* Caption\r\n* Button\r\n* Overline\r\n\r\n## \u4f7f\u7528\r\n\r\n```js\r\nimport * as css from '@omim/core/typography'\r\n\r\nconsole.log(css)\r\n```\r\n\r\n\u8f93\u51fa:\r\n\r\n```css\r\n.mdc-typography {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased; \r\n}\r\n\r\n.mdc-typography--headline1 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 6rem;\r\n  line-height: 6rem;\r\n  font-weight: 300;\r\n  letter-spacing: -0.01562em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--headline2 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 3.75rem;\r\n  line-height: 3.75rem;\r\n  font-weight: 300;\r\n  letter-spacing: -0.00833em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--headline3 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 3rem;\r\n  line-height: 3.125rem;\r\n  font-weight: 400;\r\n  letter-spacing: normal;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--headline4 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 2.125rem;\r\n  line-height: 2.5rem;\r\n  font-weight: 400;\r\n  letter-spacing: 0.00735em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--headline5 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 1.5rem;\r\n  line-height: 2rem;\r\n  font-weight: 400;\r\n  letter-spacing: normal;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--headline6 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 1.25rem;\r\n  line-height: 2rem;\r\n  font-weight: 500;\r\n  letter-spacing: 0.0125em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--subtitle1 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 1rem;\r\n  line-height: 1.75rem;\r\n  font-weight: 400;\r\n  letter-spacing: 0.00937em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--subtitle2 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 0.875rem;\r\n  line-height: 1.375rem;\r\n  font-weight: 500;\r\n  letter-spacing: 0.00714em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--body1 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 1rem;\r\n  line-height: 1.5rem;\r\n  font-weight: 400;\r\n  letter-spacing: 0.03125em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--body2 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 0.875rem;\r\n  line-height: 1.25rem;\r\n  font-weight: 400;\r\n  letter-spacing: 0.01786em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--caption {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 0.75rem;\r\n  line-height: 1.25rem;\r\n  font-weight: 400;\r\n  letter-spacing: 0.03333em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--button {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 0.875rem;\r\n  line-height: 2.25rem;\r\n  font-weight: 500;\r\n  letter-spacing: 0.08929em;\r\n  text-decoration: none;\r\n  text-transform: uppercase; \r\n}\r\n\r\n.mdc-typography--overline {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 0.75rem;\r\n  line-height: 2rem;\r\n  font-weight: 500;\r\n  letter-spacing: 0.16667em;\r\n  text-decoration: none;\r\n  text-transform: uppercase; \r\n}\r\n```"}});
//# sourceMappingURL=0.7011449e.chunk.js.map