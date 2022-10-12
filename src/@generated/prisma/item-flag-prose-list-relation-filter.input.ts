import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_proseWhereInput } from '../item-flag-prose/item-flag-prose-where.input';

@InputType()
export class Item_flag_proseListRelationFilter {

    @Field(() => item_flag_proseWhereInput, {nullable:true})
    every?: item_flag_proseWhereInput;

    @Field(() => item_flag_proseWhereInput, {nullable:true})
    some?: item_flag_proseWhereInput;

    @Field(() => item_flag_proseWhereInput, {nullable:true})
    none?: item_flag_proseWhereInput;
}
