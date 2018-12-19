import React from 'react';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';
import { DatePicker } from '../';

export const DatePickerComponent = () => {
    const defaultDatePickerCode = `<DatePicker disableBeforeDate={new Date(2018, 11, 24, 0, 0, 0, 0)} disableWeekends={true} />
<DatePicker
    compact
    disableWeekday={['Monday', 'Tuesday']}
    blockedDates={[new Date(2018, 11, 1, 0, 0, 0, 0), new Date(2018, 11, 23, 0, 0, 0, 0)]}
/>`;
    const enableRangeSelectionDatePickerCode = `<DatePicker enableRangeSelection disableFutureDates />
<DatePicker enableRangeSelection disablePastDates compact />`;

    return (
        <div>
            <Header>DatePicker</Header>
            <Description>
                The date-picker component is an opinionated composition of the "input-group", "popover" and "calendar"
                components to accomplish the UI pattern for picking a date.
            </Description>
            <Import module='DatePicker' path='/fundamental-react/src/' />

            <Separator />

            <Properties
                type='Inputs'
                properties={[
                { name: 'enableRangeSelection', description: 'bool - Enable to select two dates' },
                {name: 'disableWeekends', description: 'bool - Disable weekends'},
                {name: 'disableBeforeDate', description: 'date - Disables dates of a calendar that comes before a specific date'},
                {name: 'disableAfterDate', description: 'date - Disables dates of a calendar that comes after a specific date'},
                {name: 'disableWeekday', description: 'array of strings - Disables dates of a calendar that match a weekday'},
                {name: 'disablePastDates', description: 'bool - Disables dates that comes before today date'},
                {name: 'disableFutureDates', description: 'bool - Disables dates that comes after the today date'},
                {name: 'blockedDates', description: 'array of dates - Blocks dates that are between in the blocked dates'},
                {name: 'disabledDates', description: 'array of dates - Disables dates that are between in the disabled dates'},
                {name: 'enableRangeSelection', description: 'bool - Enable to select two dates'}
            ]}
            />

            <Separator />

            <h2>Simple Date Picker</h2>
            <DocsTile centered>
                <DatePicker disableBeforeDate={new Date(2018, 11, 24, 0, 0, 0, 0)} disableWeekends={true} />
                <DatePicker
                    compact
                    disableWeekday={['Monday', 'Tuesday']}
                    blockedDates={[new Date(2018, 11, 1, 0, 0, 0, 0), new Date(2018, 11, 23, 0, 0, 0, 0)]}
                />
            </DocsTile>
            <DocsText>{defaultDatePickerCode}</DocsText>
            <Separator />

            <h2>Range Date Picker</h2>
            <DocsTile centered>
                <DatePicker enableRangeSelection disableFutureDates />
                <DatePicker enableRangeSelection disablePastDates compact />
            </DocsTile>
            <DocsText>{enableRangeSelectionDatePickerCode}</DocsText>
        </div>
    );
};
