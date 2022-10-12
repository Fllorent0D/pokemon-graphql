import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_group_regionsWhereInput } from '../version-group-regions/version-group-regions-where.input';
import { Type } from 'class-transformer';
import { version_group_regionsOrderByWithAggregationInput } from '../version-group-regions/version-group-regions-order-by-with-aggregation.input';
import { Version_group_regionsScalarFieldEnum } from './version-group-regions-scalar-field.enum';
import { version_group_regionsScalarWhereWithAggregatesInput } from '../version-group-regions/version-group-regions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByversionGroupRegionsArgs {

    @Field(() => version_group_regionsWhereInput, {nullable:true})
    @Type(() => version_group_regionsWhereInput)
    where?: version_group_regionsWhereInput;

    @Field(() => [version_group_regionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<version_group_regionsOrderByWithAggregationInput>;

    @Field(() => [Version_group_regionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Version_group_regionsScalarFieldEnum>;

    @Field(() => version_group_regionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: version_group_regionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
