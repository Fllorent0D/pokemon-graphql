import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutMove_flag_proseInput } from './languages-update-without-move-flag-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_flag_proseInput } from './languages-create-without-move-flag-prose.input';

@InputType()
export class languagesUpsertWithoutMove_flag_proseInput {

    @Field(() => languagesUpdateWithoutMove_flag_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutMove_flag_proseInput)
    update!: languagesUpdateWithoutMove_flag_proseInput;

    @Field(() => languagesCreateWithoutMove_flag_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_flag_proseInput)
    create!: languagesCreateWithoutMove_flag_proseInput;
}
