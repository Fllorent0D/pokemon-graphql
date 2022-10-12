import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_meta_category_proseInput } from './languages-create-without-move-meta-category-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_meta_category_proseInput } from './languages-create-or-connect-without-move-meta-category-prose.input';
import { languagesUpsertWithoutMove_meta_category_proseInput } from './languages-upsert-without-move-meta-category-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutMove_meta_category_proseInput } from './languages-update-without-move-meta-category-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput {

    @Field(() => languagesCreateWithoutMove_meta_category_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_meta_category_proseInput)
    create?: languagesCreateWithoutMove_meta_category_proseInput;

    @Field(() => languagesCreateOrConnectWithoutMove_meta_category_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_meta_category_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_meta_category_proseInput;

    @Field(() => languagesUpsertWithoutMove_meta_category_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutMove_meta_category_proseInput)
    upsert?: languagesUpsertWithoutMove_meta_category_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutMove_meta_category_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutMove_meta_category_proseInput)
    update?: languagesUpdateWithoutMove_meta_category_proseInput;
}
