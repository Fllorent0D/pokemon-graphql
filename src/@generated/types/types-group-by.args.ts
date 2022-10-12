import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { typesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { typesOrderByWithAggregationInput } from './types-order-by-with-aggregation.input';
import { TypesScalarFieldEnum } from '../prisma/types-scalar-field.enum';
import { typesScalarWhereWithAggregatesInput } from './types-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class typesGroupByArgs {

    @Field(() => typesWhereInput, {nullable:true})
    @Type(() => typesWhereInput)
    where?: typesWhereInput;

    @Field(() => [typesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<typesOrderByWithAggregationInput>;

    @Field(() => [TypesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TypesScalarFieldEnum>;

    @Field(() => typesScalarWhereWithAggregatesInput, {nullable:true})
    having?: typesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
