<script lang="ts" setup>
import { createNamespace } from '../../../utils/createNamespace';

// method
const { BEM } = createNamespace('spin');

// received props
withDefaults(defineProps<YkSpinProps>(), {
  spinning: true,
  size: 'normal',
  desc: '',
  type: 'dot',
  color: '#6e87f8',
});
</script>

<script lang="ts">
export interface YkSpinProps {
  spinning?: boolean;
  size?: 'small' | 'normal' | 'large';
  desc?: string;
  type?: 'dot' | 'circle' | 'dynamic';
  color?: string;
}
</script>

<template>
  <div :class="[BEM(), size]" :style="`--color: ${color};`">
    <div v-show="spinning" :class="BEM()">
      <div :class="BEM(`--box`)">
        <div :class="BEM(`--dot`)" v-if="type === 'dot'">
          <span class="yk-dot-item"></span>
          <span class="yk-dot-item"></span>
          <span class="yk-dot-item"></span>
          <span class="yk-dot-item"></span>
        </div>
        <div v-if="type === 'circle'" :class="BEM('--circle')" />
        <div v-if="type === 'dynamic'" :class="BEM('--dynamic')">
          <svg class="circular" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>
          </svg>
        </div>
        <p class="yk-desc" v-show="desc">{{ desc }}</p>
      </div>
    </div>
    <div :class="[BEM('content'), spinning && BEM('--mask')]">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
.yk-spin--wrap {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.yk-spin {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  .yk-spin--box {
    text-align: center;
    line-height: 0;
    vertical-align: middle;
    .yk-spin--dot {
      position: relative;
      display: inline-block;
      transform: rotate(45deg);
      animation: loadingDot 1.2s infinite linear;
      -webkit-animation: loadingDot 1.2s infinite linear;
      @keyframes loadingDot {
        100% {
          transform: rotate(405deg);
        }
      }
      .yk-dot-item {
        position: absolute;
        background: var(--color);
        border-radius: 50%;
        opacity: 0.3;
        animation: spinMove 1s linear infinite alternate;
        -webkit-animation: spinMove 1s linear infinite alternate;
        @keyframes spinMove {
          100% {
            opacity: 1;
          }
        }
      }
      .yk-dot-item:first-child {
        top: 0;
        left: 0;
      }
      .yk-dot-item:nth-child(2) {
        top: 0;
        right: 0;
        animation-delay: 0.4s;
        -webkit-animation-delay: 0.4s;
      }
      .yk-dot-item:nth-child(3) {
        bottom: 0;
        right: 0;
        animation-delay: 0.8s;
        -webkit-animation-delay: 0.8s;
      }
      .yk-dot-item:last-child {
        bottom: 0;
        left: 0;
        animation-delay: 1.2s;
        -webkit-animation-delay: 1.2s;
      }
    }
    .yk-spin--circle {
      display: inline-block;
      border-radius: 50%;
      border-style: solid;
      border-color: transparent;
      border-top-color: var(--color);
      animation: loading-circle 1s infinite linear;
      -webkit-animation: loading-circle 1s infinite linear;
      @keyframes loading-circle {
        100% {
          transform: rotate(360deg);
        }
      }
    }
    .yk-spin--dynamic {
      display: inline-block;
      .circular {
        display: inline-block;
        animation: loading-rotate 2s linear infinite;
        @keyframes loading-rotate {
          100% {
            transform: rotate(360deg);
          }
        }
        .path {
          stroke-dasharray: 90, 150;
          stroke-dashoffset: 0;
          stroke-width: 5;
          stroke: var(--color);
          stroke-linecap: round;
          animation: loading-dash 1.5s ease-in-out infinite;
          @keyframes loading-dash {
            0% {
              stroke-dasharray: 1, 200;
              stroke-dashoffset: 0;
            }

            50% {
              stroke-dasharray: 90, 150;
              stroke-dashoffset: -40px;
            }
            100% {
              stroke-dasharray: 90, 150;
              stroke-dashoffset: -120px;
            }
          }
        }
      }
    }
    .yk-desc {
      color: var(--color);
      text-align: center;
    }
  }
}
.large {
  .yk-spin .yk-spin--box {
    .yk-spin--dot {
      width: 36px;
      height: 36px;
      .yk-dot-item {
        width: 12px;
        height: 12px;
      }
    }
    .yk-spin--circle {
      width: 40px;
      height: 40px;
      border-width: 4px;
    }
    .yk-spin--dynamic {
      width: 42px;
      height: 42px;
    }
    .yk-desc {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      margin-top: 14px;
    }
  }
}
.normal {
  .yk-spin .yk-spin--box {
    .yk-spin--dot {
      width: 28px;
      height: 28px;
      .yk-dot-item {
        width: 10px;
        height: 10px;
      }
    }
    .yk-spin--circle {
      width: 32px;
      height: 32px;
      border-width: 3px;
    }
    .yk-spin--dynamic {
      width: 34px;
      height: 34px;
    }
    .yk-desc {
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      margin-top: 10px;
    }
  }
}
.small {
  .yk-spin .yk-spin--box {
    .yk-spin--dot {
      width: 20px;
      height: 20px;
      .yk-dot-item {
        width: 8px;
        height: 8px;
      }
    }
    .yk-spin--circle {
      width: 24px;
      height: 24px;
      border-width: 2px;
    }
    .yk-spin--dynamic {
      width: 26px;
      height: 26px;
    }
    .yk-desc {
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      margin-top: 6px;
    }
  }
}
.yk-spin--content {
  transition: opacity 0.3s;
}
.yk-spin--mask {
  user-select: none;
  pointer-events: none;
  opacity: 0.4;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
