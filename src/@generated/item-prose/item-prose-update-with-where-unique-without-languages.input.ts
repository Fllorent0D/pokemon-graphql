import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_proseWhereUniqueInput } from './item-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_proseUpdateWithoutLanguagesInput } from './item-prose-update-without-languages.input';

@InputType()
export class item_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => item_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_proseWhereUniqueInput)
    where!: item_proseWhereUniqueInput;

    @Field(() => item_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_proseUpdateWithoutLanguagesInput)
    data!: item_proseUpdateWithoutLanguagesInput;
}
