import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelog_proseUpdateManyMutationInput } from '../ability-changelog-prose/ability-changelog-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ability_changelog_proseWhereInput } from '../ability-changelog-prose/ability-changelog-prose-where.input';

@ArgsType()
export class UpdateManyabilityChangelogProseArgs {

    @Field(() => ability_changelog_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => ability_changelog_proseUpdateManyMutationInput)
    data!: ability_changelog_proseUpdateManyMutationInput;

    @Field(() => ability_changelog_proseWhereInput, {nullable:true})
    @Type(() => ability_changelog_proseWhereInput)
    where?: ability_changelog_proseWhereInput;
}
