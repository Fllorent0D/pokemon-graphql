import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_category_proseWhereUniqueInput } from './move-meta-category-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_category_proseUpdateWithoutLanguagesInput } from './move-meta-category-prose-update-without-languages.input';

@InputType()
export class move_meta_category_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => move_meta_category_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    where!: move_meta_category_proseWhereUniqueInput;

    @Field(() => move_meta_category_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_meta_category_proseUpdateWithoutLanguagesInput)
    data!: move_meta_category_proseUpdateWithoutLanguagesInput;
}
