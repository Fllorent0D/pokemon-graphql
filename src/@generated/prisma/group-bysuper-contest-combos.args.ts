import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_combosWhereInput } from '../super-contest-combos/super-contest-combos-where.input';
import { Type } from 'class-transformer';
import { super_contest_combosOrderByWithAggregationInput } from '../super-contest-combos/super-contest-combos-order-by-with-aggregation.input';
import { Super_contest_combosScalarFieldEnum } from './super-contest-combos-scalar-field.enum';
import { super_contest_combosScalarWhereWithAggregatesInput } from '../super-contest-combos/super-contest-combos-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBysuperContestCombosArgs {

    @Field(() => super_contest_combosWhereInput, {nullable:true})
    @Type(() => super_contest_combosWhereInput)
    where?: super_contest_combosWhereInput;

    @Field(() => [super_contest_combosOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<super_contest_combosOrderByWithAggregationInput>;

    @Field(() => [Super_contest_combosScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Super_contest_combosScalarFieldEnum>;

    @Field(() => super_contest_combosScalarWhereWithAggregatesInput, {nullable:true})
    having?: super_contest_combosScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
