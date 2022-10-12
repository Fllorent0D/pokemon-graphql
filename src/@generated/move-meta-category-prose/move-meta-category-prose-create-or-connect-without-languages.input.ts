import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_category_proseWhereUniqueInput } from './move-meta-category-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_category_proseCreateWithoutLanguagesInput } from './move-meta-category-prose-create-without-languages.input';

@InputType()
export class move_meta_category_proseCreateOrConnectWithoutLanguagesInput {

    @Field(() => move_meta_category_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    where!: move_meta_category_proseWhereUniqueInput;

    @Field(() => move_meta_category_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_meta_category_proseCreateWithoutLanguagesInput)
    create!: move_meta_category_proseCreateWithoutLanguagesInput;
}
