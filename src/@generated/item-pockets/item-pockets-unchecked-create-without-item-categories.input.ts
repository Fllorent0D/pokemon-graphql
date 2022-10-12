import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { item_pocket_namesUncheckedCreateNestedManyWithoutItem_pocketsInput } from '../item-pocket-names/item-pocket-names-unchecked-create-nested-many-without-item-pockets.input';

@InputType()
export class item_pocketsUncheckedCreateWithoutItem_categoriesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => item_pocket_namesUncheckedCreateNestedManyWithoutItem_pocketsInput, {nullable:true})
    item_pocket_names?: item_pocket_namesUncheckedCreateNestedManyWithoutItem_pocketsInput;
}
