import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_meta_category_proseInput } from './languages-create-without-move-meta-category-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_meta_category_proseInput } from './languages-create-or-connect-without-move-meta-category-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutMove_meta_category_proseInput {

    @Field(() => languagesCreateWithoutMove_meta_category_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_meta_category_proseInput)
    create?: languagesCreateWithoutMove_meta_category_proseInput;

    @Field(() => languagesCreateOrConnectWithoutMove_meta_category_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_meta_category_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_meta_category_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
