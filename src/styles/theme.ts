import { css, keyframes } from "styled-components";

export const colors = {
  white: "#FFFFFF",
  black: "#060812",
  blue: "#5177FF",
  red: "#F64E39",
  G_900: "#181B29",
  G_800: "#202232",
  G_700: "#2E3040",
  G_600: "#3E4151",
  G_500: "#5B5F70",
  G_400: "#818491",
  G_300: "#C5C7CF",
  G_200: "#DEE0E8",
  G_100: "#F1F2F6",
  G_50: "#F7F8F9",
  primary_transparent_100: "rgba(88, 114, 249, 1)",
  primary_transparent_90: "rgba(88, 114, 249, 0.9)",
  primary_transparent_80: "rgba(88, 114, 249, 0.8)",
  primary_transparent_70: "rgba(88, 114, 249, 0.7)",
  primary_transparent_60: "rgba(88, 114, 249, 0.6)",
  primary_transparent_50: "rgba(88, 114, 249, 0.5)",
  primary_transparent_40: "rgba(88, 114, 249, 0.4)",
  primary_transparent_30: "rgba(88, 114, 249, 0.3)",
  primary_transparent_20: "rgba(88, 114, 249, 0.2)",
  primary_transparent_10: "rgba(88, 114, 249, 0.1)",
  primary_transparent_5: "rgba(88, 114, 249, 0.05)",
  primary: "#7580EA",
  primary_dark: "#535DBF",
  primary_light: "#9EADFC",
  primary_xlight: "#CEDEFF",
  primary_xxlight: "#E3E6FB",
  primary_100: "#7580EA",
  primary_90: "#BBC0F5",
  primary_80: "#9199EE",
  primary_70: "#9FA7F1",
  primary_60: "#ACB3F2",
  primary_50: "#BBC0F5",
  primary_40: "#C8CCF7",
  primary_30: "#D6D9F9",
  primary_20: "#E3E6FB",
  primary_10: "#F2F3FD",
  primary_5: "#F8F8FE",
  sigmine_primary: "#5872F9",
  sigmine_primary_dark: "#3B4BD4",
  sigmine_primary_xdark: "#27339E",
  sigmine_primary_xxdark: "#252E7C",
  sigmine_primary_100: "#5872F9",
  sigmine_primary_90: "#6981FA",
  sigmine_primary_80: "#798EFA",
  sigmine_primary_70: "#889DFB",
  sigmine_primary_60: "#9BAAFB",
  sigmine_primary_50: "#ACB9FC",
  sigmine_primary_40: "#BCC7FD",
  sigmine_primary_30: "#CDD5FE",
  sigmine_primary_20: "#DEE3FE",
  sigmine_primary_10: "#EFF1FF",
  sigmine_primary_5: "#F6F8FE",
  green_100: "#13AC6C",
  green_90: "#2BB57B",
  green_80: "#42BD89",
  green_70: "#5AC599",
  green_60: "#71CDA7",
  green_50: "#89D6B6",
  green_40: "#A1DEC4",
  green_30: "#B9E7D3",
  green_20: "#D0EEE2",
  green_10: "#E8F7F1",
  green_5: "#F3FBF7",
  yellow_100: "#FFBD60",
  yellow_90: "#FFC470",
  yellow_80: "#FFCA80",
  yellow_70: "#FFD190",
  yellow_60: "#FFD7A0",
  yellow_50: "#FFDEB0",
  yellow_40: "#FFE5BF",
  yellow_30: "#FFECD0",
  yellow_20: "#FFF2DF",
  yellow_10: "#FFF9F0",
  yellow_5: "#FFFBF7",
};

export const fonts = {
  // 명칭
  xlarge: css`
    font-size: 36px;
    line-height: 144%; /* 51.84px */
    letter-spacing: -0.72px;
  `,
  large: css`
    font-size: 32px;
    line-height: 144%; /* 46.08px */
    letter-spacing: -0.64px;
  `,
  header0: css`
    font-size: 36px;
    line-height: 136%; /* 48.96px */
    letter-spacing: -0.72px;
  `,
  header1: css`
    font-size: 24px;
    line-height: 144%; /* 34.56px */
    letter-spacing: -0.48px;
  `,
  header2: css`
    font-size: 20px;
    line-height: 144%; /* 28.8px */
    letter-spacing: -0.4px;
  `,
  body1: css`
    font-size: 18px;
    line-height: 150%; /* 27px */
    letter-spacing: -0.36px;
  `,
  body2: css`
    font-size: 16px;
    line-height: 150%; /* 24px */
  `,
  body3: css`
    font-size: 14px;
    line-height: 150%; /* 21px */
    letter-spacing: -0.28px;
  `,
  caption1: css`
    font-size: 12px;
    line-height: 150%; /* 18px */
  `,
  caption2: css`
    font-size: 11px;
    line-height: 150%; /* 16.5px */
  `,
  // 볼드
  bold: css`
    font-family: var(--font-pretendard);
    font-style: normal;
    font-weight: 700;
  `,
  semibold: css`
    font-family: var(--font-pretendard);
    font-style: normal;
    font-weight: 600;
  `,
  medium: css`
    font-family: var(--font-pretendard);
    font-style: normal;
    font-weight: 500;
  `,
  regular: css`
    font-family: var(--font-pretendard);
    font-style: normal;
    font-weight: 400;
  `,

  /** 조합으로 쓰고 싶은 경우, 명칭_크기_볼드 순으로 작성 */
  xlarge_36_bold: css`
    /* xlarge_36/bold */
    font-family: var(--font-pretendard);
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 144%; /* 3.24rem */
    letter-spacing: -0.045rem;
  `,
  xlarge_36_regular: css`
    /* xlarge_36/reg */
    font-family: var(--font-pretendard);
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 144%; /* 3.24rem */
    letter-spacing: -0.045rem;
  `,

  large_32_bold: css`
    /* large_32/bold */
    font-family: var(--font-pretendard);
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 144%; /* 2.88rem */
    letter-spacing: -0.04rem;
  `,

  large_32_reg: css`
    /* large_32/reg */
    font-family: var(--font-pretendard);
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 144%; /* 2.88rem */
    letter-spacing: -0.04rem;
  `,

  h1_24_bold: css`
    /* h1_24/bold */
    font-family: var(--font-pretendard);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 144%; /* 34.56px */
    letter-spacing: -0.48px;
  `,
  h1_24_semi: css`
    /* h1_24/semi */
    font-family: var(--font-pretendard);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 144%; /* 34.56px */
    letter-spacing: -0.48px;
  `,
  h1_24_med: css`
    font-family: var(--font-pretendard);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 144%; /* 34.56px */
    letter-spacing: -0.48px;
  `,
  h1_24_reg: css`
    font-family: var(--font-pretendard);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 144%; /* 34.56px */
    letter-spacing: -0.48px;
  `,

  h2_20_bold: css`
    /* h2_20/bold */
    font-family: var(--font-pretendard);
    font-size: 1.25rem;
    line-height: 144%; /* 28.8px */
    letter-spacing: -0.4px;
    font-style: normal;
    font-weight: 700;
  `,
  h2_20_semi: css`
    /* h2_20/semi */
    font-family: var(--font-pretendard);
    font-size: 1.25rem;
    line-height: 144%; /* 28.8px */
    letter-spacing: -0.4px;
    font-style: normal;
    font-weight: 600;
  `,
  h2_20_med: css`
    /* h2_20/med */
    font-family: var(--font-pretendard);
    font-size: 1.25rem;
    line-height: 144%; /* 28.8px */
    letter-spacing: -0.4px;
    font-style: normal;
    font-weight: 500;
  `,
  h2_20_reg: css`
    /* h2_20/reg */
    font-family: var(--font-pretendard);
    font-size: 1.25rem;
    line-height: 144%; /* 28.8px */
    letter-spacing: -0.4px;
    font-style: normal;
    font-weight: 400;
  `,
  b1_18_bold: css`
    /* b1_18/bold */
    font-family: var(--font-pretendard);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 1.6875rem */
    letter-spacing: -0.0225rem;
  `,
  b1_18_semi: css`
    /* b1_18/semi */
    font-family: var(--font-pretendard);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 1.6875rem */
    letter-spacing: -0.0225rem;
  `,
  b1_18_med: css`
    /* b1_18/med */
    font-family: var(--font-pretendard);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.6875rem */
    letter-spacing: -0.0225rem;
  `,
  b1_18_reg: css`
    /* b1_18/reg */
    font-family: var(--font-pretendard);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.6875rem */
    letter-spacing: -0.0225rem;
  `,

  b2_16_bold: css`
    /* b2_16/bold */
    font-family: var(--font-pretendard);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 1.5rem */
  `,
  b2_16_semi: css`
    /* b2_16/reg */
    font-family: var(--font-pretendard);
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 1.5rem */
    letters-pacing: -0.02rem;
  `,
  b2_16_med: css`
    /* b2_16/med */
    font-family: var(--font-pretendard);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.5rem */
  `,
  b2_16_reg: css`
    /* b2_16/reg */
    font-family: var(--font-pretendard);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
  `,

  b3_14_bold: css`
    /* b3_14/semi */
    font-family: var(--font-pretendard);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 1.3125rem */
    letter-spacing: -0.0175rem;
  `,
  b3_14_semi: css`
    /* b3_14/semi */
    font-family: var(--font-pretendard);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 1.3125rem */
    letter-spacing: -0.0175rem;
  `,
  b3_14_med: css`
    /* b3_14/med */
    font-family: var(--font-pretendard);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.3125rem */
    letter-spacing: -0.0175rem;
  `,
  b3_14_reg: css`
    /* b3_14/reg */
    font-family: var(--font-pretendard);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.3125rem */
    letter-spacing: -0.0175rem;
  `,

  c1_12_bold: css`
    /* c1_12/bold */
    font-family: var(--font-pretendard);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 1.125rem */
  `,
  c1_12_semi: css`
    /* c1_12/semi */
    font-family: var(--font-pretendard);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 1.125rem */
  `,
  c1_12_med: css`
    /* c1_12/med */
    font-family: var(--font-pretendard);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.125rem */
  `,
  c1_12_reg: css`
    /* c1_12/reg */
    font-family: var(--font-pretendard);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.125rem */
  `,

  c2_11_bold: css`
    /*  c2_11/bold */
    font-family: var(--font-pretendard);
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 1.03125rem */
  `,
  c2_11_semi: css`
    /*  c2_11/semi */
    font-family: var(--font-pretendard);
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 1.03125rem */
  `,
  c2_11_med: css`
    /*  c2_11/med */
    font-family: var(--font-pretendard);
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.03125rem */
  `,
  c2_11_reg: css`
    /*  c2_11/reg */
    font-family: var(--font-pretendard);
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.03125rem */
  `,
};

/* 믹스인 */
const mixins = {
  flexBox: (direction = "row", justify = "center", align = "center") => css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
  skeleton: () => {
    const moveRight = keyframes`
      0% {
        transform: translateX(-200%);
      }
      100% {
        transform: translateX(1100%);
      }
    `;

    return css`
      position: relative;

      background: #e5e7eb;
      overflow: hidden;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 10%;
        height: 100%;
        background: #d1d5db;
        box-shadow: 0px 0px 50px 30px #d1d5db;
        animation: ${moveRight} 1s infinite linear;
      }
    `;
  },
  slideUp: () => {
    const slideUp = keyframes`
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        `;

    return css`
      animation: ${slideUp} 0.5s ease-in-out;
    `;
  },
  fadeIn: () => {
    const fadeIn = keyframes`
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      `;

    return css`
      animation: ${fadeIn} 0.5s ease-in-out;
    `;
  },
  slideUpWFadeIn: () => {
    const slideUp = keyframes`
                from {
                    transform: translateY(20px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            `;
    const fadeIn = keyframes`
            from {
            opacity: 0;
            }
            to {
            opacity: 1;
            }
        `;

    return css`
      animation: ${fadeIn} 0.5s ease-in-out, ${slideUp} 0.5s ease-in-out;
    `;
  },

  gradientPrimary: () => css`
        linear-gradient(
            180deg,
            ${colors?.primary ?? "#000000"} 0%,
            ${colors?.primary_light ?? "#000000"} 23.99%,
            ${colors?.primary_xlight ?? "#000000"} 49.55%,
            ${colors.G_100} 76.47%,
            ${colors.white} 100%
        );
    `,
};

const theme = { colors, fonts, mixins };

export default theme;
