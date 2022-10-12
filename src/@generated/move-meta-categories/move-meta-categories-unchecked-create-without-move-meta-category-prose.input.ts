import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_metaUncheckedCreateNestedManyWithoutMove_meta_categoriesInput } from '../move-meta/move-meta-unchecked-create-nested-many-without-move-meta-categories.input';

@InputType()
export class move_meta_categoriesUncheckedCreateWithoutMove_meta_category_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_metaUncheckedCreateNestedManyWithoutMove_meta_categoriesInput, {nullable:true})
    move_meta?: move_metaUncheckedCreateNestedManyWithoutMove_meta_categoriesInput;
}
