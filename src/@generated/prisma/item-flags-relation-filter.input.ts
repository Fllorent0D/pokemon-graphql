import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flagsWhereInput } from '../item-flags/item-flags-where.input';

@InputType()
export class Item_flagsRelationFilter {

    @Field(() => item_flagsWhereInput, {nullable:true})
    is?: item_flagsWhereInput;

    @Field(() => item_flagsWhereInput, {nullable:true})
    isNot?: item_flagsWhereInput;
}
