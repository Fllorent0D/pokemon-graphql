import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_changelogWhereUniqueInput } from '../move-changelog/move-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { move_changelogCreateInput } from '../move-changelog/move-changelog-create.input';
import { move_changelogUpdateInput } from '../move-changelog/move-changelog-update.input';

@ArgsType()
export class UpsertOnemoveChangelogArgs {

    @Field(() => move_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_changelogWhereUniqueInput)
    where!: move_changelogWhereUniqueInput;

    @Field(() => move_changelogCreateInput, {nullable:false})
    @Type(() => move_changelogCreateInput)
    create!: move_changelogCreateInput;

    @Field(() => move_changelogUpdateInput, {nullable:false})
    @Type(() => move_changelogUpdateInput)
    update!: move_changelogUpdateInput;
}
