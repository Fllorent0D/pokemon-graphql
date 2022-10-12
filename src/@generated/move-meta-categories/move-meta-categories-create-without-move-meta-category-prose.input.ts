import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaCreateNestedManyWithoutMove_meta_categoriesInput } from '../move-meta/move-meta-create-nested-many-without-move-meta-categories.input';

@InputType()
export class move_meta_categoriesCreateWithoutMove_meta_category_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_metaCreateNestedManyWithoutMove_meta_categoriesInput, {nullable:true})
    move_meta?: move_metaCreateNestedManyWithoutMove_meta_categoriesInput;
}
