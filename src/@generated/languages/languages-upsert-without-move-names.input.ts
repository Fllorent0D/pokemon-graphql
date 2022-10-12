import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutMove_namesInput } from './languages-update-without-move-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_namesInput } from './languages-create-without-move-names.input';

@InputType()
export class languagesUpsertWithoutMove_namesInput {

    @Field(() => languagesUpdateWithoutMove_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutMove_namesInput)
    update!: languagesUpdateWithoutMove_namesInput;

    @Field(() => languagesCreateWithoutMove_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_namesInput)
    create!: languagesCreateWithoutMove_namesInput;
}
