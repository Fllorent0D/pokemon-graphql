import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { region_namesWhereInput } from '../region-names/region-names-where.input';
import { Type } from 'class-transformer';
import { region_namesOrderByWithAggregationInput } from '../region-names/region-names-order-by-with-aggregation.input';
import { Region_namesScalarFieldEnum } from './region-names-scalar-field.enum';
import { region_namesScalarWhereWithAggregatesInput } from '../region-names/region-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByregionNamesArgs {

    @Field(() => region_namesWhereInput, {nullable:true})
    @Type(() => region_namesWhereInput)
    where?: region_namesWhereInput;

    @Field(() => [region_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<region_namesOrderByWithAggregationInput>;

    @Field(() => [Region_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Region_namesScalarFieldEnum>;

    @Field(() => region_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: region_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
