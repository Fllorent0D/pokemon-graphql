import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effectsWhereInput } from '../super-contest-effects/super-contest-effects-where.input';
import { Type } from 'class-transformer';
import { super_contest_effectsOrderByWithAggregationInput } from '../super-contest-effects/super-contest-effects-order-by-with-aggregation.input';
import { Super_contest_effectsScalarFieldEnum } from './super-contest-effects-scalar-field.enum';
import { super_contest_effectsScalarWhereWithAggregatesInput } from '../super-contest-effects/super-contest-effects-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBysuperContestEffectsArgs {

    @Field(() => super_contest_effectsWhereInput, {nullable:true})
    @Type(() => super_contest_effectsWhereInput)
    where?: super_contest_effectsWhereInput;

    @Field(() => [super_contest_effectsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<super_contest_effectsOrderByWithAggregationInput>;

    @Field(() => [Super_contest_effectsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Super_contest_effectsScalarFieldEnum>;

    @Field(() => super_contest_effectsScalarWhereWithAggregatesInput, {nullable:true})
    having?: super_contest_effectsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
