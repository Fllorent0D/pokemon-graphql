import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_categoriesCreateWithoutMove_metaInput } from './move-meta-categories-create-without-move-meta.input';
import { Type } from 'class-transformer';
import { move_meta_categoriesCreateOrConnectWithoutMove_metaInput } from './move-meta-categories-create-or-connect-without-move-meta.input';
import { move_meta_categoriesUpsertWithoutMove_metaInput } from './move-meta-categories-upsert-without-move-meta.input';
import { move_meta_categoriesWhereUniqueInput } from './move-meta-categories-where-unique.input';
import { move_meta_categoriesUpdateWithoutMove_metaInput } from './move-meta-categories-update-without-move-meta.input';

@InputType()
export class move_meta_categoriesUpdateOneRequiredWithoutMove_metaNestedInput {

    @Field(() => move_meta_categoriesCreateWithoutMove_metaInput, {nullable:true})
    @Type(() => move_meta_categoriesCreateWithoutMove_metaInput)
    create?: move_meta_categoriesCreateWithoutMove_metaInput;

    @Field(() => move_meta_categoriesCreateOrConnectWithoutMove_metaInput, {nullable:true})
    @Type(() => move_meta_categoriesCreateOrConnectWithoutMove_metaInput)
    connectOrCreate?: move_meta_categoriesCreateOrConnectWithoutMove_metaInput;

    @Field(() => move_meta_categoriesUpsertWithoutMove_metaInput, {nullable:true})
    @Type(() => move_meta_categoriesUpsertWithoutMove_metaInput)
    upsert?: move_meta_categoriesUpsertWithoutMove_metaInput;

    @Field(() => move_meta_categoriesWhereUniqueInput, {nullable:true})
    @Type(() => move_meta_categoriesWhereUniqueInput)
    connect?: move_meta_categoriesWhereUniqueInput;

    @Field(() => move_meta_categoriesUpdateWithoutMove_metaInput, {nullable:true})
    @Type(() => move_meta_categoriesUpdateWithoutMove_metaInput)
    update?: move_meta_categoriesUpdateWithoutMove_metaInput;
}
