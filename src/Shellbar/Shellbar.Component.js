import React, { Component } from 'react';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties, Menu, MenuList, MenuItem } from '..';
import { Shellbar } from '..';
var images = require.context('../../assets', true);

export class ShellbarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    simpleShellbarExampleCode = ``;

    shellbarExampleCode = ``;

    actions = [
        {
            glyph: 'bell',
            notificationCount: 21,
            label: 'Notifications',
            callback: () => alert('Notification selected!')
        },
        {
            glyph: 'settings',
            label: 'Settings',
            notificationCount: 4,
            callback: () => alert('Settings selected!'),
            menu: (
                <Menu>
                    <MenuList>
                        <MenuItem url="/">Option 1</MenuItem>
                        <MenuItem url="/">Option 2</MenuItem>
                        <MenuItem url="/">Option 3</MenuItem>
                    </MenuList>
                </Menu>
            )
        }
    ];

    user1 = {
        initials: 'JS',
        userName: 'John Snow',
        colorAccent: 8
    };

    user = {
        image: images('./headshot-male.jpg'),
        userName: 'John Snow'
    };

    userMenu = [
        { name: 'Settings', glyph: 'action-settings', size: 's', callback: () => alert('Settings selected!') },
        { name: 'Sign Out', glyph: 'log', size: 's', callback: () => alert('Sign Out selected!') }
    ];

    productMenu = [
        { name: 'Application A', callback: () => alert('Application A selected!') },
        { name: 'Application B', callback: () => alert('Application B selected!') },
        { name: 'Application C', callback: () => alert('Application C selected!') },
        { name: 'Application D', callback: () => alert('Application D selected!') }
    ];

    productSwitcherList = [
        { title: 'Fiori Home', image: images('./01.png'), callback: () => alert('Fiori Home selected!') },
        { title: 'S/4 HANA Cloud', image: images('./02.png'), callback: () => alert('S/4 HANA Cloud selected!') },
        { title: 'Analytics Cloud', image: images('./03.png'), callback: () => alert('Analytics Cloud selected!') },
        { title: 'Ariba', image: images('./04.png'), callback: () => alert('Ariba selected!') },
        { title: 'SuccessFactors', image: images('./05.png'), callback: () => alert('SuccessFactors selected!') },
        { title: 'Commerce Cloud', image: images('./06.png'), callback: () => alert('Commerce Cloud selected!') },
        { title: 'Gigya', image: images('./07.png'), callback: () => alert('Gigya selected!') },
        { title: 'Callidus Cloud', image: images('./08.png'), callback: () => alert('Callidus Cloud selected!') },
        { title: 'Fieldglass', image: images('./09.png'), callback: () => alert('Fieldglass selected!') },
        { title: 'Concur', image: images('./10.png'), callback: () => alert('Concur selected!') },
        {
            title: 'Cloud for Customer',
            image: images('./11.png'),
            callback: () => alert('Cloud for Customer selected!')
        },
        { title: 'Cloud Portal', image: images('./12.png'), callback: () => alert('Cloud Portal selected!') }
    ];

    productSwitcher = {
        label: 'Product Switcher',
        glyph: 'grid'
    };

    searchInput = {
        label: 'Search',
        glyph: 'search',
        placeholder: 'Enter a fruit',
        onSearch: function(searchTerm) {
            alert(`Search fired for ${searchTerm}`);
        },
        callback: () => alert('Search selected!')
    };

    searchInput2 = {
        label: 'Search',
        glyph: 'search',
        placeholder: 'Enter a fruit',
        searchList: [
            { text: 'apple', callback: () => alert('apple') },
            { text: 'apricot', callback: () => alert('apricot') },
            { text: 'acai', callback: () => alert('acai') },
            { text: 'banana', callback: () => alert('banana') },
            { text: 'berry', callback: () => alert('berry') },
            { text: 'blueberry', callback: () => alert('blueberry') },
            { text: 'blackberry', callback: () => alert('blackberry') },
            { text: 'cranberry', callback: () => alert('cranberry') },
            { text: 'conkerberry', callback: () => alert('conkerberry') },
            { text: 'calabash', callback: () => alert('calabash') },
            { text: 'clementines', callback: () => alert('clementines') },
            { text: 'kiwi', callback: () => alert('kiwi') },
            { text: 'orange', callback: () => alert('orange') }
        ],
        onSearch: function(searchTerm) {
            alert(`Search fired for ${searchTerm}`);
        },
        callback: () => alert('Search selected!')
    };

    render() {
        return (
            <div>
                <Header>Shellbar</Header>
                <Description>
                    The shellbar offers consistent, responsive navigation across all products and applications. Includes
                    support for branding, product navigation, search, notifications, user settings, and CoPilot. This is
                    a composite component comprised of mandatory and optional elements. Before getting started, here are
                    some things to know.
                </Description>
                <Import module="Shellbar" path="/fundamental-react/src/" />
                <Separator />
                <Properties
                    type="Inputs"
                    properties={[
                        { name: 'logo', description: '(required) for company branding.' },
                        {
                            name: 'productTitle',
                            description: '(required) displays the current application when no product menu is used.'
                        },
                        { name: 'productMenu', description: '(optional) holds product titles and navigation.' },
                        {
                            name: 'subtitle',
                            description: '(optional) displays an application context. Should be used rarely.'
                        },
                        { name: 'copilot', description: '(optional) for use with applications that utilize CoPilot.' },
                        { name: 'actions', description: '(required) holds all product actions and links.' },
                        { name: 'user', description: '(required) user information like name, initials, etc.' },
                        {
                            name: 'userMenu',
                            description: '(required) for user settings and application meta links such as Sign Out.'
                        },
                        { name: 'productSwitcher', description: '(optional) for navigating between products.' },
                        { name: 'productSwitcherList', description: '(optional) list of the products.' }
                    ]}
                />
                <Separator />

                <h2>Basic Shellbar</h2>
                <Description>
                    This example shows the minimum shellbar for a single application product with only user settings. If
                    no user thumbnail is available then display initials.
                </Description>
                <DocsTile>
                    <Shellbar
                        logo={<img src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png" alt="SAP" />}
                        productTitle="Corporate Portal"
                        user={this.user1}
                        userMenu={this.userMenu}
                    />
                </DocsTile>
                <DocsText>{this.simpleShellbarExampleCode}</DocsText>

                <Separator />

                <h2>Product Menu and Search</h2>
                <Description>
                    This example includes the product menu for navigating to applications within the product and shows a
                    search box.
                </Description>
                <DocsTile>
                    <Shellbar
                        logo={<img src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png" alt="SAP" />}
                        productTitle="Corporate Portal"
                        productMenu={this.productMenu}
                        subtitle="Subtitle"
                        searchInput={this.searchInput}
                        user={this.user}
                        userMenu={this.userMenu}
                    />
                </DocsTile>
                <DocsText>{this.shellbarExampleCode}</DocsText>

                <Separator />

                <h2>Links with collapsible menu, CoPilot and Product Switcher</h2>
                <Description>
                    When a product has multiple links, the product links should collapse into an overflow menu on mobile
                    screens. All actions, except for the user menu, should be collapsed. See the placement of the{' '}
                    <code>&lt;fd-shellbar-collapse></code> container below.
                </Description>
                <DocsTile>
                    <Shellbar
                        logo={<img src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png" alt="SAP" />}
                        productTitle="Corporate Portal"
                        productMenu={this.productMenu}
                        subtitle="Subtitle"
                        copilot
                        searchInput={this.searchInput2}
                        actions={this.actions}
                        user={this.user}
                        userMenu={this.userMenu}
                        productSwitcher={this.productSwitcher}
                        productSwitcherList={this.productSwitcherList}
                    />
                </DocsTile>
                <DocsText>{this.shellbarExampleCode}</DocsText>
            </div>
        );
    }
}
