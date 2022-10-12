import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateWithoutMove_flavor_textInput } from './version-groups-update-without-move-flavor-text.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutMove_flavor_textInput } from './version-groups-create-without-move-flavor-text.input';

@InputType()
export class version_groupsUpsertWithoutMove_flavor_textInput {

    @Field(() => version_groupsUpdateWithoutMove_flavor_textInput, {nullable:false})
    @Type(() => version_groupsUpdateWithoutMove_flavor_textInput)
    update!: version_groupsUpdateWithoutMove_flavor_textInput;

    @Field(() => version_groupsCreateWithoutMove_flavor_textInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutMove_flavor_textInput)
    create!: version_groupsCreateWithoutMove_flavor_textInput;
}
