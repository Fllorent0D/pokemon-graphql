import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutMove_flavor_textInput } from './languages-update-without-move-flavor-text.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_flavor_textInput } from './languages-create-without-move-flavor-text.input';

@InputType()
export class languagesUpsertWithoutMove_flavor_textInput {

    @Field(() => languagesUpdateWithoutMove_flavor_textInput, {nullable:false})
    @Type(() => languagesUpdateWithoutMove_flavor_textInput)
    update!: languagesUpdateWithoutMove_flavor_textInput;

    @Field(() => languagesCreateWithoutMove_flavor_textInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_flavor_textInput)
    create!: languagesCreateWithoutMove_flavor_textInput;
}
