     // 버튼 맨 앞으로
      AFRAME.registerComponent("overlay", {
        dependencies: ['material'],
        tick: function () {
          this.el.sceneEl.renderer.sortObjects = true;
          this.el.object3D.renderOrder = 100;
          this.el.components.material.material.depthTest = false;
          this.el.components.material.material.depthWrite  = false;
        }
      });
      // 글씨 맨 앞으로
      AFRAME.registerComponent("overlay_text", {
        dependencies: ['material'],
        tick: function () {
          this.el.sceneEl.renderer.sortObjects = true;
          this.el.object3D.renderOrder = 101;
          this.el.components.text.material.depthTest = false;
          this.el.components.text.material.depthWrite  = false;
        }
      });
