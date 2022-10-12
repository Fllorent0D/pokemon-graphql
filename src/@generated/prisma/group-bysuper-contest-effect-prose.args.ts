import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effect_proseWhereInput } from '../super-contest-effect-prose/super-contest-effect-prose-where.input';
import { Type } from 'class-transformer';
import { super_contest_effect_proseOrderByWithAggregationInput } from '../super-contest-effect-prose/super-contest-effect-prose-order-by-with-aggregation.input';
import { Super_contest_effect_proseScalarFieldEnum } from './super-contest-effect-prose-scalar-field.enum';
import { super_contest_effect_proseScalarWhereWithAggregatesInput } from '../super-contest-effect-prose/super-contest-effect-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBysuperContestEffectProseArgs {

    @Field(() => super_contest_effect_proseWhereInput, {nullable:true})
    @Type(() => super_contest_effect_proseWhereInput)
    where?: super_contest_effect_proseWhereInput;

    @Field(() => [super_contest_effect_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<super_contest_effect_proseOrderByWithAggregationInput>;

    @Field(() => [Super_contest_effect_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Super_contest_effect_proseScalarFieldEnum>;

    @Field(() => super_contest_effect_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: super_contest_effect_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
