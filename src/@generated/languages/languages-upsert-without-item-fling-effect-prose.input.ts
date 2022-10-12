import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutItem_fling_effect_proseInput } from './languages-update-without-item-fling-effect-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_fling_effect_proseInput } from './languages-create-without-item-fling-effect-prose.input';

@InputType()
export class languagesUpsertWithoutItem_fling_effect_proseInput {

    @Field(() => languagesUpdateWithoutItem_fling_effect_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutItem_fling_effect_proseInput)
    update!: languagesUpdateWithoutItem_fling_effect_proseInput;

    @Field(() => languagesCreateWithoutItem_fling_effect_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_fling_effect_proseInput)
    create!: languagesCreateWithoutItem_fling_effect_proseInput;
}
