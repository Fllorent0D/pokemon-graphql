import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_changelogWhereUniqueInput } from '../move-changelog/move-changelog-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemoveChangelogArgs {

    @Field(() => move_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_changelogWhereUniqueInput)
    where!: move_changelogWhereUniqueInput;
}
