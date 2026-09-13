import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss';
import { presetUiUnocss } from '@soybeanjs/ui-uno';

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.vue($|\?)/]
    }
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [presetUiUnocss()]
});
