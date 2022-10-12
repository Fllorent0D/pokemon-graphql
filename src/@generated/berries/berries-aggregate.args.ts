import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berriesWhereInput } from './berries-where.input';
import { Type } from 'class-transformer';
import { berriesOrderByWithRelationInput } from './berries-order-by-with-relation.input';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class berriesAggregateArgs {

    @Field(() => berriesWhereInput, {nullable:true})
    @Type(() => berriesWhereInput)
    where?: berriesWhereInput;

    @Field(() => [berriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<berriesOrderByWithRelationInput>;

    @Field(() => berriesWhereUniqueInput, {nullable:true})
    cursor?: berriesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
