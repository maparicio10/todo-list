import React from "react";
function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItems = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItems) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItems);
                    setItem(parsedItem);
                }

                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }console.log('Execute 2');
        }, 2000);
    });

    const saveItem = (newItem) => {
        const stringifiedTodos = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedTodos);
        setItem(newItem);
    };

    // return [item, saveItem];
    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };
