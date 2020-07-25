import React from 'react';
import { css } from 'styled-components';
import { Attraction, Car, TreeOption, FormDown } from 'grommet-icons';
import { Box, Grommet, Tab, Tabs, Form, FormField, TextInput, MaskedInput, Select, TextArea, Button, RangeInput } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import Notification from '../utils/notification';

const customTheme = deepMerge(grommet, {
    tab: {
        color: 'text',
        active: {
            background: 'background-back',
        },
        hover: {
            background: 'background-back',
            color: 'control',
        },
        border: {
            side: 'bottom',
            color: 'background-back',
            active: {
                color: 'border',
            },
            hover: {
                color: 'control',
            },
        },
        pad: 'small',
        margin: 'none',
        extend: ({ theme }) => css`
      border-top-left-radius: ___CSS_0___;
      border-top-right-radius: ___CSS_1___;
      font-weight: bold;
    `,
    },
});


const GeneralHistory = (props) => {
    const defaultValue = {
        name: '',
        email: '',
        sex: '',
        comorbities: '',
        age: '',
        smoking: ''
    };

    const [value, setValue] = React.useState(defaultValue);
    return (
        <Box fill align="center">
            <Box width="large">
                <Form
                    value={value}
                    onChange={nextValue => {
                        setValue(nextValue);
                    }}
                    onReset={() => setValue(defaultValue)}
                    onSubmit={event => {
                        console.log('Submit', event.value, event.touched)
                        props.nextIndex(1)
                    }
                    }
                >
                    <FormField label="Name" name="name">
                        <TextInput name="name" required />
                    </FormField>
                    <FormField label="Email" name="email" required>
                        <MaskedInput
                            name="email"
                            mask={[
                                { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                                { fixed: '@' },
                                { regexp: /^[\w]+$/, placeholder: 'my' },
                                { fixed: '.' },
                                { regexp: /^[\w]+$/, placeholder: 'com' },
                            ]}
                        />
                    </FormField>
                    <FormField label="Sex" name="Sex">
                        <Select name="sex" options={['male', 'female', 'other']} required />
                    </FormField>
                    <FormField label="Age" name="age" pad>
                        <TextInput name="age" required type="number" />
                    </FormField>
                    <FormField label="Smoking History" name="smoking" pad>
                        <TextInput name="smoking" required type="number" />
                    </FormField>
                    <FormField label="Any other co-morbidities" name="comorbities">
                        <TextArea name="comorbities" />
                    </FormField>
                    <Box direction="row" justify="center" gap="small" margin={{ top: 'medium' }}>
                        <Button type="reset" label="Reset" />
                        <Button type="submit" label="Continue" primary />
                    </Box>
                </Form>
            </Box>
        </Box >
    );
};

const Vitals = (props) => {
    const defaultValue = {
        temperature: '',
        pulse: '',
        resprirationRate: '',
        breathingPattern: '',
        bloodPressure: '',
    };

    const [value, setValue] = React.useState(defaultValue);
    return (
        <Box fill align="center">
            <Box width="large">
                <Form
                    value={value}
                    onChange={nextValue => {
                        setValue(nextValue);
                    }}
                    onReset={() => setValue(defaultValue)}
                    onSubmit={event => {
                        console.log('Submit', event.value, event.touched)
                        props.nextIndex(2)
                    }
                    }
                >
                    <FormField label="Temperature" name="temperature">
                        <TextInput name="temperature" placeholder="37℃" required />
                    </FormField>
                    <FormField label="Blood Pressure" name="bloodPressure" required>
                        <MaskedInput
                            name="bloodPressure"
                            mask={[
                                { regexp: /^[\d]+$/, placeholder: '80' },
                                { fixed: '/' },
                                { regexp: /^[\d]+$/, placeholder: '120' },
                            ]}
                        />
                    </FormField>
                    <FormField label="Breathing Pattern" name="breathingPattern">
                        <TextInput name="breathingPattern" required />
                    </FormField>
                    <FormField label="Respiration Rate" name="respirationRate" pad>
                        <TextInput name="respirationRate" required type="number" />
                    </FormField>
                    <FormField label="Pulse" name="pulse" pad>
                        <TextInput name="pulse" required type="number" />
                    </FormField>
                    <Box direction="row" justify="center" gap="small" margin={{ top: 'medium' }}>
                        <Button type="reset" label="Reset" />
                        <Button type="submit" label="Continue" primary />
                    </Box>
                </Form>
            </Box>
        </Box >
    );
};

const SystemicHistory = (props) => {
    const defaultValue = {
        cough: '',
        sputumConsistency: '',
        sputumAmount: '',
        sputumColor: '',
        sputumSmell: '',
        sputumPostural: '',
        blessOnset: '',
        blessDuration: '',
        blessSeverity: '',
        blessVariation: '',
        chestSite: '',
        chestOnset: '',
        chestDuration: '',
        chestSeverity: '',
        others: '',
        hemoptysis: ''
    };

    const [value, setValue] = React.useState(defaultValue);
    return (
        <Box fill align="center">
            <Box width="large">
                <Form
                    value={value}
                    onChange={nextValue => {
                        setValue(nextValue);
                    }}
                    onReset={() => setValue(defaultValue)}
                    onSubmit={event => {
                        console.log('Submit', event.value, event.touched)
                        props.nextIndex(3)
                    }
                    }
                >
                    <FormField label="Cough" name="cough">
                        <Select name="cough" options={['Acute', 'Sub-Acute', 'Chronic', 'Noctural']} required />
                    </FormField>
                    <FormField label="Sputum Consistency" name="sputumConsistency">
                        <TextInput name="sputumConsistency" required />
                    </FormField>
                    <FormField label="Sputum Amount" name="sputumAmount">
                        <TextInput name="sputumAmount" required />
                    </FormField>
                    <FormField label="Sputum Color" name="sputumColor">
                        <TextInput name="sputumColor" required />
                    </FormField>
                    <FormField label="Sputum Smell" name="sputumSmell">
                        <TextInput name="sputumSmell" required />
                    </FormField>
                    <FormField label="Sputum Postural Variations" name="sputumPostural">
                        <TextInput name="sputumPostural" required />
                    </FormField>
                    <FormField label="Breathlessness Onset" name="blessOnset">
                        <TextInput name="blessOnset" required />
                    </FormField>
                    <FormField label="Breathlessness Duration" name="blessDuration">
                        <TextInput name="breathingPattern" required />
                    </FormField>
                    <FormField label="Breathlessness Severity" name="blessSeverity" pad>
                        <TextInput name="blessSeverity" required />
                    </FormField>
                    <FormField label="Breathlessness Variation" name="blessVariation" pad>
                        <TextInput name="blessVariation" required />
                    </FormField>
                    <FormField label="Chest Pain Site" name="chestSite" pad>
                        <TextInput name="chestSite" required />
                    </FormField>
                    <FormField label="Chest Pain Onset" name="chestOnset" pad>
                        <TextInput name="chestOnset" required />
                    </FormField>
                    <FormField label="Chest Pain Duration" name="chestDuration" pad>
                        <TextInput name="chestDuration" required />
                    </FormField>
                    <FormField label="Chest Pain Severity" name="chestSeverity" pad>
                        <TextInput name="chestSeverity" required />
                    </FormField>
                    <FormField label="Other observations" name="others" pad>
                        <TextArea name="others" />
                    </FormField>
                    <FormField label="Hemoptysis" name="hemoptysis">
                        <Select name="hemoptysis" options={['Frank', 'Spurious', 'Sudo-Hemoptysis']} required />
                    </FormField>
                    <Box direction="row" justify="center" gap="small" margin={{ top: 'medium' }}>
                        <Button type="reset" label="Reset" />
                        <Button type="submit" label="Continue" primary />
                    </Box>
                </Form>
            </Box>
        </Box >
    );
};

const RecordAudio = (props) => {
    const defaultValue = {
        sample1: '',
        sample2: '',
        sample3: ''
    };

    const [value, setValue] = React.useState(defaultValue);
    return (
        <>
            <Box align="center">
                <Box width="large" gap="medium">
                    <Button label="Record Sample 1" />
                    <Button label="Record Sample 2" />
                    <Button label="Record Sample 3" />
                </Box>
            </Box >
            <Box direction="row" justify="center" gap="small" margin={{ top: 'medium' }}>
                <Button type="reset" label="Reset" />
                <Button type="submit" onClick={() => props.setNotification(true)} label="Submit" primary />
            </Box>
        </>
    );
};


const Registration = () => {
    const [index, setIndex] = React.useState()
    const onActive = nextIndex => setIndex(nextIndex);

    const [notification, setNotification] = React.useState(false)

    return (<Grommet theme={customTheme} background="dark-1" style={{ minHeight: "79vh" }}>
        <Box background="dark-1" height="auto" style={{ overflow: 'auto' }} margin={{ bottom: "medium" }} fill>
            <Tabs margin="none" activeIndex={index} onActive={onActive} flex>
                <Tab title="General History" icon={<FormDown />}>
                    <Box fill pad="large" background="dark-1">
                        <GeneralHistory nextIndex={onActive} />
                    </Box>
                </Tab>
                <Tab title="Vitals" icon={<FormDown />}>
                    <Box fill pad="large" align="center" background="dark-1">
                        <Vitals nextIndex={onActive} />
                    </Box>
                </Tab>
                <Tab title="Systemic History" icon={<FormDown />}>
                    <Box fill pad="large" align="center" background="dark-1">
                        <SystemicHistory nextIndex={onActive} />
                    </Box>
                </Tab>
                <Tab title="Sounds" icon={<FormDown />}>
                    <Box pad="large" align="center" background="dark-1">
                        <RecordAudio setNotification={setNotification} />
                    </Box>
                </Tab>
            </Tabs>
            {/* {notification && alert("Your auscultation samples suggest that you are COVID -ve with a 80% confidence")} */}
            {notification && <Notification setNotification={setNotification} message="Your auscultation samples suggest that you are COVID -ve with a 80% confidence" />}
        </Box>
    </Grommet>)
};

export default Registration
