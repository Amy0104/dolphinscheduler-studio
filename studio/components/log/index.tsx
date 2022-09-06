/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NTabs, NTabPane, NLog } from 'naive-ui'
import { defineComponent, PropType } from 'vue'

const props = {
  value: {
    type: String as PropType<string>,
    default: ''
  }
}

export const Log = defineComponent({
  name: 'log',
  props,
  setup(props) {
    return () => {
      return (
        <NTabs type='card' closable size='small'>
          <NTabPane name='运行日志'>
            <NLog log={props.value} />
          </NTabPane>
        </NTabs>
      )
    }
  }
})
