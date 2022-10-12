import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelog_proseWhereInput } from '../ability-changelog-prose/ability-changelog-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyabilityChangelogProseArgs {

    @Field(() => ability_changelog_proseWhereInput, {nullable:true})
    @Type(() => ability_changelog_proseWhereInput)
    where?: ability_changelog_proseWhereInput;
}
