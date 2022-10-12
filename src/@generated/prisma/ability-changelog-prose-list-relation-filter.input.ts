import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelog_proseWhereInput } from '../ability-changelog-prose/ability-changelog-prose-where.input';

@InputType()
export class Ability_changelog_proseListRelationFilter {

    @Field(() => ability_changelog_proseWhereInput, {nullable:true})
    every?: ability_changelog_proseWhereInput;

    @Field(() => ability_changelog_proseWhereInput, {nullable:true})
    some?: ability_changelog_proseWhereInput;

    @Field(() => ability_changelog_proseWhereInput, {nullable:true})
    none?: ability_changelog_proseWhereInput;
}
