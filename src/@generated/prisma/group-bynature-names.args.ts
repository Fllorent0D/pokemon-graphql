import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_namesWhereInput } from '../nature-names/nature-names-where.input';
import { Type } from 'class-transformer';
import { nature_namesOrderByWithAggregationInput } from '../nature-names/nature-names-order-by-with-aggregation.input';
import { Nature_namesScalarFieldEnum } from './nature-names-scalar-field.enum';
import { nature_namesScalarWhereWithAggregatesInput } from '../nature-names/nature-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBynatureNamesArgs {

    @Field(() => nature_namesWhereInput, {nullable:true})
    @Type(() => nature_namesWhereInput)
    where?: nature_namesWhereInput;

    @Field(() => [nature_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<nature_namesOrderByWithAggregationInput>;

    @Field(() => [Nature_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Nature_namesScalarFieldEnum>;

    @Field(() => nature_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: nature_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
