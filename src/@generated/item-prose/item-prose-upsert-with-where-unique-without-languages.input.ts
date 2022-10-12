import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_proseWhereUniqueInput } from './item-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_proseUpdateWithoutLanguagesInput } from './item-prose-update-without-languages.input';
import { item_proseCreateWithoutLanguagesInput } from './item-prose-create-without-languages.input';

@InputType()
export class item_proseUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => item_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_proseWhereUniqueInput)
    where!: item_proseWhereUniqueInput;

    @Field(() => item_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_proseUpdateWithoutLanguagesInput)
    update!: item_proseUpdateWithoutLanguagesInput;

    @Field(() => item_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_proseCreateWithoutLanguagesInput)
    create!: item_proseCreateWithoutLanguagesInput;
}
