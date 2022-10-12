import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelogWhereInput } from '../move-effect-changelog/move-effect-changelog-where.input';
import { Type } from 'class-transformer';
import { move_effect_changelogOrderByWithAggregationInput } from '../move-effect-changelog/move-effect-changelog-order-by-with-aggregation.input';
import { Move_effect_changelogScalarFieldEnum } from './move-effect-changelog-scalar-field.enum';
import { move_effect_changelogScalarWhereWithAggregatesInput } from '../move-effect-changelog/move-effect-changelog-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveEffectChangelogArgs {

    @Field(() => move_effect_changelogWhereInput, {nullable:true})
    @Type(() => move_effect_changelogWhereInput)
    where?: move_effect_changelogWhereInput;

    @Field(() => [move_effect_changelogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_effect_changelogOrderByWithAggregationInput>;

    @Field(() => [Move_effect_changelogScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_effect_changelogScalarFieldEnum>;

    @Field(() => move_effect_changelogScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_effect_changelogScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
