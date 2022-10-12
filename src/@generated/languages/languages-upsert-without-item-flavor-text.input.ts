import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutItem_flavor_textInput } from './languages-update-without-item-flavor-text.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_flavor_textInput } from './languages-create-without-item-flavor-text.input';

@InputType()
export class languagesUpsertWithoutItem_flavor_textInput {

    @Field(() => languagesUpdateWithoutItem_flavor_textInput, {nullable:false})
    @Type(() => languagesUpdateWithoutItem_flavor_textInput)
    update!: languagesUpdateWithoutItem_flavor_textInput;

    @Field(() => languagesCreateWithoutItem_flavor_textInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_flavor_textInput)
    create!: languagesCreateWithoutItem_flavor_textInput;
}
