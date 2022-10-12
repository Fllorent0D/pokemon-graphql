import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effect_proseWhereUniqueInput } from './item-fling-effect-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_fling_effect_proseUpdateWithoutLanguagesInput } from './item-fling-effect-prose-update-without-languages.input';
import { item_fling_effect_proseCreateWithoutLanguagesInput } from './item-fling-effect-prose-create-without-languages.input';

@InputType()
export class item_fling_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => item_fling_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    where!: item_fling_effect_proseWhereUniqueInput;

    @Field(() => item_fling_effect_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_fling_effect_proseUpdateWithoutLanguagesInput)
    update!: item_fling_effect_proseUpdateWithoutLanguagesInput;

    @Field(() => item_fling_effect_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_fling_effect_proseCreateWithoutLanguagesInput)
    create!: item_fling_effect_proseCreateWithoutLanguagesInput;
}
