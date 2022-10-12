import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateWithoutAbility_flavor_textInput } from './version-groups-update-without-ability-flavor-text.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutAbility_flavor_textInput } from './version-groups-create-without-ability-flavor-text.input';

@InputType()
export class version_groupsUpsertWithoutAbility_flavor_textInput {

    @Field(() => version_groupsUpdateWithoutAbility_flavor_textInput, {nullable:false})
    @Type(() => version_groupsUpdateWithoutAbility_flavor_textInput)
    update!: version_groupsUpdateWithoutAbility_flavor_textInput;

    @Field(() => version_groupsCreateWithoutAbility_flavor_textInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutAbility_flavor_textInput)
    create!: version_groupsCreateWithoutAbility_flavor_textInput;
}
