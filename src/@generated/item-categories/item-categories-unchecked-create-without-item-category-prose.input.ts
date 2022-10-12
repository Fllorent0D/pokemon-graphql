import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { itemsUncheckedCreateNestedManyWithoutItem_categoriesInput } from '../items/items-unchecked-create-nested-many-without-item-categories.input';

@InputType()
export class item_categoriesUncheckedCreateWithoutItem_category_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    pocket_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => itemsUncheckedCreateNestedManyWithoutItem_categoriesInput, {nullable:true})
    items?: itemsUncheckedCreateNestedManyWithoutItem_categoriesInput;
}
