import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocket_namesCreateNestedManyWithoutItem_pocketsInput } from '../item-pocket-names/item-pocket-names-create-nested-many-without-item-pockets.input';

@InputType()
export class item_pocketsCreateWithoutItem_categoriesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => item_pocket_namesCreateNestedManyWithoutItem_pocketsInput, {nullable:true})
    item_pocket_names?: item_pocket_namesCreateNestedManyWithoutItem_pocketsInput;
}
