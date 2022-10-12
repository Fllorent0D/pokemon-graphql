import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_proseWhereInput } from '../item-flag-prose/item-flag-prose-where.input';
import { Type } from 'class-transformer';
import { item_flag_proseOrderByWithRelationInput } from '../item-flag-prose/item-flag-prose-order-by-with-relation.input';
import { item_flag_proseWhereUniqueInput } from '../item-flag-prose/item-flag-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Item_flag_proseScalarFieldEnum } from './item-flag-prose-scalar-field.enum';

@ArgsType()
export class FindFirstitemFlagProseArgs {

    @Field(() => item_flag_proseWhereInput, {nullable:true})
    @Type(() => item_flag_proseWhereInput)
    where?: item_flag_proseWhereInput;

    @Field(() => [item_flag_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_flag_proseOrderByWithRelationInput>;

    @Field(() => item_flag_proseWhereUniqueInput, {nullable:true})
    cursor?: item_flag_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Item_flag_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Item_flag_proseScalarFieldEnum>;
}
