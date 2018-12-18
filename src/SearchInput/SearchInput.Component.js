import React, { Component } from 'react';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';
import { SearchInput } from './SearchInput';

export class SearchInputComponent extends Component {
    searchData = [
        { text: 'apple', callback: () => alert('apple') },
        { text: 'apricot', callback: () => alert('apricot') },
        { text: 'acai', callback: () => alert('acai') },
        { text: 'acerola', callback: () => alert('acerola') },
        { text: 'banana', callback: () => alert('banana') },
        { text: 'berry', callback: () => alert('berry') },
        { text: 'blueberry', callback: () => alert('blueberry') },
        { text: 'blackberry', callback: () => alert('blackberry') },
        { text: 'balsam apple', callback: () => alert('balsam apple') },
        { text: 'chokeberry', callback: () => alert('chokeberry') },
        { text: 'cranberry', callback: () => alert('cranberry') },
        { text: 'cloudberry', callback: () => alert('cloudberry') },
        { text: 'crowberry', callback: () => alert('crowberry') },
        { text: 'conkerberry', callback: () => alert('conkerberry') },
        { text: 'calabash', callback: () => alert('calabash') },
        { text: 'clementines', callback: () => alert('clementines') },
        { text: 'kiwi', callback: () => alert('kiwi') },
        { text: 'orange', callback: () => alert('orange') }
    ];

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    searchInputCode = ``;

    autoCompleteSearchInputCode = ``;

    exampleAutoCompleteMethod = `performAutoComplete = searchTerm => {
  const searchResults = this.data.filter(item => {
    return item.toLowerCase().startsWith(searchTerm.toLowerCase());
  });

  this.setState({ data: searchResults });
};`;

    performAutoComplete = searchTerm => {
        const searchResults = this.data.filter(item => {
            return item.toLowerCase().startsWith(searchTerm.toLowerCase());
        });

        this.setState({ data: searchResults });
    };

    performSearch = searchTerm => {
        console.log(`search fired for ${searchTerm}`);
    };

    render() {
        return (
            <div>
                <Header>Search Input</Header>
                <Description />
                <Import module="SearchInput" path="/fundamental-react/src/" />

                <Separator />

                <Properties
                    type="Inputs"
                    properties={[
                        {
                            name: 'onSearch',
                            description:
                                'func (Required) - Method to execute on click of Search icon, selection of auto-complete item or by pressing the Enter key.'
                        },
                        {
                            name: 'placeHolder',
                            description: 'string - The text to use as placeholder when no text is entered.'
                        },
                        {
                            name: 'data',
                            description: 'array - Collection of items to display in auto-complete list.'
                        },
                        {
                            name: 'onAutoComplete',
                            description:
                                'func - Method that receives search input box text, to perform auto complete query.'
                        }
                    ]}
                />

                <Separator />

                <h2>Default Search</h2>
                <Description>
                    A text input with Search button. Clicking on the Search button or pressing the Enter key will
                    execute the onSearch method.
                </Description>
                <DocsTile>
                    <div>
                        <SearchInput
                            placeHolder="Enter a fruit"
                            onSearch={this.performSearch}
                            searchList={this.searchData}
                            onEnter={() => alert('hi!')}
                        />
                    </div>
                </DocsTile>
                <DocsText>{this.searchInputCode}</DocsText>

                <Separator />

                <h2>Auto Complete Search</h2>
                <Description>
                    A text input with Search button that includes auto-complete functionality. Clicking on the Search
                    button, selecting an auto-complete item or pressing the Enter key will execute the onSearch method.{' '}
                    <br />
                    <br />
                    For the auto-complete functionality to work the parent component needs to pass a method to the{' '}
                    <b>onAutoComplete</b> property. The Search Input component will pass to the onAutoComplete method
                    the value entered in to the search box. It is up to the parent component to create the array of
                    values to display and set it to the <b>data</b> property of the Search Input component.
                </Description>
                <DocsTile>
                    <div>
                        <SearchInput
                            placeHolder="Enter a fruit"
                            data={this.state.data}
                            onAutoComplete={this.performAutoComplete}
                            onSearch={this.performSearch}
                        />
                    </div>
                </DocsTile>
                <DocsText>{this.autoCompleteSearchInputCode}</DocsText>
                <Separator />
                <Description>
                    Sample auto-complete method which filters an array of fruit based on the search input value.
                </Description>
                <DocsText>{this.exampleAutoCompleteMethod}</DocsText>

                <Separator />
            </div>
        );
    }
}
