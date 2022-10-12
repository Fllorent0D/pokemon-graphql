import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_categoriesUpdateWithoutMove_metaInput } from './move-meta-categories-update-without-move-meta.input';
import { Type } from 'class-transformer';
import { move_meta_categoriesCreateWithoutMove_metaInput } from './move-meta-categories-create-without-move-meta.input';

@InputType()
export class move_meta_categoriesUpsertWithoutMove_metaInput {

    @Field(() => move_meta_categoriesUpdateWithoutMove_metaInput, {nullable:false})
    @Type(() => move_meta_categoriesUpdateWithoutMove_metaInput)
    update!: move_meta_categoriesUpdateWithoutMove_metaInput;

    @Field(() => move_meta_categoriesCreateWithoutMove_metaInput, {nullable:false})
    @Type(() => move_meta_categoriesCreateWithoutMove_metaInput)
    create!: move_meta_categoriesCreateWithoutMove_metaInput;
}
