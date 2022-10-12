import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocketsWhereInput } from '../item-pockets/item-pockets-where.input';

@InputType()
export class Item_pocketsRelationFilter {

    @Field(() => item_pocketsWhereInput, {nullable:true})
    is?: item_pocketsWhereInput;

    @Field(() => item_pocketsWhereInput, {nullable:true})
    isNot?: item_pocketsWhereInput;
}
