import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereInput } from '../items/items-where.input';

@InputType()
export class ItemsRelationFilter {

    @Field(() => itemsWhereInput, {nullable:true})
    is?: itemsWhereInput;

    @Field(() => itemsWhereInput, {nullable:true})
    isNot?: itemsWhereInput;
}
