import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_proseWhereInput } from '../item-prose/item-prose-where.input';
import { Type } from 'class-transformer';
import { item_proseOrderByWithRelationInput } from '../item-prose/item-prose-order-by-with-relation.input';
import { item_proseWhereUniqueInput } from '../item-prose/item-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Item_proseScalarFieldEnum } from './item-prose-scalar-field.enum';

@ArgsType()
export class FindManyitemProseArgs {

    @Field(() => item_proseWhereInput, {nullable:true})
    @Type(() => item_proseWhereInput)
    where?: item_proseWhereInput;

    @Field(() => [item_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_proseOrderByWithRelationInput>;

    @Field(() => item_proseWhereUniqueInput, {nullable:true})
    cursor?: item_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Item_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Item_proseScalarFieldEnum>;
}
