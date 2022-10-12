import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_meta_category_proseInput } from './languages-create-without-move-meta-category-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutMove_meta_category_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutMove_meta_category_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_meta_category_proseInput)
    create!: languagesCreateWithoutMove_meta_category_proseInput;
}
