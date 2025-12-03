import { useState } from "react";

export const useSetExInTypes = () => {
    const exInTypes = [{name: '収入・支出', value: -1}, {name: '収入', value: 0}, {name: '支出', value: 1}];
    const [value, setValue] = useState(-1);

    return {value: value, setValue: setValue, exInTypes: exInTypes};
}