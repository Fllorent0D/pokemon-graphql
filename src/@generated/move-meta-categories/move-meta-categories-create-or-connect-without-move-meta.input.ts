import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_categoriesWhereUniqueInput } from './move-meta-categories-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_categoriesCreateWithoutMove_metaInput } from './move-meta-categories-create-without-move-meta.input';

@InputType()
export class move_meta_categoriesCreateOrConnectWithoutMove_metaInput {

    @Field(() => move_meta_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_categoriesWhereUniqueInput)
    where!: move_meta_categoriesWhereUniqueInput;

    @Field(() => move_meta_categoriesCreateWithoutMove_metaInput, {nullable:false})
    @Type(() => move_meta_categoriesCreateWithoutMove_metaInput)
    create!: move_meta_categoriesCreateWithoutMove_metaInput;
}
