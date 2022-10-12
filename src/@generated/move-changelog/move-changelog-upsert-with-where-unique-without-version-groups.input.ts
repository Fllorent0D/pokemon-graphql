import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { move_changelogUpdateWithoutVersion_groupsInput } from './move-changelog-update-without-version-groups.input';
import { move_changelogCreateWithoutVersion_groupsInput } from './move-changelog-create-without-version-groups.input';

@InputType()
export class move_changelogUpsertWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => move_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_changelogWhereUniqueInput)
    where!: move_changelogWhereUniqueInput;

    @Field(() => move_changelogUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => move_changelogUpdateWithoutVersion_groupsInput)
    update!: move_changelogUpdateWithoutVersion_groupsInput;

    @Field(() => move_changelogCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => move_changelogCreateWithoutVersion_groupsInput)
    create!: move_changelogCreateWithoutVersion_groupsInput;
}
