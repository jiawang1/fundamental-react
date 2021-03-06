import React from 'react';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';
import { Dropdown, Popover, Button, Menu, MenuList, MenuItem } from '../';

export const DropdownComponent = () => {
    const defaultDropdownCode = `<Dropdown>
    <Popover
        id="jhqD0555"
        control={<Button dropdown>Select</Button>}
        noArrow
        body={
            <Menu>
                <MenuList>
                    <MenuItem url="/">Option 1</MenuItem>
                    <MenuItem url="/">Option 2</MenuItem>
                    <MenuItem url="/">Option 3</MenuItem>
                    <MenuItem url="/">Option 4</MenuItem>
                </MenuList>
            </Menu>
        }
    />
</Dropdown>

<Dropdown>
    <Popover
        id="jhqD0556"
        control={
            <Button dropdown compact>
                Select
            </Button>
        }
        noArrow
        body={
            <Menu>
                <MenuList>
                    <MenuItem url="/">Option 1</MenuItem>
                    <MenuItem url="/">Option 2</MenuItem>
                    <MenuItem url="/">Option 3</MenuItem>
                    <MenuItem url="/">Option 4</MenuItem>
                </MenuList>
            </Menu>
        }
    />
</Dropdown>`;

    const iconDropdownCode = `<Dropdown>
    <Popover
        id="jhqD0557"
        control={
            <Button dropdown glyph="filter">
                Select
            </Button>
        }
        noArrow
        body={
            <Menu>
                <MenuList>
                    <MenuItem url="/">Option 1</MenuItem>
                    <MenuItem url="/">Option 2</MenuItem>
                    <MenuItem url="/">Option 3</MenuItem>
                    <MenuItem url="/">Option 4</MenuItem>
                </MenuList>
            </Menu>
        }
    />
</Dropdown>

<Dropdown>
    <Popover
        id="jhqD0558"
        control={
            <Button dropdown compact glyph="filter">
                Select
            </Button>
        }
        noArrow
        body={
            <Menu>
                <MenuList>
                    <MenuItem url="/">Option 1</MenuItem>
                    <MenuItem url="/">Option 2</MenuItem>
                    <MenuItem url="/">Option 3</MenuItem>
                    <MenuItem url="/">Option 4</MenuItem>
                </MenuList>
            </Menu>
        }
    />
</Dropdown>`;

    const toolbarDropdownCode = `<Dropdown standard>
    <Popover
        id="jhqD0559"
        control={
            <Button dropdown type="standard">
                Select
            </Button>
        }
        noArrow
        body={
            <Menu>
                <MenuList>
                    <MenuItem url="/">Option 1</MenuItem>
                    <MenuItem url="/">Option 2</MenuItem>
                    <MenuItem url="/">Option 3</MenuItem>
                    <MenuItem url="/">Option 4</MenuItem>
                </MenuList>
            </Menu>
        }
    />
</Dropdown>

<Dropdown standard>
    <Popover
        id="jhqD0560"
        control={
            <Button dropdown compact type="standard">
                Select
            </Button>
        }
        noArrow
        body={
            <Menu>
                <MenuList>
                    <MenuItem url="/">Option 1</MenuItem>
                    <MenuItem url="/">Option 2</MenuItem>
                    <MenuItem url="/">Option 3</MenuItem>
                    <MenuItem url="/">Option 4</MenuItem>
                </MenuList>
            </Menu>
        }
    />
</Dropdown>`;

    const disabledDropdownCode = `<Dropdown>
    <Popover
        id="jhqD0561"
        disabled
        control={
            <Button dropdown glyph="filter" disabled>
                Select
            </Button>
        }
        noArrow
        body={
            <Menu>
                <MenuList>
                    <MenuItem url="/">Option 1</MenuItem>
                    <MenuItem url="/">Option 2</MenuItem>
                    <MenuItem url="/">Option 3</MenuItem>
                    <MenuItem url="/">Option 4</MenuItem>
                </MenuList>
            </Menu>
        } 
    />
</Dropdown>`;

    return (
        <div>
            <Header>Dropdown</Header>
            <Description>
                The dropdown component let the user select one of different options. It is more flexible than the normal
                Select.
            </Description>
            <Import module='Dropdown' path='/fundamental-react/src/' />

            <Separator />

            <Properties
                type='Inputs'
                properties={[
                    { name: 'standard', description: 'bool - set to \'true\' to enable a dropdown for toolbar.' }
                ]} />

            <Separator />

            <h2>Default Dropdown</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--dropdown'>
                    <Dropdown>
                        <Popover
                            id='jhqD0555'
                            control={<Button dropdown>Select</Button>}
                            noArrow
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url='/'>Option 1</MenuItem>
                                        <MenuItem url='/'>Option 2</MenuItem>
                                        <MenuItem url='/'>Option 3</MenuItem>
                                        <MenuItem url='/'>Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            } />
                    </Dropdown>

                    <Dropdown>
                        <Popover
                            id='jhqD0556'
                            control={
                                <Button dropdown compact>
                                    Select
                                </Button>
                            }
                            noArrow
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url='/'>Option 1</MenuItem>
                                        <MenuItem url='/'>Option 2</MenuItem>
                                        <MenuItem url='/'>Option 3</MenuItem>
                                        <MenuItem url='/'>Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            } />
                    </Dropdown>
                </div>
            </DocsTile>
            <DocsText>{defaultDropdownCode}</DocsText>

            <Separator />

            <h2>Dropdown with Icon</h2>
            <Description>It can also include complementary information like an icon.</Description>
            <DocsTile centered>
                <div className='fd-doc__margin--dropdown'>
                    <Dropdown>
                        <Popover
                            id='jhqD0557'
                            control={
                                <Button dropdown glyph='filter'>
                                    Select
                                </Button>
                            }
                            noArrow
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url='/'>Option 1</MenuItem>
                                        <MenuItem url='/'>Option 2</MenuItem>
                                        <MenuItem url='/'>Option 3</MenuItem>
                                        <MenuItem url='/'>Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            } />
                    </Dropdown>

                    <Dropdown>
                        <Popover
                            id='jhqD0558'
                            control={
                                <Button dropdown compact
                                    glyph='filter'>
                                    Select
                                </Button>
                            }
                            noArrow
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url='/'>Option 1</MenuItem>
                                        <MenuItem url='/'>Option 2</MenuItem>
                                        <MenuItem url='/'>Option 3</MenuItem>
                                        <MenuItem url='/'>Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            } />
                    </Dropdown>
                </div>
            </DocsTile>
            <DocsText>{iconDropdownCode}</DocsText>

            <Separator />

            <h2>Toolbar Dropdown</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--dropdown'>
                    <Dropdown standard>
                        <Popover
                            id='jhqD0559'
                            control={
                                <Button dropdown type='standard'>
                                    Select
                                </Button>
                            }
                            noArrow
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url='/'>Option 1</MenuItem>
                                        <MenuItem url='/'>Option 2</MenuItem>
                                        <MenuItem url='/'>Option 3</MenuItem>
                                        <MenuItem url='/'>Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            } />
                    </Dropdown>

                    <Dropdown standard>
                        <Popover
                            id='jhqD0560'
                            control={
                                <Button dropdown compact
                                    type='standard'>
                                    Select
                                </Button>
                            }
                            noArrow
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url='/'>Option 1</MenuItem>
                                        <MenuItem url='/'>Option 2</MenuItem>
                                        <MenuItem url='/'>Option 3</MenuItem>
                                        <MenuItem url='/'>Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            } />
                    </Dropdown>
                </div>
            </DocsTile>
            <DocsText>{toolbarDropdownCode}</DocsText>

            <Separator />

            <h2>Disabled State</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--dropdown'>
                    <Dropdown>
                        <Popover
                            id='jhqD0561'
                            disabled
                            control={
                                <Button dropdown glyph='filter'
                                    disabled>
                                    Select
                                </Button>
                            }
                            noArrow
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url='/'>Option 1</MenuItem>
                                        <MenuItem url='/'>Option 2</MenuItem>
                                        <MenuItem url='/'>Option 3</MenuItem>
                                        <MenuItem url='/'>Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            } />
                    </Dropdown>
                </div>
            </DocsTile>
            <DocsText>{disabledDropdownCode}</DocsText>

            <Separator />
        </div>
    );
};
