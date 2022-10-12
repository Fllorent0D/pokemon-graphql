import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_textWhereInput } from '../item-flavor-text/item-flavor-text-where.input';
import { Type } from 'class-transformer';
import { item_flavor_textOrderByWithRelationInput } from '../item-flavor-text/item-flavor-text-order-by-with-relation.input';
import { item_flavor_textWhereUniqueInput } from '../item-flavor-text/item-flavor-text-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateitemFlavorTextArgs {

    @Field(() => item_flavor_textWhereInput, {nullable:true})
    @Type(() => item_flavor_textWhereInput)
    where?: item_flavor_textWhereInput;

    @Field(() => [item_flavor_textOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_flavor_textOrderByWithRelationInput>;

    @Field(() => item_flavor_textWhereUniqueInput, {nullable:true})
    cursor?: item_flavor_textWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
