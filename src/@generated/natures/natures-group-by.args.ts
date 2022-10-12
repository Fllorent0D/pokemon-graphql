import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { naturesWhereInput } from './natures-where.input';
import { Type } from 'class-transformer';
import { naturesOrderByWithAggregationInput } from './natures-order-by-with-aggregation.input';
import { NaturesScalarFieldEnum } from '../prisma/natures-scalar-field.enum';
import { naturesScalarWhereWithAggregatesInput } from './natures-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class naturesGroupByArgs {

    @Field(() => naturesWhereInput, {nullable:true})
    @Type(() => naturesWhereInput)
    where?: naturesWhereInput;

    @Field(() => [naturesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<naturesOrderByWithAggregationInput>;

    @Field(() => [NaturesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NaturesScalarFieldEnum>;

    @Field(() => naturesScalarWhereWithAggregatesInput, {nullable:true})
    having?: naturesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
