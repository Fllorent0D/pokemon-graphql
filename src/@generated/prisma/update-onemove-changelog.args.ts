import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_changelogUpdateInput } from '../move-changelog/move-changelog-update.input';
import { Type } from 'class-transformer';
import { move_changelogWhereUniqueInput } from '../move-changelog/move-changelog-where-unique.input';

@ArgsType()
export class UpdateOnemoveChangelogArgs {

    @Field(() => move_changelogUpdateInput, {nullable:false})
    @Type(() => move_changelogUpdateInput)
    data!: move_changelogUpdateInput;

    @Field(() => move_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_changelogWhereUniqueInput)
    where!: move_changelogWhereUniqueInput;
}
