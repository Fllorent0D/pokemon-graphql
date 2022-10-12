import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutItem_flavor_textInput } from './version-groups-create-without-item-flavor-text.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutItem_flavor_textInput } from './version-groups-create-or-connect-without-item-flavor-text.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class version_groupsCreateNestedOneWithoutItem_flavor_textInput {

    @Field(() => version_groupsCreateWithoutItem_flavor_textInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutItem_flavor_textInput)
    create?: version_groupsCreateWithoutItem_flavor_textInput;

    @Field(() => version_groupsCreateOrConnectWithoutItem_flavor_textInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutItem_flavor_textInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutItem_flavor_textInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;
}
