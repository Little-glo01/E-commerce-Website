<script setup>
import { useToast } from '../composables/useToast'
const { toasts, removeToast } = useToast()
</script>

<template>
  <div
    style="
      position: fixed;
      top: 100px;
      right: 20px;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 380px;
      width: calc(100% - 40px);
      pointer-events: none;
    " >
    <div
      v-for="toast in toasts"
      :key="toast.id"
      class="toast"
      :class="`toast-${toast.type}`">
      <i
        :class="[
          'bi',
          toast.type === 'success' ? 'bi-check-circle-fill' :
          toast.type === 'error' ? 'bi-x-circle-fill' :
          'bi-info-circle-fill'
        ]"
        class="toast-icon"
      ></i>
      <p class="toast-message">{{ toast.message }}</p>
      <button
        class="toast-close"
        @click="removeToast(toast.id)"
        aria-label="Close"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.toast {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 16px 44px 16px 18px;

  background: #ffffff;
  border-radius: 10px;
  border-left: 4px solid #111111;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);

  pointer-events: auto;
  position: relative;
}

.toast-success { border-left-color: #20a899; }
.toast-error   { border-left-color: #e74c3c; }
.toast-info    { border-left-color: #111111; }

.toast-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.toast-success .toast-icon { color: #20a899; }
.toast-error   .toast-icon { color: #e74c3c; }
.toast-info    .toast-icon { color: #111111; }

.toast-message {
  flex: 1;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.45;
  color: #111111;
}

.toast-close {
  position: absolute;
  top: 10px;
  right: 10px;

  width: 22px;
  height: 22px;

  border: none;
  background: transparent;

  color: #999999;
  font-size: 14px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
}

.toast-close:hover {
  color: #111111;
}

@media (max-width: 576px) {
  /* handled by inline styles — keep mobile behavior consistent */
}
</style>