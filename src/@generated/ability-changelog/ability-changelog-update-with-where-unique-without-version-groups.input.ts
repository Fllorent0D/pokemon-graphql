import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogWhereUniqueInput } from './ability-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { ability_changelogUpdateWithoutVersion_groupsInput } from './ability-changelog-update-without-version-groups.input';

@InputType()
export class ability_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => ability_changelogWhereUniqueInput, {nullable:false})
    @Type(() => ability_changelogWhereUniqueInput)
    where!: ability_changelogWhereUniqueInput;

    @Field(() => ability_changelogUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => ability_changelogUpdateWithoutVersion_groupsInput)
    data!: ability_changelogUpdateWithoutVersion_groupsInput;
}
