import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { item_categoriesUncheckedCreateNestedManyWithoutItem_pocketsInput } from '../item-categories/item-categories-unchecked-create-nested-many-without-item-pockets.input';
import { item_pocket_namesUncheckedCreateNestedManyWithoutItem_pocketsInput } from '../item-pocket-names/item-pocket-names-unchecked-create-nested-many-without-item-pockets.input';

@InputType()
export class item_pocketsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => item_categoriesUncheckedCreateNestedManyWithoutItem_pocketsInput, {nullable:true})
    item_categories?: item_categoriesUncheckedCreateNestedManyWithoutItem_pocketsInput;

    @Field(() => item_pocket_namesUncheckedCreateNestedManyWithoutItem_pocketsInput, {nullable:true})
    item_pocket_names?: item_pocket_namesUncheckedCreateNestedManyWithoutItem_pocketsInput;
}
