import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelogWhereUniqueInput } from './move-effect-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { move_effect_changelogCreateWithoutVersion_groupsInput } from './move-effect-changelog-create-without-version-groups.input';

@InputType()
export class move_effect_changelogCreateOrConnectWithoutVersion_groupsInput {

    @Field(() => move_effect_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_changelogWhereUniqueInput)
    where!: move_effect_changelogWhereUniqueInput;

    @Field(() => move_effect_changelogCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => move_effect_changelogCreateWithoutVersion_groupsInput)
    create!: move_effect_changelogCreateWithoutVersion_groupsInput;
}
