import { configure } from '@storybook/react';

function loadStories() {
    require('../src/stories/InputStory');
    // 스토리 파일 추가
    require('../src/stories/NewCounterStory')
}

configure(loadStories, module);