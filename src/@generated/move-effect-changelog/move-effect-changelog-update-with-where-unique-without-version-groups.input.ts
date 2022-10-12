import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelogWhereUniqueInput } from './move-effect-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { move_effect_changelogUpdateWithoutVersion_groupsInput } from './move-effect-changelog-update-without-version-groups.input';

@InputType()
export class move_effect_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => move_effect_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_changelogWhereUniqueInput)
    where!: move_effect_changelogWhereUniqueInput;

    @Field(() => move_effect_changelogUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => move_effect_changelogUpdateWithoutVersion_groupsInput)
    data!: move_effect_changelogUpdateWithoutVersion_groupsInput;
}
