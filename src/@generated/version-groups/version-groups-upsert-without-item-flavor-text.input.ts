import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateWithoutItem_flavor_textInput } from './version-groups-update-without-item-flavor-text.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutItem_flavor_textInput } from './version-groups-create-without-item-flavor-text.input';

@InputType()
export class version_groupsUpsertWithoutItem_flavor_textInput {

    @Field(() => version_groupsUpdateWithoutItem_flavor_textInput, {nullable:false})
    @Type(() => version_groupsUpdateWithoutItem_flavor_textInput)
    update!: version_groupsUpdateWithoutItem_flavor_textInput;

    @Field(() => version_groupsCreateWithoutItem_flavor_textInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutItem_flavor_textInput)
    create!: version_groupsCreateWithoutItem_flavor_textInput;
}
