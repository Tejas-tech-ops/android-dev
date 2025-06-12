import { View, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

type Props = {
    onAdd: (task: string) => void;
};


export const AddTaskInput: React.FC<Props> = ({ onAdd }) => {
    const [text, setText] = useState('');

    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Enter Task"
                value={text}
                onChangeText={setText}
                style={styles.input}
            />
            <Button
                title="Add"
                onPress={()=> {
                    if (text.trim()){
                        onAdd(text);    // Calls the onAdd function passed from parent
                        setText('');   // Clears input after adding
                    }
                }
            }/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexDirection: 'row', padding: 10 },
    input: { flex: 1, borderBottomWidth: 1, marginRight: 8 },
});

