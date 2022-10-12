import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_stat_changesWhereInput } from '../move-meta-stat-changes/move-meta-stat-changes-where.input';
import { Type } from 'class-transformer';
import { move_meta_stat_changesOrderByWithAggregationInput } from '../move-meta-stat-changes/move-meta-stat-changes-order-by-with-aggregation.input';
import { Move_meta_stat_changesScalarFieldEnum } from './move-meta-stat-changes-scalar-field.enum';
import { move_meta_stat_changesScalarWhereWithAggregatesInput } from '../move-meta-stat-changes/move-meta-stat-changes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveMetaStatChangesArgs {

    @Field(() => move_meta_stat_changesWhereInput, {nullable:true})
    @Type(() => move_meta_stat_changesWhereInput)
    where?: move_meta_stat_changesWhereInput;

    @Field(() => [move_meta_stat_changesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_meta_stat_changesOrderByWithAggregationInput>;

    @Field(() => [Move_meta_stat_changesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_meta_stat_changesScalarFieldEnum>;

    @Field(() => move_meta_stat_changesScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_meta_stat_changesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
