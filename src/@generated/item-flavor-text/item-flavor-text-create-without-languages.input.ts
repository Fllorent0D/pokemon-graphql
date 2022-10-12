import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateNestedOneWithoutItem_flavor_textInput } from '../version-groups/version-groups-create-nested-one-without-item-flavor-text.input';
import { itemsCreateNestedOneWithoutItem_flavor_textInput } from '../items/items-create-nested-one-without-item-flavor-text.input';

@InputType()
export class item_flavor_textCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    flavor_text!: string;

    @Field(() => version_groupsCreateNestedOneWithoutItem_flavor_textInput, {nullable:false})
    version_groups!: version_groupsCreateNestedOneWithoutItem_flavor_textInput;

    @Field(() => itemsCreateNestedOneWithoutItem_flavor_textInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutItem_flavor_textInput;
}
