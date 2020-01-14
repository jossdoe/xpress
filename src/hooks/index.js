// bundling exports to simplify imports across the app
// this allows us to import everything from 'hooks'

// All of these are just simple helper functions for building forms
// in the sidebar and the modal window. They reduce the amount of
// code repetition in those components. A library like Formik could
// probably do a better job building those.

import useCheckbox from './useCheckbox';
import useRadioInput from './useRadioInput';
import useTextInput from './useTextInput';

export { useCheckbox, useRadioInput, useTextInput };
