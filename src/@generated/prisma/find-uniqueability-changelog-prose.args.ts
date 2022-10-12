import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelog_proseWhereUniqueInput } from '../ability-changelog-prose/ability-changelog-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueabilityChangelogProseArgs {

    @Field(() => ability_changelog_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    where!: ability_changelog_proseWhereUniqueInput;
}
