import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_categoriesCreateWithoutMove_metaInput } from './move-meta-categories-create-without-move-meta.input';
import { Type } from 'class-transformer';
import { move_meta_categoriesCreateOrConnectWithoutMove_metaInput } from './move-meta-categories-create-or-connect-without-move-meta.input';
import { move_meta_categoriesWhereUniqueInput } from './move-meta-categories-where-unique.input';

@InputType()
export class move_meta_categoriesCreateNestedOneWithoutMove_metaInput {

    @Field(() => move_meta_categoriesCreateWithoutMove_metaInput, {nullable:true})
    @Type(() => move_meta_categoriesCreateWithoutMove_metaInput)
    create?: move_meta_categoriesCreateWithoutMove_metaInput;

    @Field(() => move_meta_categoriesCreateOrConnectWithoutMove_metaInput, {nullable:true})
    @Type(() => move_meta_categoriesCreateOrConnectWithoutMove_metaInput)
    connectOrCreate?: move_meta_categoriesCreateOrConnectWithoutMove_metaInput;

    @Field(() => move_meta_categoriesWhereUniqueInput, {nullable:true})
    @Type(() => move_meta_categoriesWhereUniqueInput)
    connect?: move_meta_categoriesWhereUniqueInput;
}
