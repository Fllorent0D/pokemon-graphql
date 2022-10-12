import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelog_proseWhereInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-where.input';

@InputType()
export class Move_effect_changelog_proseListRelationFilter {

    @Field(() => move_effect_changelog_proseWhereInput, {nullable:true})
    every?: move_effect_changelog_proseWhereInput;

    @Field(() => move_effect_changelog_proseWhereInput, {nullable:true})
    some?: move_effect_changelog_proseWhereInput;

    @Field(() => move_effect_changelog_proseWhereInput, {nullable:true})
    none?: move_effect_changelog_proseWhereInput;
}
