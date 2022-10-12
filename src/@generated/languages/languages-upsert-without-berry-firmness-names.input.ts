import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutBerry_firmness_namesInput } from './languages-update-without-berry-firmness-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutBerry_firmness_namesInput } from './languages-create-without-berry-firmness-names.input';

@InputType()
export class languagesUpsertWithoutBerry_firmness_namesInput {

    @Field(() => languagesUpdateWithoutBerry_firmness_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutBerry_firmness_namesInput)
    update!: languagesUpdateWithoutBerry_firmness_namesInput;

    @Field(() => languagesCreateWithoutBerry_firmness_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutBerry_firmness_namesInput)
    create!: languagesCreateWithoutBerry_firmness_namesInput;
}
