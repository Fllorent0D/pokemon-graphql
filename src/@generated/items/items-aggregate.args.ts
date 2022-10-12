import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { itemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { itemsOrderByWithRelationInput } from './items-order-by-with-relation.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class itemsAggregateArgs {

    @Field(() => itemsWhereInput, {nullable:true})
    @Type(() => itemsWhereInput)
    where?: itemsWhereInput;

    @Field(() => [itemsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<itemsOrderByWithRelationInput>;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    cursor?: itemsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
