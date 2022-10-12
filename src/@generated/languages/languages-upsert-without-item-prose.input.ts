import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutItem_proseInput } from './languages-update-without-item-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_proseInput } from './languages-create-without-item-prose.input';

@InputType()
export class languagesUpsertWithoutItem_proseInput {

    @Field(() => languagesUpdateWithoutItem_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutItem_proseInput)
    update!: languagesUpdateWithoutItem_proseInput;

    @Field(() => languagesCreateWithoutItem_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_proseInput)
    create!: languagesCreateWithoutItem_proseInput;
}
