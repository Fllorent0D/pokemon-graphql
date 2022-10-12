import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmness_namesWhereInput } from '../berry-firmness-names/berry-firmness-names-where.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesOrderByWithAggregationInput } from '../berry-firmness-names/berry-firmness-names-order-by-with-aggregation.input';
import { Berry_firmness_namesScalarFieldEnum } from './berry-firmness-names-scalar-field.enum';
import { berry_firmness_namesScalarWhereWithAggregatesInput } from '../berry-firmness-names/berry-firmness-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByberryFirmnessNamesArgs {

    @Field(() => berry_firmness_namesWhereInput, {nullable:true})
    @Type(() => berry_firmness_namesWhereInput)
    where?: berry_firmness_namesWhereInput;

    @Field(() => [berry_firmness_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<berry_firmness_namesOrderByWithAggregationInput>;

    @Field(() => [Berry_firmness_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Berry_firmness_namesScalarFieldEnum>;

    @Field(() => berry_firmness_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: berry_firmness_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
