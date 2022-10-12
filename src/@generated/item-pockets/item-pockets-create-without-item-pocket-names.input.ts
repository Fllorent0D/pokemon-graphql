import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesCreateNestedManyWithoutItem_pocketsInput } from '../item-categories/item-categories-create-nested-many-without-item-pockets.input';

@InputType()
export class item_pocketsCreateWithoutItem_pocket_namesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => item_categoriesCreateNestedManyWithoutItem_pocketsInput, {nullable:true})
    item_categories?: item_categoriesCreateNestedManyWithoutItem_pocketsInput;
}
