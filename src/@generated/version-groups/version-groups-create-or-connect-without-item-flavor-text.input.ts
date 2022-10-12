import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutItem_flavor_textInput } from './version-groups-create-without-item-flavor-text.input';

@InputType()
export class version_groupsCreateOrConnectWithoutItem_flavor_textInput {

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;

    @Field(() => version_groupsCreateWithoutItem_flavor_textInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutItem_flavor_textInput)
    create!: version_groupsCreateWithoutItem_flavor_textInput;
}
