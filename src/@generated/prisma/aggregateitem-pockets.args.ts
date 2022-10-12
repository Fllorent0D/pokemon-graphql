import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocketsWhereInput } from '../item-pockets/item-pockets-where.input';
import { Type } from 'class-transformer';
import { item_pocketsOrderByWithRelationInput } from '../item-pockets/item-pockets-order-by-with-relation.input';
import { item_pocketsWhereUniqueInput } from '../item-pockets/item-pockets-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateitemPocketsArgs {

    @Field(() => item_pocketsWhereInput, {nullable:true})
    @Type(() => item_pocketsWhereInput)
    where?: item_pocketsWhereInput;

    @Field(() => [item_pocketsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_pocketsOrderByWithRelationInput>;

    @Field(() => item_pocketsWhereUniqueInput, {nullable:true})
    cursor?: item_pocketsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
