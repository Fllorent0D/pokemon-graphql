import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelog_proseWhereInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-where.input';
import { Type } from 'class-transformer';
import { move_effect_changelog_proseOrderByWithAggregationInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-order-by-with-aggregation.input';
import { Move_effect_changelog_proseScalarFieldEnum } from './move-effect-changelog-prose-scalar-field.enum';
import { move_effect_changelog_proseScalarWhereWithAggregatesInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveEffectChangelogProseArgs {

    @Field(() => move_effect_changelog_proseWhereInput, {nullable:true})
    @Type(() => move_effect_changelog_proseWhereInput)
    where?: move_effect_changelog_proseWhereInput;

    @Field(() => [move_effect_changelog_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_effect_changelog_proseOrderByWithAggregationInput>;

    @Field(() => [Move_effect_changelog_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_effect_changelog_proseScalarFieldEnum>;

    @Field(() => move_effect_changelog_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_effect_changelog_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
