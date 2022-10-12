import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelog_proseCreateInput } from '../ability-changelog-prose/ability-changelog-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneabilityChangelogProseArgs {

    @Field(() => ability_changelog_proseCreateInput, {nullable:false})
    @Type(() => ability_changelog_proseCreateInput)
    data!: ability_changelog_proseCreateInput;
}
