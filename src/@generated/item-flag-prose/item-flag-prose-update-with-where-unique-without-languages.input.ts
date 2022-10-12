import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_proseWhereUniqueInput } from './item-flag-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_flag_proseUpdateWithoutLanguagesInput } from './item-flag-prose-update-without-languages.input';

@InputType()
export class item_flag_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => item_flag_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_flag_proseWhereUniqueInput)
    where!: item_flag_proseWhereUniqueInput;

    @Field(() => item_flag_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_flag_proseUpdateWithoutLanguagesInput)
    data!: item_flag_proseUpdateWithoutLanguagesInput;
}
