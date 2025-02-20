---
"@udecode/slate-plugins-core": minor
---

changes:
- `useEditableProps` (used by `SlatePlugins`):
  - new fields returned: all handler props from the plugins (if defined)
  - new core plugins with the following fields:
    - `onFocus: setEventEditorId('focus', id)`
    - `onBlur: setEventEditorId('blur', id)`
    - You can add your own handlers in a plugin
- `EditorStateEffect`: a new component used by `SlatePlugins` to update the editor state.
- `setEventEditorId`: a new action. Set an editor id by event key.
- `eventEditorStore`, `useEventEditorStore`: a new store. Store where the keys are event names and the values are editor ids.
- `useEventEditorId`: a new selector. Get the editor id by `event` key.
- `useStoreEditorSelection`: a new selector. Get the editor selection which is updated on editor change.
- `useStoreEditorState`: a new selector. Get editor state which is updated on editor change. Similar to `useSlate`.
- `SlatePlugin`: the previous plugin could implement the following handlers: `onChange`, `onDOMBeforeInput` and `onKeyDown`. The plugins now implement all DOM handlers: clipboard, composition, focus, form, image, keyboard, media, mouse, selection, touch, pointer, ui, wheel animation and transition events.
- `SlatePluginsState` (store interface):
  - a new field `keyChange` incremented by `SlatePlugins` on `useSlate` update.
  - a new field `selection = editor.selection` updated on `useSlate` update.
- `pipeHandler`: a new function. Generic pipe for handlers.
