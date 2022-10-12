import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import { move_metaUpdateWithoutMove_meta_categoriesInput } from './move-meta-update-without-move-meta-categories.input';

@InputType()
export class move_metaUpdateWithWhereUniqueWithoutMove_meta_categoriesInput {

    @Field(() => move_metaWhereUniqueInput, {nullable:false})
    @Type(() => move_metaWhereUniqueInput)
    where!: move_metaWhereUniqueInput;

    @Field(() => move_metaUpdateWithoutMove_meta_categoriesInput, {nullable:false})
    @Type(() => move_metaUpdateWithoutMove_meta_categoriesInput)
    data!: move_metaUpdateWithoutMove_meta_categoriesInput;
}
