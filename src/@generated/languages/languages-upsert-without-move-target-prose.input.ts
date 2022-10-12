import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutMove_target_proseInput } from './languages-update-without-move-target-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_target_proseInput } from './languages-create-without-move-target-prose.input';

@InputType()
export class languagesUpsertWithoutMove_target_proseInput {

    @Field(() => languagesUpdateWithoutMove_target_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutMove_target_proseInput)
    update!: languagesUpdateWithoutMove_target_proseInput;

    @Field(() => languagesCreateWithoutMove_target_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_target_proseInput)
    create!: languagesCreateWithoutMove_target_proseInput;
}
